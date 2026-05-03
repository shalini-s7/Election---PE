import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { 
  Clock, CheckSquare, HelpCircle, Shield, Calendar, 
  Map, Users, Type, MessageSquare, Compass
} from 'lucide-react';

const modes = [
  { id: 'time-machine', path: '/modes/time-machine', title: 'Time Machine Mode', icon: <Clock size={24} color="var(--primary)" />, desc: 'Explore historical election years and how voting has changed.' },
  { id: 'ballot-sim', path: '/modes/ballot-simulator', title: 'Ballot Simulator', icon: <CheckSquare size={24} color="var(--success)" />, desc: 'Practice with an interactive mock ballot for your location.' },
  { id: 'countdown', path: '/modes/countdown', title: 'Countdown Tracker', icon: <Calendar size={24} color="var(--accent)" />, desc: 'Personalized deadlines for registration and voting.' },
  { id: 'walkthrough', path: '/modes/walkthrough', title: 'Walk Me Through It', icon: <Compass size={24} color="var(--primary)" />, desc: 'A conversational guide through the entire voting process.' },
  { id: 'candidate-lens', path: '/modes/candidate-lens', title: 'Candidate Lens', icon: <Users size={24} color="var(--accent)" />, desc: 'Compare candidate positions without bias.' },
  { id: 'ask-skeptic', path: '/modes/ask-skeptic', title: 'Ask a Skeptic', icon: <MessageSquare size={24} color="var(--success)" />, desc: 'Honest answers to common objections about voting.' },
  { id: 'process-map', path: '/modes/process-map', title: 'Visual Process Map', icon: <Map size={24} color="var(--primary)" />, desc: 'A full election flow map from filing to certification.' },
  { id: 'myth-buster', path: '/modes/myth-buster', title: 'Myth Buster', icon: <Shield size={24} color="var(--accent)" />, desc: 'Fact-check common election claims.' },
];

export default function Modes() {
  const { visitSection } = useProgress();
  useEffect(() => { visitSection('modes'); }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="section-header animate-in">
          <h1>🚀 Advanced Modes</h1>
          <p>Explore 10 powerful interactive modes designed to deepen your election knowledge.</p>
        </div>
        
        <div className="modes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
          {modes.map((mode, i) => (
            <Link to={mode.path} key={mode.id} className="card mode-card animate-in" style={{ animationDelay: `${i * 0.1}s`, textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s, box-shadow 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ background: 'var(--bg)', padding: 12, borderRadius: '50%' }}>
                  {mode.icon}
                </div>
                <h3 style={{ margin: 0 }}>{mode.title}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>{mode.desc}</p>
            </Link>
          ))}
        </div>

        <div className="card animate-in" style={{ marginTop: 32, animationDelay: '0.8s', display: 'flex', alignItems: 'center', gap: 16 }}>
           <div style={{ flex: 1 }}>
             <h3>Also Available:</h3>
             <ul style={{ paddingLeft: 20, color: 'var(--text-muted)', marginTop: 8 }}>
               <li><strong>"Why does this exist?" Layer:</strong> Look for the <HelpCircle size={14} style={{ display: 'inline' }} /> icon in Learning Modules for historical context.</li>
               <li><strong>Accessibility Mode:</strong> Click the <Type size={14} style={{ display: 'inline' }} /> icon in the navigation to simplify language across the site.</li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
