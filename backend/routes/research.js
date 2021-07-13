'use strict';

const express = require('express');
const {upload} = require('../helper/filehelper');
const {singleFileUpload,getallResearchDetails,getresearch} = require('../controller/ResearchuploaderController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getResearch',getallResearchDetails);
router.get("/getresearchbyid/:id",getresearch);


module.exports = {
    routes: router
}