import React from 'react';
import ProjectBox from './ProjectBox';
import APlusImage from '../images/APlusWalletApp.png'
import AYAPayWallet from '../images/AYAPayWallet.png'
import PayboltWalletImage from '../images/PayboltWalletApp.png'
import PayboltBusinessImage from '../images/PayboltBusiness.png'
import AYAPayMerchantImage from '../images/AYAPayMerchant.png'
import HtwettoeImage from '../images/HtwettoeApp.png'
import CoderGuy from '../LottieFiles/Coder-Guy2.json'
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Mobile from '../LottieFiles/Mobile.json'
import AcademicProjectGuy from '../LottieFiles/academic_project1.json'

const Projects = () => {
  return (
    <div>
      <div className='AboutPage'>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={AcademicProjectGuy} 
              loop={true} 
            />
          </Tilt>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >My <b>Project</b> Experiences</h1>
          <p>I have extensive experience in designing, developing, and building over 7 e-wallet apps using <b>React Native and Flutter</b> and one agricultural app tailored for farmers(like social media app) using <b>Android Native(Java and Kotlin)</b>. Additionally, I am the owner of <b>AYA Pay merchant app</b>, where I am responsible for designing the app's UI/UX, documenting APIs, and integrating third-party services. I have successfully released these apps to various app stores, including the<b>App Store, Google Play Store, and Huawei Store</b> . My hands-on involvement in every aspect of the app development process has equipped me with a comprehensive understanding of mobile app development and a proven track record of delivering high-quality products to market.
          </p>
        </div>
      </div>
   
      <h1 className='RecentWorkTextHeading'>My <b>Publications</b></h1>
      <br/>
      <br/>
      <div className='project'>
        <ProjectBox projectPhoto={APlusImage} projectName="APlusEWallet"/>
        <ProjectBox projectPhoto={PayboltWalletImage} projectName="PayboltCrypto" />
        <ProjectBox projectPhoto={AYAPayMerchantImage} projectName="AYAPayMerchant" />
        <ProjectBox projectPhoto={PayboltBusinessImage} projectName="PayboltBusiness" />
        <ProjectBox projectPhoto={AYAPayWallet} projectName="AYAPayWallet" />
        <ProjectBox projectPhoto={HtwettoeImage} projectName="Htwettoe" />
      </div>
      
      <h1 className='RecentWorkTextHeading'>My <b>Current Projects</b></h1>
      <div className='RecentWorkPage'>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={CoderGuy} 
              loop={true} 
            />
            <b>Utilized Tool & Technology</b>
            <br/>
            <br/>Flutter, MVVM, GetX, Retrofit, Websocket, Deeplinking, InApp Webview(JavaScript Channel)
            <br/>
            <br/>Java, Microservices, JavaScript, React, Redis, Nacos, MySql, Huawei cloud and AWS
            <br/>
          </Tilt>

        <div className='RecentWorkText'>
          <p>
          <h3><b>A Plus E-Wallet</b></h3>
          <br></br>
           Our e-wallet app offers users a convenient and secure way to manage their finances on-the-go. With our app, users can easily store funds, make payments, and track their transactions all in one place. 
          <div>
      <h4>Key features of our E-Wallet app:</h4>
      
      <ul className="feature-list">
      <li><b>Fund Management</b>: Users can securely store funds in their digital wallet, eliminating the need to carry physical cash.</li>
      <li><b>Payment Options</b>: Our app supports a variety of payment methods, including QR code payments, online transfers, and peer-to-peer transactions.</li>
      <li><b>Bill Payment</b>: Users can conveniently pay their utility bills, mobile top-ups, and other expenses directly from the app.</li>
      <li><b>Merchant Integration</b>: Our app seamlessly integrates with merchants, allowing users to make purchases both online and in-store.</li>
      <li><b>Security</b>: We prioritize the security of our users' funds and personal information. Our app employs advanced encryption techniques and multi-factor authentication to ensure a safe and secure experience.</li>
      <li><b>Transaction History</b>: Users can easily track their transaction history, view past payments, and monitor their spending habits.</li>
      <li><b>Customization</b>: Our app offers users the flexibility to customize their digital wallet experience, including personalized settings and notifications.</li>
    </ul>
    </div>
    I am responsible for deploying the app to the Play Store, Xiaomi, Huawei, and the internal app server.<a className = "Link" href='https://play.google.com/store/apps/details?id=com.jits.mbanking.abank.consumer&hl=en&gl=US' target='_blank'>See on Google Play</a> and <a className = "Link" href='https://apps.apple.com/us/app/paybolt-crypto/id1599880290' target='_blank'>See on App Store.</a>
           <br/><br/>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Projects