// const sum = (num1, num2) => {
//     return num1 + num2;
// }

// const result = sum(2, 3);
// console.log(result);

// Require file system functions built-in to node
// const fs = require('fs');

// const generateFile = () => {
//     try {
//         fs.writeFileSync('data.txt', "Hi, this file was made with Node");
//     } catch (err) {
//         console.log(err);
//     }
// }

// generateFile();

// const http = require('http');

// http.createServer(function (req, res) {
//     res.write("Server started.");
//     res.end();
// }).listen(8080);

// const myModule = require('./module');

// const date = myModule();
// console.log(date);

// requiring express
const express = require('express');
// initialize the express app
const app = express();
// specifying the port to listen on
const port = 8080;

// API / urls
// default:
app.get('/', (req, res) => {
    res.send("Hi, the express server is running.");
});

app.get('/api/cats', (req, res) => {
    
    // call to db

    // return data
    const cats = ["British Shorthair", "Ragdoll", "Russian Blue"];

    // Sending a response should be in JSON
    res.send(JSON.stringify(cats));
});


// run the express http server on the port we specified
app.listen(port, () => {
    console.log("Listening on port ", port);
});