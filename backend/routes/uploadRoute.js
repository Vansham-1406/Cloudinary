const express = require("express")
const { storyData } = require("../controller/uploadController")
const route = express.Router()

route.post("/upload",storyData)

module.exports = route