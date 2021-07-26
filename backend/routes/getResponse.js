const express = require('express');
const router = express.Router();

const getResponse = require('../controllers/getResponse');

router.get('/getResponse', getResponse);

module.exports = router;