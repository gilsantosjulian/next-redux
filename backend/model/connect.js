const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const URI = process.env.MONGO_DB_URI;
const USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;

mongoose.set('useCreateIndex', true)

const connect = async () => {
  try{
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        authSource: 'admin'
      },
      user: USERNAME,
      pass: PASSWORD
    });

    console.log('connected to database')
  }catch(e){
    console.log(`an error occured ${e.message}`)
  }
}

module.exports = connect;