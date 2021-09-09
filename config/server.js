var express = require('express')
const { model } = require('mongoose')
var app = express()

app.use(express.urlencoded({extended:true}))

var porta = process.env.PORT || 1448

module.exports = {app, porta}