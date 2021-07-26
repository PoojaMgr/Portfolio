const express = require('express');
const router = express.Router();

const postResponse = require('../controllers/postResponse');

router.post('/postsFeedback', postResponse);

module.exports = router;