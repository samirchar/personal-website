import React from 'react';
import '../../components/Card.css';
import Card from '../../components/Card';
import './Publications.css';

import protnoteImg from '../../assets/protnote.png';

const publications = [
  {
    image: protnoteImg,
    title: 'AI in Healthcare',
    description: `• Explores the use of AI in medical diagnostics and treatment\n• Published at Columbia University\n• Includes real-world case studies\n• Open-source code and datasets available`,
    paperLink: 'https://example.com/paper1',
    githubLink: 'https://github.com/example/paper1',
  },
  {
    image: protnoteImg,
    title: 'Distributed Systems Research',
    description: `• Research on distributed systems\n• Presented at Uniandes\n• Focuses on scalability and reliability\n• Collaboration with international teams`,
    paperLink: 'https://example.com/paper2',
    githubLink: 'https://github.com/example/paper2',
  },
  {
    image: protnoteImg,
    title: 'Protein Function Prediction',
    description: `• Developed ProtNote for protein-function annotation\n• Zero-shot learning for novel functions\n• Published in top bioinformatics journal\n• Open-source implementation`,
    paperLink: 'https://example.com/paper3',
    githubLink: 'https://github.com/example/paper3',
  },
  {
    image: protnoteImg,
    title: 'Genomics Data Analysis',
    description: `• Large-scale genomics data mining\n• Automated annotation pipeline\n• Collaboration with international research labs\n• Results presented at major conference`,
    paperLink: 'https://example.com/paper4',
    githubLink: 'https://github.com/example/paper4',
  },
];

export default function Publications() {
  return (
    <section id='Publications'>
      <div className='container publications__container' data-aos="fade-up">
        <h2>Publications</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {publications.map((pub, idx) => (
            <Card
              key={idx}
              image={pub.image}
              title={pub.title}
              description={pub.description}
              paperLink={pub.paperLink}
              githubLink={pub.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 