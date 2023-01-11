const { Activity, Country } = require('../../db');

//get all activites

const getAllActivities = async (req, res) => {

    try {
          const activities = await Activity.findAll({
           include: [Country]

          })
        
         return activities

    } catch (error) {
        res.json({message: error.message})
    }

}

module.exports = {getAllActivities}