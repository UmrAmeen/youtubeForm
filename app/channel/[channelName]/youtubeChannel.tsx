export default function YoutubeChannel({youtube,channel}:any) {
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
