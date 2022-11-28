const express = require('express')
const router = express.Router()

const postgresControl = require("./controller/PessoaPostgress")
const redisControl = require("./controller/PessoaRedis")

router.post("/pessoa", postgresControl.postPessoa)

router.get("/pessoa/:id", redisControl.getPessoa, postgresControl.getPessoa, 
    redisControl.setPessoa)

router.put("/pessoa/:id", postgresControl.putPessoa, redisControl.setPessoa)

router.delete("/pessoa/:id", postgresControl.delPessoa, redisControl.delPessoa)

module.exports = router