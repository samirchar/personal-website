import React, { useState } from "react";
import Experience from '../../components/Experience';
import "./Outreach.css";

const outreachActivities = [
  {
    title: "Mock Interviews",
    date: "May, 2024",
    description: "Gave mock interviews to students from my master's program."
  },
  {
    title: "Guest Lecture",
    date: "March, 2024",
    description: "Lectured on one of my papers to a group of students from my undergraduate alma mater."
  },
  {
    title: "Bone Marrow Kit Assembly",
    date: "January, 2024",
    description: "Assembled bone marrow transplant kits."
  },
  {
    title: "Tufts University Talk",
    date: "October, 2023",
    description: "Gave a talk to Tufts University's Hispanic and Latinx Community about Microsoft's hiring process, mentoring, and guidance."
  }
];

export default function Outreach() {
  const [openIndexes, setOpenIndexes] = useState([]);
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
          {outreachActivities.map((activity, idx) => (
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