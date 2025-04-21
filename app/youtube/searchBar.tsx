"use client";
import { useState } from "react";
import Youtube from "./youtube";

export default function SearchBar({ rows }: any) {
  const [search, setSearch] = useState("");
  const filteredList = rows.filter((row) =>
    row.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log("row", rows);
  // console.log(filteredList);
  return (
    <div>
      <form>
        <input
          className="inputBox"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </form>

      {filteredList.map((row) => (
        <div
          key={row.id}
          className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]"
        >
          <Youtube row={row} />
        </div>
      ))}
    </div>
  );
}
