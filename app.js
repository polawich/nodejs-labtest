const express = require('express');
const chalk = require('chalk');
const app = express();
const morgan = require('morgan');
const debug = require('debug')('app');
const port = 3000;
const path = require('path');

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) => {
    res.send("hello polawich123");
})

app.listen(port, ()=>{
    debug("Listening on port",chalk.bgGreen(port));
})