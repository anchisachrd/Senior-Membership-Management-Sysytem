import * as candidateService from "../services/candidateService.js";

export const createCandidateData = async (req, res) => {
  try {
      const candidateData = req.body;

      // Validate required fields
      const { title, first_name, last_name, national_id, dob, phone, gender, occupation, address, document_id, account_id, heir_id } = candidateData;
      if (!title || !first_name || !last_name || !national_id || !dob || !phone || !address || !document_id || !account_id || !heir_id) {
          return res.status(400).json({ message: "Missing required fields: title, first_name, last_name, national_id, dob, phone, address, document_id, account_id, heir_id." });
      }

      // Call the service to create the candidate
      const newCandidate = await candidateService.createCandidate(candidateData);

      // Respond with the newly created candidate object
      res.status(201).json({
          message: "Candidate created successfully",
          candidate: newCandidate
      });
  } catch (error) {
      console.error('Error in creating candidate:', error); // Log the full error object for debugging
      res.status(500).json({ message: "Failed to create candidate", error: error.message });
  }
};

export const getCandidate = async (req, res) => {
  try {
      const { id } = req.params;

      // Call the service to get the candidate by ID
      const candidate = await candidateService.getCandidateById(id);

      if (!candidate) {
          return res.status(404).json({ message: "Candidate not found" });
      }

      res.status(200).json(candidate);
  } catch (error) {
      console.error('Error in fetching candidate:', error); // Log the full error object for debugging
      res.status(500).json({ message: "Failed to fetch candidate", error: error.message });
  }
};