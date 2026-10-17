import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { PRODUCT_IMAGES } from '../services/productImages';
import { ArrowRight, Layers, Sparkles, ShieldCheck, Palette, Send, PhoneCall } from 'lucide-react';

export default function Home() {
  const [featuredStickers, setFeaturedStickers] = useState([]);
  const navigate = useNavigate();

  // Curated hero showcase stickers matching user request
  const heroShowcaseStickers = [
    {
      id: 6,
      name: 'Vinyl Stickers',
      tag: 'Waterproof Vinyl',
      image: PRODUCT_IMAGES[6].url
    },
    {
      id: 5,
      name: 'Reflective Stickers',
      tag: 'High Visibility',
      image: PRODUCT_IMAGES[5].url
    },
    {
      id: 10,
      name: 'Foil Stickers',
      tag: 'Metallic Stamped',
      image: PRODUCT_IMAGES[10].url
    },
    {
      id: 11,
      name: 'Glitter Stickers',
      tag: 'Sparkle Finish',
      image: PRODUCT_IMAGES[11].url
    },
    {
      id: 7,
      name: 'Photo Print Stickers',
      tag: 'Ultra-HD Graphics',
      image: PRODUCT_IMAGES[7].url
    },
    {
      id: 15,
      name: 'Barcode Labels',
      tag: 'Thermal Rolls',
      image: PRODUCT_IMAGES[15].url
    }
  ];

  useEffect(() => {
    fetchProducts({ category: 'Stickers' })
      .then(res => {
        if (Array.isArray(res?.data)) {
          // Take top 8 sticker categories for homepage showcase
          setFeaturedStickers(res.data.slice(0, 8));
        }
      })
      .catch(() => setFeaturedStickers([]));
  }, []);

  return (
    <div>
      {/* 1. Hero Section with Integrated Product Showcase */}
      <section className="hero-section-integrated">
        {/* Subtle decorative circles */}
        <div className="hero-radial-bg" />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <span className="badge hero-badge-style">
            STICKER & PACKAGING SOLUTIONS
          </span>

          {/* Heading */}
          <h1 className="hero-main-heading">
            Premium Sticker Manufacturing Solutions
          </h1>

          {/* Supporting description */}
          <p className="hero-subtext">
            Quality stickers, custom labels, and printing solutions for diverse business needs.
          </p>

          {/* Buttons */}
          <div className="hero-cta-buttons">
            <Link to="/products" className="btn btn-primary hero-btn-explore">
              Explore Our Products <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-secondary hero-btn-contact">
              Contact Us
            </Link>
          </div>

          {/* Integrated Hero Product Showcase Row */}
          <div className="hero-product-showcase-wrapper">
            <div className="hero-showcase-label">
              <Sparkles size={14} color="#93c5fd" />
              <span>Featured Manufacturing Collections</span>
            </div>

            <div className="hero-cards-grid">
              {heroShowcaseStickers.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/products?search=${encodeURIComponent(item.name.replace(/s$/i, ''))}`)}
                  className="hero-product-card"
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore ${item.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') navigate(`/products?search=${encodeURIComponent(item.name.replace(/s$/i, ''))}`);
                  }}
                >
                  <div className="hero-card-img-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="hero-card-img"
                      loading="eager"
                    />
                    <span className="hero-card-chip">{item.tag}</span>
                  </div>
                  <div className="hero-card-body">
                    <h3 className="hero-card-title">{item.name}</h3>
                    <span className="hero-card-link">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Showcase Section */}
      <section style={{ padding: '85px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <span className="badge">Featured Catalog</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '8px', color: '#0f172a' }}>
                Our Products
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '4px' }}>
                Specialized in premium industrial stickers, heat transfers, and branded labels.
              </p>
            </div>
            <Link
              to="/products"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="products-grid">
            {featuredStickers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/products" className="btn btn-secondary" style={{ padding: '12px 28px', fontSize: '1rem' }}>
              Browse All 16 Product Categories &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section style={{ padding: '85px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge">Why Sree Ganesh Linga</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '10px', color: '#0f172a' }}>
              Why Choose Sree Ganesh Linga
            </h2>
            <p style={{ color: '#64748b', maxWidth: '640px', margin: '8px auto 0', fontSize: '1.05rem' }}>
              Dedicated manufacturing capabilities, diverse sticker finishes, and responsive customer service.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            <div className="card" style={{ padding: '30px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Layers size={26} color="#2563eb" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '10px' }}>Diverse Product Options</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                From eco-friendly Non-PVC and Silicon HD to Foil, Reflective, and Vinyl stickers, we cover every branding specification.
              </p>
            </div>

            <div className="card" style={{ padding: '30px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <ShieldCheck size={26} color="#2563eb" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '10px' }}>Attention to Print Quality</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Sharp high-definition printing with durable adhesive bonding, fade resistance, and rich color accuracy.
              </p>
            </div>

            <div className="card" style={{ padding: '30px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Palette size={26} color="#2563eb" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '10px' }}>Materials & Finishes</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Choose across metallic foil stamping, glitter textures, matte/gloss PVC films, and 3D silicone finishes.
              </p>
            </div>

            <div className="card" style={{ padding: '30px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Sparkles size={26} color="#2563eb" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '10px' }}>Customization & Fast Support</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Custom die-cut profiles, tailored bulk dimensions, and direct WhatsApp enquiry handling for swift turnarounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Manufacturing & Material Showcase */}
      <section style={{ padding: '80px 0', background: '#f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="badge">Production & Quality</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginTop: '8px', color: '#0f172a' }}>
              Sticker Materials, Finishes & Formats
            </h2>
            <p style={{ color: '#64748b', maxWidth: '640px', margin: '6px auto 0', fontSize: '1rem' }}>
              Engineered to adhere across garments, plastic substrates, metallic surfaces, and retail packaging.
            </p>
          </div>

          <div className="materials-showcase-grid">
            <div className="material-card">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80"
                alt="Adhesive Label Sheets"
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '6px' }}>Adhesive Label Sheets</h4>
                <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Easy-peel kiss-cut sheets suited for fast manual labeling and merchandise.</p>
              </div>
            </div>

            <div className="material-card">
              <img
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80"
                alt="Continuous Sticker Rolls"
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '6px' }}>Continuous Rolls</h4>
                <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Automated dispenser-ready barcode and sizing sticker rolls on standard core sizes.</p>
              </div>
            </div>

            <div className="material-card">
              <img
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80"
                alt="Metallic Foil & Specialty Finishes"
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '6px' }}>Metallic Foil & Glitters</h4>
                <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Reflective gold, silver, and sparkling effects for premium brand distinction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact & Enquiry CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        color: 'white',
        padding: '65px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 800, marginBottom: '14px' }}>
            Need Custom Stickers or Packaging for Your Brand?
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '28px', lineHeight: 1.6 }}>
            Reach out to Sree Ganesh Linga for custom dimensions, bulk orders, sample inquiries, and pricing quotations.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '12px 28px', fontSize: '1rem', fontWeight: 700 }}>
              <Send size={16} /> Send Online Enquiry
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hello%20Sree%20Ganesh%20Lingha,%20I%20would%20like%20to%20enquire%20about%20your%20sticker%20manufacturing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '12px 28px', fontSize: '1rem', fontWeight: 700 }}
            >
              <PhoneCall size={16} /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
