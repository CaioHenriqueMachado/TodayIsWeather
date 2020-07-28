const lista = document.querySelector(".cidades");
const form = document.querySelector(".filterForm");
const input = document.querySelector(".filterInput");
const apiKey = "407146f2551c9564b65bd5c635040095";

form.addEventListener("submit", e => {
  
  e.preventDefault();

  let cidade = input.value;


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;

    const li = document.createElement("li");

    var text = '';
    var img = '';
    if (weather[0].icon[1] == 1){
      text = 'CÉU LIMPO';
      var img = '3.jpg';
    }else if(weather[0].icon[1] == 4){
      text = 'NUBLADO';
      var img = '1.png';
    }else{
      text = 'POUCO NUBLADO';
      var img = '2.svg';
    }

    const conteudo =
    ` <h3 class="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h3>
      <hr>
      <h3 class="temp">${main.temp}<sup>°C</sup></h3>
      <h3>MIN ${main.temp_min}° | MAX ${main.temp_max}° </h3>
      <img src="./icons/${img}">
      <h3>${text}</h3>`

  li.innerHTML = conteudo;
  lista.appendChild(li);

  })
  .catch(() => {
    alert("Digite uma cidade valida");
  });

  form.reset();
  input.focus();

});