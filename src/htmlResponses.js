const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/index.html`);
const docs = fs.readFileSync(`${__dirname}/../hosted/docs.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/output.css`);

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

module.exports = {
  getIndex,
  getDocs,
  getCSS,
};
