const express = require('express')
const cors = require('cors')
const path = require('path')


const app = express()
//The site didn't say to say this
app.use(express.json())
app.use(cors())

//Wack
const PublicPath = path.join(__dirname, '..', 'public')
app.use(express.static(PublicPath))

//Wack
app.get('*',(req,res)=>{
    res.sendFile(path.join(PublicPath, 'index.html'))
})
app.get('/js',(req,res)=>{
    res.sendFile(path.join(PublicPath,'index.js'))
})
app.get('/css',(req,res)=>{
    res.sendFile(path.join(PublicPath,'index.css'))
})






const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})
