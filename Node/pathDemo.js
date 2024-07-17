const path = require('path')

const filePath = 'D:\\Darshan University\\Data\\BSc (CS)\\Sem-3\\2024\\Code\\WT_Bsc\\Node\\first.js';

ansDirName = path.dirname(filePath);
ansBaseName = path.basename(filePath);
ansExtName = path.extname(filePath);

console.log("Directory = ",ansDirName);
console.log("BaseName = ",ansBaseName);
console.log("Ext = ",ansExtName);


ans = path.resolve('./pathDemo.js');
console.log(ans);