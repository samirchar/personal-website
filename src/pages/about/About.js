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

  const [experienceList] = useState(
    [
      { "id": 1,
        "title": "Data Scientist 2 – Azure Core, Capacity",
        "company": "Microsoft",
        "dates": "Jul 2022 - Present",
        "location": "Boston, MA",
        "description": [
          "Developing a machine learning and probability-based simulation engine to proactively detect customer capacity risks over a six-month horizon.",
          "Utilized causal inference to estimate the influence of customer experience managers on customers’ capacity experience.",
          "Built a recommendation engine to determine how to prioritize Azure global quota support tickets under capacity constraints.",
          "Improved XGBoost model to forecast Azure global quota requests. The model helps allocate server capacity across global Azure Data Centers.",
          "Developed a forecasting model for Azure support tickets, estimating annual staff and budget needs at approximately $40M/year.",
          "Led product analytics initiative, defining metrics, drove cross-team alignment, and launched a PBI that cut manual queries by 92% and time-to-insight by 40%."
        ],
        "img": msft
      },
      { "id": 2,
        "title": "Master of Science (MS), Data Science, GPA: 4.0825/4",
        "company": "Columbia University in the City of New York",
        "dates": "2021 – 2022",
        "location": "New York, NY",
        "description": [
          "Coursework highlights: Machine Learning, Deep Learning, Advanced Deep Learning, Natural Language Processing, Reinforcement Learning"
        ],
        "img": columbia
      },
      { "id": 3,
        "title": "Data Scientist Intern – Azure Core, Capacity",
        "company": "Microsoft",
        "dates": "Jul 2021 – Sep 2021",
        "location": "New York, NY",
        "description": [
          "Discovered ways to improve a current Azure quota ticket forecasting model by using new streams of data, machine learning and causal inference.",
          "Analyzed Azure Data Explorer usage data and identified top customers and usage patterns, projected product growth and identified customer churn behavior."
        ],
        "img": msft
      },
      { "id": 4,
        "title": "Semi-Senior Data Scientist",
        "company": "Mercado Libre",
        "dates": "Jun 2020 - Dec 2020",
        "location": "Bogotá, CO",
        "description": [
          "Improved an AI system for Multi-Warehouse demand forecasting to produce accurate inventory plans by stocking the items that customers want in different geographical regions; cooperated with 10 data scientists to ensure algorithms satisfy commercial requirements."
        ],
        "img": meli
      },
      { "id": 5,
        "title": "Data Scientist",
        "company": "Grupodot",
        "dates": "Oct 2018 – Jun 2020",
        "location": "Bogotá, CO",
        "description": [
          "Proposed and implemented a Deep Learning model to forecast fuel sales for more than 200 gas stations of an oil and gas company in Colombia; Decreased client volume estimate error by 11% (absolute, based on MAPE).",
          "Built a churn prediction model for one of Latin America's largest telecom companies; achieved an uplift of 5.2 when selecting 200,000 customers to contact per month, increasing the chances of calling potential churners.",
          "Collaborated in development of a credit default prediction model for one of Colombia's most prominent banks to secure resources in case of client default.",
          "Created Python web scrapers and used Google NLP API to construct a social media analytics tool for comments clustering, influencers' scoring, and more."
        ],
        "img": grupodot
      },
      { "id": 6,
        "title": "Junior Data Scientist",
        "company": "Young & Rubicam",
        "dates": "Jul 2018 - Oct 2018",
        "location": "Bogotá, CO",
        "description": [
          "Automated a Machine Learning based tool to measure social media success using Python and Heroku, reducing manual tasks by 85%."
        ],
        "img": yr
      },
      { "id": 7,
        "title": "Intern at IBM's Global Entrepreneur Program",
        "company": "IBM",
        "dates": "Jan 2018 – Jun 2018",
        "location": "Bogotá, CO",
        "description": [
          "Designed a data science workshop given to more than 150 entrepreneurs, Master students and undergraduates.",
          "Recruited disruptive technology-based startups; identified IBM Cloud technologies to solve business needs."
        ],
        "img": ibm
      },
      { "id": 8,
        "title": "Exchange Program, Electrical Engineering",
        "company": "Universidad Politécnica de Madrid",
        "dates": "2016 – 2017",
        "location": "Madrid, ES",
        "description": [
          "Completed a 6-month study abroad program as part of undergraduate studies."
        ],
        "img": poli
      },
      { "id": 9,
        "title": "Bachelor of Science (BS), Electrical Engineering, GPA: 4.1/5.0",
        "company": "Universidad de Los Andes",
        "dates": "2013 – 2018",
        "location": "Bogotá, CO",
        "description": [
          "Coursework highlights: Intelligent Analysis of Signals and Systems, Signals, Optimization"
        ],
        "img": uniandes
      }
    ]
  )

  return (
    <section id = 'About'>
      <div className='container about__container' data-aos="fade-up">
      <h2>About</h2>
      <div className="about__intro-wrapper">
        <p className="about__intro">
          I’m a Data Scientist at Microsoft Azure Core, where I develop machine learning and simulation solutions to help Azure scale seamlessly. I hold a Master’s in Data Science from Columbia University and a Bachelor’s in Electronic Engineering from Universidad de Los Andes. My work spans industry and research, with projects in cloud infrastructure, healthcare, telecom, and oil & gas, addressing problems through machine and deep learning.
        </p>
        <p className="about__intro">
          My research interests include self-supervised learning, multimodal learning, and biomedicine. I’ve led research in both academic and industry settings, including publishing work on multimodal deep learning for protein function prediction. I always enjoy connecting with others, whether for collaboration, mentorship, or new ideas. Feel free to reach out!
        </p>
      </div>
      <Timeline experiences={experienceList}/>
      </div>
    </section>
  )
}
