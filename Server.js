const express = require ("express")
const bodyParser = require('body-parser')
const app= express()


app.get('/', (req,res) =>{
    res.send('started')
}
  );

    app.listen(3000,()=>{
        console.log('server up')
    })