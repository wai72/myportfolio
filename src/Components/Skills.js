import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaJava, FaAppStoreIos} from "react-icons/fa";
import { DiJavascript1} from "react-icons/di";
import {SiFirebase, SiPostman,
  SiKotlin, SiAndroidstudio, SiMysql, SiIntellijidea, 
  SiJira, SiMacos, SiFlutter, SiVisualstudiocode, SiXcode, SiConfluence} from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Skills = ({skill}) => {
    const icon = {
        Android: <IoLogoAndroid/>,
        Kotlin: <SiKotlin/>,
        Java: <FaJava/>,
        ReactNative: <FaReact/>,
        Flutter: <SiFlutter/>,
        AndroidStudio: <SiAndroidstudio/>,
        Xcode: <SiXcode />,
        IntelliJ: <SiIntellijidea/>,
        Jira:<SiJira/>,
        Confluence:<SiConfluence />,
        Firebase:<SiFirebase/>,
        Playstore: <IoLogoGooglePlaystore/>,
        Appstore: <FaAppStoreIos />,
        Postman: <SiPostman/>,
        Javascript: <DiJavascript1/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        MacOS: <SiMacos/>,
        VSCode: <SiVisualstudiocode/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
