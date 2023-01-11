const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//activity controllers
const {postActivity} = require('../controllers/activity/postActivity')
const {getAllActivities } = require('../controllers/activity/getAllActivies')

//countries controllers
const { getCountryById } = require('../controllers/country/getCountryById')
const { getCountries }= require('../controllers/country/getCountries')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/country', getCountries)
router.get('/country/:id', getCountryById)
router.post('/activity', postActivity)
router.get('/activity', getAllActivities)





module.exports = router;











