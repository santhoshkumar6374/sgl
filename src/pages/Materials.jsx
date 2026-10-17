import { useState, useMemo, useRef } from 'react';
import {
  MATERIALS_LIST,
  QUALITY_PROCESSES,
  filterMaterials
} from '../services/materialsData';
import MaterialCard from '../components/MaterialCard';
import MaterialDetails from '../components/MaterialDetails';
import MaterialSearchBar from '../components/MaterialSearchBar';
import './Materials.css';

import {
  Sparkles,
  ArrowRight,
  Search,
  RefreshCw,
  Layers,
  ShieldCheck,
  Package,
  Building2,
  AlertTriangle,
  MessageCircle
} from 'lucide-react';

export default function Materials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMaterialModal, setActiveMaterialModal] = useState(null);

  const catalogRef = useRef(null);

  // Filter materials client-side by keyword search
  const filteredMaterials = useMemo(() => {
    return filterMaterials({
      search: searchQuery
    });
  }, [searchQuery]);

  const handleClearFilters = () => {
    setSearchQuery('');
  };

  const handleOpenModal = (material) => {
    setActiveMaterialModal(material);
  };

  const handleCloseModal = () => {
    setActiveMaterialModal(null);
  };

  const handleEnquireMaterial = (material) => {
    const phone = '919876543210';
    const message = `Hello Sree Ganesh Linga, I am inquiring about the raw material "${material.name}" (${material.category}) for our manufacturing requirements. Please provide pricing and technical specifications.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="materials-page-container">
      {/* =========================================================================
          TOP SEARCH BAR (Above Hero Banner)
          ========================================================================= */}
      <section className="materials-top-search-section">
        <div className="container">
          <MaterialSearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSelectSearch={() => {
              if (catalogRef.current) {
                catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: HERO SECTION ("Materials Behind Every Quality Product")
          ========================================================================= */}
      <section className="materials-hero">
        <div className="container">
          <div className="materials-hero-grid">
            {/* Left Column: Heading, Description & CTAs */}
            <div>
              <span className="materials-hero-badge">
                <Sparkles size={14} /> Industrial Sourcing & Transparency
              </span>
              <h1 className="materials-hero-title">
                Materials Behind <span>Every Quality Product</span>
              </h1>
              <p className="materials-hero-desc">
                Explore the materials and components used in garment trims, heat transfer printing, labels, stickers, and packaging solutions. Discover their properties, applications, and sourcing information.
              </p>

              <div className="materials-hero-actions">
                <button
                  type="button"
                  onClick={scrollToCatalog}
                  className="materials-hero-btn-primary"
                >
                  <span>Explore Materials</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hello%20Sree%20Ganesh%20Lingha,%20I%20would%20like%20to%20enquire%20about%20your%20materials%20and%20manufacturing%20specifications."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="materials-hero-btn-secondary"
                >
                  <MessageCircle size={17} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Frame with Industrial Material Photograph */}
            <div className="materials-hero-visual">
              <div className="hero-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial textile transfer materials and polymer films production"
                  loading="eager"
                />
                <div className="hero-visual-floating-badge">
                  <div className="floating-badge-icon">
                    <Layers size={22} />
                  </div>
                  <div>
                    <h4 className="floating-badge-title">Engineered Substrates</h4>
                    <p className="floating-badge-sub">6 Core Categories • 25+ Specialized Materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <div className="materials-metrics-bar">
        <div className="container">
          <div className="materials-metrics-grid">
            <div className="metric-item">
              <div className="metric-icon-wrap">
                <Layers size={22} />
              </div>
              <div>
                <div className="metric-value">6 Categories</div>
                <div className="metric-label">Polymers, Inks, Papers & Trims</div>
              </div>
            </div>

            <div className="metric-item">
              <div className="metric-icon-wrap">
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className="metric-value">Precision Tested</div>
                <div className="metric-label">Wash, Adhesion & Tensile Checks</div>
              </div>
            </div>

            <div className="metric-item">
              <div className="metric-icon-wrap">
                <Building2 size={22} />
              </div>
              <div>
                <div className="metric-value">Batch Traceability</div>
                <div className="metric-label">Supplier Verification & TDS</div>
              </div>
            </div>

            <div className="metric-item">
              <div className="metric-icon-wrap">
                <Package size={22} />
              </div>
              <div>
                <div className="metric-value">Zero Fluff</div>
                <div className="metric-label">Transparent Sourcing Information</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE MATERIAL CARDS CATALOG
          ========================================================================= */}
      <section className="materials-catalog-section" ref={catalogRef}>
        <div className="container">
          <div className="section-header-block">
            <span className="section-tag">
              <Search size={13} /> Interactive Catalog
            </span>
            <h2 className="section-heading-title">
              Manufacturing Materials Catalog
            </h2>
            <p className="section-heading-desc">
              Browse raw materials by technical property, category, or end-use manufacturing application. Click "View Details" on any material for complete specifications.
            </p>
          </div>

          {/* Results Status Bar */}
          <div className="materials-status-bar">
            <span>
              Showing <strong>{filteredMaterials.length}</strong> of <strong>{MATERIALS_LIST.length}</strong> materials
              {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            </span>

            {searchQuery && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="status-clear-btn"
              >
                <RefreshCw size={13} /> Clear Search
              </button>
            )}
          </div>

          {/* Empty Results State */}
          {filteredMaterials.length === 0 && (
            <div className="empty-results-card" style={{ padding: '60px 20px', textAlign: 'center' }}>
              <Search size={36} color="#94a3b8" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '8px' }}>
                No materials match your current search
              </h3>
              <p style={{ color: '#64748b', maxWidth: '440px', margin: '0 auto 20px', fontSize: '0.94rem' }}>
                We couldn't find any materials matching "{searchQuery}". Try searching for another keyword like "PU", "reflective", "silicone", or "kraft".
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="btn btn-primary"
              >
                Show All Materials
              </button>
            </div>
          )}

          {/* Material Cards Grid */}
          {filteredMaterials.length > 0 && (
            <div className="materials-grid">
              {filteredMaterials.map((material, idx) => (
                <MaterialCard
                  key={material.id}
                  material={material}
                  index={idx}
                  onSelect={handleOpenModal}
                  onEnquire={handleEnquireMaterial}
                />
              ))}
            </div>
          )}
        </div>
      </section>



      {/* =========================================================================
          QUALITY AND COMPLIANCE
          ========================================================================= */}
      <section className="quality-section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-tag">
              <ShieldCheck size={13} /> Quality Management
            </span>
            <h2 className="section-heading-title">
              Material Quality & Traceability Protocols
            </h2>
            <p className="section-heading-desc">
              Every production lot undergoes rigorous evaluation to guarantee print clarity, adhesive adhesion, stretch recovery, and wash durability before dispatch.
            </p>
          </div>

          <div className="quality-grid">
            {QUALITY_PROCESSES.map((qp) => (
              <div key={qp.id} className="quality-card">
                <div className="quality-step-num">{qp.stepNumber}</div>
                <h3 className="quality-card-title">{qp.title}</h3>
                <p className="quality-card-desc">{qp.details}</p>
              </div>
            ))}
          </div>

          {/* Compliance Disclaimer Notice */}
          <div className="quality-disclaimer-card">
            <AlertTriangle size={24} className="quality-disclaimer-icon" />
            <div>
              <h4 className="quality-disclaimer-title">
                Technical Compliance & Certification Disclaimer
              </h4>
              <p className="quality-disclaimer-text">
                Antigravity and Sree Ganesh Linga (SGL) maintain strict truth-in-advertising standards. We do not claim general OEKO-TEX® Standard 100, phthalate-free status, PVC-free composition, or organic fiber certifications unless explicitly verified with current third-party laboratory test reports for the specific client batch and substrate formulation. Customers requiring formal regulatory compliance documentation should specify required standards during the enquiry phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MATERIAL DETAILS MODAL
          ========================================================================= */}
      {activeMaterialModal && (
        <MaterialDetails
          material={activeMaterialModal}
          onClose={handleCloseModal}
          onEnquire={handleEnquireMaterial}
        />
      )}
    </div>
  );
}
