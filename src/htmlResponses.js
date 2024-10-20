const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/index.html`);
const docs = fs.readFileSync(`${__dirname}/../hosted/docs.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/output.css`);
const js = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getDocs = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(docs);
  response.end();
};

const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

const getJS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(js);
  response.end();
};

module.exports = {
  getIndex,
  getDocs,
  getCSS,
  getJS,
};
