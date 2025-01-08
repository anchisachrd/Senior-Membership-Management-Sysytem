import express from 'express'
import cors from 'cors'
import candidateRoutes from "./routes/candidateRoute.js"



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



app.listen(port, () => {
    console.log("listening laew")
});
