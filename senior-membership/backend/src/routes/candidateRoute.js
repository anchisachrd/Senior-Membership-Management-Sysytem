// backend/src/routes/candidateRoutes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import * as candidateController from '../controllers/candidateController.js';

const router = express.Router();

// 1) Set up your disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Where you want to store the files
    cb(null, path.join(process.cwd(), "src", "upload"));
  },
  filename: function (req, file, cb) {
    // This helps ensure the filename is unique
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// 2) Define your file filter if needed (e.g. to restrict doc/image types)
const fileFilter = (req, file, cb) => {
  // Accept certain mime types, for example:
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only PDF, JPG, or PNG is allowed."), false);
  }
};

// 3) Create Multer middleware
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// 4) Tell Multer which fields you expect
//    Using array syntax if you want multiple docs in the same field. 
//    Or use .fields() if you have separate fields for each doc.
const multipleUpload = upload.fields([
  { name: "candidate_house_registration", maxCount: 1 },
  { name: "candidate_id_card", maxCount: 1 },
  { name: "candidate_rename_doc", maxCount: 1 },
  { name: "candidate_med_certification", maxCount: 1 },

  // For Heir 
  { name: "heir_house_registration", maxCount: 1 },
  { name: "heir_id_card", maxCount: 1 },
  { name: "heir_rename_doc", maxCount: 1 },
]);

// 5) Use that middleware in the POST route to handle file uploads
router.post("/", multipleUpload, candidateController.createCandidateData);
router.get('/verified', candidateController.getVerifiedCandidates); 
router.get('/candidate-list', candidateController.getWaitingApproveCandidates);
router.get('/:id', candidateController.getCandidateandHeirById);
router.get("/verification/:candidateId",  candidateController.getVerificationDetails);
router.put('/:id/verify', candidateController.updateDocStatus);
router.put('/send-to-committee/:candidateId', candidateController.sendToCommittee);
router.put("/:candidateId/approval-status", candidateController.updateCandidateApprovalStatus);
router.put("/verification/:candidateId", candidateController.updateVerificationDetails)
router.post("/", candidateController.createCandidateData);
router.get('/', candidateController.getCandidates);
router.delete('/:candidateId', candidateController.deleteCandidate);


/**
 * 6) GET /api/candidates/:id
 */


export default router;
