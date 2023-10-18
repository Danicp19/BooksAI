import OpenAI from "openai";
require("dotenv").config();
const openai = new OpenAI({
  organization: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION,
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
export default async function handler(req, res) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: req.body.messages,
  });
  res.status(200).json(completion);
}
