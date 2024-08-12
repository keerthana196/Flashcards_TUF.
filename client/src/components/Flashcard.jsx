// import React, { useState } from 'react';

// function Flashcard({ flashcard }) {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div 
//       className="w-80 h-48 mx-auto my-8 transform transition-transform duration-500 cursor-pointer"
//       onClick={() => setFlipped(!flipped)}
//     >
//       <div className={`relative w-full h-full ${flipped ? 'rotate-y-180' : ''}`}>
//         <div className="absolute w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md backface-hidden">
//           {flashcard.question}
//         </div>
//         <div className="absolute w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md backface-hidden transform rotate-y-180">
//           {flashcard.answer}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Flashcard;


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
        {/* Front Side (Question) */}
        <div className={`absolute w-full h-full backface-hidden bg-white border border-gray-300 p-4 flex items-center justify-center ${flipped ? 'hidden' : ''}`}>
          <p className="text-lg font-semibold">{flashcard.question}</p>
        </div>

        {/* Back Side (Answer) */}
        <div className={`absolute w-full h-full backface-hidden bg-blue-100 border border-gray-300 p-4 flex items-center justify-center transform rotate-y-180 ${flipped ? '' : 'hidden'}`}>
          <p className="text-lg font-semibold">{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
