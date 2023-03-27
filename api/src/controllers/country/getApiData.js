const { Country } = require('../../db');
const axios = require('axios');
const { RateLimiterMemory } = require('rate-limiter-flexible');

const pexelsApiKey = 'dqS84xmVuExmIMvJep8ZzoL5y20EX1sQjkJXXiczbvobXwy63LibGJOp';

// Limita las solicitudes a 1 por país por segundo
const limiter = new RateLimiterMemory({
  points: 1,
  duration: 1,
});

const getApiData = async () => {
  try {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    const countries = res.data.slice(0, 15).map(country => ({
      id: country.cca3,
      name: country.name.common,
      img: country.flags.png,
      continents: country.continents[0],
      capital: country.capital ? country.capital[0] : 'Undefined Capital',
      subregion: country.subregion ? country.subregion : 'Undefine Subregion',
      area: country.area,
      population: country.population,
      maps: country.maps.googleMaps,
      photos: []
    }));

    const countryRequests = new Map();
    const promises = countries.map(async country => {
      const { name } = country;
      const url = `https://api.pexels.com/v1/search?query=${name}&per_page=1`;

      try {
        // Espera hasta que se permita la siguiente solicitud para este país
        await limiter.consume(countryRequests.get(name) ? 0 : 1);

        if (!countryRequests.has(name)) {
          countryRequests.set(name, 1);
        } else {
          countryRequests.set(name, countryRequests.get(name) + 1);
        }

        const res = await axios.get(url, {
          headers: { Authorization: pexelsApiKey }
        });
        const photoUrl = res.data.photos[0].src.medium;
        country.photos.push(photoUrl);
        console.log(`Se encontró una foto para ${name}`);
      } catch (err) {
        console.log(`Error obteniendo fotos para ${name}: ${err}`);
      }
    });

    await Promise.all(promises);

    await Country.bulkCreate(countries);
  } catch (err) {
    console.log(`Error obteniendo países de la API: ${err}`);
  }
};

module.exports = { getApiData };
