const addScore = () => {
  const submit = document.getElementById('submit');
  submit.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    const error = document.getElementById('error');
    if (typeof (name) !== 'string' || name === '' || score === '') {
      error.classList.remove('hideError');
      error.classList.add('showError');
    } else {
      error.classList.remove('showError');
      error.classList.add('hideError');
      document.getElementById('name').value = '';
      document.getElementById('score').value = '';
      await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Jun0BzNiB6z5IoA83KCo/scores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: name,
          score,
        }),
      })
        .then((response) => response.json())
        .then(() => {});
    }
  });
};

export default addScore;