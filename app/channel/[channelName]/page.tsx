import db from "@/app/lib/sqlite/db";


export default async function ChannelName({ params }: { params: any }) {
  const youtubeRow = db.prepare("SELECT * FROM youtubeData").all();
  const rows = db.prepare("SELECT * FROM channel").all();
  const p = await params;
  const channelId = await p.channelName;
  const channel = rows.find((row) => {
    return row.id === channelId;
  });
  if (channel?.id === undefined) {
    return <p>not found</p>;
  }
  const youtube =youtubeRow.find((row)=>{
    return row.channel === channelId
  })
  console.log("youtube",youtube)
  // console.log("channel", channel);
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        {youtube.thumbnailUrl ? (
          <img src={youtube.thumbnailUrl} className="block w-full" />
        ) : (
          ""
        )}

        <div className="absolute bottom-6 right-2 bg-secondary-dark text-secondary text-sm px-0.5 rounded text-red-600">
        {youtube.duration}
        </div>
      </div>
      <p className="text-blue-600 font-bold">{youtube.title}</p>

      <div className="flex gap-2">
        <img src={channel.profileUrl} className=" w-12 h-12 rounded-full" />
        <p className="text-secondary-text text-sm">{channel.id}</p>
      </div>
    </div>
  );
}
