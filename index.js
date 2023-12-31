const fs = require('fs');

const currentName = 'newFile.txt';
const newName = 'renamedFile.txt';

fs.rename(currentName, newName, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File renamed successfully!');
});

const my_module = require('./mymodule');

my_module.sayHello();
// const fs = require('fs');
const fileName = 'newFile.txt';

fs.unlink(fileName, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted successfully!');
});
