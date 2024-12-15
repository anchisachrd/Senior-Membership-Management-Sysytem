import express from 'express'
import cors from 'cors'
import candidateRoutes from "./routes/candidateRoute.js"
import documentRoutes from "./routes/documentRoute.js"
import accountRoutes from "./routes/accountRoute.js"
import heirRoutes from './routes/heirRoute.js';



const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/candidates', candidateRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/heirs", heirRoutes);

app.listen(port, () => {
    console.log("listening laew")
});
