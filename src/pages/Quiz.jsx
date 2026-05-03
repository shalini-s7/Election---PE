import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { quizQuestions } from '../data/quiz';

export default function Quiz() {
  const [difficulty, setDifficulty] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const { saveQuizScore, visitSection } = useProgress();

  useEffect(() => { visitSection('quiz'); }, []);

  const questions = difficulty ? quizQuestions[difficulty] : [];
  const q = questions[currentQ];

  const handleAnswer = (idx) => {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
    if (idx === q.correct) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      const finalScore = selected === q.correct ? score : score;
      saveQuizScore(difficulty, finalScore, questions.length);
      setFinished(true);
      launchConfetti();
    }
  };

  const launchConfetti = () => {
    const colors = ['#d4a843', '#1a3a5c', '#22c55e', '#ef4444', '#4a9eed', '#e8c76a'];
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i, left: Math.random() * 100, color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5, size: 6 + Math.random() * 8
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 2500);
  };

  const restart = () => {
    setDifficulty(null); setCurrentQ(0); setSelected(null);
    setShowFeedback(false); setScore(0); setFinished(false);
  };

  if (!difficulty) {
    return (
      <div className="page">
        <div className="container">
          <div className="section-header animate-in">
            <h1>🎯 Election Quiz</h1>
            <p>Test your knowledge of the election process! Choose a difficulty level to begin.</p>
          </div>
          <div className="quiz-setup animate-in" style={{ animationDelay: '0.2s' }}>
            <div className="difficulty-btns">
              {[
                { key: 'beginner', label: '🌱 Beginner', desc: 'Basic concepts' },
                { key: 'intermediate', label: '📘 Intermediate', desc: 'Deeper knowledge' },
                { key: 'expert', label: '🏆 Expert', desc: 'Challenge yourself' }
              ].map(d => (
                <button key={d.key} className="diff-btn card" onClick={() => setDifficulty(d.key)}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 150 }}>
                  <span style={{ fontSize: '1.5rem' }}>{d.label.split(' ')[0]}</span>
                  <strong>{d.label.split(' ')[1]}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{d.desc}</span>
                </button>
              ))}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Each quiz has 10 questions with instant feedback.</p>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const msg = pct >= 90 ? 'Outstanding! 🌟' : pct >= 70 ? 'Great job! 👏' : pct >= 50 ? 'Good effort! 💪' : 'Keep learning! 📚';
    return (
      <div className="page">
        <div className="container">
          <div className="quiz-result animate-in">
            <div className="score-circle">{pct}%</div>
            <h2 style={{ marginBottom: 8 }}>{msg}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 8 }}>
              You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: 32, textTransform: 'capitalize' }}>
              Difficulty: {difficulty}
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={restart}>Try Another Quiz</button>
              <button className="btn btn-outline" onClick={() => { setDifficulty(difficulty); setCurrentQ(0); setSelected(null); setShowFeedback(false); setScore(0); setFinished(false); }}>
                Retry This Quiz
              </button>
            </div>
          </div>
        </div>
        {confetti.length > 0 && (
          <div className="confetti-container">
            {confetti.map(p => (
              <div key={p.id} className="confetti-piece"
                style={{ left: `${p.left}%`, background: p.color, width: p.size, height: p.size,
                  animationDelay: `${p.delay}s`, borderRadius: Math.random() > 0.5 ? '50%' : '2px' }} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <div className="quiz-area animate-in">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span className="badge" style={{ textTransform: 'capitalize' }}>{difficulty}</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Score: {score}</span>
          </div>
          <div className="quiz-progress">
            <div className="progress-bar" style={{ flex: 1 }}>
              <div className="progress-fill" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
            </div>
            <span>{currentQ + 1}/{questions.length}</span>
          </div>
          <div className="card question-card">
            <h3>{q.question}</h3>
            <div className="options">
              {q.options.map((opt, i) => {
                let cls = 'option-btn';
                if (showFeedback && i === q.correct) cls += ' correct';
                if (showFeedback && i === selected && i !== q.correct) cls += ' wrong';
                return (
                  <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={showFeedback}>
                    <span style={{ fontWeight: 600, marginRight: 8 }}>{String.fromCharCode(65 + i)}.</span> {opt}
                  </button>
                );
              })}
            </div>
            {showFeedback && (
              <>
                <div className={`feedback-msg ${selected === q.correct ? 'correct' : 'wrong'}`}>
                  {selected === q.correct ? '✅ Correct!' : '❌ Incorrect'}
                </div>
                <p style={{ marginTop: 12, fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  <strong>Explanation:</strong> {q.explanation}
                </p>
                <div style={{ textAlign: 'right', marginTop: 16 }}>
                  <button className="btn btn-primary" onClick={nextQuestion}>
                    {currentQ < questions.length - 1 ? 'Next Question →' : 'See Results 🎉'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
