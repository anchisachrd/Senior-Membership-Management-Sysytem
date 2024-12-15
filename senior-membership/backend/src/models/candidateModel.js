import { query } from "../db.js"

export const getAllCandidates = async() => {
    const {rows} = await query('SELECT * FROM candidates');
    return rows[0];
}

//สร้างผู้สมัคร
export const createCandidate = async(candidateData) => {
    const { title, first_name, last_name, national_id, dob, phone, gender, occupation, address_id, document_id, account_id, heir_id } = candidateData;
  
  const { rows } = await query(
    `INSERT INTO candidates (title, first_name, last_name, national_id, dob, phone, gender, occupation, address_id, document_id, account_id, heir_id) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
    [title, first_name, last_name, national_id, dob, phone, gender, occupation, address_id, document_id, account_id, heir_id]
  );
  return rows[0];
}




export const getCandidateById = async (id) => {
    // Get candidate details
    const { rows } = await query(
      `SELECT * FROM candidates WHERE candidate_id = $1`,
      [id]
    );
  
    return rows[0];
  };
