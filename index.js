let http = require('http');
const fs = require('fs');
// let url = require("url");
const path = require('path');
const axios = require('axios');
const redis = require('redis');
const client = redis.createClient(6379, '18.221.20.44');


client.on('connect', ()=>{
    console.log('connected to redis')
});
 
client.on('error', function (err) {
    console.log("Error " + err);
});

let server = http.createServer(function(req, res) {

    let body = [];
    const headers = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE',
    'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json'
    };
});