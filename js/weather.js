fetch('http://api.openweathermap.org/data/2.5/weather?id=693805&appid=c67676d0e7f0932bd319f962bee84f7f')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}.png">`;
        document.querySelector('.weather__title').textContent = data.name;
        document.querySelector('.weather__status').innerHTML = data.weather[0]['main'];
        document.querySelector('.weather__temp').innerHTML = `${Math.round(data.main.temp - 273)}&deg;`;
    });