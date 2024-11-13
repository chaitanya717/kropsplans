// routes/planRoutes.js
const express = require("express");
const {
  createPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
  deletePlan,
  getPlansByUserId,
} = require("../controllers/planController");

const router = express.Router();

router.post("/plans", createPlan);           // Create a new plan
router.get("/plans", getAllPlans);            // Get all plans
router.get("/plans/:id", getPlanById);        // Get a plan by ID
router.put("/plans/:id", updatePlan);         // Update a plan by ID
router.delete("/plans/:id", deletePlan);      // Delete a plan by ID
router.get("/plans/user/:userid", getPlansByUserId); // Get plans by userid

module.exports = router;
