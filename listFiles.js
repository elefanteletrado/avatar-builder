const fs = require('fs').promises;
const path = require('path');

async function walk(dir, fileList = []) {
  const files = await fs.readdir(dir);
  for (const file of files) {
    const stat = await fs.stat(path.join(dir, file));
    if (stat.isDirectory())
      fileList = await walk(path.join(dir, file), fileList);
    else
      fileList.push(path.join(dir, file));
  }
  return fileList;
}

walk('./src/assets/parts/').then((res) => {
  let i = 0;
  for (const resource of res) {
    let filePath = resource.replace('src\\assets\\parts\\', '');

    let typeFolderBarIndex = filePath.indexOf('\\');
    if(typeFolderBarIndex > 0) {
      let typeFolder = filePath.substr(0, typeFolderBarIndex);
      let fileName = filePath.substr(typeFolderBarIndex+1);

      //console.log(typeFolder, fileName);

      let cmdstring = "{ id: " + i + ", enabled: true, name: '', type: AvatarPartType." + typeFolder + ", imageFile: '" + fileName + "', x: 0, y: 0, z: 0 },";
      console.log(cmdstring);

      i++;
    }
  }
});
