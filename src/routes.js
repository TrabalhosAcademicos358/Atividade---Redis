const express = require('express')
const router = express.Router()

const client = require("./database/redis")

router.get("/", (req, res, next) => res.send("oi"))

module.exports = router