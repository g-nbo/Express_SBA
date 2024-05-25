const express = require('express');
const router = express.Router();
const messages = require('../db/messages.js')


router.get("/", (req, res) => {
    res.send(messages);
})

router.post("/", (req, res) => {
    if (req.body.userId && req.body.sender && req.body.message) {
        const message = {
            id: messages[messages.length - 1].id + 1,
            userId: req.body.userId,
            sender: req.body.sender,
            receiver: req.body.receiver,
            timestamp: req.body.timestamp,
            message: req.body.message
        };

        messages.push(message);
        res.json(messages[messages.length - 1]);
    } else {
        next(error(400, "Missing something"))
    }

})

router.patch("/:id", (req, res, next) => {
    console.log("patch happen")
    const message = messages.find((m, i) => {
        if(m.id == req.params.id) {
            
            for (const key in req.body) {
                messages[i][key] = req.body[key];
            }
            return true;
        }
    })
    if (message) {
        res.json(message);
    } else {
        next()
    }
})



module.exports = router;