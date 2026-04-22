import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { modules } from '../data/modules';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowLeft, Lightbulb } from 'lucide-react';

export default function Module() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const mod = modules.find(m => m.id === moduleId);
  const { completedModules, moduleProgress, completeModule, setModuleProgress } = useProgress();

  const savedStep = moduleProgress[moduleId] || 0;
  const [currentStep, setCurrentStep] = useState(savedStep);
  const isComplete = completedModules.includes(moduleId);

  useEffect(() => {
    if (!mod) navigate('/learn');
  }, [mod]);

  if (!mod) return null;

  const step = mod.steps[currentStep];
  const totalSteps = mod.steps.length;
  const pct = Math.round(((currentStep + 1) / totalSteps) * 100);

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      setModuleProgress(moduleId, next);
    } else {
      completeModule(moduleId);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="page">
      <div className="container module-detail">
        <Link to="/learn" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary)', marginBottom: 24, fontWeight: 500 }}>
          <ArrowLeft size={18} /> Back to Modules
        </Link>

        <div className="animate-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: '2.5rem' }}>{mod.icon}</span>
            <div>
              <h1 style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>{mod.title}</h1>
              <p style={{ color: 'var(--text-muted)' }}>{mod.description}</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
          <div className="progress-bar" style={{ flex: 1 }}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            Step {currentStep + 1} of {totalSteps}
          </span>
        </div>

        {isComplete && (
          <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid var(--success)', borderRadius: 'var(--radius)', padding: 16, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, color: 'var(--success)', fontWeight: 600 }}>
            <CheckCircle size={20} /> Module completed! Review any step below.
          </div>
        )}

        <div className="card module-step animate-in" style={{ borderLeftColor: 'var(--primary)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 12 }}>
            <span style={{ background: 'var(--primary)', color: 'white', borderRadius: '50%', width: 28, height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', marginRight: 8 }}>
              {currentStep + 1}
            </span>
            {step.title}
          </h3>
          <p style={{ lineHeight: 1.8, color: 'var(--text)' }}>{step.content}</p>
          {step.fact && (
            <div className="fact-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <Lightbulb size={16} color="var(--accent)" />
                <strong>Did You Know?</strong>
              </div>
              <p style={{ fontSize: '0.9rem' }}>{step.fact}</p>
            </div>
          )}
        </div>

        <div className="module-nav">
          <button className="btn btn-outline" onClick={goPrev} disabled={currentStep === 0} style={{ opacity: currentStep === 0 ? 0.4 : 1 }}>
            <ChevronLeft size={18} /> Previous
          </button>
          {currentStep < totalSteps - 1 ? (
            <button className="btn btn-primary" onClick={goNext}>
              Next <ChevronRight size={18} />
            </button>
          ) : (
            <button className="btn btn-accent" onClick={goNext} disabled={isComplete}>
              {isComplete ? '✅ Completed' : '🎉 Complete Module'}
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 20 }}>
          {mod.steps.map((_, i) => (
            <button key={i} onClick={() => setCurrentStep(i)}
              style={{
                width: 10, height: 10, borderRadius: '50%', border: 'none',
                background: i === currentStep ? 'var(--primary)' : i <= (moduleProgress[moduleId] || 0) ? 'var(--accent)' : 'var(--border)',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
