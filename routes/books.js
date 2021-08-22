const express = require('express');
const router = express.Router();
const Book = require('../modules/book');
const Author = require('../modules/author')

// all books route
router.get('/', async (req, res) => {
    res.send('All Books')
    
})

// new book route
router.get('/new', async (req, res) => {
    try {
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new', {
            authors: authors,
            book, book
        })

    } catch {
        res.redirect('/books')

    }
   
})

// create book rout
router.post('/', async (req, res) => {
    res.send('Create Book')

})

module.exports = router;