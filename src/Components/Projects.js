import React from 'react';
import ProjectBox from './ProjectBox';
import APlusImage from '../images/APlusWalletApp.png'
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
          <p>I’ve contributed to my <b>job company’s projects</b>, in developing, maintaining, and deploying mobile applications.<br/><br/>.
          </p>
        </div>
      </div>

      <h1 className='RecentWorkTextHeading'>My <b>Recent Works</b></h1>
      <div className='RecentWorkPage'>
        <div className='RecentWorkText'>
          <p>
          <b>SmartHR App</b>: Mobile App for KBZ Bank internal employees. All the features are related to HR such as Attendance, CheckIn/CheckOut by Geolocation, Leave/OT, Learning and Training, HR Announcement, Payslip, etc.
          </p><br/>
          <p>
          <b>Digital Onboarding</b>: Android Application for KBZ Bank internal use to onboard the customer to the bank. The main feature is bank account opening function by using mobile device portably.
          </p><br/>
          <p>
          <b>KBZConnect</b>: Mobile App that allows the bank customer to search the nearby branches and ATM locations and currency exchange rates.
          <a className="Link" href='https://play.google.com/store/apps/details?id=com.kbzbank.kbzconnect&hl=en_US&gl=US' target='_blank'> See on Google Play</a>
          
          </p><br/>
          <p>
          <b>mBanking</b>: A banking app that allows the user to view account balances & transactions, transfer money, and pay bills from the mobile device, etc.
          <a className="Link" href='https://play.google.com/store/apps/details?id=com.ofss.fcdb.mobile.android.phone.kbz.launcher&hl=en_US&gl=US' target='_blank'> See on Google Play</a>
          </p>
          <p>
          <b>KBZ Pay</b>:A mobile wallet app along with banking functions that is simple and convenient to transact money in Myanmar. I was responsible for deploying the app to the Play Store, Xiaomi, Huawei, and the internal app server.
          <a className="Link" href='https://play.google.com/store/apps/details?id=com.kbzbank.kpaycustomer&hl=en_US&gl=US' target='_blank'> See on Google Play</a>
          
          </p><br/>
        </div>
          <div className='RecentWorkText'>
          <p>
          <b>KBZ Catalyst</b>: Mobile App for KBZ Bank internal employees. It collects the employees' KYC data including Biometric data such as face capturing, voice recording, etc.
          </p>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Mobile} 
              loop={true} 
            />
            <b>Utilized Tool & Technology</b>
            <br/>Java, Kotlin, Android Studio, MVP, MVVM, MVI, RxJava, Coroutine, Retrofit, KOIN, Dagger-Hilt, 
Clean Architecture, Jetpack Libraries, Git, Bitbucket, Jira
          </Tilt>
        </div>
      </div>
      
      <br/>
      <div className='project'>
        <ProjectBox projectPhoto={APlusImage} projectName="APlusEWallet"/>
        <ProjectBox projectPhoto={PayboltWalletImage} projectName="PayboltCrypto" />
        <ProjectBox projectPhoto={AYAPayMerchantImage} projectName="AYAPayMerchant" />
        <ProjectBox projectPhoto={PayboltBusinessImage} projectName="PayboltBusiness" />
        <ProjectBox projectPhoto={HtwettoeImage} projectName="Htwettoe" />
      </div>
      
      <h1 className='RecentWorkTextHeading'>My <b>Recent Projects</b></h1>
      <div className='RecentWorkPage'>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={CoderGuy} 
              loop={true} 
            />
            <b>Utilized Tool & Technology</b>
            <br/>
            <br/>Android, Kotlin, Jave, Jetpack Compose, MVVM, Retrofit, Coroutine,
            <br/>
            <br/>HTML, CSS, JavaScript, React Native
            <br/>
          </Tilt>

        <div className='RecentWorkText'>
          <p>
          <b>MovieVault</b> : A native android application using Jetpack Compose for UI development. This app serves the interface for user to register, log in, browse movie collections, watch movie trailers, and save their favorites. Utilized Kotlin, Jetpack Compose, MVVM, Retrofit, Coroutine, Hilt, Navigation Graph, Android Studio. 
          <a className = "Link" href='https://github.com/ksmaprince/MovieValut' target='_blank'> See on Github.</a>
           <br/><br/>
           <b>Movie-Vault-WebApp</b>: A RESTful API web application, serve as a backend for Movie-Vault project, capable of efficiently storing, retrieving and processing both movie and user information. Utilized Java, Spring Boot, Spring Security, Spring Data JPA, Lombok, MySQL, Azure, AWS, IntelliJ.
          <a className="Link" href='https://github.com/ksmaprince/MovieValut-WebServices' target='_blank'> See on Github</a>
          <br/><br/>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Projects