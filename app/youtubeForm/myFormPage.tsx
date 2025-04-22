import Link from "next/link";

export default function MyPage() {
  return (
    <div>
      <Link href="/youtubeForm" className="myButton" >
        youtubeForm
      </Link>

      <Link href="/channel" className="myButton">
        youtubeChannel
      </Link>
    </div>
  );
}
