import React, { useState } from 'react';
import { STATE_QUIZZES_DATA } from '../data/stateQuizzesData';
import { StateQuizQuestion } from '../types';
import { 
  HelpCircle, 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Sparkles, 
  MapPin,
  Trophy
} from 'lucide-react';

const STATE_OPTIONS = [
  { id: 'all', name: 'All India Grand Heritage Quiz' },
  { id: 'rajasthan', name: 'Rajasthan' },
  { id: 'maharashtra', name: 'Maharashtra' },
  { id: 'kerala', name: 'Kerala' },
  { id: 'tamil-nadu', name: 'Tamil Nadu' },
  { id: 'uttar-pradesh', name: 'Uttar Pradesh' },
  { id: 'gujarat', name: 'Gujarat' },
  { id: 'punjab', name: 'Punjab' },
  { id: 'west-bengal', name: 'West Bengal' },
  { id: 'odisha', name: 'Odisha' },
  { id: 'assam', name: 'Assam' }
];

export const StateQuizSection: React.FC = () => {
  const [selectedStateId, setSelectedStateId] = useState<string>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  // Filter questions
  const quizQuestions = selectedStateId === 'all'
    ? STATE_QUIZZES_DATA
    : STATE_QUIZZES_DATA.filter((q) => q.stateId === selectedStateId);

  const currentQ: StateQuizQuestion = quizQuestions[currentQuestionIndex] || quizQuestions[0];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleStateChange = (stateId: string) => {
    setSelectedStateId(stateId);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div id="state-quiz-section" className="min-h-screen bg-[#FAF7F2] text-stone-900 pb-24">
      {/* Header */}
      <div className="bg-stone-900 text-stone-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>State-Wise Cultural Mastery</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Virasat Heritage Quizzes
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-base leading-relaxed">
            Test your knowledge of India's classical dances, architectural marvels, GI-tagged handlooms, culinary legacies, and historical epics across individual states.
          </p>
        </div>
      </div>

      {/* State Selector Bar */}
      <div className="sticky top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-300/80 shadow-xs py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {STATE_OPTIONS.map((st) => {
            const isSelected = selectedStateId === st.id;
            return (
              <button
                key={st.id}
                id={`btn-quiz-state-${st.id}`}
                onClick={() => handleStateChange(st.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#8B1E22] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {st.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Quiz Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {!quizCompleted ? (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Progress Bar & Counter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider">
                <span>
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-[#8B1E22]">
                  Score: {score} / {currentQuestionIndex + (isAnswerSubmitted ? 1 : 0)}
                </span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#8B1E22] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Topic & Question Header */}
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-amber-700" />
                <span>{currentQ.topic}</span>
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                {currentQ.question}
              </h2>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;
                let optionStyle = 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-red-50 border-red-500 text-red-950 ring-2 ring-red-500/20';
                  } else {
                    optionStyle = 'bg-stone-50/50 border-stone-200 text-stone-400 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-amber-50 border-[#8B1E22] text-[#8B1E22] font-bold ring-2 ring-[#8B1E22]/20';
                }

                return (
                  <button
                    key={idx}
                    id={`quiz-opt-${idx}`}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 text-sm ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after submit */}
            {isAnswerSubmitted && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm space-y-1 animate-in fade-in">
                <span className="font-bold text-stone-900 block">
                  {selectedOption === currentQ.correctIndex ? '🎉 Excellent! Correct Answer' : '💡 Cultural Context & Explanation'}
                </span>
                <p className="text-stone-700 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
              {!isAnswerSubmitted ? (
                <button
                  id="btn-submit-answer"
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                  className="px-6 py-2.5 rounded-xl bg-[#8B1E22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#721519] disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all cursor-pointer"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  id="btn-next-question"
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-stone-800 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Quiz Results Card */
          <div className="bg-white rounded-2xl border border-stone-200 shadow-lg p-8 text-center space-y-6 animate-in fade-in zoom-in-95">
            <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto shadow-md">
              <Trophy className="w-10 h-10 text-amber-600" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E22] block mb-1">
                Quiz Completed
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                {score === quizQuestions.length
                  ? 'Master of Indian Virasat! 🏆'
                  : score >= quizQuestions.length * 0.7
                  ? 'Heritage Scholar! 🌟'
                  : 'Cultural Explorer! 📖'}
              </h2>
              <p className="text-stone-600 text-sm mt-2">
                You scored <strong className="text-[#8B1E22] font-bold text-lg">{score}</strong> out of <strong className="text-stone-900 font-bold text-lg">{quizQuestions.length}</strong> questions correctly ({Math.round((score / quizQuestions.length) * 100)}%).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 max-w-md mx-auto">
              India holds over 5,000 years of living heritage. Keep exploring the interactive map, rare acoustic instruments, and timeline to discover more!
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                id="btn-retry-quiz"
                onClick={handleRestartQuiz}
                className="px-5 py-2.5 rounded-xl bg-[#8B1E22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#721519] shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retry Quiz</span>
              </button>
              <button
                onClick={() => handleStateChange('all')}
                className="px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 text-xs font-semibold hover:bg-stone-100 transition-all cursor-pointer"
              >
                Try Pan-India Grand Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
