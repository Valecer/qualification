const {Modules} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')

class ModulesController {
    async createf(req,res) {
        const {module, path} = req.body
        const modules = await Modules.create({module, path})
        return res.json(modules)
    } 

    async getf(req,res) {
        const modules = await Modules.findAll()
        return res.json(modules)
    }
    
}
module.exports = new ModulesController()