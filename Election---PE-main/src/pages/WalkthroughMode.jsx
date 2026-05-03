import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Compass, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WalkthroughMode() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const { visitSection } = useProgress();

  useEffect(() => { visitSection('walkthrough'); }, []);

  const questions = [
    {
      id: 'registered',
      q: "First things first, are you currently registered to vote at your current address?",
      options: [
        { label: "Yes, I'm registered", value: 'yes' },
        { label: "No, I need to register", value: 'no' },
        { label: "I'm not sure", value: 'unsure' }
      ]
    },
    {
      id: 'how_vote',
      q: "How do you prefer to cast your ballot?",
      options: [
        { label: "In person on Election Day", value: 'in_person' },
        { label: "Early voting in person", value: 'early' },
        { label: "By mail / Absentee", value: 'mail' }
      ]
    },
    {
      id: 'research',
      q: "Have you researched the candidates and measures on your ballot yet?",
      options: [
        { label: "Yes, I know who I'm voting for", value: 'yes' },
        { label: "I've done some research", value: 'some' },
        { label: "No, I need to look them up", value: 'no' }
      ]
    }
  ];

  const handleAnswer = (val) => {
    setAnswers(prev => ({ ...prev, [questions[step].id]: val }));
    if (step < questions.length) {
      setStep(s => s + 1);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
  };

  if (step === questions.length) {
    return (
      <div className="page walkthrough-mode">
        <div className="container" style={{ maxWidth: 600 }}>
          <div className="card animate-in" style={{ borderTop: '4px solid var(--primary)' }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <CheckCircle size={48} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
              <h2>Your Personalized Voting Plan</h2>
            </div>
            
            <div style={{ background: 'var(--bg)', padding: 20, borderRadius: 'var(--radius)', marginBottom: 24 }}>
              <ul style={{ paddingLeft: 20, margin: 0, lineHeight: 1.8 }}>
                {answers.registered === 'no' && <li><strong>Step 1:</strong> Register to vote immediately. Check your state's deadline!</li>}
                {answers.registered === 'unsure' && <li><strong>Step 1:</strong> Check your registration status on your Secretary of State's website.</li>}
                
                {answers.how_vote === 'in_person' && <li><strong>Step 2:</strong> Find your polling place and check what ID is required.</li>}
                {answers.how_vote === 'early' && <li><strong>Step 2:</strong> Look up early voting dates and locations in your county.</li>}
                {answers.how_vote === 'mail' && <li><strong>Step 2:</strong> Request your mail-in ballot now, and mail it back at least a week before Election Day.</li>}
                
                {answers.research === 'no' && <li><strong>Step 3:</strong> Use a nonpartisan site like Vote411.org to see your ballot and research candidates.</li>}
                {answers.research === 'some' && <li><strong>Step 3:</strong> Finish researching the down-ballot races (like judges and local props).</li>}
                {answers.research === 'yes' && <li><strong>Step 3:</strong> Great! You're ready to mark your ballot.</li>}
              </ul>
            </div>
            
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn btn-outline" onClick={reset}>Create New Plan</button>
              <Link to="/modes" className="btn btn-primary">Return to Modes</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[step];

  return (
    <div className="page walkthrough-mode">
      <div className="container" style={{ maxWidth: 600 }}>
        <Link to="/modes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary)', marginBottom: 24, fontWeight: 500, textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Modes
        </Link>
        
        <div className="section-header animate-in" style={{ textAlign: 'center' }}>
          <Compass size={48} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
          <h1>Walk Me Through It</h1>
          <p>Answer a few questions to get a personalized voting checklist.</p>
        </div>

        <div className="card animate-in">
          <div style={{ display: 'flex', gap: 6, marginBottom: 24, justifyContent: 'center' }}>
            {questions.map((_, i) => (
              <div key={i} style={{ height: 6, flex: 1, background: i <= step ? 'var(--primary)' : 'var(--border)', borderRadius: 3, transition: 'background 0.3s' }} />
            ))}
          </div>

          <h2 style={{ marginBottom: 24, fontSize: '1.4rem' }}>{currentQ.q}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {currentQ.options.map((opt, idx) => (
              <button 
                key={idx} 
                className="btn btn-outline" 
                style={{ textAlign: 'left', padding: '16px', fontSize: '1.1rem', justifyContent: 'space-between', display: 'flex' }}
                onClick={() => handleAnswer(opt.value)}
              >
                {opt.label} <ArrowRight size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
