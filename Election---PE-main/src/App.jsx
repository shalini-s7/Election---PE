import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ElectoBot from './components/ElectoBot';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Learn from './pages/Learn';
import Module from './pages/Module';
import Quiz from './pages/Quiz';
import Glossary from './pages/Glossary';
import FAQ from './pages/FAQ';
import ChatbotPage from './pages/ChatbotPage';
import Modes from './pages/Modes';
import TimeMachine from './pages/TimeMachine';
import BallotSimulator from './pages/BallotSimulator';
import CountdownTracker from './pages/CountdownTracker';
import WalkthroughMode from './pages/WalkthroughMode';
import CandidateLens from './pages/CandidateLens';
import AskSkeptic from './pages/AskSkeptic';
import ProcessMap from './pages/ProcessMap';
import MythBuster from './pages/MythBuster';

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useProgress();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Navigation onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:moduleId" element={<Module />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/modes" element={<Modes />} />
          <Route path="/modes/time-machine" element={<TimeMachine />} />
          <Route path="/modes/ballot-simulator" element={<BallotSimulator />} />
          <Route path="/modes/countdown" element={<CountdownTracker />} />
          <Route path="/modes/walkthrough" element={<WalkthroughMode />} />
          <Route path="/modes/candidate-lens" element={<CandidateLens />} />
          <Route path="/modes/ask-skeptic" element={<AskSkeptic />} />
          <Route path="/modes/process-map" element={<ProcessMap />} />
          <Route path="/modes/myth-buster" element={<MythBuster />} />
        </Routes>
      </main>
      <Footer />
      <ElectoBot />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </AuthProvider>
  );
}
