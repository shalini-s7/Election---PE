import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { modules } from '../data/modules';
import { CheckCircle } from 'lucide-react';

export default function Learn() {
  const { completedModules, moduleProgress, visitSection } = useProgress();
  useEffect(() => { visitSection('learn'); }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="section-header animate-in">
          <h1>📚 Learning Modules</h1>
          <p>Master the election process through 6 interactive modules. Track your progress and earn badges!</p>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="progress-bar" style={{ maxWidth: 400, margin: '0 auto' }}>
            <div className="progress-fill" style={{ width: `${(completedModules.length / 6) * 100}%` }} />
          </div>
          <p style={{ color: 'var(--text-muted)', marginTop: 8, fontSize: '0.9rem' }}>
            {completedModules.length} of 6 modules completed
          </p>
        </div>
        <div className="module-grid">
          {modules.map((mod, i) => {
            const isComplete = completedModules.includes(mod.id);
            const currentStep = moduleProgress[mod.id] || 0;
            const pct = isComplete ? 100 : Math.round((currentStep / mod.steps.length) * 100);
            return (
              <Link to={`/learn/${mod.id}`} key={mod.id} className="card module-card animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="module-icon">{mod.icon}</div>
                <h3>{mod.title}</h3>
                <p>{mod.description}</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
                <div className="module-status">
                  <span>{pct}% complete</span>
                  {isComplete && <span className="badge"><CheckCircle size={12} /> Done</span>}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
