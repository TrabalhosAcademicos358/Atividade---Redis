const express = require('express')
const router = express.Router()

const pessoaControl = require("./controller/PessoaController")
const cacheControl = require("./controller/CacheController")

router.post("/pessoa", pessoaControl.postPessoa)

router.route("/pessoa/:id")
    .get(cacheControl.getPessoa, pessoaControl.getPessoa, cacheControl.setPessoa)
    .put(pessoaControl.putPessoa, cacheControl.setPessoa)
    .delete(pessoaControl.delPessoa, cacheControl.delPessoa)

module.exports = router