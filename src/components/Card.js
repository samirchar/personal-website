import React from "react";
import "./Card.css";
import { FaRegFilePdf } from "react-icons/fa6";
import { RiSlideshow2Line } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import { FaRegPlayCircle } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { SiHuggingface } from "react-icons/si";


// New props: authors (array), venue (object), tags (array)
const Card = ({ image, title, description, paperLink, githubLink, slidesLink, pdfLink, videoLink, dataLink, huggingfaceLink, authors = [], venue, tags = [], date }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt="Card visual" className="card-image" />
      </div>
      <div className="card-content">
        {/* Venue tag */}
        {venue && (
          <div className="card-venue-tag">{venue.name}</div>
        )}
        {/* Title */}
        {title && <h3 className="card-title">{title}</h3>}
        {/* Date */}
        {date && (
          <div className="card-date">
            {date}
          </div>
        )}
        {/* Authors */}
        {authors.length > 0 && (
          <div className="card-authors">
            {authors.map((author, idx) => (
              <span key={author.name}>
                {author.link ? (
                  <a
                    href={author.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-author${author.isMe ? " card-author-me" : ""}`}
                  >
                    <b style={{ fontWeight: author.isMe ? 700 : 400 }}>
                      {author.name}
                    </b>
                  </a>
                ) : (
                  <b style={{ fontWeight: author.isMe ? 700 : 400 }} className={author.isMe ? "card-author-me" : undefined}>
                    {author.name}
                  </b>
                )}
                {author.isEqualContribution && <sup>*</sup>}
                {idx < authors.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}
        {/* Tags */}
        {tags.length > 0 && (
          <div className="card-tags">
            {tags.filter(tag => tag.label !== 'Featured').map((tag, idx) => (
              <span className={`card-tag card-tag--minimal`} key={tag.label + idx}>
                {tag.link ? (
                  <a href={tag.link} target="_blank" rel="noopener noreferrer">{tag.label}</a>
                ) : (
                  tag.label
                )}
              </span>
            ))}
          </div>
        )}
        {/* Description */}
        <p className="card-description">{description}</p>
        {/* Icons */}
        <div className="card-icons">
          {paperLink && (
            <a href={paperLink} target="_blank" rel="noopener noreferrer" className="card-icon" data-tooltip-id="card-tooltip" data-tooltip-content="Paper">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.828A2 2 0 0 0 18.414 8L14 3.586A2 2 0 0 0 12.586 3H7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 3.5V8a1 1 0 0 0 1 1h4.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-icon" data-tooltip-id="card-tooltip" data-tooltip-content="GitHub">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            </a>
          )}
          {slidesLink && (
            <a href={slidesLink} target="_blank" rel="noopener noreferrer" className="card-icon" data-tooltip-id="card-tooltip" data-tooltip-content="Slides">
              <RiSlideshow2Line size={24} />
            </a>
          )}
          {pdfLink && (
            <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="card-icon" data-tooltip-id="card-tooltip" data-tooltip-content="PDF">
              <FaRegFilePdf size={24} />
            </a>
          )}
          {videoLink && (
            <a href={videoLink} target="_blank" rel="noopener noreferrer" className="card-icon" data-tooltip-id="card-tooltip" data-tooltip-content="Video">
              <FaRegPlayCircle size={24} />
            </a>
          )}
          {dataLink && (
            <a href={dataLink} target="_blank" rel="noopener noreferrer" className="card-icon" data-tooltip-id="card-tooltip" data-tooltip-content="Data">
              <CiDatabase size={24} />
            </a>
          )}
          {huggingfaceLink && (
            <a href={huggingfaceLink} target="_blank" rel="noopener noreferrer" className="card-icon" data-tooltip-id="card-tooltip" data-tooltip-content="HuggingFace">
              <SiHuggingface size={24} />
            </a>
          )}
        </div>
        <Tooltip id="card-tooltip" place="auto" effect="solid" offset={16} className="card-tooltip" style={{ fontSize: '0.65rem', padding: '0.18rem 0.45rem', borderRadius: '0.18rem' }} />
      </div>
    </div>
  );
};

export default Card; 