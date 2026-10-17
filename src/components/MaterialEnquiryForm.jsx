import { useState, useEffect } from 'react';
import { submitMaterialEnquiry } from '../services/api';
import { MATERIAL_CATEGORIES, MATERIALS_LIST } from '../services/materialsData';
import {
  MessageCircle,
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader,
  Sparkles,
  HelpCircle,
  FileCheck
} from 'lucide-react';

export default function MaterialEnquiryForm({ initialMaterial = null, onClearInitialMaterial }) {
  const [formData, setFormData] = useState({
    customer_name: '',
    company_name: '',
    email: '',
    phone: '',
    material_category: 'Heat Transfer Films',
    material_name: '',
    intended_application: '',
    estimated_quantity: '',
    additional_requirements: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // When initialMaterial is provided from a Card or Modal, prefill category and name
  useEffect(() => {
    if (initialMaterial) {
      setFormData(prev => ({
        ...prev,
        material_category: initialMaterial.category || 'Heat Transfer Films',
        material_name: initialMaterial.name || '',
        intended_application: initialMaterial.applications ? initialMaterial.applications[0] : prev.intended_application
      }));
    }
  }, [initialMaterial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFormData(prev => ({
      ...prev,
      material_category: category,
      material_name: '' // Reset material name when category changes unless manually selected
    }));
  };

  // Filter available materials based on currently selected category
  const filteredMaterials = MATERIALS_LIST.filter(
    m => m.category.toLowerCase() === formData.material_category.toLowerCase()
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // Basic Validation
    if (!formData.customer_name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!formData.material_category) {
      setErrorMessage('Please select a material category.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setSuccessResponse(null);

    try {
      const res = await submitMaterialEnquiry(formData);
      setSuccessResponse(
        res.message || 'Thank you! Your material enquiry has been recorded in your local browser storage.'
      );

      // Reset form fields
      setFormData({
        customer_name: '',
        company_name: '',
        email: '',
        phone: '',
        material_category: 'Heat Transfer Films',
        material_name: '',
        intended_application: '',
        estimated_quantity: '',
        additional_requirements: ''
      });

      if (onClearInitialMaterial) {
        onClearInitialMaterial();
      }
    } catch (err) {
      setErrorMessage(err.message || 'An error occurred while saving your enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Pre-formatted WhatsApp Message URL
  const buildWhatsAppUrl = () => {
    const phone = '919876543210';
    const lines = [
      `Hello Sree Ganesh Linga! I would like to enquire about raw materials:`,
      `• Name: ${formData.customer_name || 'Prospective Client'}`,
      formData.company_name ? `• Company: ${formData.company_name}` : null,
      `• Category: ${formData.material_category || 'General Materials'}`,
      formData.material_name ? `• Material: ${formData.material_name}` : null,
      formData.intended_application ? `• Application: ${formData.intended_application}` : null,
      formData.estimated_quantity ? `• Est. Qty: ${formData.estimated_quantity}` : null,
      formData.additional_requirements ? `• Details: ${formData.additional_requirements}` : null,
      `Please provide material availability, sample pricing, and technical datasheets.`
    ].filter(Boolean);

    return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  // Pre-formatted Mailto URL for actual transmission
  const buildMailtoUrl = () => {
    const to = 'info@sreeganeshlinga.com';
    const subject = `Material Enquiry: ${formData.material_name || formData.material_category} - ${formData.customer_name || 'Client'}`;
    const body = `Dear SGL Materials Team,

I am requesting technical specifications, availability, and quotation for manufacturing materials:

- Customer Name: ${formData.customer_name || ''}
- Company: ${formData.company_name || 'N/A'}
- Email: ${formData.email || ''}
- Phone: ${formData.phone || 'N/A'}
- Material Category: ${formData.material_category}
- Specific Material: ${formData.material_name || 'Not specified / Recommend best option'}
- Intended Application: ${formData.intended_application || 'Garment / Packaging Manufacturing'}
- Estimated Quantity: ${formData.estimated_quantity || 'To be discussed'}

Additional Requirements / Testing Notes:
${formData.additional_requirements || 'Please send available grade options and sample lead times.'}

Best regards,
${formData.customer_name || 'Customer'}`;

    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="material-enquiry-card" id="material-enquiry-section">
      <div className="material-enquiry-header">
        <span className="badge" style={{ background: '#eff6ff', color: '#2563eb', marginBottom: '8px' }}>
          <Sparkles size={13} style={{ marginRight: '5px' }} />
          Factory Sourcing Desk
        </span>
        <h3 className="enquiry-card-title">
          Request Material Samples & Specifications
        </h3>
        <p className="enquiry-card-subtitle">
          Submit your substrate requirements, intended garment applications, or request technical datasheets (TDS) and sample swatches from our production team.
        </p>
      </div>

      {/* Local Prototype Advisory Banner */}
      <div className="enquiry-local-notice">
        <HelpCircle size={18} className="local-notice-icon" />
        <div className="local-notice-text">
          <strong>Direct Transmission Notice:</strong> Browser form submissions are saved locally to your device storage (<code>sgl_material_enquiries</code>). For immediate factory response or commercial order confirmation, please use the <strong>WhatsApp</strong> or <strong>Email</strong> action buttons below.
        </div>
      </div>

      {/* Success Notification */}
      {successResponse && (
        <div className="enquiry-alert success">
          <CheckCircle2 size={20} className="alert-icon" />
          <div className="alert-content">
            <h4>Enquiry Recorded Locally</h4>
            <p>{successResponse}</p>
            <div className="alert-quick-actions">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp alert-action-btn"
              >
                <MessageCircle size={15} /> Send via WhatsApp Now
              </a>
              <a
                href={buildMailtoUrl()}
                className="btn btn-secondary alert-action-btn"
              >
                <Mail size={15} /> Send via Email Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {errorMessage && (
        <div className="enquiry-alert error">
          <AlertCircle size={20} className="alert-icon" />
          <div className="alert-content">
            <h4>Unable to Process Form</h4>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="material-form">
        {/* Row 1: Full Name & Company Name */}
        <div className="form-grid-2">
          <div className="form-field">
            <label className="form-group-label" htmlFor="customer_name">
              <span>Customer Name <span className="required-star">*</span></span>
            </label>
            <input
              id="customer_name"
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              required
              placeholder="e.g. Ramesh Kumar"
              className="form-input-control"
              autoComplete="name"
            />
          </div>

          <div className="form-field">
            <label className="form-group-label" htmlFor="company_name">
              <span>Company Name <span className="optional-tag">(Optional)</span></span>
            </label>
            <input
              id="company_name"
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="e.g. Tirupur Knitwear Exports"
              className="form-input-control"
              autoComplete="organization"
            />
          </div>
        </div>

        {/* Row 2: Email Address & Phone Number */}
        <div className="form-grid-2">
          <div className="form-field">
            <label className="form-group-label" htmlFor="email">
              <span>Email Address <span className="required-star">*</span></span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ramesh@knitwear.com"
              className="form-input-control"
              autoComplete="email"
            />
          </div>

          <div className="form-field">
            <label className="form-group-label" htmlFor="phone">
              <span>Phone Number <span className="optional-tag">(Optional)</span></span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98420 12345"
              className="form-input-control"
              autoComplete="tel"
            />
          </div>
        </div>

        {/* Row 3: Material Category & Material Name */}
        <div className="form-grid-2">
          <div className="form-field">
            <label className="form-group-label" htmlFor="material_category">
              <span>Material Category <span className="required-star">*</span></span>
            </label>
            <select
              id="material_category"
              name="material_category"
              value={formData.material_category}
              onChange={handleCategoryChange}
              className="form-input-control"
            >
              {MATERIAL_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label className="form-group-label" htmlFor="material_name">
              <span>Material Name / Grade <span className="optional-tag">(Select or specify)</span></span>
            </label>
            <select
              id="material_name"
              name="material_name"
              value={formData.material_name}
              onChange={handleChange}
              className="form-input-control"
            >
              <option value="">-- Choose specific material (or specify below) --</option>
              {filteredMaterials.map(mat => (
                <option key={mat.id} value={mat.name}>
                  {mat.name}
                </option>
              ))}
              <option value="Other / Custom Compound">Other / Custom Formulation</option>
            </select>
          </div>
        </div>

        {/* Row 4: Intended Application & Estimated Quantity */}
        <div className="form-grid-2">
          <div className="form-field">
            <label className="form-group-label" htmlFor="intended_application">
              <span>Intended Application</span>
            </label>
            <input
              id="intended_application"
              type="text"
              name="intended_application"
              value={formData.intended_application}
              onChange={handleChange}
              placeholder="e.g. Sportswear heat transfer, high-vis safety jacket..."
              className="form-input-control"
            />
          </div>

          <div className="form-field">
            <label className="form-group-label" htmlFor="estimated_quantity">
              <span>Estimated Quantity <span className="optional-tag">(Optional)</span></span>
            </label>
            <input
              id="estimated_quantity"
              type="text"
              name="estimated_quantity"
              value={formData.estimated_quantity}
              onChange={handleChange}
              placeholder="e.g. 500 rolls, 50,000 sheets, 100 kg ink"
              className="form-input-control"
            />
          </div>
        </div>

        {/* Row 5: Additional Requirements */}
        <div className="form-field">
          <label className="form-group-label" htmlFor="additional_requirements">
            <span>Additional Requirements & Testing Criteria</span>
          </label>
          <textarea
            id="additional_requirements"
            name="additional_requirements"
            value={formData.additional_requirements}
            onChange={handleChange}
            rows={4}
            placeholder="Specify required roll width, color codes, substrate fabric composition, peel temperature, or test standard requirements..."
            className="form-input-control"
            style={{ resize: 'vertical' }}
          />
        </div>

        {/* Submit & Instant Messaging Actions */}
        <div className="form-actions-wrapper">
          <button
            type="submit"
            disabled={loading}
            className="form-submit-btn"
          >
            {loading ? (
              <>
                <Loader size={18} className="spin" />
                <span>Recording Enquiry...</span>
              </>
            ) : (
              <>
                <FileCheck size={18} />
                <span>Save Local Enquiry</span>
              </>
            )}
          </button>

          <div className="form-alternative-actions">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp direct-channel-btn"
              title="Chat directly on WhatsApp with prefilled enquiry"
            >
              <MessageCircle size={18} />
              <span>Send via WhatsApp</span>
            </a>

            <a
              href={buildMailtoUrl()}
              className="btn btn-secondary direct-channel-btn"
              title="Open email draft with prefilled enquiry"
            >
              <Mail size={18} />
              <span>Send via Email</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
