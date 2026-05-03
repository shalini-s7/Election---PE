import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { mockCandidates } from '../data/modesData';
import { Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CandidateLens() {
  const { visitSection } = useProgress();
  const issues = Object.keys(mockCandidates[0].issues);

  useEffect(() => { visitSection('candidate-lens'); }, []);

  return (
    <div className="page candidate-lens">
      <div className="container">
        <Link to="/modes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary)', marginBottom: 24, fontWeight: 500, textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Modes
        </Link>
        
        <div className="section-header animate-in" style={{ textAlign: 'center' }}>
          <Users size={48} color="var(--accent)" style={{ margin: '0 auto 16px' }} />
          <h1>Candidate Comparison Lens</h1>
          <p>Compare how candidates view election and voting access issues, without bias.</p>
        </div>

        <div className="animate-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {mockCandidates.map((c, i) => (
            <div key={i} className="card" style={{ borderTop: `4px solid ${i === 0 ? 'var(--primary)' : 'var(--accent)'}`, padding: 0, overflow: 'hidden' }}>
              <div style={{ background: 'var(--bg)', padding: 20, borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
                <h2 style={{ margin: '0 0 4px' }}>{c.name}</h2>
                <span className="badge">{c.party}</span>
              </div>
              <div style={{ padding: 20 }}>
                {issues.map((issue, j) => (
                  <div key={j} style={{ marginBottom: j === issues.length - 1 ? 0 : 20 }}>
                    <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{issue}</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>{c.issues[issue]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
