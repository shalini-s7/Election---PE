import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { historicalElections } from '../data/modesData';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TimeMachine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { visitSection } = useProgress();
  
  useEffect(() => { visitSection('time-machine'); }, []);

  const currentEra = historicalElections[currentIndex];

  const goNext = () => {
    if (currentIndex < historicalElections.length - 1) setCurrentIndex(c => c + 1);
  };

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(c => c - 1);
  };

  return (
    <div className="page time-machine">
      <div className="container">
        <Link to="/modes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary)', marginBottom: 24, fontWeight: 500, textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Modes
        </Link>
        
        <div className="section-header animate-in" style={{ textAlign: 'center' }}>
          <Clock size={48} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
          <h1>Time Machine Mode</h1>
          <p>Travel through history to see how American voting has evolved.</p>
        </div>

        <div className="card animate-in" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', borderTop: '4px solid var(--accent)' }}>
          <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1, marginBottom: 8, fontFamily: 'monospace' }}>
            {currentEra.year}
          </div>
          <h2 style={{ color: 'var(--primary)', marginBottom: 24 }}>{currentEra.title}</h2>
          
          <div style={{ textAlign: 'left', background: 'var(--bg)', padding: 20, borderRadius: 'var(--radius)', marginBottom: 24 }}>
            <p style={{ marginBottom: 12 }}><strong>👥 Who could vote:</strong><br/>{currentEra.rights}</p>
            <p style={{ marginBottom: 12 }}><strong>🗳️ How they voted:</strong><br/>{currentEra.methods}</p>
            <p style={{ margin: 0 }}><strong>🔥 Key Issue:</strong><br/>{currentEra.issue}</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn btn-outline" onClick={goPrev} disabled={currentIndex === 0}>
              <ArrowLeft size={16} /> Previous Era
            </button>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {currentIndex + 1} of {historicalElections.length}
            </span>
            <button className="btn btn-primary" onClick={goNext} disabled={currentIndex === historicalElections.length - 1}>
              Next Era <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
