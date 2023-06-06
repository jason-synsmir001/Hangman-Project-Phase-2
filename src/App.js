import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Warning';
import { showNotification as show, checkWin } from './helpers/helpers';
import './App.css';

function App() {
  const [playable, setPlayable] = useState(true);
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState('');
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
        setSelectedWord(data[Math.floor(Math.random() * data.length)]);
      })
  }, []);

  //determines what happens when a user presses a button. We should change this into a form to meet the post requirement?
  useEffect(() => {
    const keyPress = (event) => {
      const { key, keyCode } = event;
      const letter = key.toLowerCase();
  
      if (playable && keyCode >= 65 && keyCode <= 90) {
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
  
    window.addEventListener('keydown', keyPress);
    return () => window.removeEventListener('keydown', keyPress);
  }, [correctLetters, wrongLetters, playable, selectedWord]);
  
  const playAgain = () => {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
  };

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>

      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
