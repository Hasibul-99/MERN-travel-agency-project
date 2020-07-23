const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require('../../models/Users');
const router = express.Router();

// @route   POST api/users
// @dosc    Register route
// @access  public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], async (req, res) => {
    const errors = validationResult(req);    
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    };

    const {name, email, password} = req.body;

    try {
        let user = await User.findOne({email: email});

        if (user) {
          return res.status(409).json({errors: [{msg: "User already exists"}]});
        }

        user = new User({
            name, email, password
        })

        await user.save();

        // Create token
        const token = user.getSignedJwtToken(); 

        res.json({token});
    } catch(err) {
        console.error("err", err.message);
        res.status(500).send("Server error");
    }
});


module.exports = router;