import React from 'react'
import './Projects.css'
import Publications from '../publications/Publications'
import Card from '../../components/Card'
import protnoteImg from '../../assets/protnote.png'

const projects = [
  {
    image: protnoteImg,
    title: 'Personal Website',
    description: `• Built with React and Firebase\n• Responsive design\n• Features blog, portfolio, and contact form\n• Deployed on Netlify`,
    paperLink: 'https://example.com/project1',
    githubLink: 'https://github.com/example/project1',
  },
  {
    image: protnoteImg,
    title: 'Task Manager App',
    description: `• Full-stack MERN application\n• Real-time collaboration\n• User authentication and roles\n• RESTful API integration`,
    paperLink: 'https://example.com/project2',
    githubLink: 'https://github.com/example/project2',
  },
  {
    image: protnoteImg,
    title: 'Data Visualization Dashboard',
    description: `• Interactive charts and graphs\n• D3.js and Chart.js integration\n• Customizable widgets\n• Export and share reports`,
    paperLink: 'https://example.com/project3',
    githubLink: 'https://github.com/example/project3',
  },
  {
    image: protnoteImg,
    title: 'E-commerce Platform',
    description: `• Scalable product catalog\n• Secure payment processing\n• Admin dashboard\n• Customer reviews and ratings`,
    paperLink: 'https://example.com/project4',
    githubLink: 'https://github.com/example/project4',
  },
]

export default function Projects() {
  return (
    <>
      <Publications />
      <section id='Projects'>
        <div className='container projects__container' data-aos="fade-up">
          <h2>Projects</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {projects.map((proj, idx) => (
              <Card
                key={idx}
                image={proj.image}
                title={proj.title}
                description={proj.description}
                paperLink={proj.paperLink}
                githubLink={proj.githubLink}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
