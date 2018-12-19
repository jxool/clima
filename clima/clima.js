const axios = require('axios');

let getClima = async(lat, lng) => {

    let json = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=23b5e597abac6d83a82832093ba5566f`);

    return json.data.main.temp
}

module.exports = ({
    getClima
})