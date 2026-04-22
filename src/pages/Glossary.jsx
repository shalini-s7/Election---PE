import { useState, useEffect, useMemo } from 'react';
import { useProgress } from '../context/ProgressContext';
import { glossaryTerms } from '../data/glossary-faq';
import { Search } from 'lucide-react';

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState('');
  const { visitSection } = useProgress();
  useEffect(() => { visitSection('glossary'); }, []);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filtered = useMemo(() => {
    return glossaryTerms.filter(t => {
      const matchSearch = !search || t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase());
      const matchLetter = !activeLetter || t.term[0].toUpperCase() === activeLetter;
      return matchSearch && matchLetter;
    });
  }, [search, activeLetter]);

  return (
    <div className="page">
      <div className="container">
        <div className="section-header animate-in">
          <h1>📖 A–Z Glossary</h1>
          <p>Look up key election terms with clear definitions and real-world examples.</p>
        </div>

        <div className="glossary-search animate-in" style={{ animationDelay: '0.1s' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              value={search} onChange={e => { setSearch(e.target.value); setActiveLetter(''); }}
              placeholder="Search terms..."
              style={{ paddingLeft: 40 }}
              aria-label="Search glossary"
            />
          </div>
        </div>

        <div className="alpha-filter animate-in" style={{ animationDelay: '0.2s' }}>
          <button className={`alpha-btn ${activeLetter === '' ? 'active' : ''}`}
            onClick={() => setActiveLetter('')}>All</button>
          {letters.map(l => (
            <button key={l} className={`alpha-btn ${activeLetter === l ? 'active' : ''}`}
              onClick={() => { setActiveLetter(activeLetter === l ? '' : l); setSearch(''); }}>
              {l}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '2rem', marginBottom: 8 }}>🔍</p>
            <p>No terms found. Try a different search or letter.</p>
          </div>
        ) : (
          <div className="glossary-grid">
            {filtered.map((term, i) => (
              <div key={term.term} className="card glossary-card animate-in" style={{ animationDelay: `${(i % 6) * 0.05}s` }}>
                <h3>{term.term}</h3>
                <p>{term.definition}</p>
                {term.example && <p className="example">Example: {term.example}</p>}
              </div>
            ))}
          </div>
        )}
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: 24, fontSize: '0.85rem' }}>
          Showing {filtered.length} of {glossaryTerms.length} terms
        </p>
      </div>
    </div>
  );
}
