const express = require("express");
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

// @route   POST api/users
// @dosc    Register route
// @access  public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
],(req, res) => {
    const errors = validationResult(req);

    console.log("errors", errors);
    
    
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    res.send("User route")
});

module.exports = router;