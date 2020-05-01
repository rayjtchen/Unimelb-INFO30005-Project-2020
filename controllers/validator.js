const { check } =  require('express-validator');
const User = require('../models/user');

exports.createUser  = [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('email', 'Email is already registered').custom(async (value) => {
        let user = await User.findOne({email: value});
        if (user!== null){
            return Promise.reject();
        }
    }),
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('password2', 'Passwords do not match').exists().custom((value,{req})=>{
        return value === req.body.password;
    })
];
