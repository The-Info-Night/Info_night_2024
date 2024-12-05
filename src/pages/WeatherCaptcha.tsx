import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/WeatherGame/Card';
import { useTheme } from '../context/ThemeContext';
import { GameCard } from '../components/WeatherGame/types';
import { weatherIcons } from '../components/WeatherGame/constants';
import { createDeck, checkForMatch } from '../components/WeatherGame/utils';

export function WeatherCaptcha() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [cards, setCards] = useState<GameCard[]>(createDeck());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (matchedPairs === weatherIcons.length) {
      setTimeout(() => {
        navigate('/weather');
      }, 1000);
    }
  }, [matchedPairs, navigate]);

  const handleCardClick = (id: number) => {
    const card = cards.find(c => c.id === id);
    if (isLocked || !card || card.isFlipped || card.isMatched) return;

    setCards(prevCards =>
      prevCards.map(card =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );

    setFlippedCards(prev => [...prev, id]);

    if (flippedCards.length === 1) {
      setIsLocked(true);
      
      if (checkForMatch(cards, flippedCards[0], id)) {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === id || card.id === flippedCards[0]
                ? { ...card, isMatched: true }
                : card
            )
          );
          setMatchedPairs(prev => prev + 1);
          setFlippedCards([]);
          setIsLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === id || card.id === flippedCards[0]
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className={`text-3xl font-bold mb-4 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Défi Météo
        </h1>
        <p className={`transition-colors duration-200 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Trouvez toutes les paires d'icônes météo pour accéder aux prévisions
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
        {cards.map(card => (
          <Card
            key={card.id}
            icon={card.icon}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => handleCardClick(card.id)}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>

      <div className={`mt-8 text-center transition-colors duration-200 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Paires trouvées: {matchedPairs} / {weatherIcons.length}
      </div>
    </div>
  );
}