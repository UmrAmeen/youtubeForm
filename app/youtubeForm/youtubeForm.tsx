"use client";
import { useActionState, useState } from "react";
import Link from "next/link";
import { createYoutubeForm } from "../youtubeAction";

export default function MyFormPage({ rows }: any) {
  const [state, formAction, isPending] = useActionState(createYoutubeForm, {
    success: false,
    error: "",
  });
  
  return (
    <div>
      {state.success ? <div>Success</div> : <div>{state.error}</div>}
      <form className="myFormPage">
        <label>
          channel:
          <select>
            {rows.map((row) => (
              <option key={row.id} value="channel">
                {row.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          title:
          <input name="title" placeholder="title" />
        </label>

        <label>
          views:
          <input name="views" placeholder="views" />
        </label>
        <label>
          postedAt
          <input name="postedAt" />
        </label>
        <label>
          thumbnailUrl:
          <input name="thumbnailUrl" placeholder=" thumbnailUrl" />
        </label>
        <label>
          videoUrl :
          <input name="videoUrl" placeholder="videoUrl" />
        </label>
        <button
          type="submit"
          className="submitButton"
          disabled={isPending}
          formAction={formAction}
        >
          submit
        </button>
      </form>
      <Link href="/youtubeForm/channelForm">
        <button className="myButton">channelForm</button>
      </Link>
    </div>
  );
}
