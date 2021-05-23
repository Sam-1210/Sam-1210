import './App.css';
import {useEffect} from "react"
import GitLogo from "./Assets/git_ico.png"
import InstaIco from "./Assets/instagram1.png"
import LNIco from "./Assets/linkedin.png"
import MailIco from "./Assets/mail.png"
import UpIco from "./Assets/up.png"
import DownIco from "./Assets/down.png"
import OMCMSThumb from "./Assets/Projects/OMCMSThumb.png"
import WWWIco from "./Assets/Projects/www.png"

function App() {
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      let x=document.getElementById("ScrollLink");
      let y=document.getElementById("ScrollIco");
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) 
      {
        x.href="#Projects";
        y.src= UpIco;
      }
      else
      {
        x.href="#Profile";
        y.src= DownIco; 
      }
    });
  }, []);

  return (
    <div className="App">
      <div id="Profile">
        <div id="ProfileText">
          <div id="Intro" className="Heading2">Hi, I'm Satyam</div>
          <div className="Heading1">Software Developer</div>
          <div className="Heading1">& Web Designer</div>
          <div className="Captions">Yeah, Abstraction is Cool, 
            <br/>Though Once You Deep Dive into Low-Level Stuff,
            <br/>There's No Going Back.
            <br/>Checkout 
            <a href="https://github.com/Sam-1210" target="_blank" rel="noreferrer" className="ContactButton">GitHub</a>
             or Browse Projects
             <a href="#Projects" className="ContactButton" onClick={()=>{
               let x=document.getElementById("ScrollLink");
               let y=document.getElementById("ScrollIco");
               if(x && y)
               {
                 x.href="#Projects"
                 y.src = UpIco;
               }
             }}>Here.</a>
          </div>
          <div id="ContactIconBar">
            <a href="https://github.com/Sam-1210" target="_blank" rel="noreferrer">
              <img src={GitLogo} className="ContactIco" alt="GitHUB"/>
            </a>
            <a href="https://instagram.com/uhmm_satyam" target="_blank" rel="noreferrer">
              <img src={InstaIco} className="ContactIco" alt="Instagram"/>
            </a>
            <a href="https://www.linkedin.com/in/satyam-mishra-3b1282174/" target="_blank" rel="noreferrer">
              <img src={LNIco} alt="LinkedIn" className="ContactIco"/>
            </a>
            <a href="mailto://dev.sam1210@gmail.com" target="_blank" rel="noreferrer">
              <img src={MailIco} alt="Email" className="ContactIco"/>
            </a>
          </div>
        </div>
        <div>
        <div id="PageScroll">
            <a id="ScrollLink" href="#Profile" onClick={()=>{
              let x=document.getElementById("ScrollLink");
              let y=document.getElementById("ScrollIco");
              if(x && y)
              {
                if(x.href.indexOf("#Projects") !== -1)
                {
                  x.href="#Profile";
                  y.src= DownIco;
                }
                else if(x.href.indexOf("#Profile") !== -1)
                {
                  x.href="#Projects";
                  y.src= UpIco; 
                }
              }
              return false;
            }}>
              <img id="ScrollIco" src={DownIco} alt="Swap Page"/>
            </a>
          </div>
      </div>
      </div>
      <div id="Projects">
          <div id="ProjectHeading" className="Heading1">Projects</div>
          <div className="ProjectPane">
            <div className="PaneItem">
              <div className="ImgContainer">
                <img src={OMCMSThumb} alt="ProjectThumbnail" className="GalleryWindow"/>
              </div>
              <div className="ProjectText">
                <div className="ProjTitle">Online Classes and Meetings Management System</div>
                <div className="tagList">
                  <div className="tags">#ReactJS</div>
                  <div className="tags">#CSS3</div>
                  <div className="tags">#REST</div>
                  <div className="tags">#PHP</div>
                  <div className="tags">#MySQL</div>
                  <div className="tags">#NodeJS</div>
                </div>
                <div className="Panefooter">
                  <a href="https://github.com/sam-1210/OMCMS" target="_blank" rel="noreferrer">
                    <img src={GitLogo} className="ProjLinks" alt="GitHUB"/>
                  </a>
                  <a href="https://sam-1210.github.io/OMCMS/" target="_blank" rel="noreferrer">
                    <img src={WWWIco} className="ProjLinks" alt="OMCMS"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="PaneItem">
              <div className="ImgContainer">
              <iframe className="ProjectThumbnail" src="https://www.youtube.com/embed/bpivCs3Qo8A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="ProjectText">
                <div className="ProjTitle">Business Game 2</div>
                <div className="tagList">
                  <div className="tags">#AndroidGame</div>
                  <div className="tags">#GODOT</div>
                  <div className="tags">#GDSCript</div>
                </div>
                <div className="Panefooter">
                  <a href="https://play.google.com/store/apps/details?id=org.perspective.business2&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" rel="noreferrer">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" height="60px" alt="PlayStore"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="PaneItem">
              <div className="ImgContainer">
              <iframe className="ProjectThumbnail" src="https://www.youtube.com/embed/pl0WnPfHMx0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="ProjectText">
                <div className="ProjTitle">Not Engine</div>
                <div className="tagList">
                  <div className="tags">#GameEngine</div>
                  <div className="tags">#C++</div>
                  <div className="tags">#OpenGL</div>
                  <div className="tags">#CrossPlatform</div>
                  <div className="tags">#IMGUI</div>
                </div>
                <div className="Panefooter">
                  <a href="https://github.com/sam-1210/Not-Engine" target="_blank" rel="noreferrer">
                    <img src={GitLogo} className="ProjLinks" alt="GitHUB"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
