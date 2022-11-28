const { createClient } = require('redis')

const client = createClient();

const connectar = async () => {
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
}

const setPessoa = async (req, res, next) => {
    const objUser = req.json
    client.set(objUser.id, JSON.stringify(objUser))
}

connectar()

module.exports =  client