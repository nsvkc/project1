var express = require('express');
var router = express.Router();
var teg = require('../models/dataSchema');

router.post('/teg',(req,res,next)=>{

	
    var newTeg = new teg({
        Name:req.body.Name,
        Employee_ID:req.body.Employee_ID,
        Location:req.body.Location,
        Team:req.body.Team,
        Total_Experience:req.body.Total_Experience,
        UST_Experience:req.body.UST_Experience,
        Primary_skillset:req.body.Primary_skillset,
        Secondary_skillset:req.body.Secondary_skillset,
        Domains:req.body.Domains,
        Certifications:req.body.Certifications,
        Publications:req.body.Publications,
        Current_focus_areas:req.body.Current_focus_areas,
        Countribution_areas:req.body.Countribution_areas,
        Learning_areas:req.body.Learning_areas,
        Role:req.body.Role
     
     
         });
         newTeg.save((err,teg)=>{
            if (err)
                res.status(500).json({errmsg:err});
    
        res.status(200).json({msg:teg});
    
        });

    });
    
    
router.get('/teg' ,(req,res,next)=>{
	
    teg.find({},(err,tegs)=>{
		if (err)
		    res.status(500).json({errmsg:err});

    res.status(200).json({msg:tegs });
    });
    teg.findById(req.body._id,(err,teg)=>{
        if (err)
        {
            res.status(500).json({errmsg:err});
        }
        res.status(200).json({msg:teg });
    });

 
    

    
    

});
   
router.put('/teg',(req,res,next)=>{
	
    teg.findById(req.body._id,(err,teg)=>{
        if (err)
        
         res.status(500).json({errmsg:err});
        
    teg.Name=req.body.Name;
    teg.Employee_ID=req.body.Employee_ID;
    teg.Location=req.body.Location;
    teg.Team=req.body.Team;
    teg.Total_Experience=req.body.Total_Experience;
    teg.UST_Experience=req.body.UST_Experience;
    teg.Primary_skillset=req.body.Primary_skillset;
    teg.Secondary_skillset=req.body.Secondary_skillset;
    teg.Domains=req.body.Domains;
    teg.Certifications=req.body.Certifications;
    teg.Publications=req.body.Publications;
    teg.Current_focus_areas=req.body.Current_focus_areas;
    teg.Countribution_areas=req.body.Countribution_areas;
    teg.Learning_areas=req.body.Learning_areas;
    teg.Role=req.body.Role;
    teg.save((err,teg)=>{
            if (err)
               res.status(500).json({errmsg:err});
               
     res.status(200).json({msg:teg });
                
            });
        


	

    });
}); 
    
router.delete('/teg',(req,res,next)=>{
	
    teg.findByIdAndUpdate(req.body._id,  { isActive: false }, function (err, teg) {
        if (err){
            res.status(500).json({errmsg:err});
          };
        res.send(teg);
      });
    });
    
    module.exports = router;