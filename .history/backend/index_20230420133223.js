import express from 'express';
import mysql from 'mysql';


const app = express();

const db = mysql.createConnection({
    host:"localhost",
    
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})