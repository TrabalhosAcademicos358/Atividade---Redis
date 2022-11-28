const express = require('express')
const router = express.Router()

const postgresControl = require("./controller/pessoaPostgress")
const redisControl = require("./controller/pessoaRedis")

router.post("/pessoa", postgresControl.postPessoa)

router.get("/pessoa/:id", redisControl.getPessoa, postgresControl.getPessoa)

router.put("/pessoa/:id", postgresControl.putPessoa, redisControl.setPessoa)

router.delete("/pessoa/:id", postgresControl.delPessoa, redisControl.delPessoa)

module.exports = router