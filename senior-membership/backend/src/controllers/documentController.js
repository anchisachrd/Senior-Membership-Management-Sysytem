import * as documentService from "../services/documentService.js";

export const createDocument = async (req, res) => {
    try {
        const document = await documentService.createDocument(req.body);
        res.status(201).json(document);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getDocumentById = async (req, res) => {
    try {
        const document = await documentService.getDocumentById(req.params.id);
        res.status(200).json(document);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const getAllDocuments = async (req, res) => {
    try {
        const documents = await documentService.getAllDocuments();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateDocument = async (req, res) => {
    try {
        const updatedDocument = await documentService.updateDocument(req.params.id, req.body);
        res.status(200).json(updatedDocument);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteDocument = async (req, res) => {
    try {
        const result = await documentService.deleteDocument(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
