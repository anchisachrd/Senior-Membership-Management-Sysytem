import * as heirModel from "../models/heirModel.js";

// Create a new heir
export const createHeir = async (heirData) => {
    return await heirModel.createHeir(heirData);
};

// Get heir by national ID
export const getHeirByNationalId = async (national_id) => {
    const heir = await heirModel.getHeirByNationalId(national_id);
    if (!heir) {
        throw new Error("Heir not found");
    }
    return heir;
};

// Get heir by ID
export const getHeirById = async (heir_id) => {
    const heir = await heirModel.getHeirById(heir_id);
    if (!heir) {
        throw new Error("Heir not found");
    }
    return heir;
};

// Update heir information
export const updateHeir = async (heir_id, heirData) => {
    const heir = await heirModel.updateHeir(heir_id, heirData);
    if (!heir) {
        throw new Error("Heir not found or could not be updated");
    }
    return heir;
};

// Delete heir by ID
export const deleteHeir = async (heir_id) => {
    const heir = await heirModel.deleteHeir(heir_id);
    if (!heir) {
        throw new Error("Heir not found or could not be deleted");
    }
    return heir;
};
