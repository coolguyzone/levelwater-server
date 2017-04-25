const express = require('express');
const test = require('./user_functions/test');
const postUser = require('./user_functions/postUser');
const getUser = require('./user_functions/getUser');
const deleteUser = require('./user_functions/deleteUser');
const patchUser = require('./user_functions/patchUser');
const loginUser = require('./user_functions/loginUser');
const logoutUser = require('./user_functions/logoutUser');
const authorize = require('./authorize');

const router = express.Router();

router.get('/test', authorize, test);
router.post('/users', postUser);
router.get('/users/:userId', authorize, getUser);
router.patch('/users/:userId', authorize, patchUser);
router.delete('/users/:userId', authorize, deleteUser);
router.post('/login', loginUser);
router.delete('/logout', logoutUser);
// router.get('/water_systems', )

module.exports = router;
