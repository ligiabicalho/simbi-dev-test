"use server"

import { Author } from "@/declarations";
import { env } from "@/common/config/env";

export const getAuthors = async (): Promise<Author[] | undefined> => {
  try {
    const response = await fetch(`${env.API_URL}/api/authors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (!response.ok) {
      throw new Error("Failed to get authors", { cause: response.statusText });
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting authors:", error);
  } 
}
