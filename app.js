require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const port = 3000;

const app = express()
const server = http.createServer(app);


server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
