// ?2.  GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further
// Create API's to do each of the following:
//                     - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
//                     - then change the above to get the temperature only( of London)
//                     - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
//                     result should look something like this
//                     [
//                     {city:"London", temp: 280},
//                     {city:"Moscow", temp: 290},
//                     {city:"Bangalore", temp: 301.2},
//                     .......
//                     ]
//fd8955b95e538a46db5d0ea691d95dca
let axios = require("axios")


const openweather = async (req, res) => {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arrCityObj = []
        for (let i = 0; i < cities.length; i++) {
            let cityName = cities[i]
            console.log(cityName)
 
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd8955b95e538a46db5d0ea691d95dca`
            }
            let result = await axios(options)
            console.log(result.data.main.temp);
            let obj = { city: cityName }
            obj.temp = result.data.main.temp
            arrCityObj.push(obj)

        }
        console.log(arrCityObj);
        let sort = arrCityObj.sort((a, b) => a.temp - b.temp)
        console.log(sort);
        res.status(200).send({ msg: sort })

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
module.exports.openweather = openweather                   