const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const modulesRouter = require('./modulesRouter')
const yearsRouter = require('./yearsRouter')
const monthsRouter = require('./monthsRouter')

router.use('/user', userRouter)
router.use('/modules', modulesRouter)
router.use('/years', yearsRouter)
router.use('/months', monthsRouter)

module.exports = router