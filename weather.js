const COORDS = 'coords';
const API_KEY = "3a738777ec605da7d253940df787a2c9";
const weather = document.querySelector(".js_weather");


function saveCoordsObj(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeo(position) {
    //console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoordsObj(coordsObj);
    getWeather(latitude, longitude);

}

function handleGeoError() {
    console.log("can't access geo location");
}

function getWeather(lat, long) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        //console.log(response.json());
        return (response.json());
    }).then(function(json) {
        //console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃  @ ${place}`;

    });
    //add https://
    //use fetch() to fetch weather info
    //.then calls a function once loading the data is completed.
    //response.json gives the data that was fetched. .json() gives json data



}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeo, handleGeoError);
    //getCurrentPosition has 2 requirement, function that handles getCurrentPostion which is handleGeo and handleGeoError

}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        //console.log(parseCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();