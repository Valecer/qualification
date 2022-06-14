const Router = require('express')
const router = new Router()
const modulesController = require('../controllers/ModulesController')

router.post('/', modulesController.createf)
router.get('/', modulesController.getf)

module.exports = router