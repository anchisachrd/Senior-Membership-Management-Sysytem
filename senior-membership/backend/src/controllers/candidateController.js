import { createCandidate, getAllCandidates, getCandidateById } from "../services/candidateService.js";

export const createCandidateData = async (req, res) => {
    try {
        const candidateData = req.body;

        // Validate required fields
        const { title, fname, lname, nationalID, dob, phone } = candidateData;
        if (!title || !fname || !lname || !nationalID || !dob || !phone) {
            return res.status(400).json({ message: "Missing required fields: title, fname, lname, nationalID, dob, or phone." });
        }

        // Call the service to create the candidate
        const newCandidate = await createCandidate(candidateData);

        // Respond with the newly created candidate object
        res.status(201).json({ message: "Data created successfully", candidate: newCandidate });
    } catch (error) {
        console.error('Error in creating candidate:', error); // Log the full error object for debugging
        res.status(500).json({ message: "Failed to create data", error: error.message });
    }
};

export const getCandidate = async (req, res) => {
    try {
      const { id } = req.params;
      const candidate = await getCandidateById(id);
      res.status(200).json(candidate);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch candidate", error: error.message });
    }
  };