import { useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import ElectoBot from '../components/ElectoBot';

export default function ChatbotPage() {
  const { visitSection } = useProgress();
  useEffect(() => { visitSection('chatbot'); }, []);

  return (
    <div className="page">
      <div className="container">
        <ElectoBot fullPage={true} />
      </div>
    </div>
  );
}
