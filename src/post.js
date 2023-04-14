let player;

class Individuals {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

export async function generate() {

  let playerName = document.querySelector('#name').value;
  let playerScore = document.querySelector('#score').value;
  const info = {
    user: playerName,
    score: playerScore,
  };
  if(playerName !== '' && playerScore !== ''){

    
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CWT65Uvksmi7lz5xE7FP/scores/', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      
    }).then((response) => response.json())
    // res.console.log(res))
  }
  playerName= '';
  playerScore = '';
}
  
const submit = document.querySelector('.submit');
submit.addEventListener('click', (event) => {
  event.preventDefault();
  // const playerName = document.querySelector('#name').value;
  // const playerScore = document.querySelector('#score').value;
 
  // player = new Individuals(playerName, playerScore);
  // console.log(typeof (playerScore));
  generate();

});
