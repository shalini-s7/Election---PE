import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { mockBallots } from '../data/modesData';
import { CheckSquare, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BallotSimulator() {
  const [selections, setSelections] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { visitSection } = useProgress();

  useEffect(() => { visitSection('ballot-simulator'); }, []);

  const ballot = mockBallots.default;

  const handleSelect = (officeIdx, candidate) => {
    setSelections(prev => ({ ...prev, [officeIdx]: candidate }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page ballot-simulator">
        <div className="container" style={{ maxWidth: 600 }}>
          <div className="card animate-in" style={{ textAlign: 'center', borderTop: '4px solid var(--success)' }}>
            <div style={{ background: 'var(--success)', color: 'white', width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <Send size={28} />
            </div>
            <h2>Ballot Submitted!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>What happens next?</p>
            
            <div style={{ textAlign: 'left', background: 'var(--bg)', padding: 20, borderRadius: 'var(--radius)', marginBottom: 24 }}>
              <ol style={{ paddingLeft: 20, margin: 0, lineHeight: 1.6 }}>
                <li style={{ marginBottom: 12 }}><strong>Secure Storage:</strong> Your ballot is stored securely in a sealed box until polls close.</li>
                <li style={{ marginBottom: 12 }}><strong>Tabulation:</strong> Election workers feed ballots into scanners that tally the votes offline.</li>
                <li style={{ marginBottom: 12 }}><strong>Canvassing:</strong> Officials double-check vote totals against the number of people who signed in.</li>
                <li><strong>Certification:</strong> The state officially certifies the results weeks later.</li>
              </ol>
            </div>
            <button className="btn btn-primary" onClick={() => { setSubmitted(false); setSelections({}); }}>
              Try Another Ballot
            </button>
            <div style={{ marginTop: 16 }}>
              <Link to="/modes" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Return to Modes</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page ballot-simulator">
      <div className="container" style={{ maxWidth: 600 }}>
        <Link to="/modes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary)', marginBottom: 24, fontWeight: 500, textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Modes
        </Link>
        
        <div className="section-header animate-in" style={{ textAlign: 'center' }}>
          <CheckSquare size={48} color="var(--success)" style={{ margin: '0 auto 16px' }} />
          <h1>Official Mock Ballot</h1>
          <p>State of {ballot.state} - General Election</p>
        </div>

        <div className="card animate-in">
          <p style={{ background: 'var(--bg)', padding: 12, borderRadius: 'var(--radius)', fontSize: '0.85rem', marginBottom: 24, borderLeft: '3px solid var(--accent)' }}>
            <strong>Instructions:</strong> Select one candidate per office. This is a simulation and no real data is transmitted.
          </p>

          {ballot.offices.map((office, idx) => (
            <div key={idx} style={{ marginBottom: 32, paddingBottom: 24, borderBottom: idx < ballot.offices.length - 1 ? '1px dashed var(--border)' : 'none' }}>
              <h3 style={{ marginBottom: office.description ? 8 : 16 }}>{office.title}</h3>
              {office.description && <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 16 }}>{office.description}</p>}
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {office.candidates.map(candidate => (
                  <button
                    key={candidate}
                    onClick={() => handleSelect(idx, candidate)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: 16,
                      background: selections[idx] === candidate ? 'rgba(59, 130, 246, 0.1)' : 'var(--bg)',
                      border: `2px solid ${selections[idx] === candidate ? 'var(--primary)' : 'var(--border)'}`,
                      borderRadius: 'var(--radius)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                      fontWeight: selections[idx] === candidate ? 600 : 400
                    }}
                  >
                    <div style={{ 
                      width: 20, height: 20, borderRadius: '50%', 
                      border: `2px solid ${selections[idx] === candidate ? 'var(--primary)' : 'var(--text-muted)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {selections[idx] === candidate && <div style={{ width: 10, height: 10, background: 'var(--primary)', borderRadius: '50%' }} />}
                    </div>
                    {candidate}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button 
              className="btn btn-success" 
              style={{ width: '100%', padding: 16, fontSize: '1.1rem' }}
              disabled={Object.keys(selections).length === 0}
              onClick={handleSubmit}
            >
              Cast Ballot <Send size={18} style={{ marginLeft: 8 }} />
            </button>
            {Object.keys(selections).length < ballot.offices.length && (
               <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 12 }}>
                 You can submit without voting in every race.
               </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
