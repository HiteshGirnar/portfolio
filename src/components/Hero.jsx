import React from "react";
import {
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Bookmark,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="hero-sec">
      <div className="container hero-wrap">

        {/* Left */}
        <div className="hero-left">
          <h1 className="hero-h1">
            Hi, I'm <span className="hero-name">{personalInfo.name}</span>{" "}
            <span className="wave">👋</span>
          </h1>

          <p className="hero-bio">{personalInfo.bio}</p>

          <div className="hero-meta">
            <div className="meta-row">
              <MapPin size={16} className="meta-icon" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="meta-row">
              <span className="status-dot"></span>
              <span>{personalInfo.status}</span>
            </div>
          </div>

          <div className="hero-socials">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="soc-icon"
            >
              <Github size={20} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="soc-icon"
            >
              <Linkedin size={20} />
            </a>

            <a
              href={personalInfo.socials.twitter || "#"}
              target="_blank"
              rel="noreferrer"
              className="soc-icon"
            >
              <Twitter size={20} />
            </a>

            <a
              href={personalInfo.socials.resume || "#"}
              className="soc-icon"
            >
              <Bookmark size={20} />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <div className="profile-frame">
            <div className="profile-backdrop"></div>
            <div className="profile-img-wrap">
              <img
                src="/hitesh_profile.jpg"
                alt={personalInfo.name}
                className="profile-img"
              />
            </div>
          </div>
        </div>

      </div>

      <style>{`

.hero-sec{
padding-top:calc(var(--navbar-height) + 3rem);
padding-bottom:4rem;
min-height:90vh;
display:flex;
align-items:center;
}

.hero-wrap{
display:grid;
grid-template-columns:1.2fr 0.8fr;
align-items:center;
gap:4rem;
}

.hero-left{
display:flex;
flex-direction:column;
}

.hero-h1{
font-size:clamp(2.5rem,5vw,4rem);
font-weight:550;
line-height:1.1;
margin-bottom:1.3rem;
color:var(--text-primary);
}

.hero-name{
color:var(--text-primary);
}

.wave{
display:inline-block;
transform-origin:70% 70%;
animation:wave 2.2s infinite;
}

@keyframes wave{
0%,60%,100%{ transform:rotate(0deg); }
10%{ transform:rotate(14deg); }
20%{ transform:rotate(-8deg); }
30%{ transform:rotate(14deg); }
40%{ transform:rotate(-4deg); }
50%{ transform:rotate(10deg); }
}

.hero-bio{
max-width:600px;
line-height:1.8;
color:var(--text-secondary);
margin-bottom:1.6rem;
}

.hero-meta{
display:flex;
flex-direction:column;
gap:.6rem;
margin-bottom:1.8rem;
}

.meta-row{
display:flex;
align-items:center;
gap:.5rem;
color:var(--text-secondary);
font-size:.95rem;
}

.meta-icon{
color:var(--text-muted);
}

.status-dot{
width:9px;
height:9px;
border-radius:50%;
background:#22c55e;
box-shadow:0 0 0 3px rgba(34,197,94,.15);
}

.hero-socials{
display:flex;
align-items:center;
gap:1.3rem;
}

.soc-icon{
color:var(--text-secondary);
display:flex;
align-items:center;
justify-content:center;
transition:.25s;
text-decoration:none;
}

.soc-icon:hover{
color:var(--text-primary);
transform:translateY(-2px);
}

.hero-right{
display:flex;
justify-content:center;
}

.profile-frame{
position:relative;
width:390px;
}

.profile-backdrop{
position:absolute;
right:50px;
bottom:-50px;
width:310px;
height:380px;
background:var(--bg-card, #c34415);
z-index:0;
}

.profile-img-wrap{
position:relative;
width:290px;
height:365px;
overflow:hidden;
border-radius:5px;
z-index:1;
}

.profile-img{
width:100%;
height:100%;
object-fit:cover;
object-position:top;
display:block;
filter:grayscale(0%) contrast(1.05) brightness(0.95);
transition: filter 0.4s ease;
}
// .profile-img:hover {
//   filter: grayscale(0%);
// }


/* Tablet */

@media(max-width:920px){

.hero-wrap{
display:flex;
flex-direction:column;
text-align:center;
gap:2rem;
}

/* Image comes first */

.hero-right{
order:1;
display:flex;
justify-content:center;
width:100%;
}

.hero-left{
order:2;
align-items:center;
}

.meta-row,
.hero-socials{
justify-content:center;
}

.hero-bio{
margin:auto;
max-width:95%;
margin-bottom:1.6rem;
}

.profile-frame{
width:230px;
}

.profile-img-wrap{
width:230px;
height:280px;
}

.profile-backdrop{
width:170px;
height:55px;
right:-25px;
bottom:-25px;
}

}


/* Mobile */

@media(max-width:600px){

.hero-sec{
padding-top:110px;
}

.hero-h1{
font-size:2.2rem;
}

.hero-bio{
font-size:.92rem;
}

.profile-frame{
width:190px;
}

.profile-img-wrap{
width:190px;
height:230px;
}

.profile-backdrop{
width:140px;
height:45px;
right:-20px;
bottom:-20px;
}

}

      `}</style>
    </section>
  );
}