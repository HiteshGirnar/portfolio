import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AmbientBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
    container.appendChild(renderer.domElement);

    scene.fog = new THREE.FogExp2(0x07090e, 0.035);

    // ---- Particle Cloud with dual Emerald & Cyan colors ----
    const particleCount = prefersReducedMotion ? 120 : 380;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorEmerald = new THREE.Color(0x10b981);
    const colorCyan = new THREE.Color(0x06b6d4);
    const colorWhite = new THREE.Color(0xe2e8f0);

    for (let p = 0; p < particleCount; p++) {
      positions[p * 3] = (Math.random() - 0.5) * 45;
      positions[p * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[p * 3 + 2] = (Math.random() - 0.5) * 35;

      const pick = Math.random();
      const c = pick > 0.6 ? colorEmerald : pick > 0.25 ? colorCyan : colorWhite;
      colors[p * 3] = c.r;
      colors[p * 3 + 1] = c.g;
      colors[p * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circle particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.7)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.15)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---- Geometric Cyber Polyhedra ----
    const geometries = [
      new THREE.IcosahedronGeometry(1.8, 0),
      new THREE.OctahedronGeometry(1.4, 0),
      new THREE.TorusGeometry(1.3, 0.28, 8, 24),
      new THREE.TetrahedronGeometry(1.5, 0)
    ];

    const shapesGroup = new THREE.Group();
    const shapes = geometries.map((geo, i) => {
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x10b981 : 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.22
      });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / geometries.length) * Math.PI * 2;
      const radius = 8.5;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.55,
        (Math.random() - 0.5) * 8
      );
      mesh.userData = {
        rotX: (Math.random() - 0.5) * 0.005,
        rotY: (Math.random() - 0.5) * 0.007,
        floatSpeed: 0.35 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2
      };
      shapesGroup.add(mesh);
      return mesh;
    });
    scene.add(shapesGroup);

    // ---- Mouse Parallax Tracking ----
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ---- Animation Loop ----
    let frameId;
    let running = !prefersReducedMotion;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!running) return;
      frameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera follow
      targetX += (mouseX * 0.7 - targetX) * 0.035;
      targetY += (-mouseY * 0.7 - targetY) * 0.035;

      camera.position.x = targetX * 1.5;
      camera.position.y = targetY * 1.5;
      camera.lookAt(0, 0, 0);

      // Particle subtle rotation
      particles.rotation.y = elapsedTime * 0.018;
      particles.rotation.x = elapsedTime * 0.009;

      // Floating polyhedra rotation and bobbing
      shapes.forEach((m) => {
        m.rotation.x += m.userData.rotX;
        m.rotation.y += m.userData.rotY;
        m.position.y += Math.sin(elapsedTime * m.userData.floatSpeed + m.userData.offset) * 0.004;
      });

      renderer.render(scene, camera);
    };

    if (running) {
      animate();
    } else {
      renderer.render(scene, camera);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      geometries.forEach((g) => g.dispose());
      shapes.forEach((m) => m.material.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-bg-mesh" />
      <div className="ambient-bg-grid" />
      <div className="ambient-canvas-container" ref={containerRef} />
    </div>
  );
}
