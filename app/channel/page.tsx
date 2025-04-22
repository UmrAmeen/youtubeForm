import db from "../lib/sqlite/db";
import Channel from "./channel";

export default function ChannelForm() {
  const rows = db.prepare("SELECT * FROM channel").all()
  // console.log("channelRow", rows)
  return (
    <>
      <Channel rows={rows}/>
    </>
  );
}
