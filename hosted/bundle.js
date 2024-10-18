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

eval("const handleResponse = async (response) => {\n    const content = document.querySelector('#output');\n\n    /*\n    switch (response.status) {\n        case 200:\n            content.innerHTML = '<b>Success</b>';\n            break;\n        case 201:\n            content.innerHTML = '<b>Created</b>';\n            break;\n        case 204:\n            content.innerHTML = '<b>Updated (No Content)</b>';\n            return;\n        case 400:\n            content.innerHTML = '<b>Bad Request</b>';\n            break;\n        case 404:\n            content.innerHTML = '<b>Page Not Found!</b>';\n            break;\n        default:\n            content.innerHTML = 'Error code not implemented by client.';\n            break;\n    }\n    */\n\n    const obj = await response.json();\n    if (obj.message) {\n        content.innerHTML += `${obj.message}`;\n    }\n    if (obj.users) {\n        console.log(obj.users);\n        content.innerHTML += `${JSON.stringify(obj.users)}`;\n    }\n};\n\nconst sendReq = async (userForm) => {\n    const action = userForm.getAttribute('action');\n    const method = userForm.getAttribute('method');\n\n    const formObject = {\n        title: userForm.querySelector('#titleField'),\n        author: userForm.querySelector('#authorField'),\n        year: userForm.querySelector('#yearField'),\n        genre: userForm.querySelector('#genreField'),\n        country: userForm.querySelector('#countryField'),\n        language: userForm.querySelector('#languageField'),\n        link: userForm.querySelector('#linkField'),\n        pages: userForm.querySelector('#pagesField'),\n        rating: userForm.querySelector('#ratingField'),\n    };\n\n    for (let obj in formObject) {\n        if (obj) {\n            console.log(obj, formObject[obj].value);\n        }\n        else {\n            console.log('Null!');\n        }\n    }\n    return\n\n\n    const req = {\n        method: method,\n        headers: {\n            'Content-Type': 'application/x-www-form-urlencoded',\n            Accept: 'application/json',\n        },\n    };\n\n    if (action === '/addBook') {\n        const formData = `title=${title.value}&author=${author.value}&year=${year.value}&genre=${genre.value}&country=${country.value}&language=${language.value}&link=${link.value}&pages=${pages.value}`;\n        req.body = formData;\n    }\n    else if (action === '/addBookRating') {\n        const formData = `title=${title.value}&author=${author.value}&rating=${rating.value}`;\n        req.body = formData;\n    }\n\n    const response = await fetch(nameAction, req);\n    handleResponse(response);\n};\n\nconst init = () => {\n    const addBook = document.querySelector('#addBook');\n    const processAddBook = (e) => {\n        e.preventDefault();\n        sendReq(addBook);\n        return false;\n    };\n    addBook.addEventListener('submit', processAddBook);\n\n    /*\n    const userForm = document.querySelector('#userForm');\n    const getUser = (e) => {\n        e.preventDefault();\n        sendReq(userForm);\n        return false;\n    };\n    userForm.addEventListener('submit', getUser);\n    */\n};\n\nwindow.onload = init;\n\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/client.js?");

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