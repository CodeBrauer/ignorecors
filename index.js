const request = require('request');
const express = require('express');
const app     = express();

app.get('/', function(appRequest, response){
    if ('query' in appRequest.query) {
        request(appRequest.query.url, { json: true }, (error, result, body) => {
            if (error) { return console.log(error); }
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            response.header('Content-Type', 'application/json');
            response.send(JSON.stringify(body));
        });
    } else {
        response.sendFile('ignorecors.html', {root: __dirname })
    }
});

app.listen(80);