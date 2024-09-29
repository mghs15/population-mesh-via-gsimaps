
const child_process = require('child_process');
const fs = require('fs');

child_process.execSync(`echo "test-----------" >> error.log`);

const mokuroku = fs.readFileSync('./mokurokuZL12.csv', 'utf8');
const lines = mokuroku.split("\n");

lines.forEach( line => {
  const c = line.split(",");
  
  const z = +c[0];
  const x = +c[1];
  const y = +c[2];
  
  //if(z != "14") return;
  
  const url = `https://cyberjapandata.gsi.go.jp/xyz/population/${z}/${x}/${y}.geojson`;
  console.log(url);
  
  try{
    child_process.execSync(`curl "${url}" > ./dst/${z}-${x}-${y}.geojson`);
  } catch (err) {
    console.log(err);
    child_process.execSync(`"${line}" >> error.log`);
  }
  
});

