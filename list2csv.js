const fs = require("fs");
const readline = require('readline');

const rs = fs.createReadStream('./mokuroku.csv');
const ws = fs.createWriteStream('./_points.csv');
const rl = readline.createInterface({input: rs, output: ws});

// config
const tz = 12; // target zoom level

rl.on('line', (line) => {

  if(!line || line=="") return;
  
  const csv = line.split(",");
  
  const path = csv[0].split("/");
  const z = +path[0];
  
  if(z != tz) return;
  
  const x = +path[1];
  const y = +path[2].split(/\./)[0]; // remove extension
  
  const size = +csv[2];
  
  const s = `${z},${x},${y},${size}\n`;
  ws.write(s);
  
});

rl.on('close', () => {
  console.log("END");
});