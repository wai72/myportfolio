import React from 'react';
import Lottie from  "lottie-react";
import Typed from "./Typed.js";
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Khun from '../images/khun.png'
import CoderGuy from '../LottieFiles/coder-man2.json'
import CoderBoy from '../LottieFiles/coderboy.json'
import { ImPointRight } from "react-icons/im";
import GitHubCalendar from 'react-github-calendar';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>KHUN AUNG</b></h1>
          <Typed/>   
        </div>
      <img className='avatarBox' src={Khun} alt=""/>
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>LET ME <b>INTRODUCE</b> MYSELF</h1>
          <p>
            I love the process of changing a raw idea into an app or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer and work that I can 
            be proud of.<br /><br />
            I am fluent in <b>Kotlin</b> and <b>Java </b> to develop Android mobile apps and I have successfully published several apps the on <a href="https://play.google.com/store/apps/developer?id=K.H+Innovation" target='_blank'>Google Play Store</a>.
            I know a bit of <b>Javascript, Express, React,</b> and <b>React Native</b> and have worked on a few 
            academic projects by using them.<br />
            I plan to learn <b>Machine Learning</b>, <b>Big Data,</b> and<b> AI</b> in the near future. <br /><br />
          </p>
        </div>
        <Tilt>
          <Lottie 
          className="illustration" 
          animationData={CoderGuy} 
          loop={true} 
        />
        </Tilt>
      </div>
    </div>
  )
}

export default Home