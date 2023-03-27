const { Country, Activity } = require('../../db')

//By Id

const getCountryById = async (req, res) => {

   const { id } = req.params
   try {
      
     const country = await Country.findOne({
     
        where: {
            id
        },
        include: Activity
      
     })
   if(!country) throw new Error('No se encontro pais con ese id')
    res.json(country)
   } catch (error) {
     
    if(error.message === 'No se encontro pais con ese id') return res.status(400).json({message: error.message})
    return res.json({ message: error.message})
   }


}

module.exports = {getCountryById}