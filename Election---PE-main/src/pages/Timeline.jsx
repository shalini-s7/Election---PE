import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { timelineStages } from '../data/modules';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Timeline() {
  const [expanded, setExpanded] = useState(null);
  const { visitSection } = useProgress();
  useEffect(() => { visitSection('timeline'); }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="section-header animate-in">
          <h1>🗓️ Election Timeline</h1>
          <p>Follow the complete election process from start to finish. Click any stage to learn more.</p>
        </div>
        <div className="timeline">
          {timelineStages.map((stage, i) => (
            <div key={i} className="timeline-item animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`timeline-dot ${expanded === i ? 'active' : ''}`} />
              <div className="card timeline-content" onClick={() => setExpanded(expanded === i ? null : i)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3>{stage.title}</h3>
                  {expanded === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                <p>{stage.description}</p>
                {expanded === i && (
                  <div className="timeline-detail">
                    <p>{stage.detail}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
