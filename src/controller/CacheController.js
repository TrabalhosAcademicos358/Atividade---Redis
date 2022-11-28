const Pessoa = require("../database/models/Pessoa")
const client = require('../database/redis')

const setPessoa = async (req, res, next) => {
    const id = req.params.id
    const objUser = await Pessoa.findOne({ where: { id } })
    
    await client.set(id, JSON.stringify(objUser), {
        EX: 3600
    })
}

const getPessoa = async (req, res, next) => {
    const id = req.params.id
    const objUser = await client.get(id)

    if (objUser === null) {
        next()
    } else {
        res.json(JSON.parse(objUser))
    }
}

const delPessoa = async (req, res, next) => {
    const id = req.params.id
    await client.del(id)
    res.status(204).send("Usuario deletado")
}


module.exports = { setPessoa, getPessoa, delPessoa }