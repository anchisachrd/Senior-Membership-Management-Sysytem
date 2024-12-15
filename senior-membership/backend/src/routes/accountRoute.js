import express from 'express';
import * as accountController from "../controllers/accountController.js";

const router = express.Router();

// Route to create a new account
router.post("/", accountController.createAccount);

// Route to get an account by ID
router.get("/:accountId", accountController.getAccountById);

// Route to get an account by email
router.get("/email/:email", accountController.getAccountByEmail);

// Route to get all accounts by role
router.get("/role/:role", accountController.getAccountsByRole);

// Route to activate an account
router.put("/activate/:accountId", accountController.activateAccount);

// Route to deactivate an account
router.put("/deactivate/:accountId", accountController.deactivateAccount);

export default router;
