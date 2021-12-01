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
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var d = new Date();
        var day = days[d.getDay()];
        var hr = d.getHours();
        var min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var ampm = "am";
        if( hr > 12 ) {
            hr -= 12;
            ampm = "pm";
        }
        var date = d.getDate();
        var month = months[d.getMonth()];   
        var year = d.getFullYear();
        var x = document.getElementById("time");
        dates.innerHTML = month + " " + date + ", " + year +"<br>"+ day + " "  + " " + hr + ":" + min + ampm;



        let temperatureData = Math.abs(data['main']['temp']-273.15).toPrecision(3)+'°';
        let feelsLikeData = 'Feels like' + ' ' + Math.abs(data['main']['feels_like']-273.15).toPrecision(3)+'°';
        let weatherDescriptionData = data['weather']['0']['description'];
        let locationsData = data['name'];
        let humidityData = data['main']['humidity'];
        let windData = data['wind']['speed'];
        let countryData = data['sys']['country'];
        let pressureData = data['main']['pressure'];
        let iconCode = data['weather']['0']['icon'];
        
        
        
        icon.innerHTML = ` <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="" id="">`;
        temperature.innerHTML = temperatureData.toUpperCase();
        feelsLike.innerHTML = feelsLikeData;
        weatherDescription.innerHTML = weatherDescriptionData.toUpperCase();
        locations.innerHTML = locationsData.toUpperCase();
        humidity.innerHTML = humidityData;
        wind.innerHTML = windData;
        country.innerHTML = countryData;
        pressure.innerHTML = pressureData;

        
        
        console.log(data)
    })
    
    .catch(err => alert('Invalid City!'))
})
