let player;

class Individuals {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

export async function generate() {
  let count = 0;

  let playerName = document.querySelector('#name').value;
  let playerScore = document.querySelector('#score').value;
  const info = {
    user: playerName,
    score: playerScore,
  };
  if(playerName !== '' && playerScore !== '') {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CWT65Uvksmi7lz5xE7FP/scores/', {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      
      const data = await response.json();
      console.log(data);
      
      document.querySelector('#name').value = '';
      document.querySelector('#score').value = '';
      count += 1;


      const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CWT65Uvksmi7lz5xE7FP/scores/'
    const responsed = await fetch(apiEndPoint, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => console.log("count", count));


      
    } catch (error) {
      console.error(error);
    }
  }}
  
