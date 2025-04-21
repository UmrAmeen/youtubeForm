"use server";

import db from "./lib/sqlite/db";

export async function createChannel(prevFormState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    console.log("name", name);

    const data = db.prepare("SELECT * FROM channel WHERE name = ?").get(name);
    console.log("data", data);
    if (data) {
      throw new Error("channel name is already taken");
    }

    const insert = db.prepare("INSERT INTO channel(id, name) VALUES(?, ?)");

    const result = insert.run("100", name);

    if (result.lastInsertRowid) {
      return {
        success: true,
        error: "",
      };
    }
    return {
      success: false,
      error: "Something went wrong!",
    };
  } catch (error) {
    console.log("error", error);

    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    } else {
      return {
        success: false,
        error: error,
      };
    }
  }
}


