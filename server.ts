import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory lead log
const leadSubmissions: any[] = [];

// API Endpoint 1: Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API Endpoint 2: Streamlined Rate Quote / Pre-Qual Submission
app.post("/api/quote-request", (req, res) => {
  try {
    const data = req.body;
    const confirmationId = `CA-${Math.floor(100000 + Math.random() * 900000)}`;
    const submissionDate = new Date().toISOString();

    const leadRecord = {
      confirmationId,
      submissionDate,
      ...data,
      assignedOfficer: {
        name: "Jennifer Martinez",
        title: "Senior CA Mortgage Specialist",
        nmls: "NMLS #1387796",
        directPhone: "(800) 555-2256",
        email: "jmartinez@goldenstatelenders.com"
      }
    };

    leadSubmissions.push(leadRecord);

    // Calculate estimated rate & monthly payment based on input
    const price = Number(data.estimatedPrice) || 650000;
    const down = Number(data.downPaymentAmount) || (price * 0.1);
    const loanAmt = Math.max(0, price - down);
    const estRate = data.loanPurpose === 'va' ? 5.75 : data.loanPurpose === 'fha' ? 5.875 : 6.375;
    const monthlyInterestRate = (estRate / 100) / 12;
    const totalPayments = 360;
    const monthlyPI = loanAmt > 0 
      ? Math.round((loanAmt * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1))
      : 0;

    res.json({
      success: true,
      message: "Pre-qualification request received successfully!",
      confirmationId,
      leadSummary: {
        loanAmount: loanAmt,
        estimatedRate: estRate,
        estimatedPI: monthlyPI,
        estimatedTotalMonthly: Math.round(monthlyPI + (price * 0.0125 / 12) + (1200 / 12)),
        county: data.county || "Los Angeles",
        assignedOfficer: leadRecord.assignedOfficer
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message || "Failed to process quote request" });
  }
});

// API Endpoint 3: AI Mortgage Advisor powered by Gemini API
app.post("/api/ai-advisor", async (req, res) => {
  const { question, contextData } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question parameter is required" });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    // Provide intelligent fallback for California mortgage questions when API key is unconfigured
    const fallbackAnswers: Record<string, string> = {
      default: `As a California mortgage specialist, I can confirm that California has unique county-specific loan limits (up to $1,149,825 for conforming high-cost areas like LA, Orange, Bay Area, and SF). For standard conventional loans, down payments start at 3% for first-time buyers, while FHA requires 3.5% down with flexible credit terms (580+). Would you like to check county limits or calculate exact monthly payments?`
    };
    return res.json({
      answer: fallbackAnswers.default,
      source: "local-ca-mortgage-engine"
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are a licensed, friendly, and highly knowledgeable California Senior Mortgage Advisor for Golden State Lenders (NMLS #1387796).
Answer the borrower's question clearly, accurately, and concisely in 2-3 short paragraphs.
Focus on California specific mortgage guidelines (2025/2026 conforming loan limits up to $1,149,825, FHA, VA 0% down, Jumbo options, property tax ~1.25%, DSCR investor loans, bank statement non-QM loans).
Be encouraging, professional, and invite them to run calculations or request an instant rate quote.

Borrower Question: "${question}"
Context Scenario: ${JSON.stringify(contextData || {})}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      answer: response.text || "Thank you for reaching out. Please connect with our team for a personalized loan consultation.",
      source: "gemini-2.5-flash"
    });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.json({
      answer: `In California, mortgage requirements vary by county conforming limits ($766,550 standard up to $1,149,825 high-cost). For personalized advice or exact rates, please use our interactive calculator or request a custom rate quote above!`,
      source: "fallback-error"
    });
  }
});

async function startServer() {
  // Vite middleware for development vs static production
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
    console.log(`California Mortgage Lender server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
