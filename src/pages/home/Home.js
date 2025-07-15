import {React, useState } from 'react'
import './Home.css'

import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import headShot from '../../assets/IMG_8474 no background.png'
import SocialMediaBar from '../../components/SocialMediaBar'


export default function Home() {
  const [socialMedia,setSocialMedia] = useState([
    {"name":"linkedin","url":"https://www.linkedin.com/in/samir-char/","icon":<AiOutlineLinkedin/>},
    {"name":"github","url":"https://github.com/samirchar/","icon":<AiOutlineGithub/>},
    {"name":"twitter","url":"https://twitter.com/Samir_char","icon":<AiOutlineTwitter/>},
  ])


//{`../../assets/IMG_8470.jpg`}

  console.log(socialMedia)
  return (
    <header id='Home'>
      
      <div className='container header__container'>
        <h1>Data Scientist</h1>
        <p>My mission is to enable others to reach their full potential so that they can better serve their purpose.</p>
        <div className='header__headshot'>
          <img src={headShot} alt='headShot'/>
        </div>
        <SocialMediaBar socialMediaList = {socialMedia}/>
        
      </div>
      
      
    </header>
  )
}
