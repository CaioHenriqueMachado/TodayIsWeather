const lista = document.querySelector(".cidades");
const form = document.querySelector(".filterForm");
const input = document.querySelector(".filterInput");
const apiKey = "407146f2551c9564b65bd5c635040095";

form.addEventListener("submit", e => {
  console.log('aqui');
  e.preventDefault();

  let cidade = input.value;


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;

    const li = document.createElement("li");

    const conteudo =
    ` <h2 class="city-name" data-name="${name},${sys.country}">
      <span>${name}</span>
      <sup>${sys.country}</sup>
      <h3>${main.temp}<sup>°C</sup></h3>
      <h3>${main.temp_min} / ${main.temp_max} </h3>
      <h3>${weather[0].main}</h3>
      <h3>${weather[0].description}</h3>
      <h3>${weather[0].icon}</h3>
  </h2>`

  // 01n - clear sky
  // 02n - few clouds
  // 03n - scattered clouds
  // 04n - broken  clouds

  li.innerHTML = conteudo;
  lista.appendChild(li);

  })
  .catch(() => {
    alert("Digite uma cidade valida");
  });

  form.reset();
  input.focus();

});