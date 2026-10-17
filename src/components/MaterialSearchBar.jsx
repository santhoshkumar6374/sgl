import { useState, useRef, useEffect, useMemo } from 'react';
import {
  Search,
  Clock,
  Flame,
  Sparkles,
  Tag,
  TrendingUp,
  X,
  Trash2,
  ArrowRight,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { MATERIAL_CATEGORIES, MATERIALS_LIST } from '../services/materialsData';

const POPULAR_SEARCHES = [
  'PU Heat Transfer Film',
  'Water-Based Inks',
  'Reflective Materials',
  'Liquid Silicone Rubber',
  'Thermal Barcode Stock',
  'Kraft Paper',
  'Damask Woven Yarns',
  'Overlaminate Films',
  'Glitter & Foil'
];

const DEFAULT_RECENT_SEARCHES = [
  'PU Transfer Film',
  'Reflective',
  'Silicone Inks',
  'Barcode Labels',
  'Kraft Paper'
];

function HighlightMatch({ text, query }) {
  if (!query || !query.trim()) return <span>{text}</span>;
  try {
    const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === query.trim().toLowerCase() ? (
            <mark key={i} className="search-match-mark">{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  } catch {
    return <span>{text}</span>;
  }
}

export default function MaterialSearchBar({ searchQuery, onSearchChange, onSelectSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      const saved = localStorage.getItem('sgl_material_recent_searches');
      return saved ? JSON.parse(saved) : DEFAULT_RECENT_SEARCHES;
    } catch {
      return DEFAULT_RECENT_SEARCHES;
    }
  });

  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearches = (items) => {
    setRecentSearches(items);
    try {
      localStorage.setItem('sgl_material_recent_searches', JSON.stringify(items));
    } catch {
      // LocalStorage handled safely
    }
  };

  const addRecentSearch = (term) => {
    if (!term || !term.trim()) return;
    const cleanTerm = term.trim();
    const updated = [cleanTerm, ...recentSearches.filter(s => s.toLowerCase() !== cleanTerm.toLowerCase())].slice(0, 8);
    saveRecentSearches(updated);
  };

  const removeRecentSearch = (e, termToRemove) => {
    e.stopPropagation();
    const updated = recentSearches.filter(s => s !== termToRemove);
    saveRecentSearches(updated);
  };

  const clearAllRecent = (e) => {
    e.stopPropagation();
    saveRecentSearches([]);
  };

  const handleItemSelect = (term) => {
    onSearchChange(term);
    addRecentSearch(term);
    setIsOpen(false);
    if (onSelectSearch) {
      onSelectSearch(term);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (searchQuery.trim()) {
        addRecentSearch(searchQuery);
      }
      setIsOpen(false);
      if (onSelectSearch) {
        onSelectSearch(searchQuery);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim()) {
      addRecentSearch(searchQuery);
    }
    setIsOpen(false);
    if (onSelectSearch) {
      onSelectSearch(searchQuery);
    }
  };

  // Filter relevant suggestions based on typed query
  const query = searchQuery.trim().toLowerCase();

  const matchingMaterials = useMemo(() => {
    if (!query) return [];
    return MATERIALS_LIST.filter(m =>
      m.name.toLowerCase().includes(query) ||
      m.category.toLowerCase().includes(query) ||
      m.summary.toLowerCase().includes(query) ||
      m.applications?.some(a => a.toLowerCase().includes(query)) ||
      m.properties?.some(p => p.toLowerCase().includes(query))
    ).slice(0, 5);
  }, [query]);

  const matchingPopular = useMemo(() => {
    if (!query) return [];
    return POPULAR_SEARCHES.filter(p => p.toLowerCase().includes(query));
  }, [query]);

  const matchingCategories = useMemo(() => {
    if (!query) return [];
    return MATERIAL_CATEGORIES.filter(c => c.name.toLowerCase().includes(query));
  }, [query]);

  const isTyping = query.length > 0;

  return (
    <div className="custom-search-container" ref={searchContainerRef}>
      {/* Compact Top Search Input Box */}
      <div className="custom-search-input-box">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search materials, properties, applications..."
          value={searchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="custom-search-input"
          aria-label="Search materials"
          autoComplete="off"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              onSearchChange('');
              inputRef.current?.focus();
            }}
            className="custom-search-clear-btn"
            title="Clear search"
            aria-label="Clear search input"
          >
            <X size={15} />
          </button>
        )}

        <button
          type="button"
          onClick={handleSearchButtonClick}
          className="custom-search-submit-btn"
          aria-label="Submit search"
        >
          <Search size={18} />
        </button>
      </div>

      {/* Floating Suggestions Dropdown Modal/Panel */}
      {isOpen && (
        <div className="custom-search-dropdown" role="listbox">
          {/* CASE A: USER IS TYPING — SHOW RELEVANT LIVE MATCHES */}
          {isTyping ? (
            <>
              {/* 1. Direct Matching Materials */}
              {matchingMaterials.length > 0 && (
                <div className="dropdown-section no-border-bottom">
                  <div className="dropdown-section-header">
                    <div className="section-header-title">
                      <Layers size={14} className="header-icon" style={{ color: '#2563eb' }} />
                      <span>MATCHING MATERIALS ({matchingMaterials.length})</span>
                    </div>
                  </div>

                  <div className="matching-materials-list">
                    {matchingMaterials.map((mat) => (
                      <div
                        key={mat.id}
                        className="matching-material-item"
                        onClick={() => handleItemSelect(mat.name)}
                      >
                        <div className="match-item-left">
                          <div className="match-item-name">
                            <HighlightMatch text={mat.name} query={query} />
                          </div>
                          <div className="match-item-sub">
                            <span className="match-item-cat">{mat.category}</span>
                            <span className="match-item-summary">{mat.summary}</span>
                          </div>
                        </div>
                        <div className="match-item-action">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Relevant Categories */}
              {matchingCategories.length > 0 && (
                <div className="dropdown-section no-border-bottom">
                  <div className="dropdown-section-header">
                    <div className="section-header-title category-header">
                      <Tag size={14} className="header-icon category-icon" />
                      <span>MATCHING CATEGORIES</span>
                    </div>
                  </div>

                  <div className="dropdown-pills-wrap">
                    {matchingCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleItemSelect(cat.name)}
                        className="popular-pill-tag"
                      >
                        <Tag size={12} />
                        <HighlightMatch text={cat.name} query={query} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Relevant Popular Terms */}
              {matchingPopular.length > 0 && (
                <div className="dropdown-section no-border-bottom">
                  <div className="dropdown-section-header">
                    <div className="section-header-title popular-header">
                      <Flame size={14} className="header-icon popular-icon" />
                      <span>RELEVANT KEYWORDS</span>
                    </div>
                  </div>

                  <div className="dropdown-pills-wrap">
                    {matchingPopular.map((term, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleItemSelect(term)}
                        className="popular-pill-tag"
                      >
                        <TrendingUp size={12} className="popular-trending-icon" />
                        <HighlightMatch text={term} query={query} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* If zero matches found across all lists */}
              {matchingMaterials.length === 0 && matchingCategories.length === 0 && matchingPopular.length === 0 && (
                <div className="match-empty-notice">
                  <Search size={22} color="#94a3b8" />
                  <p>
                    No materials matching "<strong>{searchQuery}</strong>". Press <strong>Enter</strong> to search all fields.
                  </p>
                </div>
              )}
            </>
          ) : (
            /* CASE B: EMPTY INPUT — SHOW RECENT, POPULAR & SUGGESTED CATEGORIES */
            <>
              {/* Section 1: RECENT SEARCHES */}
              {recentSearches.length > 0 && (
                <div className="dropdown-section">
                  <div className="dropdown-section-header">
                    <div className="section-header-title">
                      <Clock size={14} className="header-icon recent-icon" />
                      <span>RECENT SEARCHES</span>
                    </div>
                    <button
                      type="button"
                      onClick={clearAllRecent}
                      className="dropdown-clear-all-btn"
                      title="Clear all recent searches"
                    >
                      <Trash2 size={12} />
                      <span>Clear all</span>
                    </button>
                  </div>

                  <div className="dropdown-pills-wrap">
                    {recentSearches.map((term, idx) => (
                      <div
                        key={idx}
                        className="recent-pill-tag"
                        onClick={() => handleItemSelect(term)}
                      >
                        <Clock size={12} className="pill-leading-icon" />
                        <span className="pill-text">{term}</span>
                        <button
                          type="button"
                          onClick={(e) => removeRecentSearch(e, term)}
                          className="pill-remove-btn"
                          title={`Remove "${term}"`}
                          aria-label={`Remove ${term}`}
                        >
                          <X size={11} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 2: POPULAR SEARCHES */}
              <div className="dropdown-section">
                <div className="dropdown-section-header">
                  <div className="section-header-title popular-header">
                    <Flame size={14} className="header-icon popular-icon" />
                    <span>POPULAR SEARCHES</span>
                  </div>
                </div>

                <div className="dropdown-pills-wrap">
                  {POPULAR_SEARCHES.map((term, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleItemSelect(term)}
                      className="popular-pill-tag"
                    >
                      <TrendingUp size={12} className="popular-trending-icon" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 3: SUGGESTED CATEGORIES */}
              <div className="dropdown-section no-border-bottom">
                <div className="dropdown-section-header">
                  <div className="section-header-title category-header">
                    <Sparkles size={14} className="header-icon category-icon" />
                    <span>SUGGESTED CATEGORIES</span>
                  </div>
                </div>

                <div className="dropdown-categories-grid">
                  {MATERIAL_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleItemSelect(cat.name)}
                      className="suggested-category-card"
                    >
                      <div className="category-card-icon-wrap">
                        <Tag size={13} />
                      </div>
                      <span className="category-card-name">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
