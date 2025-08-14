import React from 'react';
import '../../components/Card.css';
import Card from '../../components/Card';
import './Publications.css';

import protnoteImg from '../../assets/protnote.png';
import fewshotImg from '../../assets/fewshot.png';
import dayhoffAtlasImg from '../../assets/dayhoff-atlas.png';
import { sortByDateDesc } from '../../utils/sortByDate';

const publications = [
  {
    image: dayhoffAtlasImg,
    date: 'July, 2025',
    title: 'The Dayhoff Atlas: scaling sequence diversity improves protein design',
    description: `The Dayhoff Atlas provides the largest open dataset of natural proteins (GigaRef) and synthetic proteins (BackboneRef), along with protein language models that achieve state-of-the-art performance in protein design and expression.`,
    paperLink: 'https://www.biorxiv.org/content/10.1101/2025.07.21.665991v1',
    githubLink: 'https://github.com/microsoft/dayhoff',
    dataLink: 'https://zenodo.org/records/15265289',
    huggingfaceLink: 'https://huggingface.co/collections/microsoft/dayhoff-atlas-6866d679465a2685b06ee969',
    authors: [
      { name: 'Kevin K. Yang', link: 'https://yangkky.github.io/' },
      { name: 'Sarah Alamdari', link: 'https://www.sarahalamdari.com/' },
      { name: 'Alex J. Lee',link: 'https://www.linkedin.com/in/alex-lee-ucsf/' },
      { name: 'Kaeli Kaymak-Loveless', link: 'https://www.linkedin.com/in/kaeli-kaymak-loveless-b54725214/' },
      { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
      { name: 'Garyk Brixi', link: 'https://www.linkedin.com/in/garykbrixi/' },
      { name: 'Carles Domingo-Enrich', link: 'https://cdenrich.github.io/' },
      { name: 'Chentong Wang' },
      { name: 'Suyue Lyu',link:'https://www.linkedin.com/in/suyue-lyu-9b4657171/' },
      { name: 'Nicolo Fusi',link: 'http://nicolofusi.com/' },
      { name: 'Neil Tenenholtz',link:'https://www.linkedin.com/in/neil-tenenholtz/' },
      { name: 'Ava P. Amini', link: 'https://avaamini.com' }
    ],
    venue: { name: 'preprint @ bioRxiv' },
    tags: [
      { label: 'Microsoft Blog', link: 'https://www.microsoft.com/en-us/research/articles/the-dayhoff-atlas/' }
    ]
  },
  {
    image: protnoteImg,
    date: 'May, 2025',
    title: 'ProtNote: a multimodal method for protein–function annotation',
    description: `ProtNote is a multimodal deep learning model that leverages free-form text to enable both supervised and zero-shot protein function prediction`,
    paperLink: 'https://doi.org/10.1093/bioinformatics/btaf170',
    githubLink: 'https://github.com/microsoft/protnote',
    authors: [
      { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
      { name: 'Nathaniel Corley', link: 'https://github.com/nscorley' },
      { name: 'Sarah Alamdari', link: 'https://www.sarahalamdari.com/'},
      { name: 'Kevin K. Yang', link: 'https://yangkky.github.io/'},
      { name: 'Ava P. Amini', link: 'https://avaamini.com' }
    ],
    venue: { name: 'Bioinformatics' },
    tags: [
      { label: 'On LinkedIn', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7254992723844218881/' },
      { label: 'On X', link: 'https://x.com/avapamini/status/1850936089042891149?t=7s7F04N6REHxFePo3ffEBg&s=19' },
      // { label: 'MIT News', type: 'news', link: 'https://news.mit.edu' },
      // { label: 'MIT Podcast', type: 'news' }
      // { label: 'Oral @UniReps', type: 'spotlight' },
      // { label: 'Honorable Mention', type: 'honorable' }
    ]
  },
  {
    image: fewshotImg,
    title: 'Exploring Few-Shot Performance of Self-Supervised Visual Representations',
    date: 'December, 2021',
    description: `This work compares self-supervised learning methods, finding SimCLR performs best among them, though supervised learning still leads—likely due to the need for large-scale pretraining in self-supervised approaches.`,
    paperLink: 'https://ieeexplore.ieee.org/document/10767558',
    authors: [
      { name: 'Ved Prakash Upadhyay', isEqualContribution: true},
      { name: 'Shivani Modi', link: 'https://www.linkedin.com/in/modishivani/', isEqualContribution: true},
      { name: 'Saloni Ajay Gupta', link: 'https://sg.linkedin.com/in/saloni-gupta-ajay-kumar', isEqualContribution: true},
      { name: 'Samir Char', isMe: true, link: 'https://samirchar.com', isEqualContribution: true}
    ],
    venue: { name: 'EETNC / IEEE' },
    tags: [
      { label: 'Class Project @CU' },
      // { label: 'MIT News', type: 'news', link: 'https://news.mit.edu' },
      // { label: 'MIT Podcast', type: 'news' }
      // { label: 'Oral @UniReps', type: 'spotlight' },
      // { label: 'Honorable Mention', type: 'honorable' }
    ]
  }

];
// const publications = [
  // {
  //   image: protnoteImg,
  //   title: 'In-Context Symmetries: Self-Supervised Learning through Contextual World Models',
  //   description: `Oral Presentation (top 4) at NeurIPS'24 SSL`,
  //   paperLink: 'https://example.com/paper1',
  //   githubLink: 'https://github.com/example/paper1',
  //   authors: [
  //     { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
  //     { name: 'Chenyu Wang', link: 'https://example.com/chenyu' },
  //     { name: 'Yifei Wang', link: 'https://example.com/yifei', isEqualContribution: true },
  //     { name: 'Tommi Jaakkola' },
  //     { name: 'Stefanie Jegelka' }
  //   ],
  //   venue: { name: 'NeurIPS 2024' },
  //   tags: [
  //     // { label: 'Oral @SSL', type: 'spotlight' },
  //     // { label: 'MIT News', type: 'news', link: 'https://news.mit.edu' },
  //     // { label: 'MIT Podcast', type: 'news' }
  //     // { label: 'Oral @UniReps', type: 'spotlight' },
  //     // { label: 'Honorable Mention', type: 'honorable' }
  //   ]
  // },
  // {
  //   image: protnoteImg,
  //   title: 'An Information Criterion for Controlled Disentanglement of Multimodal Data',
  //   description: `Oral Presentation (top 4) and the Honorable Mention Award at NeurIPS'24 UniReps`,
  //   paperLink: 'https://example.com/paper2',
  //   githubLink: 'https://github.com/example/paper2',
  //   authors: [
  //     { name: 'Chenyu Wang', link: 'https://example.com/chenyu' },
  //     { name: 'Samir Char', isMe: true, isEqualContribution: true, link: 'https://samirchar.com' },
  //     { name: 'Xinyi Zhang' },
  //     { name: 'Sana Tonekaboni' },
  //     { name: 'Stefanie Jegelka' },
  //     { name: 'Tommi Jaakkola' },
  //     { name: 'Caroline Uhler' }
  //   ],
  //   venue: { name: 'ICLR 2025' },
  //   tags: [
  //     { label: 'Oral @UniReps', type: 'spotlight' },
  //     { label: 'Honorable Mention', type: 'honorable' }
  //   ]
  // },
  // {
  //   image: protnoteImg,
  //   title: 'Protein Function Prediction',
  //   description: `Developed ProtNote for protein-function annotation\nZero-shot learning for novel functions\nPublished in top bioinformatics journal\nOpen-source implementation`,
  //   paperLink: 'https://example.com/paper3',
  //   githubLink: 'https://github.com/example/paper3',
  //   authors: [
  //     { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
  //     { name: 'Jane Doe' }
  //   ],
  //   venue: { name: 'Bioinformatics Journal' },
  //   tags: [
  //     { label: 'Featured', type: 'news' }
  //   ]
  // },
  // {
  //   image: protnoteImg,
  //   title: 'Genomics Data Analysis',
  //   description: `Large-scale genomics data mining\nAutomated annotation pipeline\nCollaboration with international research labs\nResults presented at major conference`,
  //   paperLink: 'https://example.com/paper4',
  //   githubLink: 'https://github.com/example/paper4',
  //   authors: [
  //     { name: 'Samir Char', isMe: true, link: 'https://samirchar.com' },
  //     { name: 'Collaborator A' }
  //   ],
  //   venue: { name: 'Major Conference' },
  //   tags: []
  // },
// ];

export default function Publications() {
  const sortedPublications = sortByDateDesc(publications);
  return (
    <section id='Publications'>
      <div className='container publications__container' data-aos="fade-up">
        <h2>Publications</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {sortedPublications.map((pub, idx) => (
            <Card
              key={idx}
              image={pub.image}
              title={pub.title}
              description={pub.description}
              paperLink={pub.paperLink}
              githubLink={pub.githubLink}
              dataLink={pub.dataLink}
              huggingfaceLink={pub.huggingfaceLink}
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