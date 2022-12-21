import scores from './scores';

const display = () => {
  const scoresList = document.getElementById('scoresList');
  scoresList.innerHTML = '';
  scores.forEach((score) => {
    scoresList.innerHTML += `
    <li>${score.Name}: ${score.Score}</li>
    `;
  });
};

export default display;