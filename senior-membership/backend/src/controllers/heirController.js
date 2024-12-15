import * as heirService from "../services/heirService.js";

// Create a new heir
export const createHeir = async (req, res) => {
    try {
        const heirData = req.body;
        const heir = await heirService.createHeir(heirData);
        res.status(201).json(heir);  // Respond with the created heir data
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get heir by national ID
export const getHeirByNationalId = async (req, res) => {
    try {
        const { national_id } = req.params;
        const heir = await heirService.getHeirByNationalId(national_id);
        res.status(200).json(heir);  // Respond with the heir data
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Get heir by ID
export const getHeirById = async (req, res) => {
    try {
        const { heir_id } = req.params;
        const heir = await heirService.getHeirById(heir_id);
        res.status(200).json(heir);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update heir information
export const updateHeir = async (req, res) => {
    try {
        const { heir_id } = req.params;
        const heirData = req.body;
        const updatedHeir = await heirService.updateHeir(heir_id, heirData);
        res.status(200).json(updatedHeir);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete heir by ID
export const deleteHeir = async (req, res) => {
    try {
        const { heir_id } = req.params;
        const deletedHeir = await heirService.deleteHeir(heir_id);
        res.status(200).json(deletedHeir);  // Respond with the deleted heir data
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
