var express = require('express');
const passport = require('passport')
const User = require('../_models/User')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
	res.render('login', { message: req.flash('loginMessage') })
})

router.get('/signup', (req, res) => {
	User.find((err, users) => {
		if (err) res.send(err)
		res.json(users)
	})
	// res.render('signup')
})

router.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/signup',
	failureRedirect : '/login',
	failureFlash : true
}));

module.exports = router;
