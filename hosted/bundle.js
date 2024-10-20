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

eval("const handleResponse = async (response) => {\n    const content = document.querySelector('#output');\n\n    const obj = await response.json();\n    if (obj.message) {\n        content.innerHTML = `${obj.message}`;\n    }\n    /*\n    if (obj.users) {\n        console.log(obj.users);\n        content.innerHTML = `${JSON.stringify(obj.users)}`;\n    }\n    */\n};\n\nconst sendReq = async (bookForm) => {\n    const action = bookForm.getAttribute('action');\n    const method = bookForm.getAttribute('method');\n\n    const formObject = {\n        title: bookForm.querySelector('#titleField'),\n        author: bookForm.querySelector('#authorField'),\n        year: bookForm.querySelector('#yearField'),\n        genre: bookForm.querySelector('#genreField'),\n        country: bookForm.querySelector('#countryField'),\n        language: bookForm.querySelector('#languageField'),\n        link: bookForm.querySelector('#linkField'),\n        pages: bookForm.querySelector('#pagesField'),\n        rating: bookForm.querySelector('#ratingField'),\n    };\n    const req = {\n        method: method,\n        headers: {\n            'Content-Type': 'application/x-www-form-urlencoded',\n            Accept: 'application/json',\n        },\n    };\n\n    if (action === '/addBook') {\n        const formData = `title=${formObject['title'].value}&author=${formObject['author'].value}&year=${formObject['year'].value}&genre=${formObject['genre'].value}&country=${formObject['country'].value}&language=${formObject['language'].value}&link=${formObject['link'].value}&pages=${formObject['pages'].value}`;\n        req.body = formData;\n    }\n    else if (action === '/addBookRating') {\n        const formData = `title=${formObject['title'].value}&author=${formObject['author'].value}&rating=${formObject['rating'].value}`;\n        req.body = formData;\n    }\n    else {\n\n        for (obj in formObject){\n            if(formObject[obj].value)\n            {\n\n            }\n        }\n    }\n\n    console.log(req);\n\n    const response = await fetch(action, req);\n    handleResponse(response);\n};\n\nconst init = () => {\n    const addBook = document.querySelector('#addBook');\n    const processAddBook = (e) => {\n        e.preventDefault();\n        sendReq(addBook);\n        return false;\n    };\n    addBook.addEventListener('submit', processAddBook);\n\n    const addBookRating = document.querySelector('#addBookRating');\n    const processAddBookRating = (e) => {\n        e.preventDefault();\n        sendReq(addBookRating);\n        return false;\n    };\n    addBookRating.addEventListener('submit', processAddBookRating);\n\n    const getAllBooks = document.querySelector('#getAllBooks');\n    const processgetAllBooks = (e) => {\n        e.preventDefault();\n        sendReq(getAllBooks);\n        return false;\n    };\n    getAllBooks.addEventListener('submit', processgetAllBooks);\n\n    /*\n    const bookForm = document.querySelector('#bookForm');\n    const getUser = (e) => {\n        e.preventDefault();\n        sendReq(bookForm);\n        return false;\n    };\n    bookForm.addEventListener('submit', getUser);\n    */\n};\n\nwindow.onload = init;\n\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/client.js?");

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