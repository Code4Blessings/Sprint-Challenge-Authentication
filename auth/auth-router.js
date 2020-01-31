const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const Users = require('../users/user-model')

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bc.compareSync(password, user.password)) {
        
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(err => {
      res.status(500).json({
            errorMessage: err.message
      });
    });
});

module.exports = router;
