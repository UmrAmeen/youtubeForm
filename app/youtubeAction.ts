"use server";

import db from "./lib/sqlite/db";

export async function createYoutubeForm(
  prevFormState: any,
  formData: FormData
) {
  const id = formData.get("id");
  const title = formData.get("title") as string;
  const channel = formData.get("channel");
  const views = formData.get("views");
  const postedAt = formData.get("postedAt");
  const thumbnailUrl = formData.get("thumbnailUrl");
  const videoUrl = formData.get("videoUrl");
  console.log("channel",channel)
  // const data = db
  //   .prepare("SELECT * FROM youtubeData WHERE title = ?")
  //   .get(title);
  // console.log("data", data);

  const insert = db.prepare(
    "INSERT INTO youtubeData(id, title,channel, views, postedAt,thumbnailUrl,videoUrl) VALUES(?, ? ,?,?,?,?,?)"
  );

  const result = insert.run(
    id,
    title,
    channel,
    views,
    postedAt,
    thumbnailUrl,
    videoUrl
  );

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
}
