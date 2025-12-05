import React, { useState } from "react";
import Experience from '../../components/Experience';
import "./Outreach.css";
import { sortByDateDesc } from '../../utils/sortByDate';

const outreachActivities = [
  {
    title: "Mock Microsoft Interviews for Columbia Data Science Graduates",
    date: "May, 2025",
    description: `Conducted mock technical and behavioral interviews for Columbia University’s M.S. in Data Science students, simulating real Microsoft interview scenarios. Focused on data science and machine learning roles, offering in-depth feedback to help students strengthen technical skills and boost confidence.`
  },
  {
    title: "Team for Kids Foundation – Brooklyn Half Marathon",
    date: "May, 2025",
    description: `Ran the Brooklyn Half Marathon as part of the Team for Kids Foundation, raising $1,010 to support programs that combat childhood obesity and promote youth fitness.`
  },
  {
    title: "NMDP Foundation – Bone Marrow Donor Kits",
    date: "January, 2025",
    description: `Assembled bone-marrow donor kits for the NMDP Foundation to support transplant matching and expand the pool of potential life-saving donors.`
  },
  {
    title: "National Federation of the Blind – Sensory Kits for Children",
    date: "May, 2024",
    description: `Helped create 1,000 sensory kits for visually-impaired children through the National Federation of the Blind, providing accessible educational and play materials.`
  },
  {
    title: "Lectures on Self-Supervised Learning & Object Detection – Columbia University Seminar",
    date: "March, 2022",
    description: `As part of the [“Advanced Topics in Deep Learning”](https://www.advtopicsindeeplearning.com/) seminar course at Columbia University taught by [Professor Peter Belhumeur](https://www.peternbelhumeur.com/), I volunteered to give lectures on self-supervised learning models (BERT, RoBERTa, DistilBERT) and object detection architectures (R-CNN, Fast R-CNN, Faster R-CNN). The course focused on student-led presentations and discussions of cutting-edge research papers in deep learning.`
  },
  {
    title: "Microsoft Hispanic & Latinx Group (HOLA)",
    date: "January 2024 – Present",
    description: `Support and expand the Hispanic and Latinx community in STEM through mentorship, outreach, and professional development initiatives.

**Highlights:**

- Invited by Tufts [SOLES (Society of Latinx Engineers and Scientists)](https://sites.tufts.edu/soles/), I spoke at a Microsoft HOLA event to discuss careers in tech. Shared insights on the hiring process, interview prep, and career growth in data science and AI, offering mentorship to engineering students.

- Reviewed Hispanic and Latinx student applications for a Microsoft-sponsored college scholarship.`
  },
  {
    title: "Pro-bono Mentor",
    date: "June 2021 – Present",
    description: `Provide guidance to students and early-career professionals pursuing ML careers.

**Highlights:**

- Microsoft Give Campaign (Oct 2025) – launched initiative pairing 1:1 mentorship session with donations; mentored.`
  },
  {
    title: "Guest Lectures on ProtNote – Universidad de Los Andes (Bogota, Colombia)",
    date: "June, 2025",
    description: `Delivered two guest lectures for the Masters in AI program at Universidad de Los Andes. Covered my published work on ProtNote, explained its methodology and significance, and introduced fundamentals of protein biology. [LinkedIn post 1](https://www.linkedin.com/posts/samir-char_protnote-a-multimodal-method-for-protein-function-activity-7279617082684502016-S7YO?utm_source=share&utm_medium=member_android&rcm=ACoAACGZWS4BnKI9M8tEWVOI-fnMp-tQ9nJPM6Y), [LinkedIn post 2](https://www.linkedin.com/posts/samir-char_it-was-a-pleasure-to-give-another-guest-lecture-activity-7331839512332939264-eCg6?utm_source=share&utm_medium=member_android&rcm=ACoAACGZWS4BnKI9M8tEWVOI-fnMp-tQ9nJPM6Y)`
  },
];

export default function Outreach() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const sortedOutreach = sortByDateDesc(outreachActivities);
  const toggleIndex = idx => {
    setOpenIndexes(prev =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };
  return (
    <section id="Outreach">
      <div className="container outreach__container" data-aos="fade-up">
        <h2>Outreach</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {sortedOutreach.map((activity, idx) => (
            <Experience
              key={idx}
              title={activity.title}
              date={activity.date}
              description={activity.description}
              isOpen={openIndexes.includes(idx)}
              onClick={() => toggleIndex(idx)}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 