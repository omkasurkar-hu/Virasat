import React, { useState } from 'react';
import { StateHeritage } from '../types';
import { 
  Sparkles, 
  Send, 
  Compass, 
  BookOpen, 
  HelpCircle, 
  Flame, 
  RefreshCw, 
  Lightbulb, 
  Landmark, 
  Music, 
  Utensils, 
  MessageSquare,
  Bot
} from 'lucide-react';

interface AskBharatSectionProps {
  states: StateHeritage[];
  onSelectState?: (state: StateHeritage) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'bharat';
  text: string;
  timestamp: string;
  suggestedFollowUps?: string[];
  relatedState?: string;
}

const SURPRISE_CURIOSITIES = [
  {
    fact: "The 80-ton monolithic granite dome atop the Brihadisvara Temple at Thanjavur casts no shadow on the ground at exact solar noon on solstice days.",
    state: "Tamil Nadu",
    topic: "Architecture & Astronomy"
  },
  {
    fact: "Rogan art in Kutch is made by boiling wild castor oil for 2 days until it turns into a glowing rubbery paste, which is stretched into gossamer threads in mid-air with an iron stylus without ever touching the cloth.",
    state: "Gujarat",
    topic: "Endangered Crafts"
  },
  {
    fact: "Madhava of Sangamagrama in 14th-century Kerala calculated the infinite series for Pi (π) and trigonometric sine/cosine 250 years before Gottfried Leibniz in Europe.",
    state: "Kerala",
    topic: "Ancient Mathematics"
  },
  {
    fact: "The Iron Pillar of Delhi in the Qutb Complex has resisted rusting for over 1,600 years due to a high-phosphorus passive film created by ancient Gupta metallurgists.",
    state: "Delhi",
    topic: "Metallurgical Wonder"
  },
  {
    fact: "In Manipuri Pung Cholom, drummers perform full 360-degree aerial acrobatic somersaults while playing complex classical talas on the jackfruit-wood drum.",
    state: "Manipur",
    topic: "Martial Performing Arts"
  },
  {
    fact: "The Sun Temple at Konark features 24 colossal carved stone wheels that function as precise sundials; you can calculate exact minutes by observing the shadow on the spokes.",
    state: "Odisha",
    topic: "Solar Architecture"
  }
];

const PRESET_QUESTIONS = [
  "What is the story behind Rajasthan's Ghoomar dance and traditional attire?",
  "How did the lost-wax (Dhokra) casting method survive 4,000 years?",
  "Explain the significance of the 26 dishes in Kerala's Onam Sadhya feast.",
  "Why is the Kailash Temple at Ellora considered a world architectural miracle?",
  "Tell me a folk story about the Thar Desert and King Pabuji.",
  "What is the difference between Carnatic and Hindustani classical music?"
];

export const AskBharatSection: React.FC<AskBharatSectionProps> = ({ states, onSelectState }) => {
  const [inputQuery, setInputQuery] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [curiosityIndex, setCuriosityIndex] = useState<number>(0);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bharat',
      text: 'Namaste! I am Bharat, your cultural guide through India’s 5,000 years of living heritage. Ask me about ancient monuments, classical dance forms, GI-tagged handlooms, festive folklore, regional recipes, or historical science.',
      timestamp: 'Just now',
      suggestedFollowUps: [
        'How was the Taj Mahal designed?',
        'Tell me about Rajasthan folk music',
        'What is Rogan fabric painting?'
      ]
    }
  ]);

  const handleSurpriseMe = () => {
    setCuriosityIndex((prev) => (prev + 1) % SURPRISE_CURIOSITIES.length);
  };

  const currentCuriosity = SURPRISE_CURIOSITIES[curiosityIndex];

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

    // Call server-side /api/ask-bharat if available or provide rich scholar response
    try {
      const res = await fetch('/api/ask-bharat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: text })
      });

      if (res.ok) {
        const data = await res.json();
        const botMsg: ChatMessage = {
          id: `bharat-${Date.now()}`,
          sender: 'bharat',
          text: data.answer || generateFallbackAnswer(text, states),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedFollowUps: data.suggestedFollowUps || ['Tell me more about the architecture', 'What are related folk songs?']
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }
    } catch {}

    // Built-in intelligent cultural response generator
    setTimeout(() => {
      const botResponse = generateFallbackAnswer(text, states);
      const botMsg: ChatMessage = {
        id: `bharat-${Date.now()}`,
        sender: 'bharat',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedFollowUps: [
          'What are the traditional sweets of this region?',
          'Which folk dance is celebrated here?',
          'Tell me about another state'
        ]
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div id="ask-bharat-section" className="min-h-screen bg-[#FAF7F2] text-stone-900 pb-24">
      {/* Header */}
      <div className="bg-stone-900 text-stone-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>Interactive Cultural Guide</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Ask Bharat
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-base leading-relaxed">
            Have questions about India’s rich tapestry of cultures, temple engineering, folk music, recipes, or endangered traditions? Inquire below or explore fascinating cultural curiosities.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Surprise Me & Question Starters */}
        <div className="lg:col-span-4 space-y-6">
          {/* Curiosity Box */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
                <Lightbulb className="w-3 h-3 text-amber-700" />
                <span>Did You Know?</span>
              </span>
              <button
                id="btn-surprise-refresh"
                onClick={handleSurpriseMe}
                className="text-xs text-[#8B1E22] hover:text-[#721519] font-bold flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Surprise Me</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-serif italic">
              "{currentCuriosity.fact}"
            </p>
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium">
              <span>📍 {currentCuriosity.state}</span>
              <span className="text-[#8B1E22] font-semibold">{currentCuriosity.topic}</span>
            </div>
          </div>

          {/* Suggested Starter Topics */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8B1E22]" />
              <span>Explore Curated Questions</span>
            </h3>
            <div className="space-y-2">
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="w-full text-left p-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 hover:border-amber-300 border border-stone-200 text-xs text-stone-700 hover:text-stone-900 transition-all cursor-pointer font-medium leading-snug"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Chat Interface */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col h-[650px] overflow-hidden">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#8B1E22] text-amber-100 flex items-center justify-center font-serif font-black shadow-xs">
                भ
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 leading-tight">
                  Bharat Cultural Guide
                </h3>
                <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  Ready to answer cultural questions
                </span>
              </div>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bharat' && (
                  <div className="w-7 h-7 rounded-lg bg-[#8B1E22] text-white flex items-center justify-center text-xs font-serif flex-shrink-0 mt-1">
                    वि
                  </div>
                )}
                <div
                  className={`max-w-xl rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#8B1E22] text-white rounded-tr-none'
                      : 'bg-stone-100 text-stone-800 rounded-tl-none border border-stone-200/80'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                  <span className={`text-[10px] block mt-1.5 ${m.sender === 'user' ? 'text-amber-200' : 'text-stone-400'} text-right`}>
                    {m.timestamp}
                  </span>

                  {m.suggestedFollowUps && m.suggestedFollowUps.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-stone-200/60 flex flex-wrap gap-1.5">
                      {m.suggestedFollowUps.map((fu, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(fu)}
                          className="px-2.5 py-1 rounded-md bg-white text-[#8B1E22] hover:bg-[#8B1E22] hover:text-white border border-stone-200 text-[11px] font-semibold transition-all cursor-pointer shadow-2xs"
                        >
                          {fu}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded-lg bg-[#8B1E22] text-white flex items-center justify-center text-xs font-serif flex-shrink-0">
                  वि
                </div>
                <div className="bg-stone-100 rounded-2xl rounded-tl-none p-3.5 text-xs text-stone-500 border border-stone-200 flex items-center gap-1.5 animate-pulse">
                  <span>Bharat is consulting the cultural archives...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputQuery);
            }}
            className="p-4 border-t border-stone-200 bg-white flex items-center gap-2"
          >
            <input
              type="text"
              id="input-ask-bharat"
              placeholder="Ask anything about Indian heritage, dance, cuisine, or history..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E22]/30 bg-stone-50"
            />
            <button
              type="submit"
              id="btn-ask-bharat-send"
              disabled={!inputQuery.trim() || isTyping}
              className="px-5 py-3 rounded-xl bg-[#8B1E22] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#721519] disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ask</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Fallback cultural knowledge generator when offline or in rapid mode
function generateFallbackAnswer(query: string, states: StateHeritage[]): string {
  const lower = query.toLowerCase();

  if (lower.includes('ghoomar') || lower.includes('rajasthan')) {
    return "Rajasthan's culture is a vibrant oasis of heritage. Ghoomar is the signature royal folk dance performed by women wearing heavy 80-kali Ghaghara skirts that swirl in dazzling spirals. Accompanied by the Dholak and Sarangi, dancers twirl while maintaining balance with brass pots or lit lamps (Chari dance). Rajasthani cuisine features Dal Baati Churma, slow-baked over cow dung cake embers and dipped in rich desi ghee.";
  }

  if (lower.includes('taj mahal') || lower.includes('architecture')) {
    return "The Taj Mahal in Agra, completed in 1648 CE by Emperor Shah Jahan, represents the pinnacle of Mughal architectural symmetry. Built entirely from pure white Makrana marble, its walls are adorned with Parchin Kari (Pietra Dura)—intricate floral arabesques created by inlaying 28 varieties of precious gemstones including lapis lazuli, jade, crystal, and carnelian.";
  }

  if (lower.includes('onam') || lower.includes('kerala')) {
    return "Onam celebrates the homecoming of the benevolent mythical King Mahabali. The highlight is the Onam Sadhya, an elaborate 26-dish vegetarian feast served on a fresh plantain leaf. Dishes include Avial, Olan, Thoran, Kalan, Erissery, and Ada Pradhaman payasam. The celebration also features grand Vallam Kali snake boat races and Pookkalam floral carpets.";
  }

  if (lower.includes('rogan') || lower.includes('gujarat')) {
    return "Rogan painting is an endangered 300-year-old craft preserved solely in Nirona village, Kutch. Artisans boil castor oil for two days to create an elastic pigment paste, then stretch gossamer threads in mid-air using a metal stylus without touching the fabric directly. When folded in half, it forms a breathtaking symmetrical Tree of Life.";
  }

  if (lower.includes('music') || lower.includes('carnatic') || lower.includes('hindustani')) {
    return "Indian classical music divided into two great traditions around the 12th–13th century CE: Hindustani in the North (with influences from Persian court music, Dhrupad, and Khayal) and Carnatic in the South (anchored in temple devotion, Trinity composers Tyagaraja, Muthuswami Dikshitar, and Syama Sastri, with rigorous Kriti structures). Both share the foundational principles of Raga (melodic framework) and Tala (rhythmic cycle).";
  }

  return "India's heritage is defined by the timeless ideal of 'Ek Bharat, Shreshtha Bharat' (One India, Many Cultures). Every state holds unique architectural wonders, classical performing arts, GI-tagged handlooms, and ancient folk wisdom. Feel free to explore the interactive map or select any specific state to uncover its mini cultural world!";
}
