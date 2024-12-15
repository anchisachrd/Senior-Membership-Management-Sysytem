import * as documentModel from "../models/documentModel.js";

export const createDocument = async (data) => {
    return await documentModel.createDocument(data);
};

export const getDocumentById = async (documentId) => {
    const document = await documentModel.getDocumentById(documentId);
    if (!document) {
        throw new Error("Document not found");
    }
    return document;
};

export const getAllDocuments = async () => {
    return await documentModel.getAllDocuments();
};

export const updateDocument = async (documentId, data) => {
    const updatedDocument = await documentModel.updateDocument(documentId, data);
    if (!updatedDocument) {
        throw new Error("Document not found or could not be updated");
    }
    return updatedDocument;
};

export const deleteDocument = async (documentId) => {
    const deletedDocument = await documentModel.deleteDocument(documentId);
    if (!deletedDocument) {
        throw new Error("Document not found or could not be deleted");
    }
    return deletedDocument;
};
