const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/index.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports = {
  getIndex,
};
