const gamesElement = document.querySelector(".games");
const url =
  "https://api.rawg.io/api/games?key=54582cd735a340b89b17702eae51578b";

async function fetchGames() {
  const response = await fetch(url);
  const data = await response.json();

  renderGames(data.results);
}

function renderGames(games) {
  gamesElement.innerHTML = "";
  for (let i = 0; i < games.length; i++) {
    console.log(games[i]);

    let gameHtml = `<div class="game"><h2>${games[i].name}</h2><a href="details.html?gameId=${games[i].id}"><img src="${games[i].background_image}"></a></div>`;
    gamesElement.innerHTML += gameHtml;
  }
}

fetchGames();
