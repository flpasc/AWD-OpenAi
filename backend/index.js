import express from "express";
import postgres from "postgres";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors);

const PORT = process.env.BACKEND_PORT || 5000;

const sql = postgres({
  host: "db",
  port: 5432,
  database: "postgresdb",
  username: "postgres",
  password: "mypassword",
});

const client = new OpenAI();
const response = client.responses.create({
  model: "gpt-4o-mini-2024-07-18",
  input: "Say hello to my new app",
});

console.log(response);

const userMessage =
  await sql`INSERT INTO messages (session_id, content) VALUES (${sessionId} ${message}) RETURNING id,created_at`;

app.get("/", async (req, res) => {
  try {
    const data = await sql`SELECT * FROM messages`;
    res.json({ message: "Welcome to api route", data: data });
  } catch (error) {
    console.error(error);
    res.json({ error: error, details: error.message });
  }
});

app.post("/", async (req, res) => {
  const { message, sessionId } = req.body;
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
