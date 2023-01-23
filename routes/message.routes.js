const { sendMessage } = require('../controllers/message.controller')
const router = require('express').Router()

router.route("/send")
                .post(
                        sendMessage
                )

module.exports = router