import React from 'react';
import '../../components/Card.css';
import Card from '../../components/Card';
import './Projects.css';

import protnoteImg from '../../assets/protnote.png';

const projects = [
  {
    image: protnoteImg,
    title: 'In-Context Symmetries: Self-Supervised Learning through Contextual World Models',
    description: `Oral Presentation (top 4) at NeurIPS'24 SSL`,
    paperLink: 'https://example.com/paper1',
    githubLink: 'https://github.com/example/paper1',
    authors: [
      { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
      { name: 'Chenyu Wang', link: 'https://example.com/chenyu' },
      { name: 'Yifei Wang', link: 'https://example.com/yifei', isEqualContribution: true },
      { name: 'Tommi Jaakkola' },
      { name: 'Stefanie Jegelka' }
    ],
    venue: { name: 'NeurIPS 2024' },
    tags: [
      // { label: 'Oral @SSL', type: 'spotlight' },
      // { label: 'MIT News', type: 'news', link: 'https://news.mit.edu' },
      // { label: 'MIT Podcast', type: 'news' }
      // { label: 'Oral @UniReps', type: 'spotlight' },
      // { label: 'Honorable Mention', type: 'honorable' }
    ]
  },
  {
    image: protnoteImg,
    title: 'An Information Criterion for Controlled Disentanglement of Multimodal Data',
    description: `Oral Presentation (top 4) and the Honorable Mention Award at NeurIPS'24 UniReps`,
    paperLink: 'https://example.com/paper2',
    githubLink: 'https://github.com/example/paper2',
    authors: [
      { name: 'Chenyu Wang', link: 'https://example.com/chenyu' },
      { name: 'Samir Char', isMe: true, isEqualContribution: true, link: 'https://samirchar.com' },
      { name: 'Xinyi Zhang' },
      { name: 'Sana Tonekaboni' },
      { name: 'Stefanie Jegelka' },
      { name: 'Tommi Jaakkola' },
      { name: 'Caroline Uhler' }
    ],
    venue: { name: 'ICLR 2025' },
    tags: [
      { label: 'Oral @UniReps', type: 'spotlight' },
      { label: 'Honorable Mention', type: 'honorable' }
    ]
  },
  {
    image: protnoteImg,
    title: 'Protein Function Prediction',
    description: `Developed ProtNote for protein-function annotation\nZero-shot learning for novel functions\nPublished in top bioinformatics journal\nOpen-source implementation`,
    paperLink: 'https://example.com/paper3',
    githubLink: 'https://github.com/example/paper3',
    authors: [
      { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
      { name: 'Jane Doe' }
    ],
    venue: { name: 'Bioinformatics Journal' },
    tags: [
      { label: 'Featured', type: 'news' }
    ]
  },
  {
    image: protnoteImg,
    title: 'Genomics Data Analysis',
    description: `Large-scale genomics data mining\nAutomated annotation pipeline\nCollaboration with international research labs\nResults presented at major conference`,
    paperLink: 'https://example.com/paper4',
    githubLink: 'https://github.com/example/paper4',
    authors: [
      { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
      { name: 'Collaborator A' }
    ],
    venue: { name: 'Major Conference' },
    tags: []
  },
];

export default function Projects() {
  return (
    <section id='Projects'>
      <div className='container projects__container' data-aos="fade-up">
        <h2>Projects</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {projects.map((pub, idx) => (
            <Card
              key={idx}
              image={pub.image}
              title={pub.title}
              description={pub.description}
              paperLink={pub.paperLink}
              githubLink={pub.githubLink}
              authors={pub.authors}
              venue={pub.venue}
              tags={pub.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 