const express = require('express');

const router = express.Router()

const userController = require('../controllers/userController');

//get all users
router.get('/', userController.get_all_users);

//create a user
router.post('/create', userController.create_user);

//get user by id
router.get('/:id', userController.get_user_by_id);

//update user by id
router.patch('/:id', userController.update_user_by_id);

//delete user by id
router.delete('/:id', userController.delete_user_by_id);

module.exports = router;



