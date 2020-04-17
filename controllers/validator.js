const { check } =  require('express-validator');

exports.createUser  = [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('password2', 'Passwords do not match').exists().custom((value,{req})=>{
        return value === req.body.password;
    })
];

