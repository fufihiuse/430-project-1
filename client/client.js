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
        title: userForm.querySelector('#titleField').value,
        author: userForm.querySelector('#authorField').value,
        year: userForm.querySelector('#yearField').value,
        genre: userForm.querySelector('#genreField').value,
        country: userForm.querySelector('#countryField').value,
        language: userForm.querySelector('#languageField').value,
        link: userForm.querySelector('#linkField').value,
        pages: userForm.querySelector('#pagesField').value,
        rating: userForm.querySelector('#ratingField').value,
    };

    for (let obj in formObject) {
        if (obj) {
            console.log(obj, formObject[obj]);
        }
        else {
            console.log("Null!")
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



    if (nameMethod.toUpperCase() === 'POST') {
        const formData = `name=${name.value}&age=${age.value}`;
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
