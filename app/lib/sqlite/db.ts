import Database from "better-sqlite3";
const db = new Database("C:\\Users\\TECH VIEW\\youtubeData.db");
db.pragma("journal_mode = WAL");

export default db;
