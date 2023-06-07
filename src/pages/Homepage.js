import React from 'react';
import { useNavigate } from 'react-router-dom';
import NameForm from '../components/NameForm';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (name) => {
    setPlayer(name);
    navigate('/game', { state: { playerName: name } });
  };

  return (
    <div>
      <h1>Welcome to Hangman!</h1>
      <p>Please enter your name to start the game.</p>
      <NameForm onSubmit={handleSubmit} />
    </div>
  );
};

export default HomePage;