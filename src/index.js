import './style.css';
import { generate } from './post.js';
import { originalInserter } from './get.js';
import { updateUI } from './get.js';

// post.js
const updater = document.querySelector('.submit');
updater.addEventListener('click', (event) => {
  event.preventDefault();
  generate();
});

// get.js
const retriever = document.querySelector('.retriever');
retriever.addEventListener('click', (event) => {
  event.preventDefault();
  originalInserter();
  // updateUI();
});
