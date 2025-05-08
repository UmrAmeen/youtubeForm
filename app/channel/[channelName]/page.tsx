import db from "@/app/lib/sqlite/db";
import YoutubeChannel from "./youtubeChannel";

export default async function ChannelName({ params }: { params: any }) {
  const youtubeRows = db.prepare("SELECT * FROM youtubeData").all();
  const channelRows = db.prepare("SELECT * FROM channel").all();
  const p = await params;
  const channelId = await p.channelName;

  const filteredList = youtubeRows.filter((row) => {
    return row.channel === channelId
  });
  console.log("filterid", filteredList);

  const channel = channelRows.find((row) => {
    return row.id === channelId;
  });
  if (channel?.id === undefined) {
    return <p>no id</p>;
  }

  const youtube = youtubeRows.find((row) => {
    return row.channel === channelId;
  });
  if (youtube?.channel === undefined) {
    return <p>no channelId</p>;
  }
  // console.log("youtube", youtube);
  // console.log("channel", channel);

  return (
    <>
      {filteredList.map((row) => (
        <div
          key={row.id}
          className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]"
        >
          <YoutubeChannel youtube={youtube} channel={channel} />
        </div>
      ))}
    </>
  );
}
