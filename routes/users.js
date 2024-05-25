const express = require('express');
const router = express.Router();
const users = require('../db/users.js');


router.get("/", (req, res) => {
    console.log("made it to users")
    res.send(users);
})

router.get("/display", (req, res) => {
    console.log("made it to display users");
    res.render("users", { users } );
})

router.get("/:id", (req, res) => {
    const user = users.find((u) => u.userId == req.params.id);
    res.json(user);
})

module.exports = router;