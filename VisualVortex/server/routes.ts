import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, projectType, message } = req.body;
      
      // Validate request
      if (!name || !email || !projectType || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // In a real application, we would store the message in a database
      // or send an email notification
      
      // For now, just return success response
      res.status(200).json({ message: 'Message received! We will contact you soon.' });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      res.status(500).json({ message: 'Failed to process your request. Please try again later.' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
