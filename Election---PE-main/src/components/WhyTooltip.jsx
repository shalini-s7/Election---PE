import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { whyContext } from '../data/modesData';

export default function WhyTooltip({ topic }) {
  const [show, setShow] = useState(false);

  const explanation = whyContext[topic];
  if (!explanation) return null;

  return (
    <div style={{ position: 'relative', display: 'inline-block', marginLeft: 8 }}>
      <button 
        onClick={() => setShow(!show)}
        style={{ 
          background: 'none', border: 'none', color: 'var(--accent)', 
          cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center' 
        }}
        aria-label="Why does this exist?"
        title="Why does this exist?"
      >
        <HelpCircle size={16} />
      </button>

      {show && (
        <div style={{
          position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
          marginTop: 8, width: 250, padding: 12, background: 'var(--card-bg)',
          border: '1px solid var(--primary)', borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)', zIndex: 10, fontSize: '0.85rem', color: 'var(--text)',
          fontWeight: 400, textAlign: 'left', lineHeight: 1.5
        }}>
          <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: 4 }}>Historical Context:</strong>
          {explanation}
        </div>
      )}
    </div>
  );
}
