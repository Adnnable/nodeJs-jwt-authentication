// routes/authRoutes.js
const express = require('express');
const { registerUser, authUser, getProfile, changePassword } = require('../controller/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', authUser);
router.put('/change-password',protect, changePassword);
router.get('/profile', protect, getProfile);

module.exports = router;
