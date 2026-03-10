const Book = require('../models/Book');
const fs = require('fs');
const path = require('path');

// GET all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: books,
      total: books.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving books',
      error: error.message
    });
  }
};

// GET a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ id: id });
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Book retrieved successfully',
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving book',
      error: error.message
    });
  }
};

// CREATE a new book
exports.createBook = async (req, res) => {
  try {
    const { id, tensach, giaban, mota, soluongton, maCD, maNXB } = req.body;
    
    // Validate required fields
    if (!id || !tensach || giaban === undefined || soluongton === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: id, tensach, giaban, soluongton'
      });
    }
    
    // Check if book with same ID already exists
    const existingBook = await Book.findOne({ id: id });
    if (existingBook) {
      return res.status(409).json({
        success: false,
        message: 'Book with this ID already exists'
      });
    }
    
    // Handle image upload if file exists
    let anhbia = null;
    if (req.file) {
      anhbia = `/uploads/${req.file.filename}`;
    }
    
    const newBook = new Book({
      id,
      tensach,
      giaban,
      mota: mota || '',
      anhbia,
      ngaycapnhat: new Date(),
      soluongton,
      maCD: maCD || '',
      maNXB: maNXB || ''
    });
    
    const savedBook = await newBook.save();
    
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: savedBook
    });
  } catch (error) {
    // Delete uploaded file if there's an error
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({
      success: false,
      message: 'Error creating book',
      error: error.message
    });
  }
};

// UPDATE a book
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { tensach, giaban, mota, soluongton, maCD, maNXB } = req.body;
    
    // Find the book
    const book = await Book.findOne({ id: id });
    if (!book) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    // Handle image upload if new file is provided
    if (req.file) {
      // Delete old image if it exists
      if (book.anhbia) {
        const oldImagePath = path.join(__dirname, '../', book.anhbia);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      book.anhbia = `/uploads/${req.file.filename}`;
    }
    
    // Update other fields
    if (tensach !== undefined) book.tensach = tensach;
    if (giaban !== undefined) book.giaban = giaban;
    if (mota !== undefined) book.mota = mota;
    if (soluongton !== undefined) book.soluongton = soluongton;
    if (maCD !== undefined) book.maCD = maCD;
    if (maNXB !== undefined) book.maNXB = maNXB;
    
    book.ngaycapnhat = new Date();
    
    const updatedBook = await book.save();
    
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updatedBook
    });
  } catch (error) {
    // Delete uploaded file if there's an error
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({
      success: false,
      message: 'Error updating book',
      error: error.message
    });
  }
};

// DELETE a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    
    const book = await Book.findOne({ id: id });
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    // Delete image file if it exists
    if (book.anhbia) {
      const imagePath = path.join(__dirname, '../', book.anhbia);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    // Delete the book document
    await Book.deleteOne({ id: id });
    
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting book',
      error: error.message
    });
  }
};
