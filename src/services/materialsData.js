/**
 * Sree Ganesh Linga (SGL) - Raw Materials & Manufacturing Components Data
 * 
 * IMPORTANT:
 * SGL uses curated industrial materials for garment heat transfer printing,
 * stickers, labels, tapes, ropes, and packaging.
 * The records below represent proposed sample specifications and industrial standards.
 * Supplier names, origin locations, and compliance claims are explicitly marked
 * as pending client/laboratory verification until confirmed by SGL.
 */

export const MATERIAL_CATEGORIES = [
  {
    id: 'heat-transfer-films',
    name: 'Heat Transfer Films',
    shortDesc: 'Engineered polymeric films and release liners for thermal textile transfer and garment decoration.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    itemCount: 5,
    highlight: 'Elastic, wash-durable, precision-cut'
  },
  {
    id: 'printing-materials',
    name: 'Printing Materials',
    shortDesc: 'High-solids textile water screen inks, silicone formulations, and heat-activated pigments.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
    highlight: 'Vivid gamut, high elongation, soft hand'
  },
  {
    id: 'sticker-label-materials',
    name: 'Sticker and Label Materials',
    shortDesc: 'Pressure-sensitive facestocks, release liners, barcode label papers, and protective laminates.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    itemCount: 5,
    highlight: 'Aggressive tack, tear-resistant, barcode grade'
  },
  {
    id: 'silicone-specialty',
    name: 'Silicone and Specialty Materials',
    shortDesc: '3D dimensional silicone rubber bases, high-density polymers, and soft-touch tactile coatings.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    itemCount: 3,
    highlight: '3D raised relief, thermal stability, non-cracking'
  },
  {
    id: 'packaging-materials',
    name: 'Packaging Materials',
    shortDesc: 'Virgin kraft paper, fluted corrugated board, carton sealing adhesive tapes, and protective polybags.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
    highlight: 'High burst factor, transit-grade, moisture barrier'
  },
  {
    id: 'garment-trim-materials',
    name: 'Garment Trim Materials',
    shortDesc: 'Fine damask weaving yarns, bonded sewing threads, herringbone cotton tapes, and fusible backings.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    itemCount: 4,
    highlight: 'Skin-soft edges, colorfast, tensile strength'
  }
];

export const MATERIALS_LIST = [
  // --- Category 1: Heat Transfer Films ---
  {
    id: 'pu-transfer-film',
    name: 'PU Heat Transfer Film',
    category: 'Heat Transfer Films',
    categoryId: 'heat-transfer-films',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    summary: 'Flexible polyurethane film engineered for garment decoration with soft hand-feel and high elasticity.',
    description: 'A premium polyurethane-based elastomeric film commonly utilized in heat-transfer decoration for sportswear, activewear, and fashion apparel. Designed for sharp plotter cutting and reliable heat activation.',
    properties: [
      'Flexible finish with high rebound elasticity',
      'Ultra-thin profile with featherlight garment hand-feel',
      'Wash durability tested across multi-cycle laundry',
      'Heat press activation range: 140°C – 160°C'
    ],
    applications: [
      'T-shirts & casual jersey wear',
      'High-performance sportswear & team jerseys',
      'Garment brand heat-seal neck labels',
      'Stretchable technical fabrics'
    ],
    usedInProducts: [
      'Non-PVC Sticker',
      'Water-Based HD Sticker',
      'Cut Colour Sticker'
    ],
    colorsFinishes: [
      'Matte White & Deep Black',
      'Standard Pantone shades',
      'Fluorescent / Neon tones',
      'Custom color formulations (on batch order)'
    ],
    advantages: [
      'Zero hand-feel stiffness on lightweight fabrics',
      'Non-cracking under repetitive stretch stresses',
      'Crisp plotter cutting and effortless waste weeding',
      'Compatible with automated pneumatic heat presses'
    ],
    environmentalSafety: 'Sample specification pending laboratory/client confirmation. Chemical composition formulated to minimize volatile organic compounds (VOCs). Buyer RSL compliance must be validated per production batch.',
    sourcingStatus: 'Pending verification (Supplier details available on request)',
    isSampleData: true
  },
  {
    id: 'pet-carrier-film',
    name: 'PET Carrier Release Liner',
    category: 'Heat Transfer Films',
    categoryId: 'heat-transfer-films',
    image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=800&q=80',
    summary: 'Thermally stable polyester carrier film providing precise release tension during heat-press transfer.',
    description: 'High-tensile polyethylene terephthalate (PET) carrier sheet coated with specialized release agents. Serves as the dimensional backbone for printing multi-color heat transfer stickers and hot/cold peel applications.',
    properties: [
      'High thermal resistance without shrink distortion',
      'Precision siliconized release coating tension',
      'Caliper thickness consistency: 75 – 100 microns',
      'Available in hot-peel and cold-peel release dynamics'
    ],
    applications: [
      'Sheet-fed and roll-to-roll screen transfer printing',
      'Garment heat transfer backing sheets',
      'Precision plotter cut alignment tape',
      'Offset photo-print transfer carrier'
    ],
    usedInProducts: [
      'Photo Print Sticker',
      'Non-PVC Sticker',
      'Phthalate-Free HD Sticker'
    ],
    colorsFinishes: [
      'Clear Transparent Gloss',
      'Matte Frost / Translucent',
      'Static-treated backing'
    ],
    advantages: [
      'Maintains pinpoint registration during multi-color print passes',
      'Smooth, non-stick release leaving zero residue on fabric',
      'Prevents curling during high-temperature oven drying'
    ],
    environmentalSafety: 'Sample record: Standard recyclable polyester carrier liner. Disposed release sheets can be segregated into commercial plastic recycling streams subject to local regulations.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'vinyl-transfer-film',
    name: 'Plotter-Cut Heat Transfer Vinyl (HTV)',
    category: 'Heat Transfer Films',
    categoryId: 'heat-transfer-films',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    summary: 'High-opacity vinyl film engineered for sharp computer cutting, numbers, and graphic apparel lettering.',
    description: 'Versatile solid-color transfer vinyl backed with a sticky carrier film, engineered for sports jersey personalization, custom typography, and corporate apparel branding without printing plates.',
    properties: [
      'Complete color opacity across dark textiles',
      'Medium-tack pressure-sensitive adhesive carrier',
      'Compatible with standard 45° and 60° cutting blades',
      'Rapid transfer dwell time (10–12 seconds)'
    ],
    applications: [
      'Athletic team uniforms & player numbers',
      'Workwear and industrial uniforms',
      'Custom promotional hoodies and polo shirts',
      'Bags, caps, and canvas accessories'
    ],
    usedInProducts: [
      'Cut Colour Sticker',
      'Vinyl Sticker'
    ],
    colorsFinishes: [
      'Standard solid primary & secondary colors',
      'Metallic Gold, Silver, Bronze',
      'High-visibility Safety Orange & Yellow'
    ],
    advantages: [
      'Zero setup plate cost for short-run personalized orders',
      'Crisp, sharp-edged typography with zero ink bleed',
      'Reliable adhesion on 100% cotton, polyester, and blends'
    ],
    environmentalSafety: 'Sample specification: Plasticized vinyl grades subject to lead and phthalate compliance validation. Heavy metal-free specifications available upon technical inquiry.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'reflective-transfer-film',
    name: 'Reflective Transfer Materials',
    category: 'Heat Transfer Films',
    categoryId: 'heat-transfer-films',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
    summary: 'Retroreflective micro-glass bead film delivering radiant illumination in low-light and night conditions.',
    description: 'Micro-prismatic glass bead technology encapsulated within heat-activated adhesive polymers. Reflects light beams directly back to light sources, dramatically enhancing wearer visibility and nighttime safety.',
    properties: [
      'High retroreflective coefficient (up to 400+ cd/lx/m²)',
      'Bonded hot-melt adhesive backing for textile fusion',
      'Abrasion and wash resistant reflective layer',
      'Tested against domestic laundering protocols'
    ],
    applications: [
      'High-visibility industrial safety jackets & vests',
      'Running, cycling, and fitness apparel accents',
      'Emergency responder apparel trims',
      'Reflective corporate and brand logos'
    ],
    usedInProducts: [
      'Reflective Sticker'
    ],
    colorsFinishes: [
      'Classic Metallic Silver / Grey',
      'Reflective Rainbow / Iridescent finish',
      'Neon High-Vis Reflective Yellow'
    ],
    advantages: [
      'Substantially boosts personal safety in dark or low-visibility work environments',
      'Clean die-cutting into intricate geometric logos and safety stripes',
      'Strong bonding across waterproof coated nylon and polyester fabrics'
    ],
    environmentalSafety: 'Sample record: Conforms to indicative industrial high-visibility reflective standards. Photometric performance depends on substrate and press parameters.',
    sourcingStatus: 'Pending verification (Supplier details available on request)',
    isSampleData: true
  },
  {
    id: 'glitter-foil-film',
    name: 'Glitter and Metallic Foil Transfer Materials',
    category: 'Heat Transfer Films',
    categoryId: 'heat-transfer-films',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
    summary: 'Textured sparkle flake and hot-stamped metallic films engineered for luxury retail embellishments.',
    description: 'Specialty visual-effects films comprising microscopic metallic flakes and vacuum-metalized aluminum layers. Delivers shimmering, high-luster light reflection for fashion garments, boutique tags, and lifestyle packaging.',
    properties: [
      'Textured touch with embedded non-shedding sparkle particles',
      'High mirror specular reflectance on metallic foils',
      'Multi-wash stability without glitter detachment',
      'Sharp edge retention under heated stamp dies'
    ],
    applications: [
      'Fashion retail apparel & eveningwear graphics',
      'Childrenswear and boutique lifestyle designs',
      'Cosmetics and luxury packaging sticker trims',
      'Special edition promotional garments'
    ],
    usedInProducts: [
      'Foil Sticker',
      'Glitter Sticker'
    ],
    colorsFinishes: [
      'Mirror Gold, Rose Gold, Chrome Silver',
      'Holographic Rainbow Foil',
      'Sparkle Glitter Red, Blue, Emerald, Multi-color'
    ],
    advantages: [
      'Striking shelf appeal and distinctive luxury visual differentiation',
      'High wash integrity with proprietary encapsulation resin',
      'Compatible with both heat transfer and roll label die-cutters'
    ],
    environmentalSafety: 'Sample specification: Formaldehyde-free adhesive formulations. Test certificates for toy and apparel safety to be validated per client requirement.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },

  // --- Category 2: Printing Materials ---
  {
    id: 'water-based-inks',
    name: 'Water-Based Printing Inks',
    category: 'Printing Materials',
    categoryId: 'printing-materials',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    summary: 'High-solids water-based emulsion inks delivering ultra-soft hand feel, breathability, and vivid color rendition.',
    description: 'Eco-conscious textile screen printing inks featuring water as the primary solvent carrier. Provides soft hand feel, superb fabric penetration, and zero heavy PVC texture on natural and blended textiles.',
    properties: [
      'Low viscosity for high-mesh screen detail resolution',
      'Soft breathable hand feel indistinguishable from garment weave',
      'Thermal curing temperature: 130°C – 150°C',
      'Excellent wet and dry crock fastness'
    ],
    applications: [
      'Organic cotton t-shirts and infants apparel',
      'High-detail graphic illustration prints',
      'Direct garment transfer labels',
      'Sustainable fashion collections'
    ],
    usedInProducts: [
      'Water-Based HD Sticker',
      'Non-PVC Sticker'
    ],
    colorsFinishes: [
      'Pantone Matching System (PMS) color mixing',
      'Matte natural finish',
      'Semi-opaque and discharge formulations'
    ],
    advantages: [
      'Breathable print surface that moves naturally with fabric',
      'Minimal odor and reduced factory air emissions during curing',
      'Compliant with modern international apparel retailer RSL standards'
    ],
    environmentalSafety: 'Sample record: Low VOC water-based base. Official compliance certificates (e.g. ZDHC level or OEKO-TEX Eco Passport) must be confirmed per ink supplier batch.',
    sourcingStatus: 'Pending verification (Supplier details available on request)',
    isSampleData: true
  },
  {
    id: 'silicone-inks',
    name: 'High-Density Silicone Inks',
    category: 'Printing Materials',
    categoryId: 'printing-materials',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    summary: 'Two-part liquid silicone printing formulation for high-density 3D embossed tactile graphics.',
    description: 'Advanced polydimethylsiloxane-based inks specifically engineered for building three-dimensional relief emblems on performance sports fabrics. Unaffected by extreme heat, sweat, or athletic flexing.',
    properties: [
      'Thixotropic rheology allowing vertical edge ink build-up',
      'Exceptional elongation (>300%) with 100% memory rebound',
      'Thermal stability resisting ironing temperatures',
      'High bonding tenacity on synthetic Lycra and polyester blends'
    ],
    applications: [
      '3D raised sports crests & athletic club badges',
      'Anti-slip silicone grip printing on socks & gloves',
      'Seamless activewear waistband branding',
      'Technical swimwear and wetsuit embellishments'
    ],
    usedInProducts: [
      'Silicon HD Sticker'
    ],
    colorsFinishes: [
      'High Gloss & Matte Velvet silicone finishes',
      'Translucent gel and solid high-pigment shades',
      'Metallic and glow-in-the-dark silicone variants'
    ],
    advantages: [
      'Luxurious rubberized 3D tactile dimension',
      'Never cracks, peels, or hardens even after repeated commercial washes',
      'Zero migration on sensitive sublimated polyester fabrics'
    ],
    environmentalSafety: 'Sample specification: Free of alkylphenol ethoxylates (APEO) and organotins. Supplier material safety data sheets (MSDS) provided on project review.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'heat-transfer-inks',
    name: 'Heat-Transfer Printing Inks',
    category: 'Printing Materials',
    categoryId: 'printing-materials',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    summary: 'Specialized transfer formulations for screen and offset printing onto release carriers.',
    description: 'Engineered inks tailored for printing onto PET carrier liners and release transfer papers. Developed with high pigment load and controlled tackiness to bind effortlessly with thermoplastic transfer adhesive powders.',
    properties: [
      'Fast surface gelling for sharp multi-color trapping',
      'High pigment dispersion for intense opacity',
      'Balanced mechanical flexibility preventing transfer fractures',
      'Excellent compatibility with hot-melt polyurethanes'
    ],
    applications: [
      'Plastisol and hybrid transfer manufacturing',
      'Garment care & size neck labels',
      'Promotional corporate apparel transfers',
      'Multi-color illustrative heat stickers'
    ],
    usedInProducts: [
      'Phthalate-Free HD Sticker',
      'Photo Print Sticker'
    ],
    colorsFinishes: [
      'Standard high-opacity CMYK process inks',
      'Custom spot color library matches',
      'High-opacity white transfer underbases'
    ],
    advantages: [
      'Precise registration control on automated screen carousel lines',
      'Long open screen time preventing stencil clogging in factory conditions',
      'Uniform powder adhesive pickup for consistent peel strength'
    ],
    environmentalSafety: 'Sample record: Phthalate-free and non-lead formulations available upon specification. Chemical verification subject to factory lot testing.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'pigments-additives',
    name: 'Pigments and Printing Additives',
    category: 'Printing Materials',
    categoryId: 'printing-materials',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    summary: 'Fine organic colorants, rheology modifiers, catalysts, and crosslinking agents for high-performance ink compounding.',
    description: 'Crucial auxiliary compounding components that adjust viscosity, adhesion promoters, anti-bleed barrier qualities, and color strength to adapt ink performance to diverse textile substrates.',
    properties: [
      'High lightfastness and weather resistance ratings',
      'Low foaming surfactants and precise rheology modifiers',
      'Active crosslinkers enhancing chemical wash resistance',
      'Anti-migration blocking agents for sublimated dyes'
    ],
    applications: [
      'Custom color compounding for brand identity matching',
      'Dye-migration blocker undercoats on dark polyester',
      'Adhesion promoter additives for nylon and ripstop',
      'Viscosity stabilization in tropical climates'
    ],
    usedInProducts: [
      'Non-PVC Sticker',
      'Phthalate-Free HD Sticker',
      'Water-Based HD Sticker'
    ],
    colorsFinishes: [
      'Concentrated aqueous pigment dispersions',
      'Liquid crosslinking catalysts',
      'Sublimation blocking carbon-black paste'
    ],
    advantages: [
      'Enables exact Pantone color tolerances (Delta E < 1.0)',
      'Prevents dye bleeding into white and pale graphics on poly sportswear',
      'Extends screen stencil life during long manufacturing runs'
    ],
    environmentalSafety: 'Sample specification: Formulated without banned heavy metals (Cadmium, Lead, Hexavalent Chromium). Documentation available upon supplier audit.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },

  // --- Category 3: Sticker and Label Materials ---
  {
    id: 'polyester-films',
    name: 'Polyester (PET) Label Films',
    category: 'Sticker and Label Materials',
    categoryId: 'sticker-label-materials',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    summary: 'Tough, dimensionally stable film facestock for heavy-duty industrial asset tags, apparel seals, and outdoor stickers.',
    description: 'High-performance polyester film engineered to withstand extreme temperatures, moisture, oil, and aggressive handling without shrinking, tearing, or yellowing.',
    properties: [
      'Tensile strength resisting manual tearing',
      'Temperature tolerance: -40°C to +150°C',
      'Top-coated surface accepting flexo, thermal, and digital UV inks',
      'Chemical and solvent splash resistance'
    ],
    applications: [
      'Industrial equipment nameplates and serial tags',
      'Outdoor branding and automotive decals',
      'Apparel size stickers and garment swing tag seals',
      'Barcode tracking labels in harsh warehousing'
    ],
    usedInProducts: [
      'Vinyl Sticker',
      'Barcode & Size Stickers'
    ],
    colorsFinishes: [
      'Bright Gloss White & Matte White',
      'Silver Brushed Metal & Chrome',
      'Crystal Clear Transparent'
    ],
    advantages: [
      'Will not shrink or expose adhesive halo edges over time',
      'Crisp high-resolution thermal transfer barcode scanning',
      'Superior dimensional stability across variable humidity'
    ],
    environmentalSafety: 'Sample specification: REACH compliant PET facestock. Recyclability guidelines subject to end-product substrate compatibility.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'paper-label-stock',
    name: 'Coated Paper Label Stock',
    category: 'Sticker and Label Materials',
    categoryId: 'sticker-label-materials',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    summary: 'Smooth machine-coated semi-gloss and woodfree paper for economical product labeling and inventory stickers.',
    description: 'High-brightness paper facestock providing excellent ink receptivity for vivid retail packaging labels, garment size markers, and fast logistics dispatch tags.',
    properties: [
      'Smooth uniform calendered surface for dot sharpness',
      'Basis weight: 80 – 90 GSM',
      'Fast ink absorption minimizing smudging on roll printers',
      'Clean die-cutting and matrix stripping performance'
    ],
    applications: [
      'Garment packaging bag stickers',
      'Box sealing and dispatch address labels',
      'Retail price stickers and promotional flashes',
      'Apparel sizing dots'
    ],
    usedInProducts: [
      'Barcode & Size Stickers',
      'Other Packaging Items'
    ],
    colorsFinishes: [
      'Semi-Gloss Super Calendered White',
      'Matte Uncoated Woodfree Paper',
      'Fluorescent Bright Yellow / Orange / Pink'
    ],
    advantages: [
      'Highly economical for high-volume consumer product labeling',
      'Exceptional print contrast for fast optical barcode scanning',
      'Compatible with direct thermal and flexographic roll presses'
    ],
    environmentalSafety: 'Sample record: Wood pulp sourced from responsibly managed forests. FSC chain-of-custody status pending supplier batch verification.',
    sourcingStatus: 'Pending verification (Supplier details available on request)',
    isSampleData: true
  },
  {
    id: 'adhesive-materials',
    name: 'Industrial Adhesives & Hot-Melts',
    category: 'Sticker and Label Materials',
    categoryId: 'sticker-label-materials',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
    summary: 'Solvent acrylic, water-borne emulsions, and thermoplastic hot-melt adhesives engineered for permanent bonding.',
    description: 'Formulated bonding chemistries tailored to adhere across demanding surfaces, from textured corrugated boxes and low-surface-energy polybags to natural textile fibers.',
    properties: [
      'High initial tack (quick-stick) on rough substrates',
      'High shear strength resisting edge lift',
      'Removable and permanent adhesive chemistry grades',
      'Polyurethane and polyamide hot-melt powder variants'
    ],
    applications: [
      'Roll label pressure-sensitive adhesive coating',
      'Thermoplastic powder backings for heat transfer stickers',
      'Permanent box sealing tapes',
      'Garment size sticker peelable adhesives'
    ],
    usedInProducts: [
      'PVC Film Sticker',
      'Non-PVC Sticker',
      'Barcode & Size Stickers'
    ],
    colorsFinishes: [
      'Crystal Clear Water-White Acrylic',
      'High-Tack Amber Rubber-Based',
      'Thermo-fusible white crystalline powder'
    ],
    advantages: [
      'Prevents sticker peeling in cold storage or humid shipping containers',
      'Clean residue-free removal on delicate apparel fabrics (for removable grades)',
      'Uniform adhesive coat weight across master roll widths'
    ],
    environmentalSafety: 'Sample record: Water-based acrylic adhesives formulated with low solvent emissions. Formaldehyde-free formulation available on request.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'barcode-label-stock',
    name: 'Thermal Barcode Label Stock',
    category: 'Sticker and Label Materials',
    categoryId: 'sticker-label-materials',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    summary: 'Direct thermal and thermal-transfer printable paper and synthetic rolls for inventory and SKU barcodes.',
    description: 'Precision roll stock treated with heat-sensitive leuco dye layers or specialized thermal-transfer receptivity coatings. Designed for barcode scanners, warehouse RFID integration, and supply chain tracking.',
    properties: [
      'High optical contrast for 1D and 2D QR code scanning',
      'Heat-sensitive coating triggering at standard printer temperatures',
      'Top-coated protection against oil, water, and plasticizer contact',
      'Standard 25mm, 40mm, and 76mm roll core configurations'
    ],
    applications: [
      'Apparel SKU and inventory barcode labels',
      'Shipping and logistics carton tracking labels',
      'Garment inspection stickers',
      'Retail shelf-edge price labels'
    ],
    usedInProducts: [
      'Barcode & Size Stickers'
    ],
    colorsFinishes: [
      'High-Contrast Pure White',
      'Color-coded flood-coated rolls (Pastel tint options)'
    ],
    advantages: [
      'Ensures 99.9% first-time barcode scanner read rates',
      'Reduces printhead wear on thermal desktop and industrial printers',
      'Perforated liner gaps for clean operator handling and tear-off'
    ],
    environmentalSafety: 'Sample specification: BPA-free and BPS-free thermal paper options available. Verification required on client ordering specifications.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'protective-laminates',
    name: 'Protective Overlaminate Films',
    category: 'Sticker and Label Materials',
    categoryId: 'sticker-label-materials',
    image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=800&q=80',
    summary: 'Transparent self-adhesive polypropylene and polyester barrier films protecting graphics from abrasions and chemicals.',
    description: 'Ultra-clear protective top films laminated over printed stickers to shield artwork against friction, solvents, weather, and UV fading while enhancing visual gloss or velvety matte elegance.',
    properties: [
      'High optical clarity with zero cloudiness',
      'UV-inhibitor additives minimizing sun fading',
      'Scratch, scuff, and moisture barrier properties',
      'Thickness: 25 to 50 microns'
    ],
    applications: [
      'High-end cosmetic sticker packaging',
      'Industrial machinery identification stickers',
      'Outdoor durable vinyl decals',
      'Luggage and equipment branding badges'
    ],
    usedInProducts: [
      'Vinyl Sticker',
      'PVC Film Sticker'
    ],
    colorsFinishes: [
      'High Gloss Mirror Finish',
      'Satin Matte Anti-Glare Finish',
      'Soft-Touch Velvet Feel'
    ],
    advantages: [
      'Dramatically extends outdoor life of printed graphics',
      'Imparts premium depth of field and color saturation',
      'Eliminates fingerprint smudging and grease marks'
    ],
    environmentalSafety: 'Sample record: Standard BOPP and PET overlaminates. Recyclability guidelines subject to composite substrate validation.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },

  // --- Category 4: Silicone and Specialty Materials ---
  {
    id: 'silicone-compounds',
    name: 'Liquid Silicone Rubber (LSR) Base',
    category: 'Silicone and Specialty Materials',
    categoryId: 'silicone-specialty',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    summary: 'Platinum-cure liquid silicone rubber base delivering unmatched flexibility, heat resistance, and skin safety.',
    description: 'Two-component platinum-catalyzed liquid silicone rubber engineered for precision micro-molding and heat transfer patches. Inherently inert, hypoallergenic, and impervious to weather and laundry cycles.',
    properties: [
      'Platinum-cure crosslinking with zero toxic byproducts',
      'Shore hardness range: 30A to 60A',
      'Extreme thermal resistance (-50°C to +200°C)',
      '100% elastic recovery under intense fabric stretching'
    ],
    applications: [
      'Molded 3D silicone apparel emblems',
      'Textured zipper pull tabs and cuff adjusters',
      'Performance athletic wear heat-weld patches',
      'Hypoallergenic childrenswear brand labels'
    ],
    usedInProducts: [
      'Silicon HD Sticker'
    ],
    colorsFinishes: [
      'Water-clear transparent base',
      'Custom pigmented opaque and translucent shades',
      'Matte vulcanized surface finish'
    ],
    advantages: [
      'Inert chemistry completely safe for direct skin contact',
      'Will never melt under domestic iron or clothes dryer',
      'Premium rubberized soft tactile sensory experience'
    ],
    environmentalSafety: 'Sample specification: Food-grade and medical-grade base chemistries available. Independent laboratory skin sensitivity tests subject to client order confirmation.',
    sourcingStatus: 'Pending verification (Supplier details available on request)',
    isSampleData: true
  },
  {
    id: 'hd-silicone-materials',
    name: 'High-Density 3D Silicone Formulations',
    category: 'Silicone and Specialty Materials',
    categoryId: 'silicone-specialty',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    summary: 'High-build thixotropic silicone pastes for sharp-edged multi-layer screen printed garment transfers.',
    description: 'Specially engineered silicone printing paste with high vertical wall-building capacity. Enables screen printers to achieve crisp 0.5mm to 2.0mm raised badges with sharp vertical 90-degree side walls.',
    properties: [
      'Thixotropic paste that holds sharp stencil contours without sagging',
      'Rapid hot-air skinning between print strokes',
      'Exceptional wash fastness on nylon, polyester, and cotton',
      'Permanent adhesion when cured with silicone bonding primers'
    ],
    applications: [
      'High-end football and sports jersey club crests',
      '3D raised typography on streetwear hoodies',
      'Anti-slip technical grips on athletic apparel',
      'Dimensional brand badges for outerwear'
    ],
    usedInProducts: [
      'Silicon HD Sticker',
      'Phthalate-Free HD Sticker'
    ],
    colorsFinishes: [
      'Gloss 3D Wet-Look Finish',
      'Matte Architectural Soft Finish',
      'Metallic Gold, Silver, and Gunmetal Silicone'
    ],
    advantages: [
      'Achieves striking three-dimensional relief on thin stretch fabrics',
      'Will not crack, split, or turn brittle over time',
      'Blocks dye sublimation migration on polyester sportswear'
    ],
    environmentalSafety: 'Sample record: Free of PVC, phthalates, BPA, and heavy metals. Compliance with international apparel chemical restrictions to be confirmed per batch.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'specialty-coatings',
    name: 'Tactile & Barrier Specialty Coatings',
    category: 'Silicone and Specialty Materials',
    categoryId: 'silicone-specialty',
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80',
    summary: 'Polyurethane and acrylic coating compounds for soft-touch, anti-fray, and dye-blocking performance.',
    description: 'Functional liquid topcoats and undercoats formulated to modify the physical touch, barrier protection, and durability of garment trims, tapes, and heat transfer graphics.',
    properties: [
      'Soft-touch velvety tactile surface effect',
      'Anti-fray binding for cut ribbon and woven label edges',
      'Active dye-blocking charcoal barrier undercoats',
      'Waterproof hydrophobic surface repulsion'
    ],
    applications: [
      'Anti-dye migration barrier printing on polyester shirts',
      'Velvety soft-touch finish on labels and packaging',
      'Edge-sealing for slit woven ribbons and tapes',
      'High-friction anti-slip gripper coatings'
    ],
    usedInProducts: [
      'Non-PVC Sticker',
      'Woven / Printed Label'
    ],
    colorsFinishes: [
      'Clear invisible matte barrier',
      'Activated carbon grey/black anti-bleed paste'
    ],
    advantages: [
      'Prevents red and royal blue garment dyes from bleeding into white brand logos',
      'Enhances sensory tactile luxury for garment packaging trims',
      'Prolongs edge neatness on woven apparel accessories'
    ],
    environmentalSafety: 'Sample specification: Formaldehyde-free formulation. Specific toxicological reviews conducted upon commercial request.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },

  // --- Category 5: Packaging Materials ---
  {
    id: 'kraft-paper',
    name: 'High-Burst Kraft Paper',
    category: 'Packaging Materials',
    categoryId: 'packaging-materials',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    summary: 'High-burst strength unbleached natural kraft paper for eco-friendly apparel wrapping and transit sleeves.',
    description: 'Long-fiber kraft paper produced via sustainable sulfate pulping. Delivers remarkable puncture resistance, tensile stamina, and an organic aesthetic for modern garment brand packaging.',
    properties: [
      'High burst factor (BF 18 to 28)',
      'Basis weight range: 70 – 140 GSM',
      'Natural long-fiber virgin and semi-recycled grades',
      'Excellent printability for brand water-based flexo logos'
    ],
    applications: [
      'Garment inner wrapping tissue and craft sleeves',
      'Custom printed shopping and retail packaging bags',
      'Eco-friendly hang tag stock and swing tickets',
      'Protective cardboard interleaving sheets'
    ],
    usedInProducts: [
      'Other Packaging Items',
      'Non-PVC Sticker'
    ],
    colorsFinishes: [
      'Natural Golden Brown Kraft',
      'Bleached Pure White Kraft',
      'Ribbed / Rib-finish craft pattern'
    ],
    advantages: [
      '100% biodegradable, recyclable, and compostable packaging choice',
      'Elevates brand image with natural sustainable appeal',
      'Durable protection preventing apparel scuffs during shipping'
    ],
    environmentalSafety: 'Sample record: Renewable wood fiber pulp. FSC Chain-of-Custody or PEFC certification subject to client order specification.',
    sourcingStatus: 'Pending verification (Supplier details available on request)',
    isSampleData: true
  },
  {
    id: 'corrugated-materials',
    name: 'Fluted Corrugated Packaging Board',
    category: 'Packaging Materials',
    categoryId: 'packaging-materials',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    summary: '3-ply and 5-ply fluted corrugated board engineered for high stacking compression and transit protection.',
    description: 'Multi-layer packaging structure consisting of fluted corrugated medium sandwiched between durable linerboards. Designed to cushion sticker rolls, label reels, and garment trims throughout global logistics.',
    properties: [
      'Edge Crush Test (ECT) and Ring Crush Test verified',
      'Flute profiles: E-flute (fine mailers) & B/C-flute (outer cartons)',
      'High stacking compression strength under warehouse loads',
      'Moisture-resistant adhesive starch bonding'
    ],
    applications: [
      'Master export shipper cartons for garment trims',
      'Die-cut ecommerce mailer boxes for apparel',
      'Internal protective roll dividers and core cradles',
      'Pallet edge protectors'
    ],
    usedInProducts: [
      'Other Packaging Items'
    ],
    colorsFinishes: [
      'Classic Brown Kraft Outer Liner',
      'White Top Coated Testliner for crisp exterior graphics'
    ],
    advantages: [
      'Exceptional shock absorption during freight handling',
      'Protects delicate heat transfer rolls from edge crushing',
      'Manufactured with high post-consumer recycled paper content'
    ],
    environmentalSafety: 'Sample specification: Starch-based vegetable adhesives, fully recyclable with standard corrugated scrap streams.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'adhesive-tapes',
    name: 'BOPP Industrial Packaging Tapes',
    category: 'Packaging Materials',
    categoryId: 'packaging-materials',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    summary: 'Biaxially oriented polypropylene (BOPP) tape with aggressive pressure-sensitive adhesive for secure carton closure.',
    description: 'High-tensile packaging tape formulated for automated and manual carton sealing. Maintains reliable bonding across recycled corrugated boxes in fluctuating temperature and humidity.',
    properties: [
      'Tensile elongation resisting longitudinal tape splitting',
      'Solvent-free water-based acrylic or synthetic rubber adhesive',
      'Thickness options: 40 to 55 microns',
      'Custom flexo-printable backing for tamper-evident brand sealing'
    ],
    applications: [
      'Master shipping carton top and bottom flap sealing',
      'Brand security and tamper-evident packaging closure',
      'Bundling trim spools and label rolls',
      'Export pallet wrapping reinforcement'
    ],
    usedInProducts: [
      'Other Packaging Items'
    ],
    colorsFinishes: [
      'Crystal Clear Transparent',
      'Industrial Brown / Tan',
      'Custom Printed Brand Logo Tape (Multi-color)'
    ],
    advantages: [
      'Immediate fiber-tear adhesion preventing pilferage during transit',
      'Smooth unwind tension for automatic taping machines',
      'High resistance against aging and UV adhesive degradation'
    ],
    environmentalSafety: 'Sample record: Solvent-free water-borne acrylic adhesives minimize VOC emissions. Disposal follows common plastic tape protocols.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'polybags-protective',
    name: 'Protective Garment Polybags & Sleeves',
    category: 'Packaging Materials',
    categoryId: 'packaging-materials',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    summary: 'Virgin and recycled LDPE/PP protective sleeves safeguarding apparel trims from moisture and dust.',
    description: 'Transparent polyethylene and polypropylene bags designed with self-adhesive resealable lip closures and safety warning perforations. Keeps delicate woven labels, zippers, and trims pristine until retail use.',
    properties: [
      'High optical clarity for rapid barcode scanning through the sleeve',
      'Thickness: 25 to 60 microns',
      'Resealable peel-and-seal adhesive strip',
      'Punched ventilation holes preventing trapped humidity'
    ],
    applications: [
      'Finished garment individual polybagging',
      'Protection for heat transfer sticker sheets',
      'Packaging for zipper bundles and cotton rope reels',
      'Retail hanging display garment bags'
    ],
    usedInProducts: [
      'Other Packaging Items',
      'Barcode & Size Stickers'
    ],
    colorsFinishes: [
      'Ultra-Clear Gloss Polypropylene',
      'Translucent Frosted Matte Recycled LDPE',
      'Printed child suffocation safety warning text'
    ],
    advantages: [
      'Total barrier against atmospheric moisture, dust, and stains',
      'Durable side-weld seals that resist bursting during compression packing',
      'Available in certified GRS (Global Recycled Standard) content options'
    ],
    environmentalSafety: 'Sample specification: Recycled post-consumer LDPE options available. Recycled content percentage subject to verified supplier transaction certificates.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },

  // --- Category 6: Garment Trim Materials ---
  {
    id: 'woven-yarns',
    name: 'Fine Damask Weaving Yarns',
    category: 'Garment Trim Materials',
    categoryId: 'garment-trim-materials',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    summary: 'High-density micro-denier polyester filament yarns for high-definition woven brand labels and emblems.',
    description: 'Ultra-fine filament yarns engineered for jacquard loom weaving. Allows reproduction of intricate brand typography, small details, and smooth gradient shades with soft non-irritating edge selvedges.',
    properties: [
      'Yarn denier: 50D, 75D, 100D, and 150D filament polyester',
      'Exceptional color fastness against washing and dry cleaning',
      'High tensile breaking strength on high-speed shuttleless looms',
      'Hot-wire, ultrasonic, or laser cut edge compatibility'
    ],
    applications: [
      'Main apparel neck damask woven labels',
      'Exterior woven brand hem tags and sleeve badges',
      'Care instruction and country-of-origin woven labels',
      'Jacquard woven ribbon trims'
    ],
    usedInProducts: [
      'Woven / Printed Label'
    ],
    colorsFinishes: [
      'Extensive library of pre-dyed Pantone color spools',
      'Metallic lurex gold, silver, and copper threads',
      'Matte micro-yarn and high-shine filament'
    ],
    advantages: [
      'Ultra-soft touch preventing skin itchiness at the garment neck',
      'Permanent brand identification that lasts the entire life of the apparel',
      'Ultrasonic cut edges prevent fraying and rough burrs'
    ],
    environmentalSafety: 'Sample record: Standard polyester yarn; recycled rPET yarn options available from certified spinners. Verification required on sample orders.',
    sourcingStatus: 'Pending verification (Supplier details available on request)',
    isSampleData: true
  },
  {
    id: 'nylon-poly-threads',
    name: 'Bonded Polyester & Nylon Threads',
    category: 'Garment Trim Materials',
    categoryId: 'garment-trim-materials',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    summary: 'High-tenacity bonded threads engineered for heavy-duty stitching, embroidery, and zipper assembly.',
    description: 'Precision lubricated multi-filament sewing threads possessing high tensile resistance and controlled elongation. Engineered to prevent skipped stitches and needle heating on industrial sewing machines.',
    properties: [
      'High tenacity continuous filament polyester or nylon 6.6',
      'Specialized silicone thread lubrication for cool needle running',
      'Resistance to friction, mildew, and laundering chemicals',
      'Consistent diameter throughout multi-thousand-meter cones'
    ],
    applications: [
      'Garment zipper tape topstitching and slider stop assembly',
      'Heavy-duty workwear and denim construction',
      'Attaching labels and woven patches onto apparel',
      'High-speed automated embroidery'
    ],
    usedInProducts: [
      'CFC & Vision Zippers',
      'Woven / Printed Label'
    ],
    colorsFinishes: [
      'Commercial garment shade card matching',
      'Optic White, Jet Black, Core Neutrals'
    ],
    advantages: [
      'Minimizes thread breakage and machine downtime on sewing floors',
      'Colorfast formulations resist bleaching and sunlight degradation',
      'Superior loop formation for secure, durable lockstitches'
    ],
    environmentalSafety: 'Sample specification: Low-friction lubricants compliant with REACH chemical directives. Verification records available on request.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'ribbons-tapes',
    name: 'Cotton Twill Tapes & Satin Ribbons',
    category: 'Garment Trim Materials',
    categoryId: 'garment-trim-materials',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    summary: 'Herringbone cotton twill tapes and single/double-faced satin ribbons for neck bindings, drawstrings, and luxury tags.',
    description: 'Densely woven textile bands engineered for comfort, structural reinforcement, and decorative appeal across casual garments, sports hoodies, and luxury retail gift wrapping.',
    properties: [
      '100% combed cotton or silky polyester satin weaves',
      'Width options: 6mm to 50mm',
      'Herringbone, plain twill, and grosgrain weave structures',
      'Pre-shrunk fabric stabilization reducing post-wash puckering'
    ],
    applications: [
      'Hoodie drawstrings and garment waist ties',
      'T-shirt neck tape reinforcement and seam coverage',
      'Printed satin brand care labels',
      'Luxury gift packaging ribbons and hang tag cords'
    ],
    usedInProducts: [
      'Cotton Tape & Ropes',
      'Woven / Printed Label'
    ],
    colorsFinishes: [
      'Natural Unbleached Ecru Cotton',
      'Custom reactive dyed apparel shades',
      'Lustrous high-gloss woven satin finish'
    ],
    advantages: [
      'Comfortable skin contact with zero harsh scratchiness',
      'Reinforces vulnerable garment seams against stretching out of shape',
      'Ideal absorbent ground for screen and rotary letterpress printing'
    ],
    environmentalSafety: 'Sample record: Combed natural cotton fiber. GOTS organic cotton or BCI sourcing available upon commercial verification.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  },
  {
    id: 'textile-backing',
    name: 'Fusible Interlinings & Heat-Seal Backings',
    category: 'Garment Trim Materials',
    categoryId: 'garment-trim-materials',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    summary: 'Thermoplastic non-woven and woven adhesive backings for iron-on patches and garment collar stabilization.',
    description: 'Engineered non-woven web coated with uniform thermoplastic adhesive dots (polyamide or EVA). Allows embroideries, woven badges, and fabric labels to be permanently ironed onto garments without sewing.',
    properties: [
      'Uniform adhesive dot coating preventing resin strike-through',
      'Heat-seal activation: 130°C – 150°C at 2–3 bar pressure',
      'Maintains dimensional stability and crispness after washing',
      'Breathable, lightweight non-woven matrix'
    ],
    applications: [
      'Iron-on woven and embroidered garment badges',
      'Collar, cuff, and button placket reinforcement',
      'Heat-seal adhesive backing for leather patches',
      'Edge sealing for delicate textile embellishments'
    ],
    usedInProducts: [
      'Woven / Printed Label',
      'Silicon HD Sticker'
    ],
    colorsFinishes: [
      'Clean Optical White',
      'Charcoal Grey & Jet Black',
      'Lightweight (35 GSM) to heavy-duty (100 GSM)'
    ],
    advantages: [
      'Streamlines garment assembly by replacing manual border stitching',
      'Withstands repeated commercial laundering cycles without delamination',
      'Maintains clean structural shape without stiffening the garment body'
    ],
    environmentalSafety: 'Sample specification: Formaldehyde-free hot-melt adhesive dots. Chemical validation subject to batch testing reports.',
    sourcingStatus: 'Pending verification',
    isSampleData: true
  }
];

// --- Section 4: Sourcing Table Data ---
export const SOURCING_RECORDS = [
  {
    id: 'src-1',
    material: 'PU Heat Transfer Film',
    supplier: 'To be confirmed',
    location: 'To be confirmed',
    origin: 'To be confirmed',
    status: 'Pending verification',
    leadTime: '3–7 business days',
    confidentiality: 'Supplier details available on request subject to commercial NDA',
    category: 'Heat Transfer Films'
  },
  {
    id: 'src-2',
    material: 'PET Carrier Release Liner',
    supplier: 'To be confirmed',
    location: 'To be confirmed',
    origin: 'To be confirmed',
    status: 'Pending verification',
    leadTime: '5–10 business days',
    confidentiality: 'Supplier details available on request',
    category: 'Heat Transfer Films'
  },
  {
    id: 'src-3',
    material: 'Water-Based Printing Inks',
    supplier: 'To be confirmed',
    location: 'To be confirmed',
    origin: 'To be confirmed',
    status: 'Pending verification',
    leadTime: '3–5 business days',
    confidentiality: 'Formulation partner details available on request',
    category: 'Printing Materials'
  },
  {
    id: 'src-4',
    material: 'Liquid Silicone Rubber & HD Silicone',
    supplier: 'To be confirmed',
    location: 'To be confirmed',
    origin: 'To be confirmed',
    status: 'Pending verification',
    leadTime: '7–14 business days',
    confidentiality: 'Specialty polymer lab details available on request',
    category: 'Silicone and Specialty Materials'
  },
  {
    id: 'src-5',
    material: 'Polyester & Vinyl Label Stock',
    supplier: 'To be confirmed',
    location: 'To be confirmed',
    origin: 'To be confirmed',
    status: 'Pending verification',
    leadTime: '4–7 business days',
    confidentiality: 'Roll converter information available on request',
    category: 'Sticker and Label Materials'
  },
  {
    id: 'src-6',
    material: 'Direct Thermal & Barcode Paper',
    supplier: 'To be confirmed',
    location: 'To be confirmed',
    origin: 'To be confirmed',
    status: 'Pending verification',
    leadTime: '3–5 business days',
    confidentiality: 'Paper roll distributor available on request',
    category: 'Sticker and Label Materials'
  },
  {
    id: 'src-7',
    material: 'High-Burst Kraft Paper & Corrugated Board',
    supplier: 'To be confirmed',
    location: 'To be confirmed',
    origin: 'To be confirmed',
    status: 'Pending verification',
    leadTime: '3–7 business days',
    confidentiality: 'Packaging paper mill partner available on request',
    category: 'Packaging Materials'
  },
  {
    id: 'src-8',
    material: 'Fine Damask Weaving Yarns',
    supplier: 'To be confirmed',
    location: 'To be confirmed',
    origin: 'To be confirmed',
    status: 'Pending verification',
    leadTime: '7–10 business days',
    confidentiality: 'Spinning mill shade cards available on request',
    category: 'Garment Trim Materials'
  }
];

// --- Section 5: Material-to-Product Relationships ---
export const MATERIAL_PRODUCT_RELATIONSHIPS = [
  {
    id: 'rel-1',
    materialId: 'pu-transfer-film',
    materialName: 'PU Heat Transfer Film',
    materialCategory: 'Heat Transfer Films',
    products: [
      { name: 'Non-PVC Sticker', query: 'Non-PVC Sticker', category: 'Stickers' },
      { name: 'Cut Colour Sticker', query: 'Cut Colour Sticker', category: 'Stickers' },
      { name: 'Water-Based HD Sticker', query: 'Water-Based HD Sticker', category: 'Stickers' }
    ],
    relationshipDescription: 'Forms the flexible, elastomeric base that transfers razor-sharp graphics onto cotton and polyester garments without heavy rubbery feel.'
  },
  {
    id: 'rel-2',
    materialId: 'reflective-transfer-film',
    materialName: 'Reflective Transfer Materials',
    materialCategory: 'Heat Transfer Films',
    products: [
      { name: 'Reflective Sticker', query: 'Reflective Sticker', category: 'Stickers' }
    ],
    relationshipDescription: 'Provides micro-glass retroreflective optical surfaces for safety jackets, running garments, and nighttime athletic trims.'
  },
  {
    id: 'rel-3',
    materialId: 'hd-silicone-materials',
    materialName: 'Silicone Inks & Compounds',
    materialCategory: 'Silicone and Specialty Materials',
    products: [
      { name: 'Silicon HD Sticker', query: 'Silicon HD Sticker', category: 'Stickers' }
    ],
    relationshipDescription: 'Enables 3D raised tactile relief badges with superior wash elasticity and thermal stability on sportswear.'
  },
  {
    id: 'rel-4',
    materialId: 'polyester-films',
    materialName: 'Polyester & Vinyl Label Stock',
    materialCategory: 'Sticker and Label Materials',
    products: [
      { name: 'Vinyl Sticker', query: 'Vinyl Sticker', category: 'Stickers' },
      { name: 'PVC Film Sticker', query: 'PVC Film Sticker', category: 'Stickers' },
      { name: 'Barcode & Size Stickers', query: 'Barcode & Size Stickers', category: 'Labels & Trims' }
    ],
    relationshipDescription: 'Supplies durable facestocks and aggressive pressure-sensitive adhesives for barcode tracking, apparel size dots, and outdoor stickers.'
  },
  {
    id: 'rel-5',
    materialId: 'glitter-foil-film',
    materialName: 'Glitter & Metallic Foil Materials',
    materialCategory: 'Heat Transfer Films',
    products: [
      { name: 'Foil Sticker', query: 'Foil Sticker', category: 'Stickers' },
      { name: 'Glitter Sticker', query: 'Glitter Sticker', category: 'Stickers' }
    ],
    relationshipDescription: 'Imparts sparkling textured luster and mirror-like hot-stamped gold/silver foils for premium retail tags and lifestyle graphics.'
  },
  {
    id: 'rel-6',
    materialId: 'woven-yarns',
    materialName: 'Woven Damask Yarns & Threads',
    materialCategory: 'Garment Trim Materials',
    products: [
      { name: 'Woven / Printed Label', query: 'Woven / Printed Label', category: 'Labels & Trims' },
      { name: 'Cotton Tape & Ropes', query: 'Cotton Tape & Ropes', category: 'Accessories' }
    ],
    relationshipDescription: 'Woven into skin-soft apparel neck labels, brand hem tags, herringbone twill tapes, and hoodie drawstrings.'
  },
  {
    id: 'rel-7',
    materialId: 'kraft-paper',
    materialName: 'Kraft Paper & Fluted Board',
    materialCategory: 'Packaging Materials',
    products: [
      { name: 'Other Packaging Items', query: 'Other Packaging Items', category: 'Packaging' }
    ],
    relationshipDescription: 'Engineered into protective shipping cartons, eco-friendly garment wrapping paper, and protective dispatch sleeves.'
  }
];

// --- Section 7: Quality & Verification Standards ---
export const QUALITY_PROCESSES = [
  {
    id: 'qp-1',
    stepNumber: '01',
    title: 'Incoming Material Inspection',
    shortDesc: 'Verification of substrate caliper, roll tension, surface energy, and release tension before production entry.',
    details: 'Each incoming lot of release liner, transfer film, and facestock undergoes micrometer gauge checks, Dyne pen surface wetting tests, and visual inspection for coating defects.'
  },
  {
    id: 'qp-2',
    stepNumber: '02',
    title: 'Batch Identification & Traceability',
    shortDesc: 'Internal lot coding assigned to every raw roll, ink batch, and adhesive canister.',
    details: 'Traceability tags link raw material rolls with specific production runs, press machines, and dispatch lots, enabling quick reverse audit if needed.'
  },
  {
    id: 'qp-3',
    stepNumber: '03',
    title: 'Print & Color Consistency Audits',
    shortDesc: 'Spectral Delta-E color evaluation against master digital swatch standards.',
    details: 'Color formulation spectrophotometers ensure consistent shade reproduction across repeat production orders under standard D65 daylight viewing cabinets.'
  },
  {
    id: 'qp-4',
    stepNumber: '04',
    title: 'Adhesion & Wash Durability Testing',
    shortDesc: 'Sample garment heat pressing followed by simulated laundry washing and stretch cycles.',
    details: 'Test swatches are subjected to standard home laundering water temperatures (40°C–60°C) and rub-fastness evaluations to verify adhesion bond integrity.'
  },
  {
    id: 'qp-5',
    stepNumber: '05',
    title: 'Material Documentation & TDS Files',
    shortDesc: 'Collection of technical data sheets (TDS) and safety data sheets (SDS) from raw suppliers.',
    details: 'Technical files detailing thermal curing windows, application pressures, recommended dwell times, and handling precautions are archived for customer reference.'
  },
  {
    id: 'qp-6',
    stepNumber: '06',
    title: 'Supplier Quality & Compliance Audits',
    shortDesc: 'Vendor evaluation agreements and commitment to buyer Restricted Substance Lists (RSL).',
    details: 'Suppliers are required to provide batch conformity declarations. SGL explicitly validates certifications with third-party testing labs on specific customer programs.'
  }
];

// Reusable helper to search and filter materials
export function filterMaterials({ search = '', category = 'All', application = 'All' } = {}) {
  let list = [...MATERIALS_LIST];

  if (category && category !== 'All') {
    list = list.filter(m => m.category.toLowerCase() === category.toLowerCase());
  }

  if (application && application !== 'All') {
    const appLower = application.toLowerCase();
    list = list.filter(m => 
      m.applications.some(a => a.toLowerCase().includes(appLower))
    );
  }

  if (search) {
    const q = search.toLowerCase().trim();
    list = list.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.summary.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.properties.some(p => p.toLowerCase().includes(q)) ||
      m.applications.some(a => a.toLowerCase().includes(q)) ||
      m.usedInProducts.some(p => p.toLowerCase().includes(q))
    );
  }

  return list;
}
