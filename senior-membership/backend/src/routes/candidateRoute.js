// backend/src/routes/candidateRoutes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import * as candidateController from '../controllers/candidateController.js';

const router = express.Router();

/**
 * 1) fileFilter: restrict file types to PDF, JPG, PNG
 */
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['application/pdf', 'image/jpeg', 'image/png'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only PDF, JPG, and PNG are allowed'), false);
  }
};

/**
 * 2) Path to "uploads" folder (or "upload", whichever you prefer)
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadFolderPath = path.join(__dirname, '..', 'upload');

// Ensure the folder exists
if (!fs.existsSync(uploadFolderPath)) {
  fs.mkdirSync(uploadFolderPath);
}

/**
 * 3) Configure Multer (storage + fileFilter)
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolderPath);
  },
  filename: (req, file, cb) => {
    // candidate_id_card-<unique>-<originalFileName>.pdf
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage, fileFilter });

/**
 * 4) Define which file fields you expect from the frontend
 *    e.g. Candidate doc fields + Heir doc fields
 */
const candidateUploadFields = [
  { name: 'candidate_house_registration', maxCount: 1 },
  { name: 'candidate_id_card', maxCount: 1 },
  { name: 'candidate_rename_doc', maxCount: 1 },
  { name: 'candidate_med_certification', maxCount: 1 },
  { name: 'heir_house_registration', maxCount: 1 },
  { name: 'heir_id_card', maxCount: 1 },
  { name: 'heir_rename_doc', maxCount: 1 },
];

/**
 * 5) POST /api/candidates (create candidate + heir)
 */
router.post('/', upload.fields(candidateUploadFields), candidateController.createCandidateData);

/**
 * 6) GET /api/candidates/:id
 */


export default router;
