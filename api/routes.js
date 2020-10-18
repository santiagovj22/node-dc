const { STATUS_CODES } = require('http');

const routes = {
  '/home': home = (req, res) => { res.end('Home') },
  '/about': about = (req, res) => { res.end('About') },
}

const NotFoundPage = (req, res) => {
  res.writeHead(404);
  res.end(STATUS_CODES[404])
}

const searchRoutes = (req,res) => {
  req.url in routes ? routes[req.url](req, res) : NotFoundPage(req, res)
}

module.exports = { searchRoutes }
