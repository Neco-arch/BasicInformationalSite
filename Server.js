let express = require('express')
const { error } = require('node:console')
const { appendFile } = require('node:fs')
const path = require('node:path')

const App = express()

App.get("/" , (req,res) => {
  res.sendFile(path.join(__dirname , 'index.html'))
})

App.get("/about" , (req,res) => {
  res.sendFile(path.join(__dirname , 'about.html'))
})

App.get("/contactme" , (req,res) => {
  res.sendFile(path.join(__dirname , 'contactme.html'))
})



App.listen(3000 , (error) => {

  if (error) {
    App.get('/Error404' , (req,res) => {
      res.sendFile(path.join(__dirname , '404.html'))
    })
    throw error
    
  }

  console.log("Server is running")
})