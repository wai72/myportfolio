import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import CoderGuy from '../LottieFiles/coder-man2.json'
import { ImPointRight } from "react-icons/im";
import GitHubCalendar from 'react-github-calendar';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={CoderGuy} 
              loop={true} 
            />
          </Tilt>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Know who <b>I'M</b></h1>
          <p>
            Hi, my name is <b>Grace</b> and I am from Yangon, Myanmar.
            I'm a <b>Software Engineer (Mobile Developer)</b> and have completed on-campus studies and currently taking distance courses to complete a <b>Master's Degree in Computer Science</b>. <br/><br/>
            I have <b>5 years of experiences</b> in developing Android Mobile Applications in financial industry.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
          <br/>
          <p>
          Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Professional <b>Skillset</b></h1>
      <div className='skills'>
        <Skills skill='ReactNative'/>
        <Skills skill='Android'/>
        <Skills skill='Kotlin'/>
        <Skills skill='Java'/>
        <Skills skill='Playstore'/>
        <Skills skill='Appstore'/>
        <Skills skill='Firebase'/>
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Npm' />
        <Skills skill='Flutter' />
        <Skills skill='Javascript' />
        <Skills skill='Npm' />
      </div>

      <h1 className='SkillsHeading'><b>Tools</b> I use</h1>
      <div className='skills'>
        <Skills skill='AndroidStudio'/>
        <Skills skill='Xcode'/>
        <Skills skill='VSCode'/>
        <Skills skill='IntelliJ'/>
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Jira'/>
        <Skills skill='MacOS'/>
        <Skills skill='Confluence'/>
      </div>

      <h1 className='SkillsHeading'>Days I <b>Code</b></h1>
      <div className='skills'>
      <GitHubCalendar
        username="ksmaprince"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      </div>
    </>
  )
}

export default About