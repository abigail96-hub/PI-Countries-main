const { Activity, Country } = require('../../db')
const { Op } = require('sequelize')


//create activies

const postActivity = async (req, res) => {
    const { name, difficult , duration, season, countries} = req.body
    try {
        
    if(!name || !difficult || !duration || !season){

        throw new Error('campos incompletos')
    }

   const activityExistente = await Activity.findOne({

        where: {
            name
        }
   })

   if (activityExistente){
       throw new Error('Ya existe una actividad con ese nombre')
   }
   
   const activity = await Activity.create({
    name,
    difficult,
    duration,
    season,

   })
   const options = []

   for (let i = 0; i < countries.length; i++) {
       options.push({
           id: countries[i]
       })
   }



   const country = await Country.findAll({
       where: {
           [Op.or]: options
       },
       include: Activity
   })

   country.map((c) => (
       c.addActivity(activity)
   ))

   res.status(201).json({ message: "Todo salio bien" })
} catch (error) {
   if(error.message === "Ya existe una actividad con ese nombre"){
       return res.status(409).json({message: error.message})
   }
   return res.status(500).json({ message: error.message })
}
}
module.exports = { postActivity }