import express from 'express';
const app = express();
app.use(express.json());


import Router from './routes.js';
app.use(Router);

app.listen(3000, ()=>console.log("api rodando"))