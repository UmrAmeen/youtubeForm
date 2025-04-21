"use client";

import { createChannel } from "@/app/actions";
import { videos } from "@/app/data/data";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function ChannelForm() {
  const [state, formAction, isPending] = useActionState(createChannel, {
    success: false,
    error: "",
  });
  const [name, setName] = useState("");

  console.log("state", state);
  // function onSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  // }

  return (
    <>
      {state.success ? <div>Success</div> : <div>{state.error}</div>}
      <form className="channelForm">
        <label>
          channel :
          <select>
            {videos.map((video) => (
              <option key={video.id}>{video.channel.name}</option>
            ))}
          </select>
        </label>
        <label>
          name:
          <input
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button
          disabled={isPending}
          type="submit"
          className="submitButton"
          formAction={formAction}
        >
          submit
        </button>
      </form>
      <Link href="/youtubeForm">
        <button className="myButton">youtubeForm</button>
      </Link>
    </>
  );
}
