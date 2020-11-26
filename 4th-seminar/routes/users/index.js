const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
const { User } = require('../../models');
const userController = require('../../controller/userController');
const authUtils = require('../../middlewares/authUtils');

router.post('/signup', userController.signup);

router.post('/signin', userController.signin);

router.get('/', userController.readAll);

// router.get('/:id', userController.readOne);

router.get('/profile', authUtils.checkToken, userController.getProfile);

router.get('/:id', authUtils.checkToken, userController.readOne);

module.exports = router;