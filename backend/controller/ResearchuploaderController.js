'use strict';
const ResearchPres = require('../models/researchPres.model');

const singleFileUpload = async (req, res, next) => {
    try{
        const file = new ResearchPres({
            email : req.body.email,
            name : req.body.name,
            phone : req.body.phone,
            city : req.body.city,
            state : req.body.state,
            country : req.body.country,
            qualification : req.body.qualification,
            rtitle:req.body.rtitle,
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
           
        });
        await file.save();
        user.find({id: id});
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}


const getallResearchDetails = async (req, res, next) => {
    try{
        const files = await ResearchPres.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

const getresearch = async (req, res, next) => {
    ResearchPres.findById(req.params.id)
    .then(research => res.json(research))
    .catch(err => res.status(400).json('Error: '+err));
    }
    
    

module.exports = {
    singleFileUpload,
    getallResearchDetails,
    getresearch
}