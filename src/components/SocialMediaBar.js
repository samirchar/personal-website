import React from 'react'
import './SocialMediaBar.css'

export default function SocialMediaBar({socialMediaList}) {

  return (
    <div className='container social-media'>
    <ul className='social-media__list'>
      {socialMediaList.map((media)=> (
        <li key={media.name}>
          <a href={media.url} key = {`${media.name} icon`} target="_blank" rel="noopener noreferrer">
            {media.icon}
          </a>
        </li>)
        )}

    </ul>
  </div>
  )
}
