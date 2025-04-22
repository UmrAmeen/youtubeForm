import db from "../lib/sqlite/db";
import MyFormPage from "./youtubeForm";

export default function YoutubeForm() {
  const rows = db.prepare("SELECT * FROM channel").all()
  return (
    <>
      <MyFormPage rows={rows}/>
    </>
  );
}
