const express = require('express')
const cors = require("cors")
const routes = require('./routes')

const app = express()

app.use(cors()) //definir quem pode acessar a nossa aplicaçao

/**
 * Tipos de parâmetros
 * 
 * Query params: parametros nomeados enviados apos a ? na url (filtros, paginaçao, etc)
 * Route params: parametros utilizados para identificar recursos (/users/:id significa q esse proximo parametro eh o id)
 * Request Body: 
 */

/**
 * USANDO SQL
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.use(express.json())
app.use(routes)


app.listen(3333)