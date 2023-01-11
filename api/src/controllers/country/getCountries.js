const { Country, Activity } = require('../../db')
const {getApiData } = require('./getApiData.js')
const { Op } = require('sequelize');

//Por Query

const getCountries = async (req, res) => {

    const { name } = req.query
    try {
        if(!name){
        
            const countries = await Country.findAll({
              include: Activity

            })
          res.json(countries)
        } else {
         const filterCountries = await Country.findAll({
          
            where: {
                name:{[Op.like]: `%${name}%`}
            },
            include: Activity

         })
      if(filterCountries.length <= 0){
        throw new Error('No hay paises con ese nombre')
      }
      
      res.json(filterCountries)
        }
    } catch (error) {
        return res.status(400).json({ message: error.message})
    }
}

module.exports ={ getCountries }