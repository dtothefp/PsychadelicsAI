import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSubscriberSchema } from "@shared/schema";
import { sendEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const result = insertEmailSubscriberSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid email format" 
        });
      }

      const { email } = result.data;

      // Check if email already exists
      const existingSubscriber = await storage.getEmailSubscriberByEmail(email);
      if (existingSubscriber) {
        return res.json({ 
          success: true, 
          message: "Email already subscribed" 
        });
      }

      // Store the email subscription
      await storage.createEmailSubscriber({ email });

      // Send welcome email (optional - you can customize this)
      await sendEmail({
        to: email,
        from: "welcome@psychadelics.ai", // Update with your verified sender
        subject: "Welcome to psychadelics.ai",
        text: "Thank you for joining our journey into the future of consciousness exploration.",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2c3e50;">Welcome to psychadelics.ai</h1>
            <p>Thank you for joining our journey into the future of consciousness exploration.</p>
            <p>Stay tuned for updates on our revolutionary AI-powered platform.</p>
          </div>
        `
      });

      res.json({ 
        success: true, 
        message: "Successfully subscribed" 
      });

    } catch (error) {
      console.error("Subscription error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
