import React from 'react';
import Lottie from  "lottie-react";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Grace from '../images/grace.jpg'
import CoderGuy from '../LottieFiles/coder-man2.json'

const Home = () => {
  return (
    <div >
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>GRACE</b></h1>
          <Typed/>   
        </div>
      <img className='avatarBox' src={Grace} alt=""/>
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>LET ME <b>INTRODUCE</b> MYSELF</h1>
          <p>
            I love the process of changing a raw idea into an app or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer and work that I can 
            be proud of.<br /><br />
            I am fluent in <b>React Native</b> and <b>Flutter </b> to develop Android mobile apps.
            I know a bit of <b>Javascript, React, Java</b> and <b>Android Native</b> and have worked on a few 
            projects by using them.<br />
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