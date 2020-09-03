const express = require ("express")
const bodyParser = require('body-parser')
const app= express()
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/transactions'




   MongoClient.connect(url,(err,db)=>{

     if(err) return console.log(err)
     const daily= db.db('transactions');
     const firstdoc = { activity:"Breakfast", cost:"200"}
     daily.collection('activities').deleteOne( firstdoc,(err,res)=>{
       if(err) throw err;
       console.log('Document deleted');
       db.close()
     });
   
   })

   