const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResearchSchema = new Schema({
  email:String,
  name: String,
  phone:String,
  city:String,
  state:String,
  country:String,
  qualification:String,
  rtitle:String,
  fileName: {
    type: String,
    required: true
},
filePath: {
    type: String,
    required: true
},
fileType: {
    type: String,
    required: true
},
fileSize: {
    type: String,
    required: true
},
 // user: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'user'},
  
});

const research = mongoose.model("research", ResearchSchema);
module.exports = research;
