const Router = require('express')
const router = new Router()
const YearsController = require('../controllers/YearsController')

router.post('/',YearsController.createm)
router.get('/',YearsController.getm)

module.exports = router