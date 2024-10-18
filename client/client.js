const handleResponse = async (response) => {
    const content = document.querySelector('#output');

    /*
    switch (response.status) {
        case 200:
            content.innerHTML = '<b>Success</b>';
            break;
        case 201:
            content.innerHTML = '<b>Created</b>';
            break;
        case 204:
            content.innerHTML = '<b>Updated (No Content)</b>';
            return;
        case 400:
            content.innerHTML = '<b>Bad Request</b>';
            break;
        case 404:
            content.innerHTML = '<b>Page Not Found!</b>';
            break;
        default:
            content.innerHTML = 'Error code not implemented by client.';
            break;
    }
    */

    const obj = await response.json();
    if (obj.message) {
        content.innerHTML += `${obj.message}`;
    }
    if (obj.users) {
        console.log(obj.users);
        content.innerHTML += `${JSON.stringify(obj.users)}`;
    }
};

const sendReq = async (userForm) => {
    const action = userForm.getAttribute('action');
    const method = userForm.getAttribute('method');

    const formObject = {
        title: userForm.querySelector('#titleField'),
        author: userForm.querySelector('#authorField'),
        year: userForm.querySelector('#yearField'),
        genre: userForm.querySelector('#genreField'),
        country: userForm.querySelector('#countryField'),
        language: userForm.querySelector('#languageField'),
        link: userForm.querySelector('#linkField'),
        pages: userForm.querySelector('#pagesField'),
        rating: userForm.querySelector('#ratingField'),
    };

    for (let obj in formObject) {
        if (obj) {
            console.log(obj, formObject[obj].value);
        }
        else {
            console.log('Null!');
        }
    }
    return


    const req = {
        method: method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
        },
    };

    if (action === '/addBook') {
        const formData = `title=${title.value}&author=${author.value}&year=${year.value}&genre=${genre.value}&country=${country.value}&language=${language.value}&link=${link.value}&pages=${pages.value}`;
        req.body = formData;
    }
    else if (action === '/addBookRating') {
        const formData = `title=${title.value}&author=${author.value}&rating=${rating.value}`;
        req.body = formData;
    }

    const response = await fetch(nameAction, req);
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

    /*
    const userForm = document.querySelector('#userForm');
    const getUser = (e) => {
        e.preventDefault();
        sendReq(userForm);
        return false;
    };
    userForm.addEventListener('submit', getUser);
    */
};

window.onload = init;
