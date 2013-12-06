/**
 * UserController
 */
var bcrypt = require('bcrypt')
    , SALT_WORK_FACTOR = 10
    , MIN_PASSWORD_LENGTH = 8;

module.exports = {

    create: function (req, res) {
        try {
            if (!req.param('password') || req.param('password').length < MIN_PASSWORD_LENGTH) {
                throw new Error("Password not sent or doesn't meet length requirement (" + MIN_PASSWORD_LENGTH + " chars)");
            }

            function createUser(hash) {
                User.create({
                    name: req.param('name'),
                    email: req.param('email'),
                    password: hash
                }).done(function (err, user) {
                        if (err) throw err;
                        res.json(user);
                    });
            };

            bcrypt.hash(req.param('password'), SALT_WORK_FACTOR, function (err, hash) {
                if (err) throw err;
                createUser(hash);
            });

        } catch (e) {
            return res.json({ error: e.message }, 500);
        }
    },

    login: function (req, res) {
        User.findOneByEmail(req.param('email')).done(function (err, user) {
            if (err) res.json({ error: 'DB error' }, 500);

            if (user) {
                bcrypt.compare(req.param('password'), user.password, function (err, match) {
                    if (err) res.json({ error: 'Server error' }, 500);

                    if (match) {
                        // password match
                        req.session.user = user.id;
                        res.json(user);
                    } else {
                        // invalid password
                        if (req.session.user) req.session.user = null;
                        res.json({ error: 'Invalid password' }, 400);
                    }
                });
            } else {
                res.json({ error: 'User not found' }, 404);
            }
        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to UserController)
     */
    _config: {}


};
