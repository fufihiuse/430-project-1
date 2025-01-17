const handleResponse = async (response) => {
    const content = document.querySelector('#output');

    const obj = await response.json();
    if (obj.message) {
        content.innerHTML = `${obj.message}`;
    }
    else {
        content.innerHTML = `${JSON.stringify(obj)}`;
    }
};

const sendReq = async (bookForm) => {
    let action = bookForm.getAttribute('action');
    const method = bookForm.getAttribute('method');

    const formObject = {
        title: bookForm.querySelector('#titleField'),
        author: bookForm.querySelector('#authorField'),
        year: bookForm.querySelector('#yearField'),
        genre: bookForm.querySelector('#genreField'),
        country: bookForm.querySelector('#countryField'),
        language: bookForm.querySelector('#languageField'),
        link: bookForm.querySelector('#linkField'),
        pages: bookForm.querySelector('#pagesField'),
        rating: bookForm.querySelector('#ratingField'),
    };
    const req = {
        method: method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
        },
    };

    if (action === '/addBook') {
        const formData = `title=${formObject['title'].value}&author=${formObject['author'].value}&year=${formObject['year'].value}&genre=${formObject['genre'].value}&country=${formObject['country'].value}&language=${formObject['language'].value}&link=${formObject['link'].value}&pages=${formObject['pages'].value}`;
        req.body = formData;
    }
    else if (action === '/addBookRating') {
        const formData = `title=${formObject['title'].value}&author=${formObject['author'].value}&rating=${formObject['rating'].value}`;
        req.body = formData;
    }
    else {

        let queryParams = "?"
        for (obj in formObject) {
            if (formObject[obj] && formObject[obj].value !== '') {
                queryParams += `${obj}=${formObject[obj].value.trim()}&`;
            }
        }
        queryParams = queryParams.slice(0, queryParams.length - 1);
        action += queryParams;
    }

    const response = await fetch(action, req);
    handleResponse(response);
};

const init = () => {
    const addBook = document.querySelector('#addBook');
    const processAddBook = (e) => {
        e.preventDefault();
        sendReq(addBook);
        return false;
    };
    addBook.addEventListener('submit', processAddBook);

    const addBookRating = document.querySelector('#addBookRating');
    const processAddBookRating = (e) => {
        e.preventDefault();
        sendReq(addBookRating);
        return false;
    };
    addBookRating.addEventListener('submit', processAddBookRating);

    const getAllBooks = document.querySelector('#getAllBooks');
    const processgetAllBooks = (e) => {
        e.preventDefault();
        sendReq(getAllBooks);
        return false;
    };
    getAllBooks.addEventListener('submit', processgetAllBooks);

    const getBook = document.querySelector('#getBook');
    const processgetBook = (e) => {
        e.preventDefault();
        sendReq(getBook);
        return false;
    };
    getBook.addEventListener('submit', processgetBook);

    const getBooksByAuthor = document.querySelector('#getBooksByAuthor');
    const processgetBooksByAuthor = (e) => {
        e.preventDefault();
        sendReq(getBooksByAuthor);
        return false;
    };
    getBooksByAuthor.addEventListener('submit', processgetBooksByAuthor);

    const getBooksByYear = document.querySelector('#getBooksByYear');
    const processgetBooksByYear = (e) => {
        e.preventDefault();
        sendReq(getBooksByYear);
        return false;
    };
    getBooksByYear.addEventListener('submit', processgetBooksByYear);

    /*
    const bookForm = document.querySelector('#bookForm');
    const getUser = (e) => {
        e.preventDefault();
        sendReq(bookForm);
        return false;
    };
    bookForm.addEventListener('submit', getUser);
    */
};

window.onload = init;
