import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { BookOpen, HelpCircle, Users, CheckCircle, Star, Shield } from 'lucide-react';

export default function Home() {
  const { visitSection } = useProgress();
  useEffect(() => { visitSection('home'); }, []);

  return (
    <div>
      <section className="hero">
        <div className="container animate-in">
          <h1>Understand Your Election.<br />Your Voice Matters.</h1>
          <p>Learn the complete election process step by step — interactive, visual, and easy to follow</p>
          <div className="hero-btns">
            <Link to="/learn" className="btn btn-accent">📚 Start Learning</Link>
            <Link to="/quiz" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>🎯 Take the Quiz</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: -30, position: 'relative', zIndex: 2 }}>
        <div className="stats-grid">
          {[
            { icon: '📋', number: '6', label: 'Learning Modules' },
            { icon: '❓', number: '30+', label: 'Quiz Questions' },
            { icon: '📖', number: '40+', label: 'Glossary Terms' },
            { icon: '🤖', number: '24/7', label: 'ElectoBot Help' }
          ].map((stat, i) => (
            <div key={i} className={`card stat-card animate-in stagger-${i + 1}`}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="why-section">
          <h2>Why This Matters</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>
            Understanding the election process is the foundation of informed citizenship. Whether you're voting for the first time or want a refresher, knowledge empowers you to participate confidently.
          </p>
          <div className="why-grid">
            {[
              { icon: <CheckCircle size={28} color="var(--success)" />, title: 'Make Informed Decisions', text: 'Understand candidates, issues, and how your vote counts so you can choose wisely.' },
              { icon: <Shield size={28} color="var(--primary)" />, title: 'Protect Your Rights', text: 'Know your voting rights and how to exercise them, including registration and accessibility options.' },
              { icon: <Users size={28} color="var(--accent)" />, title: 'Strengthen Democracy', text: 'When more people participate, elections better reflect the will of the people.' },
              { icon: <Star size={28} color="var(--accent)" />, title: 'Be a Civic Leader', text: 'Share your knowledge to help friends, family, and your community engage in the process.' }
            ].map((item, i) => (
              <div key={i} className="card why-card animate-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="why-icon">{item.icon}</div>
                <div>
                  <h3 style={{ marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ textAlign: 'center', padding: '40px 20px 60px' }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: 12 }}>Ready to Start?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
          Explore interactive lessons, test your knowledge, and earn badges as you learn about elections.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/timeline" className="btn btn-primary">🗓️ View Timeline</Link>
          <Link to="/chatbot" className="btn btn-accent">🤖 Ask ElectoBot</Link>
          <Link to="/glossary" className="btn btn-outline">📖 Browse Glossary</Link>
        </div>
      </section>
    </div>
  );
}
