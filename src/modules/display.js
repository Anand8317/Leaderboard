const display = async () => {
  const scoresList = document.getElementById('scoresList');
  let scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Jun0BzNiB6z5IoA83KCo/scores/');
  scores = await scores.json();
  scores = scores.result;
  scores.forEach((score) => {
    scoresList.innerHTML += `
      <li>${score.user}: ${score.score}</li>
      `;
  });

  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', async () => {
    scoresList.innerHTML = '';
    scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Jun0BzNiB6z5IoA83KCo/scores/');
    scores = await scores.json();
    scores = scores.result;
    scores.forEach((score) => {
      scoresList.innerHTML += `
      <li>${score.user}: ${score.score}</li>
      `;
    });
  });
};

export default display;