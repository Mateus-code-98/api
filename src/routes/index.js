const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require("../config/upload");
const { hello, uploadFile, createPDF } = require('../controllers');
const routes = Router()

const upload = multer(uploadConfig)

routes.get("/", hello)

routes.patch("/file", upload.single('file'), uploadFile)

routes.get("/pdf", createPDF)

module.exports = routes