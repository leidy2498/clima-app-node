const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': 'cbc4810aa8mshde1688a68e5c5bbp1df552jsn4f8e5360a072' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultadors para ${dir}`);

    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}
module.exports = {
    getLugarLatLng
}