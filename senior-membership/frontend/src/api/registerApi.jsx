import axios from 'axios';

// Base URL for API
const apiUrl = 'http://localhost:3000/api/candidates';

// POST request to create a new candidate
export const createCandidate = async (candidateData, heirData) => {
  try {
    const formData = new FormData();

    //--------------------------------------------
    // 1) add candidate info
    //--------------------------------------------
    formData.append("candidate_title", candidateData.title);
    formData.append("candidate_first_name", candidateData.first_name);
    formData.append("candidate_last_name", candidateData.last_name);
    formData.append("candidate_national_id", candidateData.national_id);
    formData.append("candidate_dob", candidateData.dob);
    formData.append("candidate_phone", candidateData.phone);
    formData.append("candidate_gender", candidateData.gender);
    formData.append("candidate_occupation", candidateData.occupation);

    // Candidate address
    formData.append("candidate_house_number", candidateData.address.house_number);
    formData.append("candidate_moo", candidateData.address.moo);
    formData.append("candidate_soi", candidateData.address.soi);
    formData.append("candidate_street", candidateData.address.street);
    formData.append("candidate_subdistrict", candidateData.address.subdistrict);
    formData.append("candidate_district", candidateData.address.district);
    formData.append("candidate_province", candidateData.address.province);
    formData.append("candidate_postal_code", candidateData.address.postal_code);

    // Candidate account
    formData.append("candidate_email", candidateData.account.email);
    formData.append("candidate_password", candidateData.account.password);

    // Candidate documents (check if they exist and are File objects)
    if (candidateData.document?.house_registration) {
      formData.append(
        "candidate_house_registration",
        candidateData.document.house_registration
      );
    }
    if (candidateData.document?.id_card) {
      formData.append("candidate_id_card", candidateData.document.id_card);
    }
    if (candidateData.document?.rename_doc) {
      formData.append("candidate_rename_doc", candidateData.document.rename_doc);
    }
    if (candidateData.document?.med_certification) {
      formData.append(
        "candidate_med_certification",
        candidateData.document.med_certification
      );
    }

    //--------------------------------------------
    // 2) add heir data
    //--------------------------------------------
    formData.append("heir_title", heirData.title);
    formData.append("heir_first_name", heirData.first_name);
    formData.append("heir_last_name", heirData.last_name);
    formData.append("heir_national_id", heirData.national_id);
    formData.append("heir_dob", heirData.dob);
    formData.append("heir_phone", heirData.phone);
    formData.append("heir_gender", heirData.gender);
    formData.append("heir_occupation", heirData.occupation);
    formData.append("heir_relationship", heirData.relationship || "");

    // Heir address
    formData.append("heir_house_number", heirData.address.house_number);
    formData.append("heir_moo", heirData.address.moo);
    formData.append("heir_soi", heirData.address.soi);
    formData.append("heir_street", heirData.address.street);
    formData.append("heir_subdistrict", heirData.address.subdistrict);
    formData.append("heir_district", heirData.address.district);
    formData.append("heir_province", heirData.address.province);
    formData.append("heir_postal_code", heirData.address.postal_code);

    // Heir account 
    formData.append("heir_email", heirData.account.email || "");
    // formData.append("heir_password", heirData.account.password || "");

    // Heir documents
    if (heirData.document?.house_registration) {
      formData.append("heir_house_registration", heirData.document.house_registration);
    }
    if (heirData.document?.id_card) {
      formData.append("heir_id_card", heirData.document.id_card);
    }
    if (heirData.document?.rename_doc) {
      formData.append("heir_rename_doc", heirData.document.rename_doc);
    }

    //--------------------------------------------
    // 3) Same Address 
    //--------------------------------------------
    formData.append("sameAddress", heirData.sameAddress ? "true" : "false");
    

    //--------------------------------------------
    // 4) Send to Backend
    //--------------------------------------------
    const response = await axios.post(apiUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

   


    return response.data; // The backend returns { success, data, message }
  } catch (error) {
    console.error("Error in createCandidate:", error);
    throw error;
  }
};

// export const getCandidates = async () => {
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;  // Return the API response
//   } catch (error) {
//     console.error("There was an error fetchiang candidates:", error);
//     throw error;
//   }
// };
