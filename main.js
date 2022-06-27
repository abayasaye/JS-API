const APIKEY = "93dd7b377b8f54024a99780959b9a3a6";
const APIWEATHER = "https://api.openweathermap.org/data/2.5/weather?q=";
const CITYNAME = "pai"

async function apiWeatherFunc () {
    try {
        return await fetch(`${APIWEATHER}${CITYNAME}&appid=${APIKEY}`)
        .then((res)=>res.json())
    } 
    catch (err) {
        console.log(err);
    }
    finally{

    }
}

function printWeatherFunc() {
    
    apiWeatherFunc ().
    then((result)=>console.log(result))
}
printWeatherFunc()





async function selectCityWeaFunc (){
try {
    return await fetch(`${APIWEATHER}${select_id.value}&appid=${APIKEY}`)
    .then((res)=>res.json())
} 
catch (error) {
    
}
finally{

}
}
function saveWeaFunc() {
    saveDiv_id.innerHTML=" ";
    selectCityWeaFunc ()
    .then((result)=>{
        for (let key in result) {
        
            console.log(result[key]);
            saveDiv_id.innerHTML += `<h1>${key}:${result[key]}</h1><br>`
         
        }
    })
}