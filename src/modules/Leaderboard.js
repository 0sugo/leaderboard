class Leaderbord {
    static originalInserter = async () => {
      const apiEndPoint =
        "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n6sfKR663felurQfEibd/scores/";
      const response = await fetch(apiEndPoint, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json()); // { resut: [{"kaleb": 77}, {"osugo": 77}]}
      return response;
    };
    
  }
  module.exports = Leaderbord;