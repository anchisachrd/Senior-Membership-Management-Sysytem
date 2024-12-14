import axios from 'axios';

// Base URL for API
const apiUrl = 'http://localhost:3000/api/candidates';

// POST request to create a new candidate
export const createCandidate = async (candidateData) => {
  try {
    const response = await axios.post(`${apiUrl}`, candidateData);
    return response.data;  // Return the API response
  } catch (error) {
    console.error("There was an error creating the candidate:", error);
    throw error;
  }
};

// GET request to fetch all candidates (optional)
export const getCandidates = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;  // Return the API response
  } catch (error) {
    console.error("There was an error fetching candidates:", error);
    throw error;
  }
};
