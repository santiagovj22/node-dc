const http = require('http');

const { searchRoutes } = require('./routes')

const port = process.env.PORT || 3001

const main = () => {
  try {
    const server = http.createServer((req, res) => { searchRoutes(req,res)})
    server.listen(port, () => console.log(`Server Connected on port ${port}`))
  } catch (error) {
    console.log('Error to connect with server')
  }
}

module.exports = { main }
