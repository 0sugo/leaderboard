import './style.css';
import Leaderbord from './modules/Leaderboard.js';
// post.js
const updater = document.querySelector('.submit');
updater.addEventListener('click', (event) => {
  event.preventDefault();
  Leaderbord.generate();
});
// get.js
const retriever = document.querySelector('.retriever');
retriever.addEventListener('click', (event) => {
  event.preventDefault();
  Leaderbord.originalInserter();
  Leaderbord.updateUi();
});