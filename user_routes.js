const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user_controller');

router.get('/users', userController.getUsers);

router.post('/users', userController.createUser);

router.get('/users/:userId', userController.getUserDetails);

router.delete('/users/:userId', userController.deleteUser);

router.patch('/users/:userId', userController.updateUser);

module.exports = router;