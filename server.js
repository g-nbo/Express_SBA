const express = require("express");

// Use at least three different data categories (e.g., users, posts, or comments):
const messages = require("./db/messages");
const users = require("./db/users");
const replies = require("./db/replies");

const app = express();
const path = require("path");
const usersRouter = require("./routes/users")
const messageRouter = require("./routes/messages")
const repliesRouter = require("./routes/replies")
const error = require('./utilities/error.js');
const bodyParser = require('body-parser')


require("dotenv").config();
const PORT = process.env.PORT;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// Use simple CSS to style the rendered views.
app.use('/static', express.static(path.join(__dirname, 'public')))


// Remember to turn the value back to 3000 rather than an env var

app.use('/api/users', usersRouter);
app.use('/api/messages', messageRouter);
app.use('/api/replies', repliesRouter);

/**
 * Create and use at least two pieces of custom middleware:
 */
app.use("/new", (req, res, next) => {
    res.send("You made it to the new part of the site!")
})

app.use("/secret", (req, res, next) => {
    res.send("You found a secret part of the website!");
})


app.get("/", (req, res) => {
    console.log("base url is online");
    // Create and render at least one view using a view template and template engine.
    res.render('base.ejs');
})


/**
 * Create and use error-handling middleware:
 */
app.use((req, res, next) => {
    next(error(404, 'Resource Not Found'));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})


console.log();