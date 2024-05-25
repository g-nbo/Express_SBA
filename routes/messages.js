const express = require('express');
const router = express.Router();
const messages = require('../db/messages.js')


router.get("/", (req, res) => {
    res.send(messages);
})





module.exports = router;