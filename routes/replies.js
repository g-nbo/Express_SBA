const express = require('express');
const router = express.Router();
const replies = require('../db/replies.js')


router.get("/", (req, res) => {
    res.send(replies);
})

router.get("/display", (req, res) => {
    res.render("replies", { replies } );
})



module.exports = router;