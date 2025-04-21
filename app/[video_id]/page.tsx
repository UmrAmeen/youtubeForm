import { videos } from "@/app/data/data";

export default async function Page({ params }: { params: any }) {
  const p = await params;
  const youtubeId = await p.video_id;
  const youtube = videos.find((video) => {
    return video.id === youtubeId;
  });
  if (youtube?.id === undefined) {
    return <p>not found</p>;
  }
  // console.log("youtube", youtube);
  return (
    <div>
      <iframe src={youtube.videoUrl} />
      <p className="text-blue-600 font-bold">{youtube.title}</p>
      <div className="flex gap-2">
        <img
          src={youtube.channel.profileUrl}
          className=" w-12 h-12 rounded-full"
        />
        <p className="text-secondary-text text-sm">{youtube.channel.name}</p>
      </div>
    </div>
  );
}
