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
import Liquid from "../assets/shopify-48.png";
import MySql from "../assets/mysql-48.png";
import Git from "../assets/git-48.png";
import Postman from "../assets/postman-48.png";

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
            progress={100}
          />
          <SkillBar 
            icon={Css3}
            title={"CSS3"}
            progress={90}
          />
          <SkillBar 
            icon={JS}
            title={"Javascript"}
            progress={90}
          />
          <SkillBar 
            icon={React}
            title={"React"}
            progress={80}
          />
          <SkillBar 
            icon={Vue}
            title={"Vue.js"}
            progress={80}
          />
          <SkillBar 
            icon={Sass}
            title={"Sass"}
            progress={90}
          />
          <SkillBar 
            icon={Tailwind}
            title={"Tailwind CSS"}
            progress={85}
          />
          <SkillBar 
            icon={Liquid}
            title={"Liquid"}
            progress={100}
          />
        </ul>
        <br/>
        <h3 className="underline">Backend</h3>
        <ul className="skills__group">
          <SkillBar 
            icon={Node}
            title={"Node.js"}
            progress={70}
          />
          <SkillBar 
            icon={Php}
            title={"PHP"}
            progress={70}
          />
          <SkillBar 
            icon={GraphQl}
            title={"GraphQL"}
            progress={55}
          />
          <SkillBar 
            icon={MySql}
            title={"MySql"}
            progress={65}
          />
          <SkillBar 
            icon={Git}
            title={"Git"}
            progress={90}
          />
          <SkillBar 
            icon={Postman}
            title={"Postman"}
            progress={80}
          />
        </ul>
      </div>
    </div>
  )
}