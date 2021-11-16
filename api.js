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


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


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
        let weatherDescriptionData = data['weather']['0']['main'];
        let locationsData = data['name'];
        // let humidityData = data['weather']['0']['humidity'];
        // let windData = data['weather']['wind'];
        // let countryData = data['sys']['country'];
        // let pressureData = data['main']['pressure'];
        
        

        temperature.innerHTML = temperatureData.toUpperCase();
        feelsLike.innerHTML = feelsLikeData;
        weatherDescription.innerHTML = weatherDescriptionData;
        locations.innerHTML = locationsData.toUpperCase();
        // humidity.innerHTML = humidityData.toUpperCase();
        // wind.innerHTML = windData;
        // country.innerHTML = countryData;
        // pressure.innerHTML = pressureData;

        
        
        console.log(data)
    })
    
    .catch(err => alert('Invalid City!'))
})

console.log('https://api.openweathermap.org/data/2.5/weather?q=london&appid=dc0b2d1eb4fa8ffcf52f194470748c73')