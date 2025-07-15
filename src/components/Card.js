import React from "react";
import "./Card.css";

const Card = ({ image, title, description, paperLink, githubLink }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt="Card visual" className="card-image" />
      </div>
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        <p className="card-description">{description}</p>
        <div className="card-icons">
          {paperLink && (
            <a href={paperLink} target="_blank" rel="noopener noreferrer" className="card-icon" title="View Paper">
              {/* Paper SVG icon */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.828A2 2 0 0 0 18.414 8L14 3.586A2 2 0 0 0 12.586 3H7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 3.5V8a1 1 0 0 0 1 1h4.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-icon" title="View on GitHub">
              {/* GitHub SVG icon */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card; 