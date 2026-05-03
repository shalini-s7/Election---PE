import { useEffect, useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { timelineStages } from '../data/modules';
import { Map as MapIcon, ArrowLeft, ZoomIn, ZoomOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProcessMap() {
  const { visitSection } = useProgress();
  const [zoom, setZoom] = useState(1);

  useEffect(() => { visitSection('process-map'); }, []);

  return (
    <div className="page process-map">
      <div className="container">
        <Link to="/modes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary)', marginBottom: 24, fontWeight: 500, textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Modes
        </Link>
        
        <div className="section-header animate-in" style={{ textAlign: 'center' }}>
          <MapIcon size={48} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
          <h1>Visual Process Map</h1>
          <p>The complete election flow from candidate filing to certification.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 16 }}>
          <button className="btn btn-outline" onClick={() => setZoom(Math.max(0.5, zoom - 0.2))} aria-label="Zoom out">
            <ZoomOut size={18} />
          </button>
          <button className="btn btn-outline" onClick={() => setZoom(Math.min(1.5, zoom + 0.2))} aria-label="Zoom in">
            <ZoomIn size={18} />
          </button>
        </div>

        <div className="card animate-in" style={{ overflowX: 'auto', padding: '40px 20px', background: 'var(--bg)', border: '1px solid var(--border)' }}>
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: 32, 
            transform: `scale(${zoom})`, transformOrigin: 'left center', transition: 'transform 0.3s'
          }}>
            {timelineStages.map((stage, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: 200, padding: 20, background: 'var(--card-bg)', 
                  border: '2px solid var(--primary)', borderRadius: 'var(--radius)', 
                  textAlign: 'center', boxShadow: 'var(--shadow)', flexShrink: 0
                }}>
                  <h3 style={{ margin: '0 0 8px', fontSize: '1rem', color: 'var(--primary)' }}>{stage.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stage.description}</p>
                </div>
                {i < timelineStages.length - 1 && (
                  <div style={{ width: 40, height: 4, background: 'var(--primary)', position: 'relative' }}>
                    <div style={{ position: 'absolute', right: -6, top: -4, width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid var(--primary)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
