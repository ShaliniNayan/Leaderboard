import './style.css';
import gamesScores from './modules/display';

/* eslint-disable no-restricted-syntax */
// Initialize leaderboard data

let scoresGames = new gamesScores();
const name = document.getElementById('name');
const score= document.querySelector('#score');
const refresh = document.querySelector('.btn-refresh');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = name.value;
  console.log(playerName);
  const playerScore = score.value;
  scoresGames.addScore(playerScore, playerName);
  name.value = '';
  score.value = '';
});

const loadScores = async () => {
  await scoresGames.getScores();
  scoresGames.displayScores();
};

refresh.addEventListener('click', () => {
  console.log('click');
  loadScores();
});

window.onload = async () => {
  loadScores();
};
console.log(name);