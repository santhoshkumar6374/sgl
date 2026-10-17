import { useState, useRef } from 'react';
import { submitContact } from '../services/api';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader,
  MessageCircle, Sparkles, Clock, ShieldCheck, ArrowRight, Layers, HelpCircle
} from 'lucide-react';

const PRODUCT_CATEGORIES = [
  'Non-PVC Stickers',
  'HD Stickers',
  'Reflective Stickers',
  'Vinyl Stickers',
  'Photo Print Stickers',
  'Foil Stickers',
  'Glitter Stickers',
  'Barcode and Size Labels',
  'Woven / Printed Labels',
  'Other Products'
];

const ENQUIRY_SUBJECTS = [
  'Product Enquiry',
  'Pricing/Quotation',
  'Bulk Order / Manufacturing',
  'Material Sample Request',
  'Business Partnership',
  'General Question',
  'Other'
];

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    email: '',
    phone: '',
    product_category: 'Vinyl Stickers',
    subject: 'Product Enquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submission

    setLoading(true);
    setErrorMessage(null);
    setSuccessResponse(null);

    try {
      const res = await submitContact(formData);
      setSuccessResponse(
        res.message || 'Thank you! Your enquiry has been received and saved. Our team will contact you shortly.'
      );
      // Reset form
      setFormData({
        full_name: '',
        company_name: '',
        email: '',
        phone: '',
        product_category: 'Vinyl Stickers',
        subject: 'Product Enquiry',
        message: ''
      });
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong while submitting your enquiry. Please check your network and try again.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // WhatsApp Integration URL with prefilled enquiry text and product category
  const buildWhatsAppUrl = () => {
    const phone = '919876543210';
    const message = `Hello Sree Ganesh Linga, I would like to enquire about your sticker manufacturing solutions (Category: ${formData.product_category || 'Custom Stickers'}).`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#93c5fd', marginBottom: '14px' }}>
              <Sparkles size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Direct Factory Connect
            </span>
            <h1 className="contact-hero-title">
              Let's Create <span>Something Exceptional</span>
            </h1>
            <p className="contact-hero-desc">
              Looking for quality stickers, custom labels, or printing solutions? Connect with our team to discuss your requirements.
            </p>

            <div className="contact-hero-actions">
              <button 
                type="button" 
                onClick={scrollToForm}
                className="contact-hero-btn-primary"
              >
                <span>Send an Enquiry</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-hero-btn-whatsapp"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <div className="container" style={{ paddingBottom: '70px' }}>
        <div className="contact-layout-grid">
          
          {/* LEFT COLUMN: Contact Channels, WhatsApp CTA & "Tell Us What You Need" */}
          <div>
            
            {/* 4 Contact Information Cards */}
            <div className="contact-channels-grid">
              
              {/* Phone Card */}
              <a href="tel:+919876543210" className="contact-info-card" title="Call Sree Ganesh Linga">
                <div>
                  <div className="contact-card-icon-wrap" style={{ background: '#eff6ff', color: '#2563eb' }}>
                    <Phone size={22} />
                  </div>
                  <div className="contact-card-label">Direct Phone</div>
                  <div className="contact-card-value">+91 98765 43210</div>
                </div>
                <div className="contact-card-sub">Mon – Sat: 9:00 AM – 6:30 PM</div>
              </a>

              {/* Email Card */}
              <a href="mailto:santhoshd1211866@gmail.com" className="contact-info-card" title="Send Email">
                <div>
                  <div className="contact-card-icon-wrap" style={{ background: '#eff6ff', color: '#2563eb' }}>
                    <Mail size={22} />
                  </div>
                  <div className="contact-card-label">Email Enquiries</div>
                  <div className="contact-card-value">santhoshd1211866@gmail.com</div>
                </div>
                <div className="contact-card-sub">Typical reply in 2–4 hours</div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href={buildWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-info-card" 
                title="Chat with sales"
              >
                <div>
                  <div className="contact-card-icon-wrap" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                    <MessageCircle size={22} />
                  </div>
                  <div className="contact-card-label">WhatsApp Sales</div>
                  <div className="contact-card-value">+91 98765 43210</div>
                </div>
                <div className="contact-card-sub" style={{ color: '#16a34a', fontWeight: 600 }}>● Instant messaging active</div>
              </a>

              {/* Address Card */}
              <div className="contact-info-card" title="Registered Office">
                <div>
                  <div className="contact-card-icon-wrap" style={{ background: '#eff6ff', color: '#2563eb' }}>
                    <MapPin size={22} />
                  </div>
                  <div className="contact-card-label">Registered Office</div>
                  <div className="contact-card-value">Cyber City Tech Park</div>
                </div>
                <div className="contact-card-sub">Block B, OMR, Chennai, India</div>
              </div>

            </div>

            {/* Prominent WhatsApp Banner Card */}
            <div className="contact-whatsapp-banner">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
                <div>
                  <span style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: '#86efac', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '6px'
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }}></span>
                    Fast Track Quotation
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 8px', color: '#ffffff' }}>
                    Prefer WhatsApp Chat?
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5, margin: '0 0 16px' }}>
                    Send us your artwork files, sticker dimensions, and quantity to receive immediate technical feedback and quick estimates.
                  </p>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#22c55e',
                      color: '#ffffff',
                      padding: '10px 20px',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(34, 197, 94, 0.4)'
                    }}
                  >
                    <MessageCircle size={18} />
                    <span>Start WhatsApp Discussion</span>
                  </a>
                </div>
              </div>
            </div>



          </div>

          {/* RIGHT COLUMN: Unique Enquiry Form */}
          <div ref={formRef}>
            <div className="enquiry-form-card">
              
              <div style={{ marginBottom: '24px' }}>
                <span className="badge" style={{ background: '#eff6ff', color: '#2563eb', marginBottom: '8px' }}>
                  Request Manufacturing Quotation
                </span>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, margin: '0 0 6px', color: '#0f172a' }}>
                  Product Enquiry & Specs
                </h2>
                <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
                  Share your artwork details, roll/sheet preferences, or material requirements with our production engineering team.
                </p>
              </div>

              {/* Success Notification */}
              {successResponse && (
                <div style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  color: '#166534',
                  padding: '16px 18px',
                  borderRadius: '12px',
                  marginBottom: '22px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <CheckCircle2 size={22} style={{ flexShrink: 0, marginTop: '2px', color: '#16a34a' }} />
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.98rem', fontWeight: 700 }}>Enquiry Logged Successfully!</h4>
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{successResponse}</span>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {errorMessage && (
                <div style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#991b1b',
                  padding: '16px 18px',
                  borderRadius: '12px',
                  marginBottom: '22px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px', color: '#dc2626' }} />
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.98rem', fontWeight: 700 }}>Submission Incomplete</h4>
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{errorMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Full Name & Company Name */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="form-group-label" htmlFor="full_name">
                      <span>Full Name <span style={{ color: '#dc2626' }}>*</span></span>
                    </label>
                    <input
                      id="full_name"
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Karthik Raja"
                      className="form-input-control"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label className="form-group-label" htmlFor="company_name">
                      <span>Company Name <span style={{ color: '#94a3b8', fontWeight: 500 }}>(Optional)</span></span>
                    </label>
                    <input
                      id="company_name"
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      placeholder="e.g. Apex Apparels Ltd"
                      className="form-input-control"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                {/* Email Address & Phone Number */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="form-group-label" htmlFor="email">
                      <span>Email Address <span style={{ color: '#dc2626' }}>*</span></span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="karthik@example.com"
                      className="form-input-control"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label className="form-group-label" htmlFor="phone">
                      <span>Phone Number <span style={{ color: '#94a3b8', fontWeight: 500 }}>(Optional)</span></span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-input-control"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Product Category & Subject */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label className="form-group-label" htmlFor="product_category">
                      <span>Product Category <span style={{ color: '#dc2626' }}>*</span></span>
                    </label>
                    <select
                      id="product_category"
                      name="product_category"
                      value={formData.product_category}
                      onChange={handleChange}
                      required
                      className="form-input-control"
                      style={{ cursor: 'pointer' }}
                    >
                      {PRODUCT_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-group-label" htmlFor="subject">
                      <span>Enquiry Subject <span style={{ color: '#dc2626' }}>*</span></span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input-control"
                      style={{ cursor: 'pointer' }}
                    >
                      {ENQUIRY_SUBJECTS.map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="form-group-label" htmlFor="message">
                    <span>Message / Product Requirements <span style={{ color: '#dc2626' }}>*</span></span>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 500 }}>Min 10 characters</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Specify sticker dimensions, estimated quantity, finish (matte/gloss/foil), roll or sheet delivery, and any custom requirements..."
                    className="form-input-control"
                    style={{ resize: 'vertical', minHeight: '110px' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="form-submit-btn"
                >
                  {loading ? (
                    <>
                      <Loader size={20} className="spinning" />
                      <span>Processing & Saving Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Product Enquiry</span>
                    </>
                  )}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.8rem', color: '#64748b', marginTop: '-4px' }}>
                  <ShieldCheck size={16} color="#16a34a" />
                  <span>Your information is protected and stored securely. Never shared with third parties.</span>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* 5. Trust and Business Information Section */}
      <section className="contact-trust-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
            <span className="badge">Manufacturing Transparency</span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, margin: '12px 0 10px', color: '#0f172a' }}>
              How to Enquire for Sticker Manufacturing
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem' }}>
              Guidelines to help our engineering and dispatch team provide you with accurate quotations and production timelines.
            </p>
          </div>

          <div className="contact-trust-grid">
            
            <div className="contact-trust-box">
              <div className="contact-trust-icon">
                <Layers size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>
                1. Material Selection
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Select between Eco-friendly Non-PVC, High-Density Thermal, Outdoor Vinyl, Foil, or Reflective films depending on your application surface.
              </p>
            </div>

            <div className="contact-trust-box">
              <div className="contact-trust-icon">
                <Clock size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>
                2. Dimensions & Quantities
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                State your required width, height, and unit volume. We cater to bulk production runs as well as sample pre-production batches.
              </p>
            </div>

            <div className="contact-trust-box">
              <div className="contact-trust-icon">
                <HelpCircle size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>
                3. Artwork & Delivery Format
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Vector files (.AI, .CDR, .PDF) are preferred. Indicate whether your facility requires roll-feed automated dispensing or individual sheet cuts.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
