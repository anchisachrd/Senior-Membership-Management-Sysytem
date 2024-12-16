import { query } from "../db.js"
import * as addressModel  from "../models/addressModel.js";
import * as candidateModel from "../models/candidateModel.js"
import * as documentModel from "../models/documentModel.js"
import * as accountModel from "../models/accountModel.js"
import * as heirModel from "../models/heirModel.js"


export const getAllCandidates = async () => {
  return await candidateModel.getAllCandidates();
};

// Create a new candidate
export const createCandidate = async (candidateData) => {
  // Step 1: Create the address
  const newAddress = await addressModel.createAddress(candidateData.address);
  const newDocument = await documentModel.createDocument(candidateData.document)
  const newAccount = await accountModel.createAccount(
    candidateData.account.email,
    candidateData.account.password, // Make sure to send the password here
    candidateData.account.role,
    candidateData.account.is_active
  );
  const newHeir = await heirModel.createHeir(candidateData.heir)

  // Step 2: Insert the candidate, passing the address_id from the newly created address
  const candidateAlldata = await candidateModel.createCandidate({
    ...candidateData,
    address_id: newAddress.address_id,  // Address ID from the model layer
    document_id: newDocument.document_id,
    account_id: newAccount.account_id,
    heir_id: newHeir.heir_id
  });

  return { ...candidateAlldata, address: newAddress, document: newDocument, account: newAccount, heir: newHeir };  // Return both candidate data and address data
};

// Get candidate by ID
export const getCandidateById = async (id) => {
  const candidate = await candidateModel.getCandidateById(id);

  if (!candidate) {
    throw new Error('Candidate not found');
  }

  const address = await addressModel.getAddressById(candidate.address_id);
  const document = await documentModel.getDocumentById(candidate.document_id)
  const account =  await accountModel.getAccountById(candidate.account_id)
  const heir = await heirModel.getHeirById(candidate.heir_id)
  return { ...candidate, address, document, account, heir};
};