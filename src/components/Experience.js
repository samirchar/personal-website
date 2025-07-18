import React from 'react';
import './Experience.css';
import ReactMarkdown from 'react-markdown';

export default function Experience({ title, description, date, isOpen, onClick, idx }) {
  return (
    <div className="experience">
      <button
        className="experience__title"
        aria-expanded={isOpen}
        aria-controls={`experience-desc-${idx}`}
        id={`experience-title-${idx}`}
        onClick={onClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
          <span>{title}</span>
          {date && (
            <div className="experience-date">{date}</div>
          )}
        </div>
        <span className={`chevron${isOpen ? ' open' : ''}`} aria-hidden="true">▼</span>
      </button>
      <div
        className={`experience__desc${isOpen ? ' open' : ''}`}
        id={`experience-desc-${idx}`}
        role="region"
        aria-labelledby={`experience-title-${idx}`}
        style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)' }}
      >
        {isOpen && <div><ReactMarkdown>{description}</ReactMarkdown></div>}
      </div>
    </div>
  );
} 