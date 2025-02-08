import { query } from "../db.js";

// Create a document
export const createDocument = async (documentData) => {
  const { doc_path, doc_type, candidate_id, heir_id } = documentData;

  const { rows } = await query(
    `INSERT INTO documents (doc_path, doc_type, candidate_id, heir_id)
       VALUES ($1, $2, $3, $4)
       RETURNING document_id`,
    [doc_path, doc_type, candidate_id, heir_id]
  );

  return rows[0].document_id;
};

// Get a document by ID
export const getDocumentById = async (documentId) => {
  const { rows } = await query(
    `SELECT * FROM documents WHERE document_id = $1`,
    [documentId]
  );
  return rows[0];
};

// Get all documents
export const getAllDocuments = async () => {
  const { rows } = await query(`SELECT * FROM documents`);
  return rows;
};

// Update a document
// export const updateDocument = async (documentId, documentData) => {
//     const { doc_path, doc_type, entity_type, entity_id } = documentData;
//     const { rows } = await query(
//         `UPDATE documents
//          SET doc_path = $1, doc_type = $2, entity_type = $3, entity_id = $4
//          WHERE document_id = $5 RETURNING *`,
//         [doc_path, doc_type, entity_type, entity_id, documentId]
//     );
//     return rows[0];
// };

// Delete a document
export const deleteDocument = async (documentId) => {
  const { rows } = await query(
    `DELETE FROM documents WHERE document_id = $1 RETURNING *`,
    [documentId]
  );
  return rows[0];
};

export const getDocumentsByCandidateId = async (candidateId) => {
  const { rows } = await query(
    `
      SELECT document_id, doc_path, doc_type, candidate_id, heir_id
      FROM documents
      WHERE candidate_id = $1 
    `,
    [candidateId]
  );
  return rows;
};

export const getDocumentsByHeirId = async (heirId) => {
  const { rows } = await query (`
      SELECT document_id, doc_path, doc_type, candidate_id, heir_id
      FROM documents
      WHERE heir_id = $1
    `, [heirId]
);
  return rows;
};
