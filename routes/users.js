const express = require('express');
const router = express.Router();
const users = require('../db/users.js')


router.get("/", (req, res) => {
    res.send(users);
})

router.get("/:id", (req, res) => {
    const user = users.find((u) => u.userId == req.params.id);
    res.json(user);
})

module.exports = router;