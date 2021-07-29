const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');

const postResponse = require('../controllers/postResponse');
const uploadFile = require('../controllers/uploadFile');

router.post('/postsFeedback', postResponse);
router.post("/upload", (req, res) => {
    let file = { name: req.body.name, file: binary(req.files.uploadedFile.data) }
    insertFile(file, res)
})


module.exports = router;