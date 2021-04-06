const jokeEl = document.querySelector(".joke");
const btn = document.querySelector(".container button");

getJoke();

btn.addEventListener("click", getJoke);

function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => (jokeEl.innerText = data.joke));
}
