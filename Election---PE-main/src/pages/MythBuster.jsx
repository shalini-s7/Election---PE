import { useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { myths } from '../data/modesData';
import { Shield, ArrowLeft, XCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MythBuster() {
  const { visitSection } = useProgress();

  useEffect(() => { visitSection('myth-buster'); }, []);

  return (
    <div className="page myth-buster">
      <div className="container" style={{ maxWidth: 700 }}>
        <Link to="/modes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary)', marginBottom: 24, fontWeight: 500, textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Modes
        </Link>
        
        <div className="section-header animate-in" style={{ textAlign: 'center' }}>
          <Shield size={48} color="var(--accent)" style={{ margin: '0 auto 16px' }} />
          <h1>Myth Buster Mode</h1>
          <p>Calmly fact-checking common election claims with sourced reasoning.</p>
        </div>

        <div className="animate-in">
          {myths.map((item, i) => (
            <div key={i} className="card" style={{ marginBottom: 20, borderLeft: '4px solid var(--accent)' }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <XCircle size={24} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h3 style={{ margin: 0, color: 'var(--text)', fontSize: '1.1rem' }}>Myth:</h3>
                  <p style={{ margin: '4px 0 0', fontStyle: 'italic', color: 'var(--text-muted)' }}>"{item.myth}"</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, background: 'rgba(34,197,94,0.05)', padding: 16, borderRadius: 'var(--radius)' }}>
                <CheckCircle size={24} color="var(--success)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h3 style={{ margin: 0, color: 'var(--success)', fontSize: '1.1rem' }}>Fact:</h3>
                  <p style={{ margin: '4px 0 0', lineHeight: 1.6 }}>{item.fact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
