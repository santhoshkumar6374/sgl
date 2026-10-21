import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Leaf,
  ShieldCheck,
  Droplets,
  Layers,
  Sun,
  Tag,
  Image,
  Film,
  Scissors,
  Award,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const stickerMenuItems = [
    { name: 'Non-PVC Sticker', icon: Leaf, color: '#10b981' },
    { name: 'Phthalate-Free HD Sticker', icon: ShieldCheck, color: '#059669' },
    { name: 'Water-Based HD Sticker', icon: Droplets, color: '#d97706' },
    { name: 'Silicon HD Sticker', icon: Layers, color: '#8b5cf6' },
    { name: 'Reflective Sticker', icon: Sun, color: '#ef4444' },
    { name: 'Vinil Sticker', icon: Tag, color: '#3b82f6' },
    { name: 'Photo Print Sticker', icon: Image, color: '#6366f1' },
    { name: 'PVC Film Sticker', icon: Film, color: '#2563eb' },
    { name: 'Cut Colour Sticker', icon: Scissors, color: '#ea580c' },
    { name: 'Foil Sticker', icon: Award, color: '#0d9488' },
    { name: 'Glitter Sticker', icon: Sparkles, color: '#db2777' }
  ];

  const handleProductClick = (productName) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/products?search=${encodeURIComponent(productName)}`);
  };

  return (
    <header className="navbar">
      <div className="nav-container-full">
        {/* Left: Official Brand Typography Logo */}
        <Link to="/" className="nav-brand-logo" title="Sree Ganesh Lingha Enterprise">
          <span className="nav-brand-title">
            Sree Ganesh Lingha
          </span>
          <span className="nav-brand-subtitle">
            E N T E R P R I S E
          </span>
          <span className="nav-brand-tagline">
            ALL KIND OF TRANSFER STICKERS MANUFACTURER
          </span>
        </Link>

        {/* Center: Navigation Links in Exact Order: Home | About Us | Products | Materials | Portfolio | Contact Us */}
        <nav className="nav-links-center">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>

          {/* Products Mega Dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink
              to="/products"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
            >
              Products <ChevronDown size={16} style={{ transition: 'transform 0.2s ease', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }} />
            </NavLink>

            {/* Floating Dropdown Modal Menu */}
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                paddingTop: '12px',
                zIndex: 100
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)',
                  border: '1px solid #e2e8f0',
                  padding: '24px 28px',
                  width: '540px'
                }}>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    color: '#0f172a',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid #f1f5f9'
                  }}>
                    PRODUCTS
                  </div>

                  {/* 2-Column Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    columnGap: '28px',
                    rowGap: '14px'
                  }}>
                    {stickerMenuItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.name}
                          onClick={() => handleProductClick(item.name)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer',
                            padding: '6px 4px',
                            borderRadius: '8px',
                            transition: 'all 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8fafc';
                            e.currentTarget.style.transform = 'translateX(4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.transform = 'none';
                          }}
                        >
                          <IconComponent size={20} color={item.color} style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#1e293b' }}>
                            {item.name}
                          </span>
                        </div>
                      );
                    })}

                    {/* View All Products Link at Bottom Right */}
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate('/products');
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        padding: '6px 4px',
                        color: '#0284c7',
                        fontWeight: 700,
                        fontSize: '0.95rem'
                      }}
                    >
                      <ArrowRight size={18} />
                      <span>View All Products</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* New Materials Page Link */}
          <NavLink to="/materials" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Materials
          </NavLink>

          <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Portfolio
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact Us
          </NavLink>
        </nav>

        {/* Right Corner: Quick Call & WhatsApp Action Buttons + Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', zIndex: 60 }}>
          {/* Call Button */}
          <a
            href="tel:+919876543210"
            className="nav-action-btn nav-call-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '24px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.15)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1e293b';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0f172a';
              e.currentTarget.style.transform = 'none';
            }}
            title="Call Sree Ganesh Lingha"
          >
            <Phone size={15} color="#38bdf8" />
            <span>Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Sree%20Ganesh%20Lingha,%20I%20would%20like%20to%20enquire%20about%20your%20sticker%20manufacturing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-action-btn nav-whatsapp-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '24px',
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#128C7E';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366';
              e.currentTarget.style.transform = 'none';
            }}
            title="Chat on WhatsApp"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger Button (visible on mobile/tablet) */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid #e2e8f0',
              padding: '8px',
              borderRadius: '8px',
              cursor: 'pointer',
              color: '#0f172a'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            position: 'fixed',
            top: '76px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 90
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              background: '#ffffff',
              padding: '24px',
              maxHeight: 'calc(100vh - 76px)',
              overflowY: 'auto',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              borderBottom: '2px solid #2563eb'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <NavLink
                to="/"
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>Home</span>
                <ArrowRight size={16} color="#94a3b8" />
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>About Us</span>
                <ArrowRight size={16} color="#94a3b8" />
              </NavLink>

              {/* Mobile Products Accordion */}
              <div>
                <div
                  onClick={() => setMobileProductsOpen(prev => !prev)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>Products</span>
                  <ChevronDown size={18} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
                </div>

                {mobileProductsOpen && (
                  <div style={{ paddingLeft: '16px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {stickerMenuItems.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => handleProductClick(item.name)}
                        style={{
                          padding: '8px 12px',
                          fontSize: '0.9rem',
                          color: '#334155',
                          fontWeight: 500,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <item.icon size={16} color={item.color} />
                        <span>{item.name}</span>
                      </div>
                    ))}
                    <Link
                      to="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        padding: '8px 12px',
                        color: '#2563eb',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>All Products Catalog</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Materials Link */}
              <NavLink
                to="/materials"
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>Materials</span>
                <span className="badge" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>Raw Substrates</span>
              </NavLink>

              <NavLink
                to="/portfolio"
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>Portfolio</span>
                <ArrowRight size={16} color="#94a3b8" />
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>Contact Us</span>
                <ArrowRight size={16} color="#94a3b8" />
              </NavLink>
            </nav>

            {/* Mobile Contact Quick Actions */}
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '10px' }}>
              <a
                href="tel:+919876543210"
                style={{
                  flex: 1,
                  padding: '10px',
                  textAlign: 'center',
                  background: '#0f172a',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Phone size={15} color="#38bdf8" /> Call SGL
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%20Sree%20Ganesh%20Lingha,%20I%20would%20like%20to%20enquire%20about%20your%20sticker%20manufacturing%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '10px',
                  textAlign: 'center',
                  background: '#25D366',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
