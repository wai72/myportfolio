import React from 'react';
import ProjectBox from './ProjectBox';
import MMCalendarImage from '../images/MMCalendarApp.png'
import ENGMMDictionaryImage from '../images/ENGMMDictionaryApp.png'
import MMENGDictionaryImage from '../images/MMENGDictionaryApp.png'
import DhammaImage from '../images/DhammaApp.png'
import MMThetponeImage from '../images/MMThetponeApp.png'
import MyHealthImage from '../images/MyHealthApp.png'
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
          <p>I’ve contributed to my <b>job company’s projects</b>, in developing, maintaining, and deploying mobile applications for Android platform.<br/><br/>I also have some <b>personal projects</b> and 7 apps have already been successfully published in the Google Play App Store. <br/><br/>One of my apps has <b>over one million (1 M+)</b> downloaded users.
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
      
      <h1 className='RecentWorkTextHeading'>My <b>Publications</b></h1>
      <br/>
      <br/>
      <div className='project'>
        <ProjectBox projectPhoto={MMCalendarImage} projectName="MMCalendar"/>
        <ProjectBox projectPhoto={MMENGDictionaryImage} projectName="MMENGDictionary" />
        <ProjectBox projectPhoto={MMThetponeImage} projectName="MMThetpone" />
        <ProjectBox projectPhoto={ENGMMDictionaryImage} projectName="ENGMMDictionary" />
        <ProjectBox projectPhoto={MyHealthImage} projectName="MyHealth" />
        <ProjectBox projectPhoto={DhammaImage} projectName="Dhamma"/>
      </div>
      
      <h1 className='RecentWorkTextHeading'>My <b>Recent Projects</b> ( Academic )</h1>
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
            <br/>Flow, LiveData, ViewModel, Dagger-Hilt, Nav-Graph, Android Studio
            <br/>
            <br/>Java, Swing, Spring-Boot, SpringWeb, Security, JPA, Hibernate,
            <br/>
            <br/>HTML, CSS, JavaScript, NodeJS, Express, React, React Native
            <br/>
            <br/>AWS (EC2, Lambda, RDS, S3), Azure (WebApp, Storage, Azure DB) 
            <br/>MySQL, MongoDB, Prisma, Firebase. Maven, Gradle, Github, 
          </Tilt>

        <div className='RecentWorkText'>
          <p>
          <b>MovieVault</b> : A native android application using Jetpack Compose for UI development. This app serves the interface for user to register, log in, browse movie collections, watch movie trailers, and save their favorites. Utilized Kotlin, Jetpack Compose, MVVM, Retrofit, Coroutine, Hilt, Navigation Graph, Android Studio. 
          <a className = "Link" href='https://github.com/ksmaprince/MovieValut' target='_blank'> See on Github.</a>
           <br/><br/>
           <b>Movie-Vault-WebApp</b>: A RESTful API web application, serve as a backend for Movie-Vault project, capable of efficiently storing, retrieving and processing both movie and user information. Utilized Java, Spring Boot, Spring Security, Spring Data JPA, Lombok, MySQL, Azure, AWS, IntelliJ.
          <a className="Link" href='https://github.com/ksmaprince/MovieValut-WebServices' target='_blank'> See on Github</a>
          <br/><br/>
          <b>Library Management System</b>: A desktop application that can manage the daily functions of a library. I was a team leader in this project. I prepared the project documents and developed desktop UI screens. 
          <a className="Link" href='https://github.com/ksmaprince/LibraryMangementSystem' target='_blank'> See on Github</a>
          <br/><br/>
          <b>Case Management System</b>: A web application for the lawyer. Working with a team, I was a backend developer in this project, developing the backend webservice APIs. 
          <a className="Link" href='https://github.com/ksmaprince/CaseManagementSystem' target='_blank'> See on Github</a>
          <br/><br/>
          <b>Product Management System</b>: A CRUD Web application project to manage product stock. Working with a team. I was a front-end developer and developed web page screens. 
          <a className="Link" href='https://github.com/ksmaprince/Product-Management-System' target='_blank'> See on Github</a>
          <br/><br/>
          <b>Restaurant Management System</b>: A hybrid mobile application project using React Native Technology. It can be installed on Android and iOS mobile devices. I was a team leader and worked both front-end and back-end. In front-end I developed mobile screens user interface (UI) using React Native framework, Figma for UI/UX. I also developed the backend web service API for the project using NodeJS, MongoDB and Firebase. 
          <a className="Link" href='https://github.com/ksmaprince/Restaurant-Management-App' target='_blank'> See on Github</a>
          <br/>
          </p>
        </div>
      </div>

      
    </div>
  )
}

export default Projects