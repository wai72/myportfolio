import React from 'react'
import GooglePlayButton from 'react-mobile-store-button'

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    MMCalendarDesc: "A Calendar with Myanmar versus English date. It can be calculated and converted to the date between Myanmar and English. Users can add notes, events, and memories to the note features. \nUtilized Technology:  Kotlin, MVVM, LiveData, Room, Coroutine, Dagger/Hilt, Navigation, Firebase, and ironSource Monetization.",
    MMCalendarPlayStore: "https://play.google.com/store/apps/details?id=com.nanhm.mmcalendar",

    ENGMMDictionaryDesc: "An offline dictionary allows users to search for the explanation of each English word in the Myanmar language. It also provides word of the day; the user can memorize at least one English word randomly every day. Utilized Technology: Kotlin, MVVM, Room, Coroutine, Dagger/Hilt, Google Speech Recognition, Firebase, and ironSource Monetization.",
    ENGMMDictionaryPlayStore: "https://play.google.com/store/apps/details?id=com.peteaung.engmmdictionary",

    DhammaDesc: "An app helps those who are interested in reading the Buddha Dhamma Script and listening to audio from Buddhist Monks, Abidhama Teachers, Meditation Trainers, etc. Users can also read and listen to them offline by downloading PDF Docs, and MP3 Audios Files. Utilize Technology: Kotlin, MVVM, Room, Coroutine, HIlt, Navigation, ExoPlayer, Firebase, and ironSource Monetization.",
    DhammaPlayStore:"https://play.google.com/store/apps/details?id=com.haymarsan.dhammapiya",

    MMENGDictionaryDesc: "A dictionary app that allow user to search the translation of each Burmese word into English. It's useful for those who learn English vs Burmese Language. Utilized Kotlin, MVVM, Room, Google Speech Recognition, Firebase SDK and ironSource SDK.",
    MMENGDictionaryPlayStore: "https://play.google.com/store/apps/details?id=com.hms.myanmar_englishdictionarytranslator",

    MMThetponeDesc: "A Spelling App for those who learning Myanmar Word. It can be searched and checked the Myanmar over 200 provided words. A spelling Quiz Game is also provided and users can practice the word spelling. Utilized Technology: Kotlin, MVVM, Room, Coroutine, Hilt, Firebase, and ironSource Monetization.",
    MMThetponePlayStore: "https://play.google.com/store/apps/details?id=com.ottsolution.myanmarthatpone",

    MyHealthDesc: "The app provides the following features: health information and knowledge, BMI Calculator, Due Date Calculator, and full descriptions of each result. Utilized Technology: Kotlin, MVVM, Room, Coroutine, Hilt, Navigation, Retrofit, Firebase, and ironSource Monetization.",
    MyHealthPlayStore: "https://play.google.com/store/apps/details?id=com.peteaung.myhealth"

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

            
            <div>
              <GooglePlayButton
                className={"custom-style"}
                store="android"
                url={desc[projectName+"PlayStore"]}
                linkProps={{ title: 'Android Store Button' }}/>
            </div>
        </div>
    </div>
  )
}

export default  ProjectBox