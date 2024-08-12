import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FlashcardList from './components/FlashcardList.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';

function App() {
  return (
    <Router>
      <div className="App ">
        <nav className='flex justify-between bg-red-600'>
          <ul className='flex gap-5 p-5'>
            <li className='text-white'><Link to="/">Flashcards</Link></li>
            <li className='text-white'><Link to="/admin">Admin Dashboard</Link></li>
          </ul>
            <div className='rounded-lg'>
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_mdPFTT7VuJHQkvzW9gjJxvSV3bBDpEVNw8dWOmHjTT5g=s900-c-k-c0x00ffffff-no-rj"
              className='w-20 h-20 p-4 rounded-lg'
            ></img>
            </div> 

        </nav>
        <Routes>
          <Route path="/" element={<FlashcardList  />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
