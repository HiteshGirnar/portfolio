import React from "react";
import { Database } from "lucide-react";

const skills = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "SQL", icon: null, color: "#4479A1" },
  { name: "NoSQL", icon: null, color: "#47A248" },
  { name: "ReactJS", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "ExpressJS", icon: "https://cdn.simpleicons.org/express/ffffff" },
];

const skills2 = [
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
  { name: "Keras", icon: "https://cdn.simpleicons.org/keras/D00000" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi/F2C811" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
  { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
  { name: "UiPath", icon: "https://cdn.simpleicons.org/uipath/FA4616" },
];

function SkillChip({ s }) {
  return (
    <div className="sk-item">
      {s.icon ? (
        <img src={s.icon} alt={s.name} className="sk-icon" />
      ) : (
        <Database size={48} color={s.color} strokeWidth={1.4} />
      )}
      <span className="sk-name">{s.name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse }) {
  // duplicate the row so the loop can reset seamlessly at -50%
  const doubled = [...items, ...items];
  return (
    <div className="sk-row">
      <div className={`sk-track ${reverse ? "sk-track-rev" : ""}`}>
        {doubled.map((s, i) => (
          <SkillChip key={i} s={s} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">Skills</span>
          <p className="section-subtitle">
            My proficiency lies in the following skills, tools, and
            technologies:
          </p>
        </div>
      </div>

      <div className="sk-marquee-wrap">
        <MarqueeRow items={skills} />
        <MarqueeRow items={skills2} reverse />
      </div>

      <style>{`

.sk-marquee-wrap{
margin-top:3rem;
display:flex;
flex-direction:column;
gap:2.2rem;
}

.sk-row{
position:relative;
overflow:hidden;
-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 8%,#000 92%,transparent 100%);
mask-image:linear-gradient(90deg,transparent 0,#000 8%,#000 92%,transparent 100%);
}

.sk-track{
display:flex;
width:max-content;
gap:3rem;
animation:sk-scroll-left 28s linear infinite;
}

.sk-track-rev{
animation-name:sk-scroll-right;
}

.sk-row:hover .sk-track{
animation-play-state:paused;
}

@keyframes sk-scroll-left{
from{ transform:translateX(0); }
to{ transform:translateX(-50%); }
}

@keyframes sk-scroll-right{
from{ transform:translateX(-50%); }
to{ transform:translateX(0); }
}

.sk-item{
display:flex;
flex-direction:column;
align-items:center;
gap:.8rem;
flex-shrink:0;
width:100px;
transition:transform .25s ease;
}

.sk-item:hover{
transform:translateY(-4px);
}

.sk-icon{
width:52px;
height:52px;
object-fit:contain;
filter:drop-shadow(0 4px 10px rgba(0,0,0,.25));
}

.sk-item svg{
filter:drop-shadow(0 4px 10px rgba(0,0,0,.25));
}

.sk-name{
font-size:.8rem;
color:var(--text-secondary);
white-space:nowrap;
}


/* Mobile */

@media(max-width:600px){

.sk-marquee-wrap{
gap:1.6rem;
}

.sk-track{
gap:2rem;
animation-duration:20s;
}

.sk-item{
width:78px;
}

.sk-icon{
width:40px;
height:40px;
}

.sk-item svg{
width:40px !important;
height:40px !important;
}

.sk-name{
font-size:.72rem;
}

}

      `}</style>
    </section>
  );
}