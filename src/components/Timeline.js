import React from 'react'
import headShot from '../assets/IMG_8474 no background.png'
import './Timeline.css'

export default function Timeline({experiences}) {


  return (
    <ul className='container timeline'>

        {experiences.map((exp,index) => (
        
        <li key={exp.id} className='timeline__experience'>
            <div className='timeline__experience__left'>
                <div className='timeline__experience__left__image-container'>
                    <img src={exp.img}/>
                </div>
                <div className={`timeline__experience__left__vertical-line${experiences.length === index+1 ? "-last": ""}`}/>
            </div>
            <div className='timeline__experience__right'>
                <h3>{exp.title}</h3>
                <div className='timeline__experience__meta'>
                  <h5>{exp.dates}</h5>
                  <h5>{exp.location}</h5>
                </div>
                {exp.description && exp.description.map(exp_desc_item => (

                    <ul><li>{exp_desc_item}</li></ul>
                )
                )}
                
            </div>
         </li>

        ))}

    </ul>
  )
}
