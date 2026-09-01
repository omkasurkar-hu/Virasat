import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy initialize Gemini AI client
  const getGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({ apiKey });
  };

  // Cultural AI Chat / Heritage Guide API
  app.post("/api/cultural-ai/ask", async (req, res) => {
    try {
      const { stateName, query, category } = req.body;
      if (!stateName || !query) {
        return res.status(400).json({ error: "Missing stateName or query" });
      }

      const ai = getGenAI();
      if (!ai) {
        return res.json({
          answer: `Here is a curated cultural insight for ${stateName}: ${stateName} has a rich heritage steeped in historical traditions, classical and folk arts, distinctive architectural wonders, and celebratory seasonal festivals. (Add your Gemini API key in settings for real-time live AI responses!)`,
          fallback: true
        });
      }

      const prompt = `You are a world-renowned cultural anthropologist, historian, and friendly virtual museum tour guide specializing in the cultural heritage of Indian and global states.
State/Region: ${stateName}
Category focus: ${category || "General Cultural Heritage"}
User question: "${query}"

Provide a rich, fascinating, vivid, and culturally accurate answer in 2-3 structured paragraphs. Highlight unique folklore, historical origins, specific art forms, UNESCO recognitions, or festive customs where applicable. Keep the tone inspiring, respectful, and educational.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return res.json({
        answer: response.text || `Detailed cultural information on ${stateName} is available in the heritage directory.`,
        fallback: false
      });
    } catch (error: any) {
      console.error("Cultural AI Error:", error);
      return res.status(500).json({
        error: "Failed to generate cultural answer",
        details: error.message
      });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Cultural Heritage Maps Server running on http://localhost:${PORT}`);
  });
}

startServer();
