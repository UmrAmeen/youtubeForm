"use client";

import { createChannel } from "@/app/actions";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function Channel({ rows }: any) {
  const [state, formAction, isPending] = useActionState(createChannel, {
    success: false,
    error: "",
  });

  // console.log("state", state);
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
            {rows.map((row) => (
              <option key={row.id}>{row.name}</option>
            ))}
          </select>
        </label>
        <label>
          name:
          <input name="name" placeholder="name" />
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
