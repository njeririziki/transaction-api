const express = require ('express')
const bodyParser = require ('body-parser')
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.json({"message":"Hey managed to define a route"});
});

mongoose. Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log('connected')
}).catch((err) =>{
    console.log('Sorry'+err);
    process.exit();
})
app.listen(000,()=>{
    console.log('server is on')
})


