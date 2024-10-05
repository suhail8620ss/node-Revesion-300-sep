const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontrollers');
router.use(express.urlencoded({ extended: false }));
router.get('/', (req, res) => {
     res.render('home');
})
router.get('/signup/window', (req, res) => {
     res.render('signuppage');
})
router.post('/signup', (req, res) => {
     usercontroller.signUp(req, res)
})
router.get('/users', (req, res) => {
     usercontroller.getUsers(req, res)
})
router.post('/login', (req, res) => {
     usercontroller.doLogin(req, res);
})

module.exports = router;