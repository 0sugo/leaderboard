class Leaderbord {
    static originalInserter = async () => {
      const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n6sfKR663felurQfEibd/scores/';
      const response = await fetch(apiEndPoint, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
      return response;
    };

    static updateUi = async () => {
      const insert = document.querySelector('.insert');
      insert.innerHTML = '';
      const response = await Leaderbord.originalInserter();
      response.result.forEach((element) => {
        const div = document.createElement('tr');
        div.innerHTML = `
                  <td>${element.user} : ${element.score}</td>
                  `;
        insert.appendChild(div);
      });
    };

    static generate = async () => {
      const playerName = document.querySelector('#name').value;
      const playerScore = document.querySelector('#score').value;
      const info = {
        user: playerName,
        score: playerScore,
      };
      if (playerName !== '' && playerScore !== '') {
        await fetch(
          'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n6sfKR663felurQfEibd/scores/',
          {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          },
        );
        document.querySelector('#name').value = '';
        document.querySelector('#score').value = '';
      }
    };
}
module.exports = Leaderbord;