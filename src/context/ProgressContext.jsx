import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

const defaultState = {
  completedModules: [],
  moduleProgress: {},
  quizScores: {},
  earnedBadges: [],
  chatQuestions: 0,
  visitedSections: [],
  theme: 'light'
};

export function ProgressProvider({ children }) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem('epe-progress');
      return saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState;
    } catch { return defaultState; }
  });

  useEffect(() => {
    localStorage.setItem('epe-progress', JSON.stringify(state));
  }, [state]);

  const completeModule = (moduleId) => {
    setState(prev => {
      const completed = prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId];
      const newBadges = [...prev.earnedBadges];
      if (completed.length >= 1 && !newBadges.includes('first-module')) newBadges.push('first-module');
      if (completed.length >= 3 && !newBadges.includes('three-modules')) newBadges.push('three-modules');
      if (completed.length >= 6 && !newBadges.includes('all-modules')) newBadges.push('all-modules');
      return { ...prev, completedModules: completed, earnedBadges: newBadges };
    });
  };

  const setModuleProgress = (moduleId, stepIndex) => {
    setState(prev => ({
      ...prev,
      moduleProgress: { ...prev.moduleProgress, [moduleId]: stepIndex }
    }));
  };

  const saveQuizScore = (difficulty, score, total) => {
    setState(prev => {
      const newBadges = [...prev.earnedBadges];
      const badgeMap = { beginner: 'quiz-beginner', intermediate: 'quiz-intermediate', expert: 'quiz-expert' };
      if (badgeMap[difficulty] && !newBadges.includes(badgeMap[difficulty])) newBadges.push(badgeMap[difficulty]);
      if (score === total && !newBadges.includes('perfect-score')) newBadges.push('perfect-score');
      return {
        ...prev,
        quizScores: { ...prev.quizScores, [difficulty]: { score, total, date: new Date().toISOString() } },
        earnedBadges: newBadges
      };
    });
  };

  const incrementChatQuestions = () => {
    setState(prev => {
      const count = prev.chatQuestions + 1;
      const newBadges = [...prev.earnedBadges];
      if (count >= 5 && !newBadges.includes('chatbot-user')) newBadges.push('chatbot-user');
      return { ...prev, chatQuestions: count, earnedBadges: newBadges };
    });
  };

  const visitSection = (section) => {
    setState(prev => {
      if (prev.visitedSections.includes(section)) return prev;
      const visited = [...prev.visitedSections, section];
      const newBadges = [...prev.earnedBadges];
      const allSections = ['home', 'timeline', 'learn', 'quiz', 'glossary', 'faq', 'chatbot'];
      if (allSections.every(s => visited.includes(s)) && !newBadges.includes('explorer')) newBadges.push('explorer');
      return { ...prev, visitedSections: visited, earnedBadges: newBadges };
    });
  };

  const toggleTheme = () => {
    setState(prev => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }));
  };

  const getOverallProgress = () => {
    const moduleWeight = 60;
    const quizWeight = 30;
    const badgeWeight = 10;
    const modulePct = (state.completedModules.length / 6) * moduleWeight;
    const quizPct = (Object.keys(state.quizScores).length / 3) * quizWeight;
    const badgePct = (state.earnedBadges.length / 9) * badgeWeight;
    return Math.round(modulePct + quizPct + badgePct);
  };

  const resetProgress = () => {
    setState({ ...defaultState, theme: state.theme });
  };

  return (
    <ProgressContext.Provider value={{
      ...state, completeModule, setModuleProgress, saveQuizScore,
      incrementChatQuestions, visitSection, toggleTheme, getOverallProgress, resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
