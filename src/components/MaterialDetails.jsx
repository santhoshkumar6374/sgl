import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  X,
  CheckCircle2,
  Layers,
  Sparkles,
  Info,
  ShieldAlert,
  ArrowRight,
  MessageCircle,
  Mail,
  Palette,
  Briefcase,
  HelpCircle,
  Building2,
  Globe
} from 'lucide-react';
import { SOURCING_RECORDS } from '../services/materialsData';

export default function MaterialDetails({ material, onClose, onEnquire }) {
  // Lock background body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!material) return null;

  const phone = '919876543210';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hello Sree Ganesh Linga, I am inquiring about the raw material "${material.name}" (${material.category}) for our garment/product manufacturing requirements.`
  )}`;

  // Find matching sourcing and origin record for this specific material
  const sourcingRecord = SOURCING_RECORDS.find(
    (r) =>
      r.material.toLowerCase() === material.name.toLowerCase() ||
      material.name.toLowerCase().includes(r.material.toLowerCase()) ||
      r.material.toLowerCase().includes(material.name.toLowerCase()) ||
      r.category.toLowerCase() === material.category.toLowerCase()
  ) || {
    material: material.name,
    supplier: 'To be confirmed',
    location: 'To be confirmed',
    origin: 'To be confirmed',
    status: material.sourcingStatus || 'Pending verification',
    leadTime: '3–7 business days',
    category: material.category
  };

  return createPortal(
    <div
      className="modal-overlay material-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="material-details-title"
    >
      <div
        className="modal-content material-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Close Button - Always visible regardless of scrolling */}
        <button
          onClick={onClose}
          className="modal-close-btn material-modal-fixed-close"
          aria-label="Close material details modal"
          title="Close (Esc)"
        >
          <X size={20} />
        </button>

        {/* Dedicated Smooth Scrollable Content Area */}
        <div className="material-modal-scrollable">
          {/* Modal Hero / Header Image */}
          <div className="material-modal-image-box">
            <img
              src={material.image}
              alt={material.name}
              className="material-modal-img"
            />
            <div className="material-modal-image-overlay">
              <span className="badge material-category-badge">
                {material.category}
              </span>
              <span className="badge material-status-badge">
                {material.sourcingStatus || 'Pending verification'}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="material-modal-body">
            {/* Header Title & Unverified Sample Tag */}
            <div className="material-modal-title-row">
              <div>
                <h2 id="material-details-title" className="material-modal-title">
                  {material.name}
                </h2>
                <div className="material-sample-callout">
                  <Info size={14} className="material-sample-icon" />
                  <span>
                    Indicative Technical Specification — Subject to batch validation and client approval.
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="material-modal-desc">
              {material.description}
            </p>

            {/* Section: Responsible Material Sourcing & Origin (Vertical Tabular Layout) */}
            <div className="material-modal-sourcing-section">
              <h4 className="material-spec-heading">
                <Globe size={16} /> Responsible Material Sourcing & Origin
              </h4>
              <div className="modal-vertical-table-wrapper">
                <table className="modal-vertical-table">
                  <tbody>
                    <tr>
                      <th scope="row">Material / Substrate</th>
                      <td>
                        <span className="sourcing-mat-name">{material.name}</span>
                        <span className="sourcing-mat-tag">{material.category}</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Supplier / Manufacturer</th>
                      <td>{sourcingRecord.supplier || 'To be confirmed'}</td>
                    </tr>
                    <tr>
                      <th scope="row">Location</th>
                      <td>{sourcingRecord.location || 'To be confirmed'}</td>
                    </tr>
                    <tr>
                      <th scope="row">Material Origin</th>
                      <td>{sourcingRecord.origin || 'To be confirmed'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="modal-sourcing-footnote">
                * Material sourcing details are provided subject to supplier verification and commercial confidentiality. Full vendor specifications and laboratory certificates are disclosed upon sample orders.
              </p>
            </div>

            <div className="material-details-grid">
              {/* Column 1: Properties & Advantages */}
              <div className="material-details-col">
                {/* Properties */}
                <div className="material-spec-section">
                  <h4 className="material-spec-heading">
                    <Layers size={16} /> Key Properties
                  </h4>
                  <ul className="material-spec-list">
                    {material.properties?.map((prop, idx) => (
                      <li key={idx} className="material-spec-item">
                        <CheckCircle2 size={15} className="spec-check-icon" />
                        <span>{prop}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Material Advantages */}
                {material.advantages && material.advantages.length > 0 && (
                  <div className="material-spec-section">
                    <h4 className="material-spec-heading">
                      <Sparkles size={16} /> Key Manufacturing Advantages
                    </h4>
                    <ul className="material-spec-list">
                      {material.advantages.map((adv, idx) => (
                        <li key={idx} className="material-spec-item">
                          <CheckCircle2 size={15} className="spec-check-icon" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Colors & Finishes */}
                {material.colorsFinishes && material.colorsFinishes.length > 0 && (
                  <div className="material-spec-section">
                    <h4 className="material-spec-heading">
                      <Palette size={16} /> Available Colors & Finishes
                    </h4>
                    <div className="material-tags-container">
                      {material.colorsFinishes.map((finish, idx) => (
                        <span key={idx} className="material-finish-tag">
                          {finish}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Column 2: Applications & SGL Products */}
              <div className="material-details-col">
                {/* Manufacturing Applications */}
                <div className="material-spec-section">
                  <h4 className="material-spec-heading">
                    <Briefcase size={16} /> Manufacturing Applications
                  </h4>
                  <ul className="material-spec-list">
                    {material.applications?.map((app, idx) => (
                      <li key={idx} className="material-spec-item">
                        <CheckCircle2 size={15} className="spec-check-icon" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products in which it is used */}
                {material.usedInProducts && material.usedInProducts.length > 0 && (
                  <div className="material-spec-section">
                    <h4 className="material-spec-heading">
                      <Building2 size={16} /> Products in Which It Is Used
                    </h4>
                    <div className="material-products-links">
                      {material.usedInProducts.map((prodName, idx) => (
                        <Link
                          key={idx}
                          to={`/products?search=${encodeURIComponent(prodName)}`}
                          className="material-product-link"
                          title={`View ${prodName} in Products`}
                          onClick={onClose}
                        >
                          <span>{prodName}</span>
                          <ArrowRight size={13} className="product-link-arrow" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Environmental / Safety Section with Clear Notice */}
            <div className="material-safety-box">
              <div className="material-safety-icon-wrap">
                <ShieldAlert size={20} />
              </div>
              <div>
                <h5 className="material-safety-title">
                  Environmental & Compliance Notice
                </h5>
                <p className="material-safety-text">
                  {material.environmentalSafety}
                </p>
                <div className="material-safety-disclaimer">
                  Note: SGL does not claim unverified certifications without third-party test reports. Specific regulatory certificates (such as OEKO-TEX®, REACH, or phthalate-free compliance) must be requested per batch.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pinned Action Footer - Always visible and accessible */}
        <div className="material-modal-actions material-modal-actions-pinned">
          <button
            type="button"
            onClick={() => {
              onClose();
              onEnquire(material);
            }}
            className="btn btn-primary material-action-btn"
          >
            <Mail size={16} />
            <span>Enquire About This Material</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp material-action-btn"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Tech Specs</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary material-close-action"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
