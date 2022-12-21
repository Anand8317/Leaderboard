import scores from './scores';
import display from './display';

const addScore = () => {
  const submit = document.getElementById('submit');
  submit.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    const error = document.getElementById('error');
    console.log(typeof (name));
    if (typeof (name) !== 'string' || name === '' || score === '') {
      error.classList.remove('hideError');
      error.classList.add('showError');
    } else {
      error.classList.remove('showError');
      error.classList.add('hideError');
      scores.push({ Name: name, Score: score });
      display();
    }
  });
};

export default addScore;