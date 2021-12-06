// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

let searchInputBox = document.getElementById('input-box')

searchInputBox.addEventListener('keypress',function(event){
    if(event.keyCode == 13){
        if(searchInputBox.value === "")
            {alert('please enter input value')}
        console.log(searchInputBox.value)
        getWeatherReport(searchInputBox.value)
    }
})

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then(function(weather){
        return weather.json()
    }).then(showWeatherReport)
}

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city')
    let date = document.getElementById('date')
    let temp = document.getElementById('temp')
    let min_max = document.getElementById('min-max')
    let my_weather = document.getElementById('weather')


    city.innerHTML = `${weather.name}, ${weather.sys.country}`
    temp.innerHTML = `${weather.main.temp}&deg;C`
    my_weather.innerHTML = `${weather.weather[0].main}`
    min_max.innerHTML = `${weather.main.temp_min}&deg;C (min) / ${weather.main.temp_max}&deg;C (max)`


    let todayDate = new Date()
    date.innerHTML = dateManager(todayDate)

    if(my_weather.textContent == 'Clear'){
        document.body.style.backgroundImage = 'url(./Image/clear.jpg)'
    }else if(my_weather.textContent == 'Clounds'){
        document.body.style.backgroundImage = 'url(../Image/cloud.jpg)'
    }else if(my_weather.textContent == 'Haze'){
        document.body.style.backgroundImage = 'url(../Image/haze.jpg)'
    }else if(my_weather.textContent == 'Rain'){
        document.body.style.backgroundImage = 'url(../Image/rain.jpg)'
    }else if(my_weather.textContent == 'Snow'){
        document.body.style.backgroundImage = 'url(../Image/snow.jpg)'
    }else if(my_weather.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = 'url(../Image/thunderstorm.jpg)'
    }else{
        document.body.style.backgroundImage = 'url(./background.jpg)'
        
    }
}
function dateManager(todayDate){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // let mydate = new Date()
    let year = todayDate.getFullYear()
    let month = months[todayDate.getMonth()]
    let date = todayDate.getDate()
    let day =days[todayDate.getDay()]


    return `${date} ${month} (${day}), ${year}`
}