const express = require('express')
const router = express.Router()

const pessoaControl = require("./controller/PessoaController")
const cacheControl = require("./controller/CacheController")

router.post("/pessoa", pessoaControl.postPessoa)

router.get("/pessoa/:id", cacheControl.getPessoa, pessoaControl.getPessoa, cacheControl.setPessoa)

router.put("/pessoa/:id", pessoaControl.putPessoa, cacheControl.setPessoa)

router.delete("/pessoa/:id", pessoaControl.delPessoa, cacheControl.delPessoa)

module.exports = router