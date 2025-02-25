import ResumeButtons from "../components/ResumeButtons";
import SkillBar from "../components/SkillBar";
import Html5 from "../assets/html5-48.png";
import Css3 from "../assets/css3-48.png";
import JS from "../assets/js-48.png";
import Tailwind from "../assets/tailwindcss-48.png";
import Vue from "../assets/vue-js-48.png";
import React from "../assets/react-js-100.png";
import Sass from "../assets/sass-48.png";
import GraphQl from "../assets/graphql-48.png";
import Node from "../assets/node-js-48.png";
import Php from "../assets/php-48.png";

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
            title={"Javascript"}
            progress={85}
          />
          <SkillBar 
            icon={React}
            title={"React"}
            progress={75}
          />
          <SkillBar 
            icon={Vue}
            title={"Vue.js"}
            progress={75}
          />
          <SkillBar 
            icon={Sass}
            title={"Sass"}
            progress={90}
          />
          <SkillBar 
            icon={Tailwind}
            title={"Tailwind CSS"}
            progress={90}
          />
        </ul>
        <br/>
        <h3 className="underline">Backend</h3>
        <ul className="skills__group">
          <SkillBar 
            icon={Node}
            title={"Node.js"}
            progress={80}
          />
          <SkillBar 
            icon={Php}
            title={"PHP"}
            progress={80}
          />
          <SkillBar 
            icon={GraphQl}
            title={"GraphQL"}
            progress={50}
          />
        </ul>
      </div>
    </div>
  )
}