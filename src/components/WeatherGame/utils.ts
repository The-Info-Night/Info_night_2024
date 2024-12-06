import { GameCard } from './types';
import { weatherIcons } from './constants';

export function createDeck(): GameCard[] {
  // Create pairs of cards, ensuring they start face down
  const cards = [...weatherIcons, ...weatherIcons].map((icon, index) => ({
    id: index,
    icon: icon.icon,
    isFlipped: false, // Make sure cards start face down
    isMatched: false
  }));

  // Shuffle the cards using Fisher-Yates algorithm
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

export function checkForMatch(cards: GameCard[], firstId: number, secondId: number): boolean {
  const firstCard = cards.find(card => card.id === firstId);
  const secondCard = cards.find(card => card.id === secondId);
  return firstCard?.icon === secondCard?.icon;
}