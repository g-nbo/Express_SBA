const express = require("express");
const messages = require("./db/messages");
const users = require("./db/users");
const replies = require("./db/replies");
const app = express();
const path = require("path");
require("dotenv").config();

app.use('/static', express.static(path.join(__dirname, 'public')))


// Remember to turn the value back to 3000 rather than an env var
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    console.log("base url is online");
    res.render('base.ejs');
    
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})


console.log();