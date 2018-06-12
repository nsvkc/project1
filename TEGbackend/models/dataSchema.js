var mongoose = require('mongoose');

var tegSchema = mongoose.Schema({
 Name:{type:String,maxlength:100},
 Employee_ID:{type:String,maxlength:10},
 Location:{type:String,maxlength:20},
 Team:{type:String,maxlength:40},
 Total_Experience:{type:String,maxlength:20},
 UST_Experience:{type:String,maxlength:20},
 Primary_skillset:{type:String,maxlength:400},
 Secondary_skillset:{type:String,maxlength:400},
 Domains:{type:String,maxlength:200},
 Certifications:{type:String,maxlength:800},
 Publications:{type:String,maxlength:800},
 Current_focus_areas:{type:String,maxlength:400},
 Countribution_areas:{type:String,maxlength:400},
 Learning_areas:{type:String,maxlength:400},
 Role:{type:String,maxlength:20},
 isActive: {type: Boolean, default: true}


});

module.exports=mongoose.model('teg',tegSchema);