let city = document.querySelector('#city');
let searchBtn = document.querySelector('#btn');
let locations = document.querySelector('#locations');
let dates = document.querySelector('#date');
let icon = document.querySelector('#icon');
let temperature = document.getElementById('temperature');
let feelsLike = document.querySelector('#feels-like');
let weatherDescription = document.querySelector('#weather-description');
let humidity = document.querySelector('#humidity');
let wind = document.querySelector('#wind');
let country = document.querySelector('#country');
let pressure = document.querySelector('#pressure');

console.log(icon)




btn.addEventListener('click', function(data){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=dc0b2d1eb4fa8ffcf52f194470748c73')
    .then(response => response.json())
    .then(data => {
        // date
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        dates.innerHTML = dateTime;



        let temperatureData = Math.abs(data['main']['temp']-273.15).toPrecision(3)+'°';
        let feelsLikeData = 'Feels like' + ' ' + Math.abs(data['main']['feels_like']-273.15).toPrecision(3)+'°';
        let weatherDescriptionData = data['weather']['0']['description'];
        let locationsData = data['name'];
        let humidityData = data['main']['humidity'];
        let windData = data['wind']['speed'];
        let countryData = data['sys']['country'];
        let pressureData = data['main']['pressure'];
        let iconCode = data['weather']['0']['icon'];
        
        
        
        icon.innerHTML = ` <img src="https://openweathermap.org/img/wn/${iconCode}@4x.png" alt="" id="">`;
        temperature.innerHTML = temperatureData.toUpperCase();
        feelsLike.innerHTML = feelsLikeData;
        weatherDescription.innerHTML = weatherDescriptionData.toUpperCase();
        locations.innerHTML = locationsData.toUpperCase();
        humidity.innerHTML = humidityData;
        wind.innerHTML = windData;
        country.innerHTML = countryData;
        pressure.innerHTML = pressureData;
        // icon.innerHTML = 'http://openweathermap.org/img/wn/'+iconData+'.png';

        
        
        console.log(data)
    })
    
    .catch(err => alert('Invalid City!'))
})

console.log('https://api.openweathermap.org/data/2.5/weather?q=london&appid=dc0b2d1eb4fa8ffcf52f194470748c73')
// https://openweathermap.org/img/wn/11d@2x.png