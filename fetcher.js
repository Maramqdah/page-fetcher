const request = require('request');
console.log(process.argv);
let path= process.argv.slice(2);


function download(path) {
  var element = document.createElement('a');
  element.setAttribute('href', path);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

