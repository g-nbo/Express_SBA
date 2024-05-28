const express = require('express');
const router = express.Router();
const messages = require('../db/messages.js');

router.use(express.json());

router.get("/", (req, res, next) => {

    // At least one data category should allow for additional filtering through the use of query parameters.
    if(req.query.userId) {
        res.json(messages.filter((m) => m.userId == req.query.userId))
    } else {
        res.send(messages)
    }

    
    
    
})

// Create POST routes for data, as appropriate.
router.post("/", (req, res, next) => {
    console.log(req.body)
    if (req.body.sender && req.body.message) {
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
        next()
    }

})

// Create PATCH or PUT routes for data, as appropriate. 
// Include query parameters for data filtering, where appropriate.
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


// Create DELETE routes for data, as appropriate.
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

router.get("/display", (req, res) => {
    res.render("messages", { messages } );
})

module.exports = router;