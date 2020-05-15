const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da793c62acf6b7f39fe93c7bf0b2545b&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}