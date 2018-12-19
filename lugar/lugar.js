const axios = require('axios');

let getLugarLatLgn = async(dirreccion) => {

    let coord = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ dirreccion }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (coord.data.status == 'ZERO_RESULTS') {

        throw new Error(`No se encotro resultados para: ${dirreccion}`);
    }

    let response = coord.data.results[0];

    return {
        direccion: response.formatted_address,
        lat: response.geometry.location.lat,
        lng: response.geometry.location.lng
    }
}

module.exports = ({
    getLugarLatLgn
});