import {
  type User,
  type InsertUser,
  type EmailSubscriber,
  type InsertEmailSubscriber,
} from "@shared/schema";
import { createServerSupabaseClient } from "@root-lib/supabase-server";

// Supabase storage implementation
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getEmailSubscriberByEmail(
    email: string
  ): Promise<EmailSubscriber | undefined>;
  createEmailSubscriber(
    subscriber: InsertEmailSubscriber
  ): Promise<EmailSubscriber>;
}

export class SupabaseStorage implements IStorage {
  private supabase = createServerSupabaseClient();

  async getUser(id: string): Promise<User | undefined> {
    const { data, error } = await this.supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("Error fetching user:", error);
      return undefined;
    }
    return data as User | undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const { data, error } = await this.supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .maybeSingle();

    if (error) {
      console.error("Error fetching user by username:", error);
      return undefined;
    }
    return data as User | undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const { data, error } = await this.supabase
      .from("users")
      .insert(insertUser)
      .select()
      .single();

    if (error) {
      console.error("Error creating user:", error);
      throw error;
    }
    return data as User;
  }

  async getEmailSubscriberByEmail(
    email: string
  ): Promise<EmailSubscriber | undefined> {
    const { data, error } = await this.supabase
      .from("email_subscribers")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    if (error) {
      console.error("Error fetching email subscriber:", error);
      return undefined;
    }
    return data as EmailSubscriber | undefined;
  }

  async createEmailSubscriber(
    subscriber: InsertEmailSubscriber
  ): Promise<EmailSubscriber> {
    const { data, error } = await this.supabase
      .from("email_subscribers")
      .insert(subscriber)
      .select()
      .single();

    if (error) {
      console.error("Error creating email subscriber:", error);
      throw error;
    }
    return data as EmailSubscriber;
  }
}

export const storage = new SupabaseStorage();
