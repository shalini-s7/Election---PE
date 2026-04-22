import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { faqData } from '../data/glossary-faq';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});
  const { visitSection } = useProgress();
  useEffect(() => { visitSection('faq'); }, []);

  const toggle = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="page">
      <div className="container">
        <div className="section-header animate-in">
          <h1>❓ Frequently Asked Questions</h1>
          <p>Find answers to the most common questions about elections and voting.</p>
        </div>
        <div className="faq-section">
          {faqData.map((cat, catIdx) => (
            <div key={catIdx} className="faq-category animate-in" style={{ animationDelay: `${catIdx * 0.15}s` }}>
              <h2>{cat.category}</h2>
              {cat.questions.map((item, qIdx) => {
                const key = `${catIdx}-${qIdx}`;
                const isOpen = openItems[key];
                return (
                  <div key={qIdx} className="faq-item">
                    <div className={`faq-q ${isOpen ? 'open' : ''}`} onClick={() => toggle(catIdx, qIdx)}
                      role="button" tabIndex={0} aria-expanded={isOpen}
                      onKeyDown={e => e.key === 'Enter' && toggle(catIdx, qIdx)}>
                      <span>{item.q}</span>
                      <ChevronDown size={18} className="arrow" />
                    </div>
                    {isOpen && <div className="faq-a">{item.a}</div>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
