import express from "express";
import * as documentController from "../controllers/documentController.js";

const router = express.Router();

router.get("/", documentController.getAllDocuments);
router.get("/:id", documentController.getDocumentById);
router.post("/", documentController.createDocument);
router.put("/:id", documentController.updateDocument);
router.delete("/:id", documentController.deleteDocument);

export default router;
