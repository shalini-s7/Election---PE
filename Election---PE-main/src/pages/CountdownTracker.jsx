import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { getDeadlines } from '../data/modesData';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CountdownTracker() {
  const [stateName, setStateName] = useState('');
  const [deadlines, setDeadlines] = useState(null);
  const [now, setNow] = useState(new Date());
  const { visitSection } = useProgress();

  useEffect(() => { visitSection('countdown'); }, []);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLookup = (e) => {
    e.preventDefault();
    if (stateName.trim()) {
      setDeadlines(getDeadlines(stateName.trim()));
    }
  };

  const getDaysLeft = (targetDate) => {
    const diffTime = targetDate - now;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="page countdown-tracker">
      <div className="container" style={{ maxWidth: 600 }}>
        <Link to="/modes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary)', marginBottom: 24, fontWeight: 500, textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Modes
        </Link>
        
        <div className="section-header animate-in" style={{ textAlign: 'center' }}>
          <Calendar size={48} color="var(--accent)" style={{ margin: '0 auto 16px' }} />
          <h1>Election Countdown</h1>
          <p>Get personalized deadlines for your location.</p>
        </div>

        <div className="card animate-in">
          {!deadlines ? (
            <form onSubmit={handleLookup} style={{ textAlign: 'center', padding: '20px 0' }}>
              <label htmlFor="stateInput" style={{ display: 'block', marginBottom: 12, fontWeight: 500 }}>
                Enter your state to see your deadlines:
              </label>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                <input
                  id="stateInput"
                  value={stateName}
                  onChange={e => setStateName(e.target.value)}
                  placeholder="e.g., California"
                  style={{ padding: '12px 16px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '60%', background: 'var(--bg)', color: 'var(--text)' }}
                />
                <button type="submit" className="btn btn-primary">Track</button>
              </div>
            </form>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                <h2 style={{ margin: 0 }}>{deadlines.state} Deadlines</h2>
                <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.85rem' }} onClick={() => { setDeadlines(null); setStateName(''); }}>
                  Change State
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { title: 'Voter Registration', date: deadlines.registration, type: 'warning' },
                  { title: 'Early Voting Begins', date: deadlines.earlyVotingStart, type: 'accent' },
                  { title: 'Mail Ballot Request', date: deadlines.mailBallotRequest, type: 'primary' },
                  { title: 'Election Day', date: deadlines.electionDay, type: 'success' }
                ].map((item, idx) => {
                  const daysLeft = getDaysLeft(item.date);
                  const isPast = daysLeft < 0;
                  return (
                    <div key={idx} style={{ 
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                      background: 'var(--bg)', padding: 16, borderRadius: 'var(--radius)',
                      borderLeft: `4px solid var(--${item.type})`, opacity: isPast ? 0.6 : 1
                    }}>
                      <div>
                        <h3 style={{ margin: '0 0 4px', fontSize: '1.1rem' }}>{item.title}</h3>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                          {item.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        {isPast ? (
                          <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Passed</span>
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: `var(--${item.type})`, fontWeight: 700 }}>
                            <Clock size={16} />
                            {daysLeft} {daysLeft === 1 ? 'Day' : 'Days'}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
