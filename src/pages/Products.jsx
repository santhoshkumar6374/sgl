import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { Search, Filter, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(urlSearch);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['All', 'Stickers', 'Labels & Trims', 'Accessories', 'Packaging'];

  // Sync state if URL search query changes
  useEffect(() => {
    setSearchQuery(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    loadProducts();
  }, [selectedCategory]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchProducts({
        category: selectedCategory === 'All' ? '' : selectedCategory
      });
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setError(err.message || 'Unable to retrieve products. Please check connection.');
    } finally {
      setLoading(false);
    }
  };

  // Client-side filtering & sorting for zero-latency, smooth transitions
  const processedProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q))
      );
    }

    return result;
  }, [products, searchQuery]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (!val) {
      setSearchParams({});
    }
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <div className="products-page-wrapper">
      {/* 1. Page Header with entrance animation */}
      <div className="page-header products-header-animated">
        <div className="container">
          <span className="badge header-badge-anim">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Official Product Catalog
          </span>
          <h1 className="header-title-anim">
            Precision Sticker Manufacturing & Custom Trims
          </h1>
          <p className="header-subtitle-anim">
            Engineered adhesive solutions, 3D silicone heat-transfers, reflective films, and garment packaging accessories.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '100px' }}>
        {/* 2. Interactive Toolbar with Search, Category Filter Tabs & Sorting */}
        <div className="products-toolbar-card">
          {/* Search Box */}
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon-fixed" />
            <input
              type="text"
              placeholder="Search by sticker finish, material, keyword..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input-field"
              aria-label="Search products"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="search-clear-btn"
                title="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="category-filter-group">
            <div className="filter-label">
              <Filter size={15} /> Categories:
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Result Count & Active Filters Indicator */}
        <div className="results-status-bar">
          <span className="results-count-text">
            Showing <strong>{processedProducts.length}</strong> {processedProducts.length === 1 ? 'product' : 'products'}
            {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
          </span>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSearchParams({});
              }}
              className="reset-filters-btn"
            >
              <RefreshCw size={13} /> Reset Filters
            </button>
          )}
        </div>

        {/* 4. Elegant Skeleton Loaders when fetching */}
        {loading && (
          <div className="products-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <div key={n} className="skeleton-card">
                <div className="skeleton-card-img" />
                <div className="skeleton-card-body">
                  <div className="skeleton-line skeleton-title" />
                  <div className="skeleton-line skeleton-text" />
                  <div className="skeleton-line skeleton-text short" />
                  <div className="skeleton-actions">
                    <div className="skeleton-btn" />
                    <div className="skeleton-btn" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. Friendly Error Display with Retry */}
        {error && !loading && (
          <div className="error-banner">
            <AlertCircle size={28} style={{ flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 4px', fontSize: '1.05rem' }}>Unable to load catalog</h4>
              <p style={{ margin: 0, fontSize: '0.92rem' }}>{error}</p>
            </div>
            <button onClick={loadProducts} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              Retry Loading
            </button>
          </div>
        )}

        {/* 6. Friendly Empty State */}
        {!loading && !error && processedProducts.length === 0 && (
          <div className="empty-results-card">
            <div className="empty-icon-wrap">
              <Search size={32} color="#94a3b8" />
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '8px' }}>
              No products found matching your search
            </h3>
            <p style={{ color: '#64748b', maxWidth: '480px', margin: '0 auto 24px', fontSize: '0.95rem' }}>
              We couldn't find any stickers or items matching "{searchQuery}". Try selecting another category or resetting the filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSearchParams({});
              }}
              className="btn btn-primary"
            >
              View Complete Catalog
            </button>
          </div>
        )}

        {/* 7. Staggered Animated 4-Column Product Cards Grid */}
        {!loading && !error && processedProducts.length > 0 && (
          <div className="products-grid">
            {processedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
