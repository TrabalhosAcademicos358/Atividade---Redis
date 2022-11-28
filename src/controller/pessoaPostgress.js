const pessoa = require("../database/models/pessoa")

const postPessoa = async (req, res, next) => {
    const { email, nome } = req.body
    try {
        const newUser = await pessoa.create(email, nome)
        res.status(201).json(newUser)
    } catch (err) {
        console.error("Ocorreu um error ao salvar novo usuario:", err)
        res.status(400).send("Usuario não cadastrado")
    }
}

const getPessoa = async (req, res, next) => {
    const id = req.params.id
    try {
        const newUser = pessoa.findOne({ where: { id } })
        res.json(newUser)
    } catch (err) {
        console.error("Ocorreu um error ao trazer os dados do usuario:", err)
        res.status(404).send("Usuario não encontrado")
        next()
    }
}

const putPessoa = async (req, res, next) => {
    const id = req.params.id
    const body = req.body
    try {
        const newUser = pessoa.update(body, { where: { id } })
        res.status(204).json(newUser)
        next()
    } catch (err) {
        console.error("Ocorreu um error ao atualizar os dados:", err)
        res.status(404).send("Usuario não encontrado")
    }
}

const delPessoa = async (req, res, next) => {
    const id = req.params.id
    try {
        await pessoa.destroy({ where: { id } });
        res.status(204).json(newUser)
        next()
    } catch (err) {
        console.error("Ocorreu um error ao deletar usuario:", err)
        res.status(404).send("Usuario não encontrado")
    }
}

module.exports = { postPessoa, getPessoa, putPessoa, delPessoa }