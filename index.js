const mongoose=require('./connect')
const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')


dotenv.config()
const app=express()

mongoose.connectMongoose()
app.use(express.json())
app.use(cors())

const Registerrouter=require('./Router/Registerrouter')
const Authmodule=require('./Modules/Authmodule')
const Postrouter=require('./Router/Postrouter')
app.use('/register',Registerrouter)
app.use('/',Authmodule.authenticate)
app.use('/post',Postrouter)


const server=app.listen(process.env.PORT,console.log('server started'))

