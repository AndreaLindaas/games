const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("gameId");
console.log(id);
