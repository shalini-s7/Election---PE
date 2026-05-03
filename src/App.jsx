import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider, useProgress } from './context/ProgressContext';
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
        </Routes>
      </main>
      <Footer />
      <ElectoBot />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
