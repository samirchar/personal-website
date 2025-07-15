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

  return (
    <header id='Home' className='hero-gradient-bg'>
      <div className='container header__container hero-grid'>
        <div className='hero-text'>
          <h1 className='hero-title'>
            <span className='hero-title-main'>Data Scientist</span>
          </h1>
          <p className='hero-mission'>
            My mission is to <span className='highlight'>enable others to reach their full potential</span> so that they can better serve their purpose.
          </p>
          <SocialMediaBar socialMediaList={socialMedia}/>
          <div className="hero-cta-buttons" style={{ marginTop: '2rem', display: 'flex', gap: '1.2rem' }}>
            <a href="#Projects" className="hero-btn">View My Work</a>
            <a href="#Contact" className="hero-btn">Contact Me</a>
          </div>
        </div>
        <div className='header__headshot hero-headshot-outer'>
          <img src={headShot} alt='headShot'/>
        </div>
      </div>
    </header>
  )
}
