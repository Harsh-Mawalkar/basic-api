 const express = require('express');
 const config = require('dotenv').config();

 const cors = require('cors');
 const app = express();
 const job = require('./cron');
 const port = process.env.PORT || 5000;
 
 
 const { notesRouter } = require("./api/v1/index");
 require("./db/index");

 app.use(express.json())
 app.use(cors());
  
app.get('/',(req,res)=>{
    res.send("hello wrld");
});


app.use("/notes",notesRouter);

 app.listen(port, ()=>{
    console.log(`app running on port : http://localhost:${port}`);
 })