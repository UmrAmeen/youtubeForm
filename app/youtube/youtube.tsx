import Link from "next/link";

export default function Youtube({ row,channelRow }: any) {
  console.log("channelRow",channelRow)
  return (
    <div className="flex flex-col gap-2">
      <Link href={row.title}>
        <div className="relative">
          <img src={row.thumbnailUrl} className="block w-full" />
          <div className="absolute bottom-6 right-2 bg-secondary-dark text-secondary text-sm px-0.5 rounded text-red-600">
            {row.duration}
          </div>
        </div>
        <p className="text-blue-600 font-bold">{row.title}</p>
      </Link>
      <div className="flex gap-2">
        <img src={channelRow.profileUrl} className=" w-12 h-12 rounded-full" />
        <p className="text-secondary-text text-sm">{channelRow.id}</p>
      </div>
    </div>
  );
}
