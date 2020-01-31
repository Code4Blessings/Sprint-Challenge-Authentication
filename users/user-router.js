const express = require('express');
const router = express.Router();
const dB = require('../database/dbConfig');

const Users = require('./user-model');
const authenticate = require('../auth/authenticate-middleware');

router.get('/', authenticate, (req, res) => {
 Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ 
            errorMessage: "Error retrieving the list of users", 
            message: err.message
        })
    })
})


module.exports = router;