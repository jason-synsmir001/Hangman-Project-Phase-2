import React from 'react';
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const playerName = location?.state?.playerName || '';

  // Rest of the game logic here

  const handleWin = () => {
    navigate('/winner');
  };

  const handleLose = () => {
    navigate('/loser');
  };

  return (
    <div>
      <h1>Welcome, {playerName}!</h1>
      {/* Rest of the game UI */}
    </div>
  );
};

export default GamePage;