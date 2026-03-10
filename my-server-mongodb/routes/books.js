const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const upload = require('../middleware/upload');

// GET - Get all books
router.get('/', bookController.getAllBooks);

// GET - Get single book by ID
router.get('/:id', bookController.getBookById);

// POST - Create new book with optional image upload
router.post('/', upload.single('anhbia'), bookController.createBook);

// PUT - Update book with optional image upload
router.put('/:id', upload.single('anhbia'), bookController.updateBook);

// DELETE - Delete book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
