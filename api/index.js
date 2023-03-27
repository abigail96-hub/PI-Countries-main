//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getApiData } = require('./src/controllers/country/getApiData');




// Syncing all the models at once.







conn.sync({ force: true }).then(() => {
  getApiData()
  server.listen(3001,() => {
 
    console.log('%s listening at 3001'); // eslint-disable-line no-console
   
  });
});

























// let creaDBB = async () => {
//   let countries = await axios.get('https://restcountries.com/v3.1/all')
//   await countries.data.map(e =>{
//     let data={
  
//       name: e.name.common,
//       id: e.cca3,
//       img: e.flags.png ,
//       continents: e.continents[0],
//       capital: e.capital ? e.capital[0] : 'Undefined Capital',
//       subregion: e.subregion ? e.subregion : 'Undefine Subregion',
//       area: e.area,
//       population: e.population,
//       maps: e.maps.googleMaps

//     }
//     Country.findOrCreate({where: data})
//   })
// }






