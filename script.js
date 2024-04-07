var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Changed variable name to avoid conflict
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity'); // Add humidity element reference
var apik ="63a90ae96d390ec37d6c1252f5a86e1a";

function convertion(val) {
    return (val - 273).toFixed(3);
} 

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description']; // Corrected accessing weather description
        var tempature = data['main']['temp'];
        var wndspeed = data['wind']['speed'];
        var humidityValue = data['main']['humidity']; // Fetch humidity value

        city.innerHTML = `Weather of <span>${nameval}<span>`;
        temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h<span>`;
        humidity.innerHTML = `Humidity: <span>${humidityValue}%</span>`; // Display humidity
    })
    .catch(err => alert('No city found. check city name'));
});
