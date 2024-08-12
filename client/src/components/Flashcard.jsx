import React, { useState } from 'react';

function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="relative w-64 h-40 mt-10 cursor-pointer perspective p-4 "
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full text-center transition-transform duration-500 ease-in-out transform ${flipped ? 'rotate-y-180' : ''}`}
      >
        
        <div className={`absolute w-full h-full backface-hidden bg-white border border-gray-300 p-4 flex items-center justify-center ${flipped ? 'hidden' : ''}`}>
          <p className="text-lg font-semibold">{flashcard.question}</p>
        </div>

        
        <div className={`absolute w-full h-full backface-hidden bg-blue-100 border border-gray-300 p-4 flex items-center justify-center transform rotate-y-180 ${flipped ? '' : 'hidden'}`}>
          <p className="text-lg font-semibold">{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
