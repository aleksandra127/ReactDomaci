import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Statistics from './components/Statistics';
import GamePage from './components/GamePage';

function App() {
  const [winners, setWinners] = useState([]);
  const addWinner = val => {
    if (val !== 1 && val !== 2) {
      return;
    }
    setWinners(prev => [...prev, val])
  }
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/statistics' element={(<Statistics winners={winners} />)} />
        <Route path='/' element={(<GamePage onEndGame={addWinner} />)} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
