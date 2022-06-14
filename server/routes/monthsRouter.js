const Router = require('express')
const router = new Router()
const monthsController = require('../controllers/MonthsController')

router.post('/', monthsController.creates)
router.get('/',monthsController.gets)

module.exports = router