const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, file, cb){ //cb é callback
        cb(null, "uploads/");
    },
    // filename: function(req, file, cb){
    //     cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    // }
    
})

const upload = multer({storage})

app.get("/", (req, res) => {

    res.render('index');

});

app.post("/upload", upload.any("file") ,(req, res) => {
    res.send("Arquivo enviado.");
});

app.listen(8080, () => {
    console.log('Servidor ok!')
});