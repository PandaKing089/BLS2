import express from "express";
import cors from "cors";

const app = express();

// ✅ Allow all origins (needed for PenguinMod sandbox)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// Parse JSON bodies
app.use(express.json({ limit: "1mb" }));

// 🔑 OpenAI API key from Render environment
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("❌ Missing OPENAI_API_KEY env var");
  process.exit(1);
}

// Helper to keep token count reasonable
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

app.post("/chat", async (req, res) => {
  try {
    const { messages = [], model = "gpt-3.5-turbo", max_output_tokens = 200 } = req.body || {};
    const safeMax = clamp(Number(max_output_tokens) || 200, 32, 2000);

    // Call OpenAI Chat Completions API
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: safeMax
      })
    });

    if (!r.ok) {
      let text = await r.text();
      try {
        const json = JSON.parse(text);
        text = json.error?.message || text;
      } catch {}
      return res.status(r.status).json({ error: text || `Request failed with status ${r.status}` });
    }

    const data = await r.json();
    const output = data.choices?.[0]?.message?.content ?? "";

    // ✅ Simplified JSON response for PenguinMod
    res.json({ text: output });

  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

// Start server
const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log(`✅ Proxy running at http://localhost:${PORT}`));
