const http = require('http');
const query = require('querystring');

const htmlHandler = require('./htmlResponses');
const jsonHandler = require('./jsonResponses');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {

  '/': htmlHandler.getIndex,
  '/docs': htmlHandler.getDocs,
  '/style.css': htmlHandler.getCSS,
  '/bundle.js': htmlHandler.getJS,
  '/addBook': jsonHandler.addBook,
  '/getAllBooks': jsonHandler.getAllBooks,
  '/getBooksByAuthor': jsonHandler.getBooksByAuthor,
  '/getBook': jsonHandler.getBook,
  '/getBooksByYear': jsonHandler.getBooksByYear,
  '/addBookRating': jsonHandler.addBookRating,
  index: htmlHandler.getIndex,
  notFound: jsonHandler.notFound,
};

const parseBody = (request, response, handler) => {
  const body = [];

  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    request.body = query.parse(bodyString);

    handler(request, response);
  });
};

const handlePost = (request, response) => {
  const handler = urlStruct[request.parsedURL.pathname];
  if (handler) {
    parseBody(request, response, handler);
  }
};

const handleGet = (request, response) => {
  const handler = urlStruct[request.parsedURL.pathname];

  if (handler) {
    handler(request, response);
  } else {
    jsonHandler.notFound(request, response);
  }
};

const onRequest = (request, response) => {
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedURL = new URL(request.url, `${protocol}://${request.headers.host}`);
  request.parsedURL = parsedURL;
  request.query = parsedURL.searchParams;

  if (request.method === 'POST') {
    handlePost(request, response);
  } else {
    handleGet(request, response);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
