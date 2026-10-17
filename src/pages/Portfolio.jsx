import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import PortfolioBox from '../components/PortfolioBox';
import { PORTFOLIO_PROJECTS } from '../services/portfolioData';
import { Search, Filter, Sparkles, X, MessageSquare, Check, RefreshCw } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Stickers', 'Labels', 'Special Finishes', 'Packaging'];

  // Fast client-side filtering without network latency
  const filteredProjects = useMemo(() => {
    let list = [...PORTFOLIO_PROJECTS];

    // Filter by Category
    if (selectedCategory !== 'All') {
      list = list.filter(item => item.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.tags && item.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

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

      <div className="container" style={{ paddingBottom: '100px' }}>
        {/* 2. Interactive Filter Bar & Search Box */}
        <div className="portfolio-filter-toolbar">
          {/* Category Tabs */}
          <div className="portfolio-filter-pills">
            <div className="portfolio-filter-label">
              <Filter size={15} /> Category:
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`portfolio-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="portfolio-search-box">
            <Search size={18} className="search-icon-fixed" />
            <input
              type="text"
              placeholder="Search showcase designs, techniques..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-field"
              aria-label="Search portfolio"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
                title="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* 3. Status Bar with Results Count */}
        <div className="results-status-bar">
          <span className="results-count-text">
            Displaying <strong>{filteredProjects.length}</strong> showcase boxes
            {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
          </span>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="reset-filters-btn"
            >
              <RefreshCw size={13} /> Reset Filters
            </button>
          )}
        </div>

        {/* 4. Empty State if no project matched */}
        {filteredProjects.length === 0 && (
          <div className="empty-results-card">
            <div className="empty-icon-wrap">
              <Search size={32} color="#94a3b8" />
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '8px' }}>
              No portfolio projects found
            </h3>
            <p style={{ color: '#64748b', maxWidth: '460px', margin: '0 auto 20px' }}>
              We couldn't find any showcase matching "{searchQuery}". Try searching for vinyl, foil, or selecting "All".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn btn-primary"
            >
              Show All 16 Projects
            </button>
          </div>
        )}

        {/* 5. Editorial Box-Based Responsive Grid */}
        {filteredProjects.length > 0 && (
          <div className="portfolio-box-grid">
            {filteredProjects.map((item, index) => (
              <PortfolioBox
                key={item.id}
                item={item}
                index={index}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
        )}
      </div>

      {/* 6. Lightweight Project Detail Modal mounted to document.body via Portal */}
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
