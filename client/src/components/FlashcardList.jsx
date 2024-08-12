import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard.jsx';

function FlashcardList() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/flashcards').then(res => setFlashcards(res.data));
  }, []);

  const handleNext = () => setCurrentIndex((currentIndex + 1) % flashcards.length);
  const handlePrev = () => setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);

  return (
    <div className="flex flex-col items-center">
      {flashcards.length > 0 && <Flashcard flashcard={flashcards[currentIndex]} />}
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2" onClick={handlePrev}>Previous</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardList;
