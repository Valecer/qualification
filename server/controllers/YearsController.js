const {Years} = require('../models/models')
const ApiError = require('../error/ApiError')

class yearsController {
    async createm(req,res) {
        const {year, path} = req.body
        const years = await Years.create({year, path})
        return res.json(years)
    } 

    async getm(req,res) {

    }

}
module.exports = new yearsController()