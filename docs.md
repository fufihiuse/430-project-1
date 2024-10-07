# Endpoints:

## /addBook
- method: POST
- body params (all required):
    - author
    - country
    - language
    - link
    - pages
    - title
    - year
    - genre

## /addBookRating
- method: POST
- body params (all required):
    - author
    - title
    - rating

## /getAllBooks
- method: GET
- query params: 
    - N/A

### /getBooksByAuthor
- method: GET
- query params (all required): 
    - author

## /getBooksByYear
- method: GET
- query params (all required):
    - year

### /getBook
- method: GET
- query params (all required):
    - author
    - title