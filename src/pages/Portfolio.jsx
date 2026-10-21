import { useState } from 'react';
import { createPortal } from 'react-dom';
import PortfolioBox from '../components/PortfolioBox';
import { PORTFOLIO_PROJECTS } from '../services/portfolioData';
import { Sparkles, X, MessageSquare, Check } from 'lucide-react';

export default function Portfolio() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const phone = '919876543210';

  return (
    <div className="portfolio-page-wrapper">
      {/* 1. Visually Appealing Portfolio Header */}
      <div className="page-header portfolio-hero-header">
        <div className="container">
          <span className="badge header-badge-anim">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Creative Showcases & Collections
          </span>
          <h1 className="header-title-anim">
            Our Portfolio
          </h1>
          <p className="header-subtitle-anim">
            Explore our sticker, label, printing, and packaging product showcases.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '100px', paddingTop: '28px' }}>
        {/* Editorial Box-Based Responsive Grid */}
        <div className="portfolio-box-grid">
          {PORTFOLIO_PROJECTS.map((item, index) => (
            <PortfolioBox
              key={item.id}
              item={item}
              index={index}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Lightweight Project Detail Modal mounted to document.body via Portal */}
      {activeModalProject && typeof document !== 'undefined' && createPortal(
        <div
          className="modal-overlay"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content portfolio-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="modal-image-wrapper">
              <img
                src={activeModalProject.image_url}
                alt={activeModalProject.title}
                className="modal-img"
              />
            </div>

            <div className="modal-body">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
                <span className="badge">{activeModalProject.category}</span>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                  Showcase ID #{activeModalProject.id}
                </span>
              </div>

              <h2 className="modal-title">{activeModalProject.title}</h2>
              <p className="modal-description">{activeModalProject.description}</p>

              {activeModalProject.tags && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
                  {activeModalProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        background: '#eff6ff',
                        color: '#2563eb',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="modal-features">
                <div className="modal-feature-item">
                  <Check size={16} color="#2563eb" /> Tailored for custom commercial manufacturing & bulk dispatch
                </div>
                <div className="modal-feature-item">
                  <Check size={16} color="#2563eb" /> Sample prototyping and finish matching available
                </div>
                <div className="modal-feature-item">
                  <Check size={16} color="#2563eb" /> Adhesion-tested across fabrics, plastics, glass & metals
                </div>
              </div>

              <div className="modal-actions">
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    `Hello Sree Ganesh Lingha! I would like to inquire about similar manufacturing for: "${activeModalProject.title}".`
                  )}`}
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
                  <MessageSquare size={16} /> Inquire on WhatsApp
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
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
    </div>
  );
}
