import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy, Sparkles, CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CulturalQuizModalProps {
  onClose: () => void;
}

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  state: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    question: 'Which state is world-famous for the classical dance-drama "Kathakali" with elaborate makeup and facial expressions?',
    options: ['Tamil Nadu', 'Kerala', 'Odisha', 'Gujarat'],
    correctIndex: 1,
    explanation: 'Kathakali originated in Kerala and is renowned for its stylized green face makeup (Pachha), vivid eye movements, and Chenda percussion.',
    state: 'Kerala',
  },
  {
    question: 'In which state can you find the 5-story pink-red sandstone "Hawa Mahal" with 953 jharokhas?',
    options: ['Rajasthan', 'Uttar Pradesh', 'Maharashtra', 'Punjab'],
    correctIndex: 0,
    explanation: 'Hawa Mahal (Palace of Winds) was built in 1799 in Jaipur, Rajasthan by Maharaja Sawai Pratap Singh.',
    state: 'Rajasthan',
  },
  {
    question: 'The UNESCO Intangible Cultural Heritage folk dance "Garba" is traditionally performed during Navratri in which state?',
    options: ['West Bengal', 'Assam', 'Gujarat', 'Karnataka'],
    correctIndex: 2,
    explanation: 'Garba is the iconic circular folk dance of Gujarat, celebrated with Dandiyas and vibrant Chaniya Cholis during 9 nights of Navratri.',
    state: 'Gujarat',
  },
  {
    question: 'Which ancient temple is famous for its 24 carved stone wheels that function as accurate solar sundials?',
    options: ['Meenakshi Temple', 'Konark Sun Temple', 'Kashi Vishwanath', 'Brihadisvara Temple'],
    correctIndex: 1,
    explanation: 'The Konark Sun Temple in Odisha was built in the 13th century as a monumental chariot of the Sun God.',
    state: 'Odisha',
  },
  {
    question: 'Golden "Muga Silk", known for its shimmering natural golden color that deepens with washing, is exclusive to which state?',
    options: ['Karnataka', 'West Bengal', 'Assam', 'Maharashtra'],
    correctIndex: 2,
    explanation: 'Muga Silk is exclusive to the Brahmaputra valley of Assam and holds a Geographical Indication (GI) tag.',
    state: 'Assam',
  },
];

export const CulturalQuizModal: React.FC<CulturalQuizModalProps> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl text-slate-100 p-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {!isCompleted ? (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                Heritage Trivia Challenge
              </span>
              <span className="ml-auto text-xs text-slate-400 font-medium">
                Question {currentIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full mb-5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            <h3 className="text-base font-bold text-white leading-snug mb-5">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-2.5 mb-5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQ.correctIndex;
                const showResult = selectedAnswer !== null;

                let optionStyle = 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-amber-500/50';

                if (showResult) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                  } else if (isSelected) {
                    optionStyle = 'bg-red-500/20 border-red-500 text-red-300';
                  } else {
                    optionStyle = 'bg-slate-800/40 border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={showResult}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs text-left transition-all ${optionStyle}`}
                  >
                    <span>{opt}</span>
                    {showResult && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-red-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer */}
            {selectedAnswer !== null && (
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs mb-5 animate-fade-in">
                <span className="font-bold text-amber-400 block mb-1">
                  🏛️ Cultural Insight ({currentQ.state}):
                </span>
                <p className="text-slate-300 leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {selectedAnswer !== null && (
              <button
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-lg"
              >
                <span>{currentIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto text-2xl">
              🏆
            </div>
            <h3 className="text-xl font-bold text-white font-serif">Heritage Explorer Certificate</h3>
            <p className="text-xs text-slate-300">
              You scored <span className="text-amber-400 font-bold text-sm">{score}</span> out of{' '}
              <span className="font-bold">{QUIZ_QUESTIONS.length}</span> questions correctly!
            </p>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300">
              {score >= 4
                ? '🌟 Outstanding! You have exceptional mastery over Indian regional arts, monuments, and cultural traditions.'
                : '✨ Great effort! Continue exploring the interactive map to discover more monuments, dances, and historical milestones.'}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-lg"
              >
                Return to Map
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
