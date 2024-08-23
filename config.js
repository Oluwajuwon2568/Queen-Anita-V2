//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347054694742";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5nY2dWQVhnQ21YanZCblRNR1haMTkrNzNwSEo2VVVuaVZScTNmOVZHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVytPaWtVckw3S3FLa1ZvQWZNMnlhK2tPdW4ycHA4YmdJRm1TL0RYVzBVZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QlVVWkdVY3Z2YWUzVEhFYlBtMlhwUjYwVmNUbVA2cy9COG9DRkM5NFZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMSXpWcWlmMmVlQitMSE5nOXd1NkJWZjhUSkxOckVEWUl6KzVTVVR2b2trPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9FY3lLNEMrV2ZxWjdScURtb2N1aVkra3F1c0Q1L0JxUzNYa1dDYndmV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNjR3RaVnN2UmhzWnBsaFRaMThiWXplNWtibW1ERHVIMGRXY3lna3Mvdzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUc4elBuMzJuL21PWlhobmZmVkk3WFBCVmRpRHZTV25zRkFIT2UrM0pGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3ZXRVIxNFhwN2tDWk1sMldyVWg2UCtRcnNhSUovcGpNb2ZBSXYrV0VXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpJdCt3WVU3d1I5QWZPb1hKYkZiZ2FQaGxiUzJ0V2s5VUJWaDFFVEtWWllteVlXU1BoWWJVcm9iZnp0cjFySkhIemNTbngvMVlFVnpVcldhYjVQOWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJmanU5S3F2b3k3aGp2MDFLQ3pSVGlMTlltNGtTZlFzRitLVFVFaHFKR2xNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNTQ2OTQ3NDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkNEMkNFNEVDOTlDMDZBMzk5RDIwQ0Q3OTREM0YwNEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDEzMDQxMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA1NDY5NDc0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3RDA5MzJEOUMyNkI4MDY1N0REOUIyMDdGOTU4MkI0OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MTMwNDEzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuSGxTbHotNFJIbUw3WGRYMW1JZG5BIiwicGhvbmVJZCI6IjgzMzY0YjFkLWNkMGItNGNhMi04NTY2LThlNzVjNGE3ZWI5MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVenhUSVNncTQyTnhRb1RLWTNYVjVvN0w5N2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXZMK01tSWtMN2JUejVNek1SY1FCdHNnT0Y0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilk2TE5HTTRTIiwibWUiOnsiaWQiOiIyMzQ3MDU0Njk0NzQyOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGF2bWljaCDwn6eR4oCN8J+Su/CfkrsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTRXpjSUhFTjdJa0xZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNLMGxBMlZwWlM4YWU3alpjaVhTWXVMajVBQUI3ei91TlJzZmVDTEN2R1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkkzMXprYWdFNzl6QW5qWUJwSGdPWDNZbWxlODNtVWhmL25SOGxCL0daall6WjN2a2pBMjVlK1g4Z1g2cjk5SVRoRDN2Y1ovOThsSlN0dHR1VEFvMkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlMVEyWDZ1cWM4K0I5a2J6cHdUdGMyUjdqTFNrTitkclQwTWdaMzhOdGp3RUowQ3FqNUxOV1JhQUdlZVJLUUZDRG83bVh6Y1ZRRmJldUdwZm1tRjZqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNTQ2OTQ3NDI6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYQ3RKUU5sYVdVdkdudTQyWElsMG1MaTQrUUFBZTgvN2pVYkgzZ2l3cnhtIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MTMwNDExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUI3cCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
