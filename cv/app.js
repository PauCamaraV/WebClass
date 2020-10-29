const express = require("express");
const path = require('path');
const port = 3000;

const app = express();

const db = require("./db");

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './index.html'));
});

app.use(express.json());

const infoRouter = require("./routes/infot");

app.use("/information", infoRouter);

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
);