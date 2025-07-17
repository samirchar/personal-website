import React from 'react';
import '../../components/Card.css';
import Card from '../../components/Card';
import './Projects.css';

import proteinfertorchImg from '../../assets/proteinfertorch.jpg';
import thesisImg from '../../assets/thesis.png';
import deepimdbImg from '../../assets/deepimdb.png';



const projects = [
  {
    image: proteinfertorchImg,
    title: 'ProteInferTorch',
    date:'December, 2024',
    description: (
      <>
        An unofficial PyTorch implementation of{' '}
        <a href="https://github.com/google-deepmind/proteinfer" target="_blank" rel="noopener noreferrer">
          ProteInfer
        </a>
        , a state-of-the-art protein function prediction model originally built in TensorFlow 1.x.
      </>
    ),
    githubLink: 'https://github.com/samirchar/proteinfertorch',
    authors: [
      { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' }
    ],
    tags: [
      // { label: 'Oral @SSL', type: 'spotlight' },
      // { label: 'MIT News', type: 'news', link: 'https://news.mit.edu' },
      // { label: 'MIT Podcast', type: 'news' }
      // { label: 'Oral @UniReps', type: 'spotlight' },
      // { label: 'Honorable Mention', type: 'honorable' }
    ]
  },

  {
    image: deepimdbImg,
    title: 'DeepIMDB',
    date:'April, 2022',
    description: `DeepIMDb is a multimodal project designed to predict a movie’s rating and revenue using data available before its release – such as the title, synopsis, runtime, and posters. `,
    slidesLink: 'https://docs.google.com/presentation/d/116cbm5rNAYz-KGVpehTBp8dWvl5bVAzp/edit?usp=sharing&ouid=106783910031034658668&rtpof=true&sd=true',
    githubLink: 'https://github.com/samirchar/DeepIMDB',
    authors: [
      { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
      { name: 'Shikha Asrani', link: 'https://www.linkedin.com/in/sasrani/'},
      { name: 'Srujan Esanakarra'},
    ],
    tags: [
      {'label':'Class Project @Columbia University'},
      // { label: 'Oral @SSL', type: 'spotlight' },
      // { label: 'MIT News', type: 'news', link: 'https://news.mit.edu' },
      // { label: 'MIT Podcast', type: 'news' }
      // { label: 'Oral @UniReps', type: 'spotlight' },
      // { label: 'Honorable Mention', type: 'honorable' }
    ]
  },
  
  {
    image: thesisImg,
    title: 'Machine Learning Techniques To Prerdict Hostital Length of Stay (LOS) At The Time Of Patient Admission',
    date:'December, 2017',
    description: `How long will a patient stay if admitted? This fundamental uncertainty challenges hospital resource planning. Using data from the Colombian Ministry of Health, I built an XGBoost model to predict patient Length of Stay (LOS) as short, medium, or long. It outperformed hospital physicians by 15% in absolute accuracy.`,
    pdfLink: 'https://repositorio.uniandes.edu.co/server/api/core/bitstreams/58a420b8-3025-45ab-9c6c-00482c06b070/content',
    authors: [
      { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' }
    ],
    venue: { name: 'Universidad de Los Andes' },
    tags: [
      {'label':'Undergraduate Thesis'}
      // { label: 'Oral @SSL', type: 'spotlight' },
      // { label: 'MIT News', type: 'news', link: 'https://news.mit.edu' },
      // { label: 'MIT Podcast', type: 'news' }
      // { label: 'Oral @UniReps', type: 'spotlight' },
      // { label: 'Honorable Mention', type: 'honorable' }
    ]
  }
]

//   {
//     image: protnoteImg,
//     title: 'An Information Criterion for Controlled Disentanglement of Multimodal Data',
//     description: `Oral Presentation (top 4) and the Honorable Mention Award at NeurIPS'24 UniReps`,
//     paperLink: 'https://example.com/paper2',
//     githubLink: 'https://github.com/example/paper2',
//     authors: [
//       { name: 'Chenyu Wang', link: 'https://example.com/chenyu' },
//       { name: 'Samir Char', isMe: true, isEqualContribution: true, link: 'https://samirchar.com' },
//       { name: 'Xinyi Zhang' },
//       { name: 'Sana Tonekaboni' },
//       { name: 'Stefanie Jegelka' },
//       { name: 'Tommi Jaakkola' },
//       { name: 'Caroline Uhler' }
//     ],
//     venue: { name: 'ICLR 2025' },
//     tags: [
//       { label: 'Oral @UniReps', type: 'spotlight' },
//       { label: 'Honorable Mention', type: 'honorable' }
//     ]
//   },
//   {
//     image: protnoteImg,
//     title: 'Protein Function Prediction',
//     description: `Developed ProtNote for protein-function annotation\nZero-shot learning for novel functions\nPublished in top bioinformatics journal\nOpen-source implementation`,
//     paperLink: 'https://example.com/paper3',
//     githubLink: 'https://github.com/example/paper3',
//     authors: [
//       { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
//       { name: 'Jane Doe' }
//     ],
//     venue: { name: 'Bioinformatics Journal' },
//     tags: [
//       { label: 'Featured', type: 'news' }
//     ]
//   },
//   {
//     image: protnoteImg,
//     title: 'Genomics Data Analysis',
//     description: `Large-scale genomics data mining\nAutomated annotation pipeline\nCollaboration with international research labs\nResults presented at major conference`,
//     paperLink: 'https://example.com/paper4',
//     githubLink: 'https://github.com/example/paper4',
//     authors: [
//       { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
//       { name: 'Collaborator A' }
//     ],
//     venue: { name: 'Major Conference' },
//     tags: []
//   },
// ];

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
              slidesLink={pub.slidesLink}
              pdfLink={pub.pdfLink}
              authors={pub.authors}
              venue={pub.venue}
              tags={pub.tags}
              date={pub.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 