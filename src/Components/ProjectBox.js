import React from 'react'
import GooglePlayButton from 'react-mobile-store-button'

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    APlusEWalletDesc: "Our e-wallet app offers users a convenient and secure way to manage their finances on-the-go. With our app, users can easily store funds, make payments, and track their transactions all in one place.",
    APlusPlayStore: "https://play.google.com/store/apps/details?id=com.jits.mbanking.abank.consumer&hl=en&gl=US",
    APlusAppStore: "https://apps.apple.com/us/app/a-wallet/id1543663742",

    PayboltCryptoDesc: "Our crypto wallet app is your gateway to the world of digital currencies. With our app, users can securely store, send, and receive various cryptocurrencies, all from the palm of their hand.",
    PayboltCryptoPlayStore: "https://play.google.com/store/apps/details?id=com.fincrypt.paybolt",
    PayboltCryptoAppStore: "https://apps.apple.com/us/app/paybolt-crypto/id1599880290",

    AYAPayMerchantDesc: "Our e-wallet merchant app is a powerful tool designed to empower businesses to accept digital payments quickly and securely. With our app, merchants can streamline their payment processes, enhance customer convenience, and drive sales growth.",
    AYAPayMerchantPlayStore:"https://play.google.com/store/apps/details?id=com.fincrypt.payboltmerchant",
    AYAPayMerchantAppStore: "https://apps.apple.com/us/app/aya-pay-merchant/id1485836285",

    PayboltBusinessDesc: "Our crypto wallet (merchant) app is designed to empower businesses to accept cryptocurrency payments seamlessly and securely. With our app, merchants can tap into the growing world of digital currencies and offer customers a modern and convenient payment option",
    PayboltBusinessPlayStore: "https://apps.apple.com/us/app/paybolt-business/id1612770866",
    PayboltBusinessAppStore: "https://apps.apple.com/us/app/paybolt-business/id1612770866",

    HtwettoeDesc: "Our farmer support app is a digital platform designed to empower farmers and enhance agricultural productivity. With our app, farmers can access valuable resources, receive timely advice, and connect with experts to optimize their farming practices.",
    HtwettoePlayStore: "https://play.google.com/store/search?q=htwet+toe+app&c=apps&hl=en&gl=US",

    AYAPayWalletDesc: "Our crypto wallet app is your gateway to the world of digital currencies. With our app, users can securely store, send, and receive various cryptocurrencies, all from the palm of their hand.",
    AYAPayWalletPlayStore: "https://play.google.com/store/apps/details?id=com.fincrypt.paybolt",
    AYAPayWalletAppStore: "https://apps.apple.com/us/app/paybolt-crypto/id1599880290",

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
                store={"android"}
                url={desc[projectName+"PlayStore"]}
                linkProps={{ title: 'Store Button' }}/>
            </div>
              {/* <div className='x-flex'>
             <MobileStoreButton store="android" width={150} url={desc[projectName+"PlayStore"]} linkProps={{title: "Android Store Button"}} />
            <MobileStoreButton store="ios" width={150} url={'https://apps.apple.com/us/app/paybolt-business/id1612770866'} linkProps={{title: "Android Store Button"}} />
             </div> */}
         </div>
         </div>
  )
}

export default  ProjectBox