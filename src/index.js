import './style.css';
import GamesScores from './modules/display';

/* eslint-disable no-restricted-syntax */
// Initialize leaderboard data

const Scoresgames = new GamesScores();
const name = document.getElementById('name');
const score = document.querySelector('#score');
const refresh = document.querySelector('.btn-refresh');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = name.value;
  const playerScore = score.value;
  Scoresgames.addScore(playerScore, playerName);
  name.value = '';
  score.value = '';
});

const loadScores = async () => {
  await Scoresgames.getScores();
  Scoresgames.displayScores();
};

refresh.addEventListener('click', () => {
  loadScores();
});

window.onload = async () => {
  loadScores();
};
