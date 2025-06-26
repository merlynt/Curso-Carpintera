const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseControllers");

router.get("/", courseController.courseGet);        
router.post("/", courseController.courseCreate);      
router.get("/:id", courseController.courseGetById);   
router.put("/:id", courseController.courseUpdate);    
router.delete("/:id", courseController.courseDelete); 

module.exports = router;

