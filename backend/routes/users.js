const express = require('express')

const { signup, getAllUsers,login } = require('../controlers/usersControler')

const router = express.Router();

router.post('/signup', signup);
router.post('/login',login)
router.get("/", getAllUsers);

module.exports = router