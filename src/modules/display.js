import { getData, postData } from './add';

function Score(score, name) {
  this.score = score;
  this.user = name;
}

export default class GamesScores {
  constructor() {
    this.scores = [];
  }

  addScore = (score, name) => {
    const newScore = new Score(score, name);
    postData(newScore);
  };

  getScores = async () => {
    const scores = await getData();

    this.scores = scores;
  };

  displayScores = () => {
    const container = document.querySelector('.scoresList');
    container.innerHTML = '';
    this.scores.sort((a, b) => b.score - a.score);
    this.scores.forEach((score) => {
      const scoreEl = document.createElement('li');
      scoreEl.classList.add('score');

      const nameEl = document.createElement('span');
      nameEl.classList.add('name');
      nameEl.innerText = score.user;
      scoreEl.appendChild(nameEl);

      const valueEl = document.createElement('span');
      valueEl.classList.add('score');
      valueEl.innerText = score.score;
      scoreEl.appendChild(valueEl);

      container.appendChild(scoreEl);
    });
  };
}
