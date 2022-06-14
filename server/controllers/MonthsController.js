const {Months} = require('../models/models')
const ApiError = require('../error/ApiError')

class monthsController {
    async creates(req,res) {
        const {months, path} = req.body
        const month = await Months.create({months, path})
        return res.json(month)
    } 

    async gets(req,res) {
        const month = await Months.findAll()
        return res.json(month.path)
    }

}
module.exports = new monthsController()