import React from 'react';
import { MediaDisplay } from './MediaDisplay';
import type { QuizQuestion } from '../types/quiz';

interface QuestionProps {
  question: QuizQuestion;
}
const getOptionLetter = (index: number) => {
  return String.fromCharCode(65 + index);
}

export const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {question.media && (
        <MediaDisplay 
          type={question.media.type} 
          url={question.media.url}
          aspect={question.media.aspect} 
        />
      )}
      
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        {question.question}
      </h2>

      {question.type === 'multiple' ? (
        <div className="grid grid-cols-2 gap-6">
          {question.options?.map((option, index) => (
            <div
              key={option}
              className="p-6 text-xl text-center rounded-lg bg-white border-2 border-gray-200 shadow-sm"
            >
              {getOptionLetter(index)}) {option}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl text-center text-gray-600 italic">
          [Open Answer Question]
        </div>
      )}
    </div>
  );
};