// import 'dotenv/config';
// import app from './app';
// import { initContract } from './config/contracts.config';

// const port = process.env.PORT || 8000;

// app.listen(port, async () => {
//     await initContract();
//     console.log(`Server up on port ${port}!`);
// });

import 'dotenv/config';
import express from 'express';
import app from './app';
import { initContract } from './config/contracts.config';


const rawMaterialRoutes = require('./routers/raw-material.router');

app.use('/api/raw-material', rawMaterialRoutes);

const PORT = process.env.PORT || 8000;

const server = express();

// Parse JSON bodies
server.use(express.json());

// Use the app
server.use(app);

server.listen(PORT, async () => {
    await initContract();
    console.log(`Server up on port ${PORT}!`);
});

export default server;

// const http = require('http');
// const port = 5000;

// const server = http.createServer((req,res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-type','text/plain');
//     res.end('Hello world');
// });

// server.listen(port, (err) => {
//     // err handling
//     console.log('server started on port: '+port);
// });