import express from "express";
import cors from "cors";
import { handleAIRequest } from "./tools/ai.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/ai", async (req, res) => {
  try {
    const { prompt, mode } = req.body;
    const result = await handleAIRequest(prompt, mode);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Silver AI backend error" });
  }
});

app.listen(PORT, () => {
  console.log(`Silver AI backend running on port ${PORT}`);
});
