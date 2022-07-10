const button  = document.querySelector("button")
const apiKey = `07393a5f5a784e1a870a70e1d0d29af1`

function onError(error){
    if(error.code == 1)
        button.innerText = "You decline request 😲"
    else if(error.code == 2)
        button.innerText = "Location not available 💀"
    else 
        button.innerText = "Something went wrong 😭"
    button.setAttribute("disabled","true")
}
/*

coords: GeolocationCoordinates
accuracy: 1352.755640746171
altitude: null
altitudeAccuracy: null
heading: null
latitude: 28.9800192
longitude: 77.6699904
speed: null
[[Prototype]]: GeolocationCoordinates
timestamp: 1657369288507


ISO_3166-1_alpha-2: "IN"
ISO_3166-1_alpha-3: "IND"
ISO_3166-2: ['IN-UP']
city: "Meerut"
continent: "Asia"
country: "India"
country_code: "in"
county: "Meerut"
postcode: "250001"
road: "unnamed road"
road_type: "residential"
state: "Uttar Pradesh"
state_code: "UP"
state_district: "Meerut"
_category: "road"
_type: "road"

*/
function onSuccess(postion){
    button.innerText = "detecting you location....🍁"

    let {latitude, longitude} = postion.coords
    let url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
    fetch(url).then(res => res.json())
    .then(data => {
        let {county, postcode, country} = data.results[0].components
        button.innerText = `${county} ${postcode}, ${country}`
        console.table(data.results[0].components)
    })
    .catch(error =>{
        button.innerText = "Your browser not support"   
        console.log(error);
    })

}

button.addEventListener("click",()=>{
    if(navigator.geolocation){
        // current postion of device
        // 3 parameter - success, error,options
        // all thing set call back function will be call
        button.innerText = "Allow to detech location 🤪"
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }else{
        button.innerText = "Your browser not support"      
    }
})