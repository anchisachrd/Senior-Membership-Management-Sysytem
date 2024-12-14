import express from 'express';

import * as candidateController from '../controllers/candidateController.js'

// Handle Logic

const router = express.Router();


router.post('/', candidateController.createCandidateData); //http://localhost:3000/api/candidates สร้างผู้สมัคร
router.get('/:id', candidateController.getCandidate); //http://localhost:3000/api/candidates/1 เรียกดูข้อมูลตามเลขไอดี

export default router;