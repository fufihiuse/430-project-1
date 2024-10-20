const handleResponse = async (response) => {
    const content = document.querySelector('#output');

    const obj = await response.json();
    if (obj.message) {
        content.innerHTML = `${obj.message}`;
    }
    /*
    if (obj.users) {
        console.log(obj.users);
        content.innerHTML = `${JSON.stringify(obj.users)}`;
    }
    */
};

const sendReq = async (bookForm) => {
    const action = bookForm.getAttribute('action');
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

        for (obj in formObject){
            if(formObject[obj].value)
            {

            }
        }
    }

    console.log(req);

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
