import express from 'express';
import * as heirController from "../controllers/heirController.js";

const router = express.Router();

// Route to create a new heir
router.post("/", heirController.createHeir);

// Route to get heir by national ID
router.get("/national-id/:national_id", heirController.getHeirByNationalId);

// Route to get heir by ID
router.get("/:heir_id", heirController.getHeirById);

// Route to update heir information
router.put("/:heir_id", heirController.updateHeir);

// Route to delete heir by ID
router.delete("/:heir_id", heirController.deleteHeir);

export default router;
