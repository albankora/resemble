const serverless = require('serverless-http');
const server = require('./server')

module.exports.index = serverless(server);
