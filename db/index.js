// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/notes-db');


const mongoose = require('mongoose');

const {DATABASEURL , DATABASE_USER , DATABASE_PASSWORD , DATABASE_NAME} = process.env
 mongoose.connect(`mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASEURL}/${DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });



const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('we are connected');
});