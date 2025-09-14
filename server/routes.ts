import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSubscriberSchema } from "@shared/schema";

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
