const { Router } = require('express')
const { messageOperator, ChangeOperator } = require('../controllers/operators')
const cors = require('cors')

const router = Router()

const corsOptions = {
    origin: 'http://localhost:8080/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.put('/', [
], messageOperator)

router.post('/', [
], ChangeOperator)


module.exports = router