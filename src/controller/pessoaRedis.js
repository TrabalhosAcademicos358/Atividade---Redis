const client = require('../database/redis')

const setPessoa = async (req, res, next) => {
    const objUser = req.body
    const id = String(objUser.id)
    
    await client.set(id, JSON.stringify(objUser), {
        EX: 3600
    })
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

const delPessoa = async (req, res, next) => {
    const id = req.params.id
    await client.del(id)
    res.status(204).send("Usuario deletado")
}


module.exports = { setPessoa, getPessoa, delPessoa }