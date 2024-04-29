import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma,FaBootstrap, FaJava} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiFirebase,SiJetpackcompose, 
  SiExpress, SiMongodb, SiPostman, SiVercel, 
  SiKotlin, SiAndroidstudio, SiMysql, SiIntellijidea, 
  SiJira, SiMacos, SiUbuntu, SiVisualstudiocode} from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Skills = ({skill}) => {
    const icon = {
        Android: <IoLogoAndroid/>,
        Compose: <SiJetpackcompose/>,
        Kotlin: <SiKotlin/>,
        Java: <FaJava/>,
        AndroidStudio: <SiAndroidstudio/>,
        MySQL: <SiMysql/>,
        IntelliJ: <SiIntellijidea/>,
        Jira:<SiJira/>,
        Firebase:<SiFirebase/>,
        Playstore: <IoLogoGooglePlaystore/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        MacOS: <SiMacos/>,
        Ubuntu: <SiUbuntu/>,
        VSCode: <SiVisualstudiocode/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
