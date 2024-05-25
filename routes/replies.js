const express = require('express');
const router = express.Router();
const replies = require('../db/replies.js')


router.get("/", (req, res) => {
    res.send(replies);
})





module.exports = router;