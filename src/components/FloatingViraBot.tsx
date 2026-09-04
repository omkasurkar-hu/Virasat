import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Send, 
  X, 
  Minimize2, 
  RefreshCw, 
  Lightbulb, 
  Bot, 
  MessageSquare, 
  Compass, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { StateHeritage } from '../types';

interface FloatingViraBotProps {
  states: StateHeritage[];
  onSelectState?: (state: StateHeritage) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'vira';
  text: string;
  timestamp: string;
  suggestedFollowUps?: string[];
  matchedState?: StateHeritage;
}

const SURPRISE_CURIOSITIES = [
  {
    fact: "The 80-ton monolithic granite dome atop the Brihadisvara Temple at Thanjavur casts no shadow on the ground at exact solar noon on solstice days.",
    state: "Tamil Nadu",
    stateId: "tamil-nadu",
    topic: "Architecture & Astronomy"
  },
  {
    fact: "Rogan art in Kutch is made by boiling wild castor oil for 2 days until it turns into a glowing rubbery paste, stretched into gossamer threads in mid-air with an iron stylus without touching the cloth.",
    state: "Gujarat",
    stateId: "gujarat",
    topic: "Endangered Crafts"
  },
  {
    fact: "Madhava of Sangamagrama in 14th-century Kerala calculated the infinite series for Pi (π) and trigonometric sine/cosine 250 years before Gottfried Leibniz in Europe.",
    state: "Kerala",
    stateId: "kerala",
    topic: "Ancient Mathematics"
  },
  {
    fact: "The Iron Pillar of Delhi in the Qutb Complex has resisted rusting for over 1,600 years due to a high-phosphorus passive film created by ancient Gupta metallurgists.",
    state: "Delhi",
    stateId: "delhi",
    topic: "Metallurgical Wonder"
  },
  {
    fact: "The Sun Temple at Konark features 24 colossal carved stone wheels that function as precise sundials; you can calculate exact minutes by observing the shadow on the spokes.",
    state: "Odisha",
    stateId: "odisha",
    topic: "Solar Architecture"
  }
];

const PRESET_TOPICS = [
  "How was the Taj Mahal engineered?",
  "Tell me about Rajasthan's Ghoomar dance",
  "Explain Kerala's 26-dish Onam Sadhya",
  "Why is Kailash Temple at Ellora miraculous?",
  "What is the story of Rogan fabric art?"
];

export const FloatingViraBot: React.FC<FloatingViraBotProps> = ({ states, onSelectState }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputQuery, setInputQuery] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [curiosityIndex, setCuriosityIndex] = useState<number>(0);
  const [showCuriosityBanner, setShowCuriosityBanner] = useState<boolean>(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-vira',
      sender: 'vira',
      text: 'Namaste! I am Vira, your AI cultural guide through India’s 5,000 years of living heritage. Ask me about ancient monuments, classical dances, GI-tagged handlooms, festive folklore, regional recipes, or historical science.',
      timestamp: 'Just now',
      suggestedFollowUps: [
        'Tell me about Rajasthan folk music',
        'What is Rogan fabric painting?',
        'How was the Taj Mahal designed?'
      ]
    }
  ]);

  // Auto-scroll chat to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when opened
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isTyping]);

  const handleNextCuriosity = () => {
    setCuriosityIndex((prev) => (prev + 1) % SURPRISE_CURIOSITIES.length);
  };

  const handleSend = async (queryText: string) => {
    const text = queryText.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Identify if a state is referenced in the query
    const lowerText = text.toLowerCase();
    const matchedState = states.find((s) => 
      lowerText.includes(s.name.toLowerCase()) || 
      lowerText.includes(s.id.toLowerCase())
    );

    // Call server-side /api/ask-vira (or fallback /api/ask-bharat)
    try {
      const res = await fetch('/api/ask-vira', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: text })
      });

      if (res.ok) {
        const data = await res.json();
        const botMsg: ChatMessage = {
          id: `vira-${Date.now()}`,
          sender: 'vira',
          text: data.answer || generateFallbackAnswer(text, states),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedFollowUps: data.suggestedFollowUps || [
            'Tell me more about the architecture',
            'What are the traditional folk arts?'
          ],
          matchedState
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }
    } catch {}

    // Built-in intelligent cultural response generator fallback
    setTimeout(() => {
      const botResponse = generateFallbackAnswer(text, states);
      const botMsg: ChatMessage = {
        id: `vira-${Date.now()}`,
        sender: 'vira',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedFollowUps: [
          'What are the traditional sweets of this region?',
          'Which folk dance is celebrated here?',
          'Tell me about another state'
        ],
        matchedState
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 550);
  };

  const currentCuriosity = SURPRISE_CURIOSITIES[curiosityIndex];

  return (
    <>
      {/* Floating Trigger Button at Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <motion.button
            id="btn-open-floating-vira"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#8B1E22] via-[#A02227] to-[#8B1E22] text-amber-100 shadow-[0_10px_25px_rgba(139,30,34,0.4),0_0_15px_rgba(245,158,11,0.3)] border-2 border-amber-300/80 cursor-pointer backdrop-blur-md transition-all duration-300"
            title="Chat with Vira - AI Cultural Heritage Guide"
          >
            {/* Glowing Pulse Ring */}
            <span className="absolute -inset-1 rounded-full bg-amber-400/30 animate-ping pointer-events-none" />

            {/* Avatar Crest */}
            <div className="w-8 h-8 rounded-full bg-amber-400 text-[#8B1E22] flex items-center justify-center font-serif font-black text-sm shadow-md flex-shrink-0">
              वि
            </div>

            {/* Label */}
            <div className="flex items-center gap-1.5 pr-1">
              <span className="font-serif font-bold text-sm text-white tracking-wide leading-none">
                Ask Vira
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            </div>

            {/* Green Online Dot */}
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#8B1E22] shadow-sm" />
          </motion.button>
        )}
      </div>

      {/* Floating Chatbot Window / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="floating-vira-window"
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.94 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[calc(100vh-3rem)] rounded-3xl overflow-hidden bg-[#FAF7F2] border-2 border-amber-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(139,30,34,0.25)] flex flex-col font-sans"
          >
            {/* Header */}
            <div className="px-4 py-3.5 bg-gradient-to-r from-[#8B1E22] via-[#75171A] to-[#8B1E22] text-amber-100 flex items-center justify-between shadow-md select-none">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-2xl bg-amber-400 text-[#8B1E22] flex items-center justify-center font-serif font-black text-base shadow-md">
                    वि
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#8B1E22]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif font-bold text-base text-white leading-tight">
                      Vira
                    </h3>
                    <span className="px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-400/30">
                      AI Guide
                    </span>
                  </div>
                  <p className="text-[11px] text-amber-200/80 leading-none mt-0.5">
                    Indian Heritage & Cultural Scholar
                  </p>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setShowCuriosityBanner((prev) => !prev)}
                  className={`p-1.5 rounded-xl transition-colors ${
                    showCuriosityBanner ? 'bg-amber-500/30 text-amber-200' : 'hover:bg-white/10 text-amber-200/70'
                  }`}
                  title="Toggle Did You Know trivia"
                >
                  <Lightbulb className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMessages([
                      {
                        id: `welcome-vira-${Date.now()}`,
                        sender: 'vira',
                        text: 'Namaste! Conversation cleared. Ask me any question about monuments, dances, arts, cuisines, or folklore of India.',
                        timestamp: 'Just now',
                        suggestedFollowUps: [
                          'Tell me about Rajasthan folk music',
                          'What is Rogan fabric painting?',
                          'How was the Taj Mahal designed?'
                        ]
                      }
                    ]);
                  }}
                  className="p-1.5 rounded-xl hover:bg-white/10 text-amber-200/70 hover:text-white transition-colors"
                  title="Clear conversation"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-white/10 text-amber-200 hover:text-white transition-colors cursor-pointer"
                  title="Minimize chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Did You Know Curiosities Strip */}
            {showCuriosityBanner && (
              <div className="bg-amber-100/90 border-b border-amber-200/80 px-3.5 py-2 flex items-start justify-between gap-2 transition-all">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-amber-900 uppercase tracking-wider">
                    <span>💡 Did You Know?</span>
                    <span className="text-amber-700 font-normal">({currentCuriosity.state})</span>
                  </div>
                  <p className="text-[11px] text-stone-800 line-clamp-2 leading-tight mt-0.5 italic">
                    "{currentCuriosity.fact}"
                  </p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0 pt-0.5">
                  <button
                    onClick={handleNextCuriosity}
                    className="p-1 rounded-lg hover:bg-amber-200 text-amber-900 text-[10px] font-bold transition-colors"
                    title="Next curiosity"
                  >
                    Next
                  </button>
                  <button
                    onClick={() => handleSend(`Tell me more about ${currentCuriosity.topic} in ${currentCuriosity.state}`)}
                    className="p-1 rounded-lg bg-[#8B1E22] text-white text-[10px] font-semibold hover:bg-[#721519] transition-colors"
                    title="Ask Vira about this"
                  >
                    Ask
                  </button>
                </div>
              </div>
            )}

            {/* Chat Messages List */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 scroll-smooth">
              {/* Quick Starter Topics Strip (visible when fresh) */}
              {messages.length <= 1 && (
                <div className="space-y-1.5 pb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    ✨ Suggested Topics to Inquire:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {PRESET_TOPICS.map((topic, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(topic)}
                        className="px-2.5 py-1 rounded-xl bg-white hover:bg-amber-50 hover:border-amber-400 border border-stone-200 text-[11px] text-stone-700 hover:text-stone-900 font-medium transition-all shadow-xs text-left"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages */}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'vira' && (
                    <div className="w-6 h-6 rounded-lg bg-[#8B1E22] text-amber-100 flex items-center justify-center text-[10px] font-serif font-black flex-shrink-0 mt-1 shadow-xs">
                      वि
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-xs ${
                      m.sender === 'user'
                        ? 'bg-[#8B1E22] text-white rounded-tr-none'
                        : 'bg-white text-stone-800 rounded-tl-none border border-stone-200/90'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed">{m.text}</p>
                    
                    {/* Related State Shortcut */}
                    {m.matchedState && onSelectState && (
                      <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-[10px] text-stone-500">
                          Explore {m.matchedState.name} Heritage:
                        </span>
                        <button
                          onClick={() => {
                            if (m.matchedState && onSelectState) {
                              onSelectState(m.matchedState);
                              setIsOpen(false);
                            }
                          }}
                          className="px-2 py-0.5 rounded-md bg-amber-50 hover:bg-amber-100 text-[#8B1E22] text-[10px] font-bold border border-amber-200 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>Open State View</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    )}

                    <span className={`text-[9px] block mt-1 ${m.sender === 'user' ? 'text-amber-200/80' : 'text-stone-400'} text-right font-mono`}>
                      {m.timestamp}
                    </span>

                    {/* Follow-up Prompts */}
                    {m.suggestedFollowUps && m.suggestedFollowUps.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-stone-100 flex flex-wrap gap-1">
                        {m.suggestedFollowUps.map((fu, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSend(fu)}
                            className="px-2 py-0.8 rounded-lg bg-stone-50 text-[#8B1E22] hover:bg-[#8B1E22] hover:text-white border border-stone-200 text-[10px] font-semibold transition-all cursor-pointer text-left"
                          >
                            💬 {fu}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing State */}
              {isTyping && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-6 h-6 rounded-lg bg-[#8B1E22] text-amber-100 flex items-center justify-center text-[10px] font-serif font-black flex-shrink-0 shadow-xs">
                    वि
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-3.5 py-2.5 text-xs text-stone-500 border border-stone-200 flex items-center gap-2 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce delay-150" />
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce delay-300" />
                    <span className="text-[11px] font-medium text-stone-600">Vira is consulting the cultural archives...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputQuery);
              }}
              className="p-3 bg-white border-t border-stone-200/90 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                id="input-floating-vira"
                placeholder="Ask Vira about dances, monuments, recipes..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30 bg-stone-50"
              />
              <button
                type="submit"
                id="btn-floating-vira-send"
                disabled={!inputQuery.trim() || isTyping}
                className="p-2.5 rounded-xl bg-[#8B1E22] text-white hover:bg-[#721519] disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all cursor-pointer flex-shrink-0"
                title="Send question"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Fallback cultural knowledge generator when offline or in rapid mode
function generateFallbackAnswer(query: string, states: StateHeritage[]): string {
  const lower = query.toLowerCase();

  if (lower.includes('ghoomar') || lower.includes('rajasthan')) {
    return "Rajasthan's culture is a vibrant oasis of heritage. Ghoomar is the signature royal folk dance performed by women wearing heavy 80-kali Ghaghara skirts that swirl in dazzling spirals. Accompanied by the Dholak and Sarangi, dancers twirl while maintaining balance with brass pots or lit lamps (Chari dance). Rajasthani cuisine features Dal Baati Churma, slow-baked over cow dung cake embers and dipped in rich desi ghee.";
  }

  if (lower.includes('taj mahal') || lower.includes('architecture') || lower.includes('agra')) {
    return "The Taj Mahal in Agra, completed in 1648 CE by Emperor Shah Jahan, represents the pinnacle of Mughal architectural symmetry. Built entirely from pure white Makrana marble, its walls are adorned with Parchin Kari (Pietra Dura)—intricate floral arabesques created by inlaying 28 varieties of precious gemstones including lapis lazuli, jade, crystal, and carnelian.";
  }

  if (lower.includes('onam') || lower.includes('kerala')) {
    return "Onam celebrates the homecoming of the benevolent mythical King Mahabali. The highlight is the Onam Sadhya, an elaborate 26-dish vegetarian feast served on a fresh plantain leaf. Dishes include Avial, Olan, Thoran, Kalan, Erissery, and Ada Pradhaman payasam. The celebration also features grand Vallam Kali snake boat races and Pookkalam floral carpets.";
  }

  if (lower.includes('rogan') || lower.includes('gujarat') || lower.includes('kutch')) {
    return "Rogan painting is an endangered 300-year-old craft preserved solely in Nirona village, Kutch. Artisans boil castor oil for two days to create an elastic pigment paste, then stretch gossamer threads in mid-air using a metal stylus without touching the fabric directly. When folded in half, it forms a breathtaking symmetrical Tree of Life.";
  }

  if (lower.includes('ellora') || lower.includes('kailash') || lower.includes('maharashtra')) {
    return "Cave 16 (Kailasha Temple) at Ellora, Maharashtra, carved during the Rashtrakuta dynasty in the 8th century CE under King Krishna I, is the world's largest monolithic rock-cut monument. Over 200,000 tonnes of basalt rock were excavated from the top down without any scaffolding, creating an intricate multi-story temple adorned with epic Ramayana and Mahabharata relief panels.";
  }

  if (lower.includes('music') || lower.includes('carnatic') || lower.includes('hindustani')) {
    return "Indian classical music divided into two great traditions around the 12th–13th century CE: Hindustani in the North (with influences from Persian court music, Dhrupad, and Khayal) and Carnatic in the South (anchored in temple devotion, Trinity composers Tyagaraja, Muthuswami Dikshitar, and Syama Sastri, with rigorous Kriti structures). Both share the foundational principles of Raga (melodic framework) and Tala (rhythmic cycle).";
  }

  return "India's heritage is defined by the timeless ideal of 'Ek Bharat, Shreshtha Bharat' (One India, Many Cultures). Every state holds unique architectural wonders, classical performing arts, GI-tagged handlooms, and ancient folk wisdom. Feel free to ask Vira about any state, festival, dance form, monument, or craft!";
}
