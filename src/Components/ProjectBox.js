import React from 'react'
import GooglePlayButton from 'react-mobile-store-button'

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    APlusEWalletDesc: "A Calendar with Myanmar versus English date. It can be calculated and converted to the date between Myanmar and English. Users can add notes, events, and memories to the note features. \nUtilized Technology:  Kotlin, MVVM, LiveData, Room, Coroutine, Dagger/Hilt, Navigation, Firebase, and ironSource Monetization.",
    APlusPlayStore: "https://play.google.com/store/apps/details?id=com.jits.mbanking.abank.consumer&hl=en&gl=US",
    APlusAppStore: "https://apps.apple.com/us/app/a-wallet/id1543663742",

    PayboltCryptoDesc: "An offline dictionary allows users to search for the explanation of each English word in the Myanmar language. It also provides word of the day; the user can memorize at least one English word randomly every day. Utilized Technology: Kotlin, MVVM, Room, Coroutine, Dagger/Hilt, Google Speech Recognition, Firebase, and ironSource Monetization.",
    PayboltCryptoPlayStore: "https://play.google.com/store/apps/details?id=com.fincrypt.paybolt",
    PayboltCryptoAppStore: "https://apps.apple.com/us/app/paybolt-crypto/id1599880290",

    AYAPayMerchantDesc: "An app helps those who are interested in reading the Buddha Dhamma Script and listening to audio from Buddhist Monks, Abidhama Teachers, Meditation Trainers, etc. Users can also read and listen to them offline by downloading PDF Docs, and MP3 Audios Files. Utilize Technology: Kotlin, MVVM, Room, Coroutine, HIlt, Navigation, ExoPlayer, Firebase, and ironSource Monetization.",
    AYAPayMerchantPlayStore:"https://play.google.com/store/apps/details?id=com.fincrypt.payboltmerchant",
    AYAPayMerchantAppStore: "https://apps.apple.com/us/app/aya-pay-merchant/id1485836285",

    PayboltBusinessDesc: "A dictionary app that allow user to search the translation of each Burmese word into English. It's useful for those who learn English vs Burmese Language. Utilized Kotlin, MVVM, Room, Google Speech Recognition, Firebase SDK and ironSource SDK.",
    PayboltBusinessPlayStore: "https://apps.apple.com/us/app/paybolt-business/id1612770866",
    PayboltBusinessAppStore: "https://apps.apple.com/us/app/paybolt-business/id1612770866",

    HtwettoeDesc: "A Spelling App for those who learning Myanmar Word. It can be searched and checked the Myanmar over 200 provided words. A spelling Quiz Game is also provided and users can practice the word spelling. Utilized Technology: Kotlin, MVVM, Room, Coroutine, Hilt, Firebase, and ironSource Monetization.",
    HtwettoePlayStore: "https://play.google.com/store/search?q=htwet+toe+app&c=apps&hl=en&gl=US",

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            <p className='projectDesc'>{desc[projectName + 'Desc']}</p>
            <br />

              {/* <div className='x-flex'>
             <MobileStoreButton store="android" width={150} url={desc[projectName+"PlayStore"]} linkProps={{title: "Android Store Button"}} />
            <MobileStoreButton store="ios" width={150} url={'https://apps.apple.com/us/app/paybolt-business/id1612770866'} linkProps={{title: "Android Store Button"}} />
             </div> */}
         
        </div>
            
            <div>
              <GooglePlayButton
                className={"custom-style"}
                store={"ios"}
                url={desc[projectName+"PlayStore"]}
                linkProps={{ title: 'Store Button' }}/>
            </div>
        
    </div>
  )
}

export default  ProjectBox