import './style.css';
/* eslint-disable no-restricted-syntax */
// Initialize leaderboard data
// const leaderboardData = [
//   { name: 'Shalini', score: 120 },
//   { name: 'Mohit', score: 150 },
//   { name: 'Peter', score: 100 },
//   { name: 'Sarah', score: 180 },
//   { name: 'Dave', score: 90 },
// ];

// Display leaderboard function
function displayLeaderboard() {
  // Get leaderboard HTML element
  const leaderboardEl = document.getElementById('leaderboard');

  // Clear existing leaderboard HTML
  leaderboardEl.innerHTML = '';

  // Create leaderboard header
  const headerEl = document.createElement('li');
  headerEl.classList.add('header');

  // Loop through each score in leaderboard array and create HTML elements
  const leaderboard = document.querySelector('#leaderboard');
  for (const score of leaderboard) {
    const scoreEl = document.createElement('li');
    scoreEl.classList.add('score');

    const nameEl = document.createElement('span');
    nameEl.classList.add('name');
    nameEl.innerText = score.name;
    scoreEl.appendChild(nameEl);

    const valueEl = document.createElement('span');
    valueEl.classList.add('score');
    valueEl.innerText = score.score;
    scoreEl.appendChild(valueEl);

    leaderboardEl.appendChild(scoreEl);
  }
}

displayLeaderboard();
