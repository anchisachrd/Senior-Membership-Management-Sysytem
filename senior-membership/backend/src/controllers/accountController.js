import * as accountService from "../services/accountService.js";

// Create a new account
export const createAccount = async (req, res) => {
    try {
        const { email, password_hash, role, is_active } = req.body;
        const account = await accountService.createAccount(email, password_hash, role, is_active);
        res.status(201).json(account);  // Respond with the created account
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get an account by ID
export const getAccountById = async (req, res) => {
    try {
        const { accountId } = req.params;
        const account = await accountService.getAccountById(accountId);
        res.status(200).json(account);  // Respond with the account data
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Get an account by email
export const getAccountByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const account = await accountService.getAccountByEmail(email);
        res.status(200).json(account);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Get accounts by role
export const getAccountsByRole = async (req, res) => {
    try {
        const { role } = req.params;
        const accounts = await accountService.getAccountsByRole(role);
        res.status(200).json(accounts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Activate an account
export const activateAccount = async (req, res) => {
    try {
        const { accountId } = req.params;
        const account = await accountService.activateAccount(accountId);
        res.status(200).json(account);  // Account activated successfully
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Deactivate an account
export const deactivateAccount = async (req, res) => {
    try {
        const { accountId } = req.params;
        const account = await accountService.deactivateAccount(accountId);
        res.status(200).json(account);  // Account deactivated successfully
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
