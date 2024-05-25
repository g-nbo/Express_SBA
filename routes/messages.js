const express = require('express');
const router = express.Router();
const messages = require('../db/messages.js')


router.get("/", (req, res, next) => {

    if(req.query.userId) {
        const newArr = []

        messages.forEach(element => {
            if(element.userId == req.query.userId) {
                newArr.push(element)
            }
        })

        if (newArr.length > 0) {
            res.json(newArr);
          } else {
            res.send("Couldn't find that users messages")
          }
    } else {
        res.send(messages)
    }

    
    
    
})

// At least one data category should allow for client creation via a POST request.
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

// At least one data category should allow for client manipulation via a PATCH or PUT request.
router.patch("/:id", (req, res, next) => {
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


// At least one data category should allow for client deletion via a DELETE request.
router.delete('/:id', (req, res, next) => {

    const message = messages.find((m, i) => {
        if(m.id == req.params.id) {
            messages.splice(i, 1);
            return true;
        }
    })

    if(message) {
        res.json(message);
    } else {
        next();
    }
})

module.exports = router;