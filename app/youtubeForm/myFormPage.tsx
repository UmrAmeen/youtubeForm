import Link from "next/link";

export default function MyPage() {
  return (
    <div>
      <Link href="/youtubeForm" className="myButton" >
        youtubeForm
      </Link>

      <Link href="/youtubeForm/channelForm" className="myButton">
        youtubeChannel
      </Link>
    </div>
  );
}
