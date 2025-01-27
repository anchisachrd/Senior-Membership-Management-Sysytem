import * as candidateModel from "../models/candidateModel.js";

export const modifyDocVerificationStatus = async (candidateId) => {
  return await candidateModel.updateDocVerificationStatus(candidateId, "ผ่านการตรวจสอบ");
};

export const sendCandidateToCommittee = async (candidateId) => {
    return await candidateModel.updateApprovalStatus(candidateId, 'รอการตรวจสอบ');
  };

export const fetchAllVerifiedDocsCandidates = async () => {
  try {
    const candidates = await candidateModel.getDocsVerifiedCandidates();
    return candidates;  // Always returns an array
  } catch (error) {
    throw new Error('Error fetching verified docs candidates');
  }
};