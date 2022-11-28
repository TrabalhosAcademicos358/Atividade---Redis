const client = require('../database/redis')

const setPessoa = async (req, res, next) => {
    const objUser = req.json
    await client.set(objUser.id, JSON.stringify(objUser), {
        EX: 3600,
        NX: true
    })
    res.json(objUser)
}

const getPessoa = async (req, res, next) => {
    const id = req.params.id
    const objUser = await client.get(id)
    if (objUser) {
        res.json(objUser)
    } else {
        res.status(404).send("Usuario não existente")
    }
}


module.exports = {setPessoa, getPessoa}