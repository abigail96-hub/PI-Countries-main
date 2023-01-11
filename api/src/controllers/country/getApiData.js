const { Country } = require('../../db');
const axios = require('axios');


const getApiData = () =>{

axios.get('https://restcountries.com/v3.1/all')
.then(res => Country.bulkCreate(res.data.map(country=>
    ({ 
        id: country.cca3,
        name: country.name.common,
        img: country.flags.png,
        continents: country.continents[0],
        capital: country.capital ? country.capital[0] : 'Undefined Capital',
        subregion: country.subregion ? country.subregion : 'Undefine Subregion',
        area: country.area,
        population: country.population,
        maps: country.maps.googleMaps
    }))
))
     .catch(err => console.log(err))
}

module.exports = { getApiData}