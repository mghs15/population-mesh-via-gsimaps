
const child_process = require('child_process');
const fs = require('fs');

const tipp = `tippecanoe -l population`
           //+ " -e" + ` ./tile`
           + " -o" + ` ./population-points.pmtiles`
           + ` ./data/population-points.ndjson`
           + ' --force'
           //+ ' --include=pref'
           //+ ' --include=muni'
           //+ " --coalesce" + " --reorder" + " --hilbert"
           + " --no-simplification-of-shared-nodes"
           + ' --no-tile-size-limit' 
           + ' --no-tile-compression'
           + ' --no-feature-limit'
           + ' --minimum-zoom=6'
           + ' --maximum-zoom=10'
           + ' --base-zoom=10'
           + ' --simplification=2' 
           + ' --cluster-distance=5 --cluster-maxzoom=9'
           + ' --accumulate-attribute=population:sum'

console.log(tipp);
child_process.execSync(`${tipp}`);

/*
const tipp2 = `tippecanoe -l population`
           //+ " -e" + ` ./tile2`
           + " -o" + ` ./population-polygon.pmtiles`
           + ` ./data/population-polygon.ndjson`
           + ' --force'
           //+ ' --include=pref'
           //+ ' --include=muni'
           + " --coalesce" + " --reorder" + " --hilbert"
           + " --no-simplification-of-shared-nodes"
           + ' --no-tile-size-limit' 
           + ' --no-tile-compression'
           + ' --no-feature-limit'
           + ' --minimum-zoom=14'
           + ' --maximum-zoom=14'
           + ' --base-zoom=14'
           + ' --simplification=2'

console.log(tipp2);
child_process.execSync(`${tipp2}`);
*/
