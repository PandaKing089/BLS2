import express from 'express';
 macOSLinux OPENAI_API_KEY=sk-... node server.js
 Windows (PowerShell) $envOPENAI_API_KEY=sk-...; node server.js
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


if (!OPENAI_API_KEY) {
console.error('Missing OPENAI_API_KEY env var');
process.exit(1);
}


 Minimal request validation
const clamp = (n, min, max) = Math.max(min, Math.min(max, n));


app.post('chat', async (req, res) = {
try {
const { messages = [], model = 'gpt-4o-mini', max_output_tokens = 400 } = req.body  {};


 Defend a bit against abuse
const safeMax = clamp(Number(max_output_tokens)  400, 32, 2000);


const r = await fetch('httpsapi.openai.comv1responses', {
method 'POST',
headers {
'Authorization' `Bearer ${OPENAI_API_KEY}`,
'Content-Type' 'applicationjson'
},
body JSON.stringify({
model,
input [
{
role 'system',
content 'You are helpful, concise, and safe for kids. Avoid sensitive content.'
},
...messages
],
max_output_tokens safeMax
})
});


if (!r.ok) {
const text = await r.text();
return res.status(r.status).json({ error text });
}


const data = await r.json();
 Responses API combine output_text helper if present; otherwise stitch choices
const output = data.output_text  (
Array.isArray(data.output)  data.output.map(p = p.content.[0].text  '').join('')  ''
);


res.json({ text output, raw data });
} catch (e) {
res.status(500).json({ error String(e) });
}
});


const PORT = process.env.PORT  8787;
app.listen(PORT, () = console.log(`Proxy listening on httplocalhost${PORT}`));