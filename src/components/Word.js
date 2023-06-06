import React, { useState, useEffect } from 'react';
//need to figure out how to hide the mystery word
const WordFetcher = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [correctLetters, setCorrectLetters] = useState([]);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => response.json())
      .then((words) => setSelectedWord(words[0]))
   
  }, []);

  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => (
        <span className="letter" key={i}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default WordFetcher;
