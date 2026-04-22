import { useProgress } from '../context/ProgressContext';
import { badges } from '../data/chatbot';
import { modules } from '../data/modules';
import { X } from 'lucide-react';

export default function Sidebar({ open, onClose }) {
  const { completedModules, quizScores, earnedBadges, getOverallProgress } = useProgress();
  const progress = getOverallProgress();

  return (
    <>
      <div className={`sidebar ${open ? 'open' : ''}`} role="complementary" aria-label="Progress Dashboard">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h3>📊 Your Progress</h3>
          <button onClick={onClose} style={{ background: 'none', color: 'var(--text)', padding: 4 }} aria-label="Close sidebar"><X size={20} /></button>
        </div>

        <div className="overall-progress">
          <svg className="progress-ring" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border)" strokeWidth="8" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--accent)" strokeWidth="8"
              strokeDasharray={`${progress * 2.64} ${264 - progress * 2.64}`}
              strokeDashoffset="66" strokeLinecap="round"
              style={{ transition: 'stroke-dasharray 0.5s ease' }} />
            <text x="50" y="50" textAnchor="middle" dy="0.35em" fontSize="20" fontWeight="700" fill="var(--text)">{progress}%</text>
          </svg>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Overall Completion</p>
        </div>

        <div className="sidebar-section">
          <h4>Modules ({completedModules.length}/6)</h4>
          {modules.map(m => (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', fontSize: '0.85rem' }}>
              <span>{completedModules.includes(m.id) ? '✅' : '⬜'}</span>
              <span>{m.title}</span>
            </div>
          ))}
        </div>

        <div className="sidebar-section">
          <h4>Quiz Scores</h4>
          {['beginner', 'intermediate', 'expert'].map(d => (
            <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '0.85rem', textTransform: 'capitalize' }}>
              <span>{d}</span>
              <span style={{ fontWeight: 600, color: quizScores[d] ? 'var(--success)' : 'var(--text-muted)' }}>
                {quizScores[d] ? `${quizScores[d].score}/${quizScores[d].total}` : '—'}
              </span>
            </div>
          ))}
        </div>

        <div className="sidebar-section">
          <h4>Badges ({earnedBadges.length}/{badges.length})</h4>
          <div className="badge-grid">
            {badges.map(b => (
              <div key={b.id} className={`badge-item ${earnedBadges.includes(b.id) ? '' : 'locked'}`} title={b.description}>
                <span className="badge-icon">{b.icon}</span>
                <span>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
