import * as accountModel from "../models/accountModel.js";

// Create a new account
export const createAccount = async (email, password_hash, role, is_active) => {
    return await accountModel.createAccount(email, password_hash, role, is_active);
};

// Get an account by ID
export const getAccountById = async (accountId) => {
    const account = await accountModel.getAccountById(accountId);
    if (!account) {
        throw new Error("Account not found");
    }
    return account;
};

// Get an account by email
export const getAccountByEmail = async (email) => {
    const account = await accountModel.getAccountByEmail(email);
    if (!account) {
        throw new Error("Account not found");
    }
    return account;
};

// Get accounts by role
export const getAccountsByRole = async (role) => {
    return await accountModel.getAccountsByRole(role);
};

// Activate an account
export const activateAccount = async (account_id) => {
    const account = await accountModel.activateAccount(account_id);
    if (!account) {
        throw new Error("Account not found or couldn't be activated");
    }
    return account;
};

// Deactivate an account
export const deactivateAccount = async (account_id) => {
    const account = await accountModel.deactivateAccount(account_id);
    if (!account) {
        throw new Error("Account not found or couldn't be deactivated");
    }
    return account;
};
