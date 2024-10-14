/** @format */

const express = require("express");

const app = express();
const port = process.env.PORT || 443;

app.get("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=/home"/>');
});

app.get("/home", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://discord.gg/1st-952570101784281139"/>`
  );
});

app.get("/painfuego", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://github.com/painfueg0"/>`
  );
});

app.get("/flame", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://github.com/flame3301"/>`
  );
});

app.get("/cloud", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://github.com/cloud9here"/>`
  );
});

app.get("/minecraft", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://discord.gg/horizion"/>`
  );
});

app.get("/tutorial", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://youtu.be/6u8ejTFytNY"/>`
  );
});

app.get("/reddit", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://www.reddit.com/r/Codesforfun/"/>`
  );
});

app.get("/fuego", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://discord.com/application-directory/1050423676689985606"/>`
  );
});

app.get("/flare", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://discord.com/application-directory/1032300215664914523"/>`
  );
});

app.get("/carli", (req, res) => {
  res.send(
    `<meta http-equiv="refresh" content="0; URL=https://github.com/MoonCarli"/>`
  );
});

app.listen(port, () => {
  console.log(`Loaded Web server | Port : (${port})`, "success");
});
