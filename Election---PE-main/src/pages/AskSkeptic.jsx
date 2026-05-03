import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { skepticQA } from '../data/modesData';
import { MessageSquare, ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AskSkeptic() {
  const [openIdx, setOpenIdx] = useState(null);
  const { visitSection } = useProgress();

  useEffect(() => { visitSection('ask-skeptic'); }, []);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <div className="page ask-skeptic">
      <div className="container" style={{ maxWidth: 700 }}>
        <Link to="/modes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary)', marginBottom: 24, fontWeight: 500, textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Modes
        </Link>
        
        <div className="section-header animate-in" style={{ textAlign: 'center' }}>
          <MessageSquare size={48} color="var(--success)" style={{ margin: '0 auto 16px' }} />
          <h1>Ask a Skeptic</h1>
          <p>Honest, patient answers to common objections about voting.</p>
        </div>

        <div className="animate-in">
          {skepticQA.map((item, i) => (
            <div key={i} className="card" style={{ marginBottom: 16, cursor: 'pointer', padding: 0 }} onClick={() => toggle(i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{item.q}</h3>
                <ChevronDown size={20} style={{ transform: openIdx === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </div>
              {openIdx === i && (
                <div style={{ padding: '0 20px 20px', color: 'var(--text-muted)', lineHeight: 1.6, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
