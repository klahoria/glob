const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const session = require('express-session');
const models = require('../models');
const { Op } = require('sequelize');
const path = require('path'); // Add path module for views directory

// Function to get user details from the database
async function getUserDetails(username, profile) {
    try {
        const user = await models[`${profile}_profile`].findOne({
            where: {
                [`${profile}_email`]: username
            },
            attributes: [`${profile}_email`, 'doctor_password'] // Adjust attributes based on your schema
        });
        return user;
    } catch (error) {
        console.error('Error fetching user details:', error);
        return null;
    }
}

// Configure the local strategy for passport
passport.use(new LocalStrategy(async (username, password, cb) => {
    try {
        const profiles = ['doctor', 'partner', 'patient', 'enterprise', 'location_manager', 'agent', 'admin'];
        let user = null;

        // Iterate through profiles to find the user
        for (const profile of profiles) {
            user = await getUserDetails(username, profile);
            user = JSON.parse(JSON.stringify(user));
            if (user) break;
        }

        console.log(JSON.parse(JSON.stringify(user)), ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0");

        if (!user) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }

        // Hash the provided password and compare it with the stored hash
        crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
            if (err) { return cb(err); }
            if (!crypto.timingSafeEqual(user.doctor_password, hashedPassword)) {
                return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, user);
        });
    } catch (error) {
        console.error('Error during authentication:', error);
        return cb(error);
    }
}));

// Serialize user for the session
passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        cb(null, { id: user.id, username: user.username });
    });
});

// Deserialize user from the session
passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user);
    });
});

const app = express();
const router = express.Router();

// Configure express-session middleware
app.use(session({
    secret: 'your-secret-key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Set the views directory and template engine
app.set('views', path.join(__dirname, '../views')); // Specify the views directory
app.set('view engine', 'ejs'); // Set EJS as the template engine

app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session()); // Enable session support for Passport
app.use(express.json())

// Route to render the login page
router.get('/login', (req, res) => {
    res.render('login'); // Renders views/login.ejs
});

// Route to handle login form submission
router.post('/login/password', (req, res, next) => { console.log(req.body), next() }, passport.authenticate('local', {}, (...data) => console.log(data)));

// Route to handle logout
router.post('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

// Route to render the signup page
router.get('/signup', (req, res) => {
    res.render('signup'); // Renders views/signup.ejs
});

// Route to handle signup form submission
router.post('/signup', (req, res, next) => {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', (err, hashedPassword) => {
        if (err) { return next(err); }
        db.run('INSERT INTO users (username, hashed_password) VALUES (?, ?, ?)', [
            req.body.username,
            hashedPassword,
            salt
        ], function (err) {
            if (err) { return next(err); }
            const user = {
                id: this.lastID,
                username: req.body.username
            };
            req.login(user, (err) => {
                if (err) { return next(err); }
                res.redirect('/');
            });
        });
    });
});

app.use(router);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});