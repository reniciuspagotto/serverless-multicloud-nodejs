const handler = require('serverless-express/handler')
const express = require('serverless-express/express')
var app = express();

app.get('/api/tdc', (request, response) => {
    return response.json({
        message: 'Hello The Developers Conference'
    })
})
 
exports.handler = handler(app)