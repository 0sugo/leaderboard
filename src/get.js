// export async function originalInserter() {
//   const insert = document.querySelector('.insert');
//   await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/453PFbKZUjM22HdmxCPo/scores/')
//     .then((res) => {
//       if (res.ok) {
//         console.log('Was succesful');
//         return res.json();
//       }
//       console.log('Was not succesful');
//     })
//     .then((data) => {
//       data.result.forEach((element) => {
//         const div = document.createElement('tr');
//         div.innerHTML = `
//         <td>${element.user} : ${element.score}</td>
//         `;
//         insert.appendChild(div);
//       });
//     })
//     .catch((error) => console.log(error));
// }

export async function originalInserter() {
    const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CWT65Uvksmi7lz5xE7FP/scores/'
    const response = await fetch(apiEndPoint, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((data) => console.log(data));
    return response;
    
  };

  export async function updateUI (){
    const response = await originalInserter();
    const insert = document.querySelector('.insert');
    console.log(response);
    response.result.forEach((element) => {
      const div = document.createElement('tr');
      div.innerHTML = `
      <td>${element.user} : ${element.score}</td>
      `;
      insert.appendChild(div);
    });

  }