const express = require('express')
const router = express.Router()

const redisController = require("./controller/pessoaRedis")

router.post("/pessoa", redisController.setPessoa)
router.get("/pessoa/:id", redisController.getPessoa)
router.put("/pessoa/:id", redisController.putPessoa)
router.delete("/pessoa/:id", redisController.deletePessoa)

module.exports = router