const express = require("express"); 
const router = express.Router();
const controller = require("../controllers/workexperienceController");

router.get("/", controller.getAllExperiences);
router.get("/:id", controller.getExperienceById);
router.post("/", controller.createExperience);
router.put("/:id", controller.updateExperience);
router.delete("/:id", controller.deleteExperience);

module.exports = router; 