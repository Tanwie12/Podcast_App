const express = require('express');
const {registerUser, getUser, logoutUser,updateUserProfile, loginUser}=require('../controllers/UserController');
const router = express.Router();
const {protect}=require("../middlerware/AuthMiddleware")


router.post('/register', registerUser,);
router.post('/login',loginUser,);
router.post('/logout',logoutUser)
router.route('/profile').get(protect, getUser).put(protect,updateUserProfile)

module.exports = router;

