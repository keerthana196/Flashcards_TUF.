import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/flashcards').then(res => setFlashcards(res.data));
  }, []);

  const handleAdd = () => {
    axios.post('http://localhost:5000/flashcards', newFlashcard).then(() => {
      setFlashcards([...flashcards, newFlashcard]);
      setNewFlashcard({ question: '', answer: '' });
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/flashcards/${id}`).then(() => {
      setFlashcards(flashcards.filter(fc => fc.id !== id));
    })
    .catch(error => {
      console.error('There was an error deleting the flashcard!', error);
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Question"
          value={newFlashcard.question}
          onChange={(e) => setNewFlashcard({ ...newFlashcard, question: e.target.value })}
          className="block w-full max-w-md p-2 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFlashcard.answer}
          onChange={(e) => setNewFlashcard({ ...newFlashcard, answer: e.target.value })}
          className="block w-full max-w-md p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Flashcard
        </button>
      </div>
      <ul className="list-none p-0">
        {flashcards.map(fc => (
          <li key={fc.id} className="mb-4 flex justify-between items-center">
            <div>
              <span className="font-semibold">{fc.question}</span> - <span>{fc.answer}</span>
            </div>
            <button
              onClick={() => handleDelete(fc.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
