const client = require('../database/redis')

const setPessoa = async (req, res, next) => {
    const objUser = req.body
    const id = String(objUser.id)
    const userCreate = await client.set(id, JSON.stringify(objUser), {
        EX: 3600,
        NX: true
    })

    if (userCreate) {
        res.status(201).json(objUser)
    } else {
        res.status(400).send("Esse id de usuario já existe")
    }
}

const getPessoa = async (req, res, next) => {
    const id = req.params.id
    const objUser = await client.get(id)

    if (objUser) {
        res.json(JSON.parse(objUser))
    } else {
        res.status(404).send("Usuario não existente")
    }
}

const putPessoa = async (req, res, next) => {
    const objUser = req.body
    const id = req.params.id

    if (objUser.id) {
        res.status(400).send("Não enviei o id no corpo da requisição")
        return;
    }

    const objSend = { ...objUser, id }

    const userCreate = await client.set(id, JSON.stringify(objSend), {
        EX: 3600,
        XX: true
    })

    if (userCreate) {
        res.status(204).json(objUser)
    } else {
        res.status(404).send("Usuario não existente")
    }
}

const deletePessoa = async (req, res, next) => {
    const id = req.params.id
    await client.del(id)
    res.status(204).send("Usuario deletado")
}


module.exports = {setPessoa, getPessoa, deletePessoa, putPessoa}