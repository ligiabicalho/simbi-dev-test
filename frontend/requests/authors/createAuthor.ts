'use server'

import { Author } from "@/declarations";
import { env } from "@/common/config/env";

interface AddAuthorParams {
  firstName: string;
  lastName: string;
}

export const createAuthor = async (authorData: AddAuthorParams): Promise<Author | undefined> => {
  try {
    const response = await fetch(`${env.API_URL}/api/authors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authorData),
    });
    if (!response.ok) {
      throw new Error("Failed to create author", { cause: response.statusText });
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating author:", error);
    throw new Error("Failed to create author", { cause: error });
  } 
}
