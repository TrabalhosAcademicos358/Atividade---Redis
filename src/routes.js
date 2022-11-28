const express = require('express')
const router = express.Router()

const redisController = require("./controller/pessoaRedis")

router.get("/", (req, res, next) => res.send("oi"))
router.get("/pessoa/:id", redisController.getPessoa)
// router.set("pessoa", )

module.exports = router