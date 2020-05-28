const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/user');

module.exports = function(passport)
{
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) =>
        {
            // Find user by email
            User.findOne({
                email: email
            }).then(user =>
            {
                if (!user)
                {
                    return done(null, false, { message: 'Email is not registered' });
                }
                // add email verify
                if (!user.confirm)
                {
                    return done(null, false, { message: 'Please conform your unimelb email before login' });
                }

                // Check password
                bcrypt.compare(password, user.password, (err, isMatch) =>
                {
                    if (err) throw err;
                    if (isMatch)
                    {
                        return done(null, user);
                    }
                    else
                    {
                        return done(null, false, { message: 'Password incorrect' });
                    }
                });
            });
        })
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};