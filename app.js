const express = require("express")

const app = express()
app.use(express.json())

app.use(require("./routes e schemas/employees.routes"))

module.exports = app