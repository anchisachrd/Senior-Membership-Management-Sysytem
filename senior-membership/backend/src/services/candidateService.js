import { query } from "../db.js"
import { createAddress, getAddressById } from "./addressService.js";

export const getAllCandidates = async() => {
    const {rows} = await query('SELECT * FROM candidates');
    return rows;
}

//สร้างผู้สมัคร
export const createCandidate = async(candidateData) => {
    const { title, fname, lname, nationalID, dob, phone, gender, job, address, document, account, heirData } = candidateData;

    const newAddress = await createAddress(address);

    const { rows } = await query (
        `INSERT INTO candidates (title, first_name, last_name, national_id, dob, phone, gender, occupation, address_id, document_id, account_id, heir_id) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
         [ title, fname, lname,  nationalID, dob, phone, gender, job, newAddress.address_id , document, account, heirData]
    );
    return {...rows[0], address: newAddress};
}




export const getCandidateById = async (id) => {
    // Get candidate details
    const candidateResult = await query(
      `SELECT * FROM candidates WHERE candidate_id = $1`,
      [id]
    );
  
    const candidate = candidateResult.rows[0];
    if (!candidate) throw new Error('Candidate not found');
  
    // เอาที่อยู่ที่เราต้องการจาก fk address_id in candidate
    const address = await getAddressById(candidate.address_id);
  
    return { ...candidate, address };
  };
