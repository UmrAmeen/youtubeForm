import SearchBar from "./youtube/searchBar";
import MyPage from "./youtubeForm/myFormPage";
import db from "./lib/sqlite/db";

export default function Home() {
   const rows = db.prepare("SELECT * FROM youtubeData").all()
   const channelRow = db.prepare("SELECT * FROM channel").all()
    // console.log("rows", rows)
    
  return (
    <div>
      <MyPage  />
      <SearchBar rows={rows} channelRow={channelRow}/>
    </div>
  );
}
