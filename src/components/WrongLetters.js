import React from 'react';

const WrongLetters = ({ wrongLetters }) => {
  const renderWrongLetters = () => {
    if (wrongLetters.length > 0) {
      const formattedLetters = wrongLetters.join(', ');
      return (
        <div>
          <p>Wrong</p>
          <span>{formattedLetters}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="wrong-letters-container">
      {renderWrongLetters()}
    </div>
  );
};

export default WrongLetters;
