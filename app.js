// Selector
document.querySelector('form').addEventListener('submit', handleSubmitForm);

// Event Handler
function handleSubmitForm(e){
    e.preventDefault();
    let lat = document.querySelector('.lat').value;
    let long = document.querySelector('.long').value;
    if( lat !== '' && long !==''){
        if(lat < 90 && lat > -90 && long < 180 && long > -180 ){
            weatherCoordinates(lat,long)

        } else {
            console.log('error coordenadas no validas')

        }
    }
    else{
        console.log('error campos vacios')
    }

}

//Helpers

function weatherCoordinates( w1, w2){
    const lat = w1;
    console.log(lat)
    const lng = w2;
    console.log(lng)
    const api = 'cd4b1161b30cad90e97b8468d63dcc35';

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=es&appid=${api}`)
        .then((response) => response.json()).then((jsonData) => {
        addWeather(jsonData)
    });
}

function addWeather(weather){
    let city =  weather.name !== '' ? weather.name : 'No hay un ciudad en este punto '
    let status = weather.weather[0].description
    let temp = weather.main.temp
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="weather-item"> Lugar: ${city} </span>
        <span class="weather-item"> &nbsp - clima:  ${status}</span>
        <span class="weather-item"> &nbsp - temperatura:  ${temp} °C</span>
        
    `;
    li.classList.add('weather-list-item');
    ul.appendChild(li);

    document.querySelector('.lat').value = ''
    document.querySelector('.long').value = ''

}

function clearAll(){

}