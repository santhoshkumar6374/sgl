import { useState } from 'react';
import { ExternalLink, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function MaterialCard({ material, onSelect, onEnquire, index = 0 }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80';
  const displayImage = imageError ? fallbackImage : (material.image || fallbackImage);

  return (
    <div
      className="material-card"
      style={{
        animationDelay: `${Math.min(index * 60, 600)}ms`
      }}
    >
      {/* Image Container with category chip */}
      <div className="material-card-img-wrap">
        {!imageLoaded && (
          <div className="skeleton-image-placeholder" />
        )}
        <img
          src={displayImage}
          alt={material.name}
          className={`material-card-img ${imageLoaded ? 'loaded' : 'loading'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
        <span className="material-category-chip">
          {material.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="material-card-content">
        <div className="material-card-header">
          <h3 className="material-card-title">{material.name}</h3>
        </div>

        <p className="material-card-summary">
          {material.summary}
        </p>

        {/* Key Properties Preview */}
        {material.properties && material.properties.length > 0 && (
          <div className="material-card-properties">
            {material.properties.slice(0, 2).map((prop, idx) => (
              <div key={idx} className="material-card-prop-item">
                <CheckCircle2 size={13} className="material-card-prop-icon" />
                <span>{prop}</span>
              </div>
            ))}
          </div>
        )}

        {/* Used In Products Pill Badges */}
        {material.usedInProducts && material.usedInProducts.length > 0 && (
          <div className="material-card-used-in">
            <span className="used-in-label">Used In:</span>
            <div className="used-in-tags">
              {material.usedInProducts.slice(0, 2).map((prod, idx) => (
                <span key={idx} className="used-in-pill">
                  {prod}
                </span>
              ))}
              {material.usedInProducts.length > 2 && (
                <span className="used-in-pill more">
                  +{material.usedInProducts.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Card Actions */}
        <div className="material-card-actions">
          <button
            type="button"
            onClick={() => onSelect(material)}
            className="btn btn-secondary material-btn-details"
            aria-label={`View full details of ${material.name}`}
          >
            <ExternalLink size={14} />
            <span>View Details</span>
          </button>

          <button
            type="button"
            onClick={() => onEnquire(material)}
            className="btn btn-primary material-btn-enquire"
            aria-label={`Enquire about ${material.name}`}
          >
            <MessageSquare size={14} />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}
