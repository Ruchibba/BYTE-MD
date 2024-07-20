
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "94724902061";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElXTDdyK0V4RVlSb3ZyakptcHc3SVBxTmNlckNJOXJhY1dyc1ZtejRXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDV1bmJHa3ljWHM3WjNOZEJjVjhnZ2tuZlBpK041dC9GQ2pCZlN6L0YyRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSytNSTcra0MzaDFWSmYyS1dFdjRUQ1RPSitsYWVzbEpGTWpuT2VUdW53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjZTlxUWpzaG8rQmNvRS9qTGtnVzJxNjVBcGk5ZnBhdElNN2dnS0Zqb2trPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJN0RrYThnVWZnVEtueEhWa3U0WDFZZEVnVzM5M2FoUDNyTi9sckdJV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhxWmZLM1hGUURNU1ArZFdlcmFQUG1nZHZJNTZnWGI2ak1vYVd6UVdFaFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZwelFDYU5KWGk3RFYwWVpHdnJYMG4vR2wvSG56MTdJb1RIV2ZqazhXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0JmVnpPNWc0NVVxMDdsalljTTlSY0FhQXJua1NYUXFFc1YzcmJJcTNCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpDaEZqVHBxUDlGTll3TlBYdWhZeCtlTXhzS3JlZjJEV0pXaE10dEtLSE52d3B6NFdianQvUExSczkyVjROdnJQMnpxT1FzbGRLNmE5d0JNalRYYmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6Inp1WjR4c24xbTJjM2NJODQvT3ZCd293aVhYZjRFc3dMYUxxdXB1bE0ybHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndVbnhFS29IUktlQmxNV3JKdFhkVVEiLCJwaG9uZUlkIjoiNTM2ODZmZmEtYzk1Zi00NWYyLWIwOGMtOTQzNzczZWEyNDI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFVNWhKNWpnLzhaTlY5dWlSSEJmY1FBUGxGOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSDl4VDZTckZNVURLM3p5L2lmSkxVS1AxY1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTE04TlJFMkciLCJtZSI6eyJpZCI6Ijk0NzYyNzg1NTM1OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifl/wnZiP8J2YovCdmK3wnZinIPCdmIvwnZim8J2Yt/CdmKrwnZitX35cblxu8J2QkiBcbvCdkJNcbvCdkIRcbvCdkJNcbvCdkJRcbvCdkJJcblxuXG7wnZCQXG7wnZCUXG7wnZCEXG7wnZCEXG7wnZCNXG5cblxu8J2QkVxu8J2QlFxu8J2Qglxu8J2Qh1xu8J2QiFxuXG5cblxuXG5+X19fX1/wnZiM8J2YlfCdmItfX19fX34ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05YSjRwd0VFSktJN2JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlN3QTREbGRFVUdnZ3RoWm1aTjhxT1hnM2lXbjR3MWQ3V1hmNkZ3V2VuUzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxybmNXMFVZT1g3MUF3RTB2ajU3dzdUNjBMWVVsUiszTksyOVZyN2ZmS2ZENUpNVW1jQXFhTitRVmhQSHpJQzFtamZsY1hnU1F4R2Z2b1ppN09QY0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUU2gybWdCYjR3MmNXQ1JsUEpwYUs1dklCdDdSd0k4NVZZUzJ3Sk12MXFiekVrNisxdmozaGRHWnlLY3l1S0lwTWgvTXR3aHdwYUZsOHJDZFdkSFdnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYyNzg1NTM1OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXNBT0E1WFJGQm9JTFlXWm1UZktqbDRONGxwK01OWGUxbDMraGNGbnAwdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTQ1MTU1MX0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Queen Ruchi*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "QUEEN RUCHI-MD",
  ownername: process.env.OWNER_NAME || "QUEEN RUCHI",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
