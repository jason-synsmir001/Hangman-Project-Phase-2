import React, { useState, useEffect } from 'react';
//need to figure out how to hide the mystery word

const WordFetcher = ({selectedWord, correctLetters, wrongLetters}) => {
 
  //const [correctLetters, setCorrectLetters] = useState([]);
//add an onpress event if that letter is correct it renders in the correct space
// do an onclick in span if true = showletter : " " tinker with this some more. 
//consider using ids, display
  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => (
        <span className="letter" key={i}>
          {wrongLetters.includes(letter) ? letter : " "} 
        </span>
      ))}
    </div>
  );
};

export default WordFetcher;
