const { check } =  require('express-validator');
const user = require('../models/user');

exports.createUser  = [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('password2', 'Passwords do not match').exists().custom((value,{req})=>{
        return value === req.body.password;
    }),
    check('email', 'Email is already registered').exists().custom((value)=>
    {
        user.findOne({email: value})
            .then(()=>{return false;})
            .catch(()=>{return true;});
    })
];

/*
var validationCheck = function()
{
    return exports.createUser  = [
        check('email', 'Email is required').not().isEmpty(),
        check('email', 'Email is not valid').isEmail(),
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password is required').not().isEmpty(),
        check('password2', 'Passwords do not match').exists().custom((value,{req})=>{
            return value === req.body.password;
        }),
        check('email', 'Email is already registered').exists().custom((value)=>
        {
            user.findOne({email: value})
                .then(()=>{return false;})
                .catch(()=>{return true;});
        })
    ];
}

module.exports.validationCheck = validationCheck;
*/