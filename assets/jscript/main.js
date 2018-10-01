//TRAINZ

//declaring object that includes all train-times
var departures = [
    { Nr: "42", avgår: "10:25", ankommer: "11:23"   },
    { Nr: "43", avgår: "11:25", ankommer: "12:23" },
    { Nr: "42x", avgår: "12:25", ankommer: "13:23" }
];

//Grabbing the element from the DOM where ill post my traintimes
var tbodyDepartures = document.getElementById('tbodyDepartures');
var departureContent = "";

//looping out each departure and generates the correct 
for ( let i = 0; i < departures.length; i++) {
    departureContent += `
    <tr>
    <td>${departures[i].Nr}</td>
    <td>${departures[i].avgår}</td>
    <td>${departures[i].ankommer}</td>
    </tr>
    `; 
}

tbodyDepartures.innerHTML = departureContent;

//WEATHER

var ajax = new XMLHttpRequest();

ajax.onreadystatechange = function() {
    if(this.readyState === 4){
        if(this.status === 200){
            var response = JSON.parse(this.response);
            printWeather(response);
        }
    }
}

var city = 'Nynashamn';
var apikey = '5369329286077d558f164e9942f15604';
ajax.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?&units=metric&lang=se&q=' + city + '&APPID=' + apikey, true);
ajax.send();

function printWeather(data) {
    var tbodyWeather = document.getElementById('tbodyWeather');
    var weatherContent = "";
    console.log(data)

    for (let i = 0; i < 7; i++) {
        weatherContent += `
        <tr>
        <td>${data.list[i].dt_txt.substring(10, 16)}</td>
        <td>${data.list[i].weather[0].description}</td>
        <td>${data.list[i].main.temp} °C</td>
        <td>${data.list[i].wind.speed} m/s</td>
        </tr>
        `;
    }
    tbodyWeather.innerHTML = weatherContent;
}




