const express = require('express');
const { addUser, getUsers, getUserById } = require('../controllers/userController');
const router = express.Router();

router.post('/postuser', addUser);
router.get('/getuser', getUsers);
router.get('/getuserbyid/:id', getUserById);

module.exports = router;