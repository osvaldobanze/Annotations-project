const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
require('./config/dbConfig')

// Instalado o cors para permitir requisicoes externas na nossa aplicacao
app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3000, () => {
  console.log('Server started at port 3000')
})
