const { Country } = require('../../db')

//By Id

const getCountryById = async (req, res) => {

   const { id } = req.params
   try {
     const country = await Country.findOne({

        where: {
            id
        }
     })
   if(!country) throw new Error('No se econtro pais con ese id')
    res.json(country)
   } catch (error) {
     
    if(error.message === 'No se econtro pais con ese id') return res.status(400).json({message: error.message})
    return res.json({ message: error.message})
   }


}

module.exports = {getCountryById}