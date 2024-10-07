# Endpoints:

## addBook
- type: POST
- body:
    - author
    - country
    - language
    - link
    - pages
    - title
    - year
    - genre

## getAllBooks
- type: GET
- params: none

### getBooksByAuthor
- type: GET
- params: 
    - author

## getBooksByYear
- type: GET
- params:
    - year

### getBook
- type: GET
- params:
    - author
    - title