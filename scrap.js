
const child_process = require('child_process');
const fs = require('fs');

const files = fs.readdirSync('./dst');

files.forEach( file => {

  const text = fs.readFileSync(`./dst/${file}`, 'utf8');
  let res = "";
  let json;
  
  try {
    json = JSON.parse(text);
  } catch (exceptionVar) {
    //console.log(`ERROR: ${file}`);
    //console.log(exceptionVar);
  }
  
  if(!json) return;
  
  console.log(file);
  
  json.features.forEach( f => {

    // 全て１つのポリゴンと仮定
    const poly = f.geometry.coordinates[0];
    //console.log(poly);
    
    const point = { 
      "type": "Feature", 
      "geometry": {
        "type": "Point",
        "coordinates": [
          (poly[0][0]+poly[1][0]+poly[2][0]+poly[3][0])/4,
          (poly[0][1]+poly[1][1]+poly[2][1]+poly[3][1])/4
        ] 
      }, 
      "properties": {
        "population": f.properties["人口（人）"]
      }
    };
    
    const s = JSON.stringify(point) + "\n";
    res += s;
  });
  
  fs.appendFileSync(`./data/population-points.ndjson`, res, (e) => {
    if(e){
      console.log(`Write ERROR (${file})`);
      console.error(e);
    }
  });
    
});





