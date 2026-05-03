import { useState, useRef, useEffect } from 'react';
import { chatbotResponses, presetQuestions } from '../data/chatbot';
import { useProgress } from '../context/ProgressContext';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ElectoBot({ fullPage = false }) {
  const [open, setOpen] = useState(fullPage);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! 👋 I\'m **ElectoBot**, your friendly election guide. Ask me anything about the election process!' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEnd = useRef(null);
  const { incrementChatQuestions } = useProgress();

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const getResponse = (question) => {
    const q = question.toLowerCase().trim();
    for (const key of Object.keys(chatbotResponses)) {
      if (key === 'default') continue;
      if (q.includes(key) || key.split(' ').filter(w => w.length > 3).every(w => q.includes(w))) {
        return chatbotResponses[key];
      }
    }
    // keyword matching
    if (q.includes('register')) return chatbotResponses['how do i register to vote'];
    if (q.includes('electoral college') || q.includes('elector')) return chatbotResponses['what is the electoral college'];
    if (q.includes('election day') || q.includes('when')) return chatbotResponses['when is election day'];
    if (q.includes('type') || q.includes('kinds')) return chatbotResponses['what types of elections are there'];
    if (q.includes('vote') || q.includes('voting') || q.includes('ballot')) return chatbotResponses['how do i vote'];
    if (q.includes('primary') || q.includes('caucus')) return chatbotResponses['what is a primary election'];
    if (q.includes('after') || q.includes('count') || q.includes('result')) return chatbotResponses['what happens after voting'];
    return chatbotResponses['default'];
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { type: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    incrementChatQuestions();

    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text: getResponse(text) }]);
    }, 1000 + Math.random() * 800);
  };

  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  if (fullPage) {
    return (
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="section-header">
          <h1>🤖 ElectoBot</h1>
          <p>Your friendly, nonpartisan election guide</p>
        </div>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="chat-header">
            <h3>🤖 ElectoBot</h3>
            <p>Ask me anything about elections!</p>
          </div>
          <div className="chat-messages" style={{ maxHeight: 400 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.type}`} dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
            ))}
            {typing && <div className="chat-msg bot typing"><span></span><span></span><span></span></div>}
            <div ref={messagesEnd} />
          </div>
          <div className="chat-presets">
            {presetQuestions.map((q, i) => (
              <button key={i} className="preset-btn" onClick={() => sendMessage(q)}>{q}</button>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder="Type your question..."
              aria-label="Chat input"
            />
            <button className="chat-send" onClick={() => sendMessage(input)} aria-label="Send message">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chatbot-float">
      {open && (
        <div className="chat-window">
          <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3>🤖 ElectoBot</h3>
              <p>Ask me anything!</p>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', color: 'white', padding: 4 }} aria-label="Close chat">
              <X size={20} />
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.type}`} dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
            ))}
            {typing && <div className="chat-msg bot typing"><span></span><span></span><span></span></div>}
            <div ref={messagesEnd} />
          </div>
          <div className="chat-presets">
            {presetQuestions.slice(0, 3).map((q, i) => (
              <button key={i} className="preset-btn" onClick={() => sendMessage(q)}>{q}</button>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder="Ask a question..."
              aria-label="Chat input"
            />
            <button className="chat-send" onClick={() => sendMessage(input)} aria-label="Send">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setOpen(!open)} aria-label="Open ElectoBot">
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
