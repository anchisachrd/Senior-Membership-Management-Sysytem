import * as candidateModel from "../models/candidateModel.js";

export const modifyDocVerificationStatus = async (candidateId) => {
  return await candidateModel.updateDocVerificationStatus(candidateId, "ผ่านการตรวจสอบ");
};

export const sendCandidateToCommittee = async (candidateId) => {
    return await candidateModel.updateApprovalStatus(candidateId, 'รอการตรวจสอบ');
  };

export const fetchAllVerifiedDocsCandidates = async () => {
  try {
    const candidates = await candidateModel.getCandidateByDocVerification('ผ่านการตรวจสอบ');
    return candidates;  // Always returns an array
  } catch (error) {
    throw new Error('Error fetching verified docs candidates');
  }
};

export const fetchAllApprovalStatusCandidates = async () => {
  try {
    const candidates = await candidateModel.getCandidateByApprovalStatus(['รอการตรวจสอบ', 'ไม่ผ่านการตรวจสอบ', 'ผ่านการตรวจสอบ']);
    return candidates;  // Always returns an array
  } catch (error) {
    throw new Error('Error fetching verified docs candidates');
  }
};

export const removeCandidate = async (candidateId) => {
  return await candidateModel.deleteCandidateById(candidateId);}

export const approvalStatusUpdate = async (candidateId, status,  failReasons) => {
  try{
    const updatedCandidate = await candidateModel.updateApprovalStatus(candidateId, status);
    return updatedCandidate;
  } catch (error) {
    console.error("Error updating approval status:", error);
    throw new Error("Error updating approval status");
  }
}