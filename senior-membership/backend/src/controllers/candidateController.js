import * as registerService from "../services/registerService.js";



export const createCandidateData = async (req, res) => {
  try {
    
    // 2) Build candidateData object from req.body
    const candidateData = {
      title: req.body.candidate_title,
      first_name: req.body.candidate_first_name,
      last_name: req.body.candidate_last_name,
      national_id: req.body.candidate_national_id,
      dob: req.body.candidate_dob,
      phone: req.body.candidate_phone,
      gender: req.body.candidate_gender,
      occupation: req.body.candidate_occupation,
      account: {
        email: req.body.candidate_email,
        password: req.body.candidate_password,
      },
      document: {

        house_registration: null,
        id_card: null,
        rename_doc: null,
        med_certification: null,
      },
      address: {
        house_number: req.body.candidate_house_number,
        moo: req.body.candidate_moo,
        soi: req.body.candidate_soi,
        street: req.body.candidate_street,
        subdistrict: req.body.candidate_subdistrict,
        district: req.body.candidate_district,
        province: req.body.candidate_province,
        postal_code: req.body.candidate_postal_code,
      },
    };

    const sameAddress = req.body.sameAddress === "true";

    const heirData = {
      title: req.body.heir_title,
      first_name: req.body.heir_first_name,
      last_name: req.body.heir_last_name,
      national_id: req.body.heir_national_id,
      dob: req.body.heir_dob,
      phone: req.body.heir_phone,
      gender: req.body.heir_gender,
      occupation: req.body.heir_occupation,
      relationship: req.body.heir_relationship,
      sameAddress,
      account: {
        email: req.body.heir_email,
        password: req.body.heir_password || "AUTO_GENERATED_PASSWORD",
      },
      document: {

        house_registration: null,
        id_card: null,
        rename_doc: null,
      },
      address: {
        house_number: req.body.heir_house_number,
        moo: req.body.heir_moo,
        soi: req.body.heir_soi,
        street: req.body.heir_street,
        subdistrict: req.body.heir_subdistrict,
        district: req.body.heir_district,
        province: req.body.heir_province,
        postal_code: req.body.heir_postal_code,
      },
    };

    const result = await registerService.register(candidateData, heirData, req.files);

    return res.status(201).json({
      success: true,
      data: result,
      message: "Candidate (and Heir) registered successfully",
    });
  } catch (error) {
    console.error("Error creating candidate:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};


