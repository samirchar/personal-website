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
        "title": "Applied Scientist 2 – Azure Core, Capacity",
        "company": "Microsoft",
        "dates": "Jul 2022 - Present",
        "location": "Boston, MA",
        "description": [
          "Created a hierarchical forecast and Monte Carlo simulation to detect customer capacity risks over a six-month horizon. Tool deployed across 65 regions, identifying 400K+ vCore gaps that drove procurement of new servers to mitigate global risk.",
          "Built an ML model to predict the additional servers required in a data center to avoid capacity-related failures.",
          "Applied Double ML to estimate the causal effect of a customer management program. Found that managed customers have ~20% less quota backlog and ~0.3% lower capacity failure rate.",
          "Developed a recommendation system to prioritize global quota requests, enabling triage of over 2M vCore requests to date.",
          "Improved XGBoost model to forecast Azure global quota requests, helping allocate capacity across Data Centers globally.",
          "Developed a forecasting ensemble (ARIMA, ETS, regression) for Azure support tickets, reducing Mean Absolute Percentage Error (MAPE) by 20% (absolute) from baseline. Used for estimating annual staffing and budget (~$40M/year)."
        ],
        "img": msft
      },
      { "id": 2,
        "title": "Master of Science (MS), Data Science, GPA: 4.08/4",
        "company": "Columbia University in the City of New York",
        "dates": "2021 – 2022",
        "location": "New York, NY",
        "description": [
          "Coursework highlights: Machine Learning, Deep Learning, Advanced Deep Learning, Natural Language Processing, Reinforcement Learning"
        ],
        "img": columbia
      },
      { "id": 3,
        "title": "Applied Scientist Intern – Azure Core, Capacity",
        "company": "Microsoft",
        "dates": "Jul 2021 – Sep 2021",
        "location": "New York, NY",
        "description": [
          "Improved Azure quota forecasting using ML. Used clustering to identify workload and churn patterns of Azure Data Explorer"
        ],
        "img": msft
      },
      { "id": 4,
        "title": "Semi-Senior Applied Scientist",
        "company": "Mercado Libre",
        "dates": "Jun 2020 - Dec 2020",
        "location": "Bogotá, CO",
        "description": [
          "Improved gradient-boosting demand forecasting across multiple warehouses, increasing prediction accuracy by 5%; cooperated with 10 applied scientists to ensure algorithms satisfy commercial requirements."
        ],
        "img": meli
      },
      { "id": 5,
        "title": "Applied Scientist",
        "company": "Grupodot",
        "dates": "Oct 2018 – Jun 2020",
        "location": "Bogotá, CO",
        "description": [
          "Built a Long Short-Term Memory (LSTM) model forecasting fuel sales for 200+ gas stations of a major energy company, achieving an 11% MAPE improvement (absolute) over the client’s model",
          "Created an XGBoost churn model for Latin America's largest telecom; attained a 5.2 uplift on 200K monthly customers.",
          "Developed a credit default prediction model for a major Colombian bank to secure resources in case of client default.",
          "Created Python web scrapers and used Google NLP API to construct a social media analytics tool for comments clustering, influencers' scoring, and more."
        ],
        "img": grupodot
      },
      { "id": 6,
        "title": "Junior Applied Scientist",
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
          I’m a Applied Scientist at Microsoft Azure Core, where I develop machine learning and simulation solutions to help Azure scale seamlessly. I hold a Master’s in Data Science from Columbia University and a Bachelor’s in Electronic Engineering from Universidad de Los Andes. My work spans industry and research, with projects in cloud infrastructure, healthcare, telecom, and oil & gas, addressing problems through machine and deep learning.
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
