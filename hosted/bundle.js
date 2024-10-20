/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("const handleResponse = async (response) => {\r\n    const content = document.querySelector('#output');\r\n\r\n    const obj = await response.json();\r\n    if (obj.message) {\r\n        content.innerHTML = `${obj.message}`;\r\n    }\r\n    else {\r\n        content.innerHTML = `${JSON.stringify(obj)}`;\r\n    }\r\n};\r\n\r\nconst sendReq = async (bookForm) => {\r\n    let action = bookForm.getAttribute('action');\r\n    const method = bookForm.getAttribute('method');\r\n\r\n    const formObject = {\r\n        title: bookForm.querySelector('#titleField'),\r\n        author: bookForm.querySelector('#authorField'),\r\n        year: bookForm.querySelector('#yearField'),\r\n        genre: bookForm.querySelector('#genreField'),\r\n        country: bookForm.querySelector('#countryField'),\r\n        language: bookForm.querySelector('#languageField'),\r\n        link: bookForm.querySelector('#linkField'),\r\n        pages: bookForm.querySelector('#pagesField'),\r\n        rating: bookForm.querySelector('#ratingField'),\r\n    };\r\n    const req = {\r\n        method: method,\r\n        headers: {\r\n            'Content-Type': 'application/x-www-form-urlencoded',\r\n            Accept: 'application/json',\r\n        },\r\n    };\r\n\r\n    if (action === '/addBook') {\r\n        const formData = `title=${formObject['title'].value}&author=${formObject['author'].value}&year=${formObject['year'].value}&genre=${formObject['genre'].value}&country=${formObject['country'].value}&language=${formObject['language'].value}&link=${formObject['link'].value}&pages=${formObject['pages'].value}`;\r\n        req.body = formData;\r\n    }\r\n    else if (action === '/addBookRating') {\r\n        const formData = `title=${formObject['title'].value}&author=${formObject['author'].value}&rating=${formObject['rating'].value}`;\r\n        req.body = formData;\r\n    }\r\n    else {\r\n\r\n        let queryParams = \"?\"\r\n        for (obj in formObject) {\r\n            if (formObject[obj] && formObject[obj].value !== '') {\r\n                queryParams += `${obj}=${formObject[obj].value.trim()}&`;\r\n            }\r\n        }\r\n        queryParams = queryParams.slice(0, queryParams.length - 1);\r\n        action += queryParams;\r\n    }\r\n\r\n    const response = await fetch(action, req);\r\n    handleResponse(response);\r\n};\r\n\r\nconst init = () => {\r\n    const addBook = document.querySelector('#addBook');\r\n    const processAddBook = (e) => {\r\n        e.preventDefault();\r\n        sendReq(addBook);\r\n        return false;\r\n    };\r\n    addBook.addEventListener('submit', processAddBook);\r\n\r\n    const addBookRating = document.querySelector('#addBookRating');\r\n    const processAddBookRating = (e) => {\r\n        e.preventDefault();\r\n        sendReq(addBookRating);\r\n        return false;\r\n    };\r\n    addBookRating.addEventListener('submit', processAddBookRating);\r\n\r\n    const getAllBooks = document.querySelector('#getAllBooks');\r\n    const processgetAllBooks = (e) => {\r\n        e.preventDefault();\r\n        sendReq(getAllBooks);\r\n        return false;\r\n    };\r\n    getAllBooks.addEventListener('submit', processgetAllBooks);\r\n\r\n    const getBook = document.querySelector('#getBook');\r\n    const processgetBook = (e) => {\r\n        e.preventDefault();\r\n        sendReq(getBook);\r\n        return false;\r\n    };\r\n    getBook.addEventListener('submit', processgetBook);\r\n\r\n    const getBooksByAuthor = document.querySelector('#getBooksByAuthor');\r\n    const processgetBooksByAuthor = (e) => {\r\n        e.preventDefault();\r\n        sendReq(getBooksByAuthor);\r\n        return false;\r\n    };\r\n    getBooksByAuthor.addEventListener('submit', processgetBooksByAuthor);\r\n\r\n    const getBooksByYear = document.querySelector('#getBooksByYear');\r\n    const processgetBooksByYear = (e) => {\r\n        e.preventDefault();\r\n        sendReq(getBooksByYear);\r\n        return false;\r\n    };\r\n    getBooksByYear.addEventListener('submit', processgetBooksByYear);\r\n\r\n    /*\r\n    const bookForm = document.querySelector('#bookForm');\r\n    const getUser = (e) => {\r\n        e.preventDefault();\r\n        sendReq(bookForm);\r\n        return false;\r\n    };\r\n    bookForm.addEventListener('submit', getUser);\r\n    */\r\n};\r\n\r\nwindow.onload = init;\r\n\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;