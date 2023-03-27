const { Country } = require('../../db');
const axios = require('axios');

const getApiData = async () => {
  try {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    const countries = res.data
      .sort((a, b) => b.population - a.population)
      .slice(0, 200)
      .map((country) => ({
        id: country.cca3,
        name: country.name.common,
        img: country.flags.png,
        continents: country.continents[0],
        capital: country.capital ? country.capital[0] : 'Undefined Capital',
        subregion: country.subregion ? country.subregion : 'Undefine Subregion',
        area: country.area,
        population: country.population,
        maps: country.maps.googleMaps,
        photos: [],
      }));

    await Country.bulkCreate(countries);
  } catch (err) {
    console.log(`Error obteniendo países de la API: ${err}`);
  }
};

module.exports = { getApiData };
