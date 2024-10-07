const fs = require('fs');

const books = JSON.parse(fs.readFileSync(`${__dirname}/books.json`));

// Returns a JSON response
const respond = (request, response, content, status) => {
  let body = '';
  if (content) {
    body = content;
  }

  // set status code and content
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body, 'utf8'),
  });

  // Exclude bodiless requests
  if (request.method !== 'HEAD' || status !== 204) {
    response.write(body);
  }
  response.end();
};

// returns a 404
const notFound = (request, response) => {
  const responseObj = {
    message: 'The page you are looking for was not found!',
    id: 'notFound',
  };
  const status = 404;

  const responseString = JSON.stringify(responseObj);
  return respond(request, response, responseString, status);
};

// Returns a 404 when the request is invalid
const badRequest = (request, response) => {
  const responseObj = {
    message: 'Bad Request!',
    id: 'badRequest',
  };
  const status = 400;

  const responseString = JSON.stringify(responseObj);
  return respond(request, response, responseString, status);
};

// Returns a list of the books
const getAllBooks = (request, response) => {
  const responseJson = books;

  return respond(request, response, JSON.stringify(responseJson), 200);
};

// Get all books by author

const getBooksByAuthor = (request, response) => {
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);

  if (!parsedUrl.searchParams.has('author')) {
    const jsonResponse = {
      message: 'Missing query param for author!',
      id: 'getBooksByAuthorMissingParams',
    };
    return respond(request, response, JSON.stringify(jsonResponse), 400);
  }

  const authorName = parsedUrl.searchParams.get('author');

  const bookList = books.filter(
    (book) => book.author === authorName,
  );

  return respond(request, response, JSON.stringify(bookList), 200);
};

// Get specific book from author and title
const getBook = (request, response) => {
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);

  if (!parsedUrl.searchParams.has('author') || !parsedUrl.searchParams.has('title')) {
    const jsonResponse = {
      message: 'Missing query params for either title or author!',
      id: 'getBookMissingParams',
    };
    return respond(request, response, JSON.stringify(jsonResponse), 400);
  }

  const authorName = parsedUrl.searchParams.get('author');
  const bookTitle = parsedUrl.searchParams.get('title');

  const bookList = books.filter(
    (book) => book.author === authorName && book.title === bookTitle,
  );

  return respond(request, response, JSON.stringify(bookList), 200);
};

// add a book to active list
const addBook = (request, response) => {
  const responseJSON = {
    message: 'Requires author, country, language, link, pages, title, year, and genre.',
  };

  const {
    author, country, language, link, pages, title, year, genre,
  } = request.body;

  if (!(author && country && language && link && pages && title && year && genre)) {
    responseJSON.id = 'missingParams';
    return respond(request, response, JSON.stringify(responseJSON), 400);
  }

  let status = 204;

  const newBook = {
    author,
    country,
    language,
    link,
    pages,
    title,
    year,
    genre,
  };

  if (!(books.find((book) => book.title === title))) {
    status = 201;

    books.push(newBook);
  } else {
    status = 409;
    responseJSON.message = 'Resource already exists!';
  }

  if (status === 201) {
    responseJSON.message = 'User Created Successfully!';
    return respond(request, response, JSON.stringify(responseJSON), status);
  }

  return respond(request, response, '', status);
};

module.exports = {
  notFound,
  badRequest,
  addBook,
  getAllBooks,
  getBooksByAuthor,
  getBook,
};
