import React, { useState } from 'react'
import './About.css'
import Timeline from '../../components/Timeline'
import msft from '../../assets/msft.jpeg'
import uniandes from '../../assets/uniandes.jpeg'
import columbia from '../../assets/columbia.jpeg'
import yr from '../../assets/Y&R.jpeg'
import poli from '../../assets/poli.jpeg'
import ibm from '../../assets/IBM.jpeg'
import grupodot from '../../assets/grupodot.jpeg'
import meli from '../../assets/meli.jpeg'

export default function About() {

  const [experienceList,setexperienceList] = useState(

    [
      { "id":1,
        "title": "Data Scientist - Azure Supply Chain & Provisioning",
        "company": "Microsoft",
        "dates": "Jul 2022 - Present",
        "location": "Boston, Massachusetts, United States",
        "description": null,
        "img": msft
      },
      {"id":2,
        "title": "Data Science Intern - Azure Supply Chain and Provisioning",
        "company": "Microsoft",
        "dates": "Jun 2021 - Sep 2021",
        "location": "New York, New York, United States",
        "description": null,
        "img": msft
      },
      {"id":3,
        "title": "Semi-Senior Data Scientist",
        "company": "Mercado Libre",
        "dates": "Jun 2020 - Dec 2020",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": ["Improve an AI system for Multi-Warehouse demand forecasting at SKU level to produce good inventory plans by stocking the items that customers want in different geographical regions; cooperate with 10 data scientists to ensure algorithms satisfy commercial requirements."],
        "img": meli
      },
      {"id":4,
        "title": "Data Scientist",
        "company": "Grupodot",
        "dates": "Mar 2019 - Jun 2020",
        "location": "Bogotá D.C., Colombia",
        "description": ["Proposed and implemented a Deep Learning model to forecast fuel sales for more than 200 gas stations of an oil and gas company in Colombia; Decreased client volume estimate error by 11% (absolute, based on MAPE).","Built a churn prediction model for one of Latin America's largest telecom companies; achieved an uplift of 5.2 when selecting 200,000 customers to contact per month, increasing the chances of calling potential churners.","Developed, in conjunction with the data science team, a credit default prediction model for one of Colombia's most prominent banks to secure resources in case of client default."],
        "img": grupodot
      },
      {"id":5,
        "title": "Junior Data Scientist",
        "company": "Grupodot",
        "dates": "Oct 2018 - Mar 2019",
        "location": "Bogota, D.C., Capital District, Colombia",
        "description": ["Created Python web scrapers and used Google NLP API to construct a social media analytics tool for comments clustering, influencers' scoring, and much more."],
        "img": grupodot
      },
      {"id":6,
        "title": "Junior Data Scientist",
        "company": "Young & Rubicam",
        "dates": "Jul 2018 - Oct 2018",
        "location": "Bogotá D.C., Colombia",
        "description": ["Automated a Machine Learning based tool for social media analysis using Python and Heroku, reducing manual tasks by 85%. It is currently being employed by brands to measure social media success and recognize areas for betterment."],
        "img": yr
      },
      {"id":7,
        "title": "Internship - IBM Global Entrepreneur Program",
        "company": "IBM",
        "dates": "Jan 2018 - Jun 2018",
        "location": "Bogotá D.C., Colombia",
        "description": ["Designed a data science workshop given to more than 150 people. Trainees ranged from entrepreneurs to students of the Master's Degree in Information Engineering at Universidad de Los Andes. Recruited disruptive technology-based startups; identified IBM Cloud technologies to solve business needs."],
        "img": ibm
      }
    ]
    

  )

  return (
    <section id = 'About'>
      <div className='container about__container'>
      <h2>About</h2>
      <Timeline experiences={experienceList}/>
      </div>
    </section>
  )
}
