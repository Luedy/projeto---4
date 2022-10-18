let data = document.querySelector("#data");
let semana = document.querySelector("#semana");

let dataHora = new Date();

function addWatch() {
  let momentoAtual = new Date();

  let hora = momentoAtual.getHours();
  let minuto = momentoAtual.getMinutes();

  let strHora = new String(hora);
  let strMinuto = new String(minuto);

  if (strMinuto.length == 1) minuto = "0" + minuto;
  if (strHora.length == 1) hora = "0" + hora;

  h.textContent = hora;
  m.textContent = minuto;

  setTimeout("addWatch()", 1000);
}

function giveDate() {
  let daydDia = dataHora.getDay();
  let day = dataHora.getDate();
  let mounth = dataHora.getMonth() + 1;
  let year = dataHora.getFullYear();

  switch (daydDia) {
    case 0:
      daydDia = "Domingo";
      break;

    case 1:
      daydDia = "Segunda-feira";
      break;

    case 2:
      daydDia = "Terça-feira";
      break;

    case 3:
      daydDia = "Quarta-feira";
      break;

    case 4:
      daydDia = "Quinta-feira";
      break;

    case 5:
      daydDia = "Sexta-feira";
      break;

    case 6:
      daydDia = "Sabado";
      break;

    default:
      break;
  }

  switch (mounth) {
    case 1:
      mounth = "Janeiro";
      break;
    case 2:
      mounth = "Fevereiro";
      break;

    case 3:
      mounth = "Março";
      break;

    case 4:
      mounth = "Abril";
      break;

    case 5:
      mounth = "Maio";
      break;

    case 6:
      mounth = "Junho";
      break;

    case 7:
      mounth = "Julho";
      break;

    case 8:
      mounth = "Agosto";
      break;

    case 9:
      mounth = "Setembro";
      break;

    case 10:
      mounth = "Outubro";
      break;
    case 11:
      mounth = "Novembro";
      break;

    case 12:
      mounth = "Dezembro";
      break;

    default:
      break;
  }

  let currentDate = daydDia + " , " + day + " de " + mounth + " de " + year;

  date.textContent = currentDate;
}
giveDate();

function startTimer(duration) {
  let timer = duration,
    segundos;
  setInterval(() => {
    segundos = parseInt(timer % 180, 10);
    segundos = segundos < 10 ? "0" + segundos : segundos;
    display = document.querySelector("#timer"); // selecionando o timer,
    display.innerHTML = segundos;
    if (--timer < 0) {
      timer = duration;
      window.location.href = "http://127.0.0.1:5500/index.html";
    }
  }, 1000);
}

startTimer(180);

function getUserPosition() {
  let url = "";
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    console.log(lat, long);
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`;
    secondUrl = `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${long}`;
    fetchApi(url, secondUrl);
    console.log(url);
  });
}

function fetchApi(url, secondUrl) {
  let city = document.querySelector(".cidade");
  let temperature = document.querySelector(".temperatura");
  let humidity = document.querySelector("#umidad");
  let estado = document.querySelector(".estado");
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(1);
      city.textContent = data.name;
      temperature.innerHTML = tempInCelsius;
    })
    .catch((err) => {
      console.log(err);
    
    });

  fetch(secondUrl)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const teste = data.features;
      return teste[0].properties.address;
      
    })
    .then((data) => {
      const EstadoSigla = data["ISO3166-2-lvl4"].split('-');
      estado.innerHTML = `- ${EstadoSigla[1]}`
      
      
    });
}


getUserPosition();

const dataBase = [{
  login: "admin",
  senha: "admin"
}];

const modal = document.querySelector('.modal-container')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  localStorage.removeItem('login')
  modal.classList.remove('active')
}

function SaveAndcloseModal() {
  localStorage.login = JSON.stringify(dataBase); 
  modal.classList.remove('active')
}



