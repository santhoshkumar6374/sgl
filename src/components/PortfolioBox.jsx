import { useState } from 'react';
import { ExternalLink, MessageSquare, Eye } from 'lucide-react';

export default function PortfolioBox({ item, index = 0, onOpenModal }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const phone = '919876543210';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hello Sree Ganesh Lingha! I saw your portfolio showcase "${item.title}". I would like to inquire about similar custom manufacturing for my brand.`
  )}`;

  return (
    <div
      className={`portfolio-box-card ${item.featured ? 'box-featured' : ''}`}
      style={{ animationDelay: `${Math.min(index * 50, 500)}ms` }}
    >
      {/* Box Image with Smooth Zoom and Inner Gloss */}
      <div className="portfolio-box-image-wrap">
        {!imageLoaded && <div className="skeleton-image-placeholder" />}
        <img
          src={item.image_url}
          alt={item.title}
          className={`portfolio-box-img ${imageLoaded ? 'loaded' : 'loading'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Category Pill Tag */}
        <span className="portfolio-box-badge">
          {item.category}
        </span>

        {/* Hover Quick Overlay on Image */}
        <div className="portfolio-box-overlay">
          <button
            onClick={() => onOpenModal(item)}
            className="portfolio-quick-view-btn"
            aria-label={`View ${item.title}`}
          >
            <Eye size={18} /> View Project
          </button>
        </div>
      </div>

      {/* Box Content Section */}
      <div className="portfolio-box-content">
        <h3 className="portfolio-box-title">
          {item.title}
        </h3>

        <p className="portfolio-box-desc">
          {item.description}
        </p>

        {/* Feature Tags */}
        {item.tags && (
          <div className="portfolio-tag-cloud">
            {item.tags.map((tag, i) => (
              <span key={i} className="portfolio-mini-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Card Footer Actions */}
        <div className="portfolio-box-actions">
          <button
            onClick={() => onOpenModal(item)}
            className="btn btn-secondary portfolio-action-btn"
          >
            <ExternalLink size={14} /> Project Details
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp portfolio-action-btn"
          >
            <MessageSquare size={14} /> Enquire
          </a>
        </div>
      </div>
    </div>
  );
}
