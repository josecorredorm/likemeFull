require('dotenv').config();
const {Pool} = require('pg');
const {HOST, USER, PASSWORD, DATABASE} = process.env;

const db = new Pool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    allowExitOnIdle: true
})

db.connect((error,client,done)=>{
    if(error){
        console.log(error)
        console.log("couldn't connect to the DB")
    }
    else{
        console.log("DB connection successful")
    }
})

module.exports = db;