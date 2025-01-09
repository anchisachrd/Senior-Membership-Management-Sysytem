import express from 'express'
import cors from 'cors'
import candidateRoutes from "./routes/candidateRoute.js"
import * as accountModel from "../src/models/accountModel.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';




const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Candidate routes
app.use('/api/candidates', candidateRoutes);

// Optional: Serve files from the upload folder (if you want direct access to them)
import path from 'path';
app.use('/upload', express.static(path.join(process.cwd(), 'src', 'upload')));

// Error-handling for Multer or custom errors (optional)
app.use((err, req, res, next) => {
  if (err.message.includes('Invalid file type')) {
    // fileFilter error
    return res.status(400).json({ error: err.message });
  }
  return res.status(500).json({ error: err.message });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Fetch account by email
    const account = await accountModel.getAccountByEmail(email);

    if (!account) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 2. Validate the password
    const isPasswordValid = await bcrypt.compare(password, account.password_hash);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    if (!account.role === 'candidate') {
      return res.status(400).json({ message: "Not Candidate" });
    }

    // 3. Check if the account is active
    // if (!account.is_active) {
    //   return res.status(403).json({ message: "Account is inactive. Please contact support." });
    // }

    // 4. Generate JWT token
    // const token = jwt.sign(
    //   { accountId: account.account_id, role: account.role },
    //   JWT_SECRET,
    //   { expiresIn: "1h" } // Token expiration time
    // );

    // 5. Return success response with token
    return res.json({
      message: "Login successful",
      // token,
    });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "An error occurred during login" });
  }
});




app.listen(port, () => {
    console.log("listening laew")
});
