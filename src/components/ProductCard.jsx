import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MessageSquare, ExternalLink, X, Check } from 'lucide-react';
import { PRODUCT_IMAGES, FALLBACK_PRODUCT_IMAGE } from '../services/productImages';

export default function ProductCard({ product, index = 0 }) {
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Close on Escape & Lock background body scroll
  useEffect(() => {
    if (!showModal) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  const phone = '919876543210';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hello Sree Ganesh Lingha! I am interested in getting a quote/sample for "${product.name}". Please provide details regarding bulk pricing and minimum order quantity.`
  )}`;

  // Retrieve curated image by name or id, or prioritize direct product.image_url
  const curated = PRODUCT_IMAGES[product.name] || PRODUCT_IMAGES[product.id] || {
    url: product.image_url || FALLBACK_PRODUCT_IMAGE,
    alt: product.name
  };

  const finalImageUrl = imageError 
    ? FALLBACK_PRODUCT_IMAGE 
    : (product.image_url || curated.url);

  return (
    <>
      <div
        className="premium-product-card"
        style={{
          animationDelay: `${Math.min(index * 60, 600)}ms`
        }}
      >
        {/* Image Container with Smooth Zoom on Hover */}
        <div className="product-image-container">
          {/* Skeleton placeholder while image loads */}
          {!imageLoaded && (
            <div className="skeleton-image-placeholder" />
          )}

          <img
            src={finalImageUrl}
            alt={curated.alt || product.name}
            className={`product-card-img ${imageLoaded ? 'loaded' : 'loading'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />

          <span className="product-category-chip">
            {product.category || 'Stickers'}
          </span>
        </div>

        {/* Content Section */}
        <div className="product-card-content">
          <h3 className="product-card-title">
            {product.name}
          </h3>

          <p className="product-card-description">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="product-card-actions">
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-secondary product-btn"
              aria-label={`View details for ${product.name}`}
            >
              <ExternalLink size={14} /> View Details
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp product-btn"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <MessageSquare size={14} /> Enquire Now
            </a>
          </div>
        </div>
      </div>

      {/* Details Modal mounted to document.body via Portal */}
      {showModal && typeof document !== 'undefined' && createPortal(
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="modal-image-wrapper">
              <img
                src={finalImageUrl}
                alt={curated.alt || product.name}
                className="modal-img"
              />
            </div>

            <div className="modal-body">
              <span className="badge" style={{ marginBottom: '10px' }}>
                {product.category}
              </span>
              <h2 className="modal-title">{product.name}</h2>
              <p className="modal-description">{product.description}</p>

              <div className="modal-features">
                <div className="modal-feature-item">
                  <Check size={16} color="#2563eb" /> Custom shapes, contours & kiss-cut sheets
                </div>
                <div className="modal-feature-item">
                  <Check size={16} color="#2563eb" /> High-volume production & rapid sample prototyping
                </div>
                <div className="modal-feature-item">
                  <Check size={16} color="#2563eb" /> Non-toxic, wash-durable, and tested adhesive bonds
                </div>
                <div className="modal-feature-item">
                  <Check size={16} color="#2563eb" /> Direct manufacturer pricing & reliable dispatch
                </div>
              </div>

              <div className="modal-actions">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{
                    flex: 1,
                    height: '42px',
                    padding: '0 16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxSizing: 'border-box'
                  }}
                >
                  <MessageSquare size={16} /> Enquire on WhatsApp
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-secondary"
                  style={{
                    height: '42px',
                    padding: '0 22px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
