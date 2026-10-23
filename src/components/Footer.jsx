import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img
                src="/logo-round.png"
                alt="Sree Ganesh Lingha Logo"
                style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <h3 style={{ margin: 0, color: 'white', fontSize: '1.25rem' }}>Sree Ganesh Lingha</h3>
            </div>
            <p>
              Manufacturer and supplier of premium non-PVC, silicone, high-definition, reflective, and vinyl stickers, apparel labels, and packaging trims.
            </p>
          </div>

          {/* Quick Links to all 6 pages */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/materials">Materials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business Sectors */}
          <div className="footer-col">
            <h4>Capabilities</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=Hardware">IoT & Embedded</Link></li>
              <li><Link to="/products?category=Software">Cloud Platforms</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4>Reach Us</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={16} color="#60a5fa" />
                <a href="mailto:santhoshd1211866@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  santhoshd1211866@gmail.com
                </a>
              </li>
              <li>
                <Phone size={16} color="#60a5fa" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <MapPin size={16} color="#60a5fa" />
                <a href="https://www.google.com/maps/search/?api=1&query=Cyber+City+Tech+Park,+Chennai,+India" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }} title="Open location in Google Maps">Cyber City Tech Park, Chennai, India</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom with dynamic current-year */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sree Ganesh Linga Pvt Ltd. All rights reserved.</p>
          <p>Crafted with Precision & High Performance</p>
        </div>
      </div>
    </footer>
  );
}
