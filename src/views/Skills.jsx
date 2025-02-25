import ResumeButtons from "../components/ResumeButtons";
import SkillBar from "../components/SkillBar";
import Html5 from "../assets/html5-48.png";
import Css3 from "../assets/css3-48.png";
import JS from "../assets/js-48.png";

export default function Skills() {
  return (
    <div className="view skills">
      <div className='view__header'>
        <h1>Skills</h1>
      </div>
      <div className='view__content'>
        <ResumeButtons />        
        <h3 className="underline">Frontend</h3>
        <ul className="skills__group">
          <SkillBar 
            icon={Html5}
            title={"HTML5"}
            progress={95}
          />
          <SkillBar 
            icon={Css3}
            title={"CSS3"}
            progress={90}
          />
          <SkillBar 
            icon={JS}
            title={"JS"}
            progress={80}
          />
        </ul>
      </div>
    </div>
  )
}