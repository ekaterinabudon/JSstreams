const fs = require('fs');
let txtReader = fs.createReadStream('myTxt.txt', { highWaterMark: 1});
let buf = '';
txtReader.on('data', chunk => buf= buf + (+chunk + 1).toString());
txtReader.on('end', () => fs.createWriteStream('myTxt.txt').write(buf));
