import cors from "cors";
import "dotenv/config";
import  express  from "express";
import { apikey } from "./serverClient";

const app = express();
app.use(express.json());
app.use(cors({origin : "*"}))

app.get('/',(req,res) => {
    res.json({
        message : "AI WRITING ASSISTANT server is runing",
        apiKey : apikey,
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server is ruining at http://localhost:${PORT}`);
    
})