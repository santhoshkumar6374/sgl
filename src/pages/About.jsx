import { Target, Eye, Layers, Palette, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#93c5fd', marginBottom: '12px' }}>
            About Sree Ganesh Linga
          </span>
          <h1>Sticker Manufacturing & Packaging Specialists</h1>
          <p>
            Dedicated manufacturer and supplier of non-PVC, silicone, high-definition, vinyl, and specialty foil stickers, labels, and packaging trims.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '80px' }}>
        {/* Story Section */}
        <section style={{ marginBottom: '70px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="badge">Our Expertise</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '14px 0 20px', color: '#0f172a' }}>
                Delivering High-Quality Sticker & Brand Identification Solutions
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px' }}>
                Sree Ganesh Linga is a professional sticker manufacturing company specializing in high-precision adhesive transfers, decorative garment stickers, waterproof vinyl decals, and industrial packaging solutions.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8 }}>
                With a strong commitment to clean print clarity, durable adhesive formulations, and eco-friendly non-PVC / phthalate-free materials, we serve businesses looking for reliable product labeling, apparel branding, and packaging supplies.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"
                alt="Precision Printing and Quality Inspection"
                style={{ borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', width: '100%', height: '360px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '70px' }}>
          <div className="card" style={{ padding: '36px', background: 'white' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Target size={28} color="#2563eb" />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: '#0f172a' }}>Our Mission</h3>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
              To provide businesses and apparel brands with durable, visually captivating, and compliant stickers and packaging trims that elevate their brand identity.
            </p>
          </div>

          <div className="card" style={{ padding: '36px', background: 'white' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Eye size={28} color="#2563eb" />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: '#0f172a' }}>Our Vision</h3>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
              To be the trusted regional leader in sustainable sticker printing, innovative material finishes, and dependable bulk order fulfillment.
            </p>
          </div>
        </section>

        {/* Core Strengths */}
        <section style={{ background: '#f1f5f9', padding: '50px 40px', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, textAlign: 'center', marginBottom: '40px', color: '#0f172a' }}>
            Our Manufacturing & Supply Strengths
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <Palette size={24} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Comprehensive Finishes</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Foil, glitter, 3D silicone, matte vinyl, and reflective materials.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <ShieldCheck size={24} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Eco & Safe Formulations</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Phthalate-free and non-PVC sticker options tailored for safety compliance.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <Layers size={24} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Custom Sizing & Shapes</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Tailored die-cuts, sheets, and continuous roll supplies for bulk dispatch.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <HeartHandshake size={24} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Customer-Focused Service</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Fast sample prototyping, clear communication, and WhatsApp enquiry support.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
