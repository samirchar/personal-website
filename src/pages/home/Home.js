import React from 'react'
import './Home.css'
import { useCollection } from '../../hooks/useCollection'

export default function Home() {

  const socialMedia = useCollection('social-media')
  console.log(socialMedia)
  return (
    <section id='home'>
      <h1>Data Scientist</h1>
      <p>My mission is to enable others to reach their full potential so that they can better serve their purpose.</p>
      <div className='social-media'>
        <ul>
          {socialMedia && socialMedia.map((media)=> (
            <li key={media.id}><a href={media.url}>{media.name}</a></li>)
            )}

        </ul>
      </div>
      <img></img>
    </section>
  )
}
