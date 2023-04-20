import express from 'express';
import mysql from 'mysql';


const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"

});

app.get("/", (req, res)=>{
    res.json("Hello this is the backend")
})

app.get("/books", (req, res)=>{
    const q = "SELECT * FROM books"
    db

})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})
