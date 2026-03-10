// This file can be used to seed initial book data into MongoDB
// Run with: node seed.js

const mongoose = require('mongoose');
const Book = require('./models/Book');
const connectDB = require('./config/database');

const seedBooks = [
  {
    id: 'B001',
    tensach: 'Node.js Beginner Guide',
    giaban: 250000,
    mota: 'Learn the fundamentals of Node.js development',
    soluongton: 50,
    maCD: 'IT',
    maNXB: 'TechPress'
  },
  {
    id: 'B002',
    tensach: 'Express.js Web Development',
    giaban: 280000,
    mota: 'Build scalable web applications with Express.js',
    soluongton: 35,
    maCD: 'Web Development',
    maNXB: 'WebDev Press'
  },
  {
    id: 'B003',
    tensach: 'MongoDB Database Design',
    giaban: 220000,
    mota: 'Design efficient MongoDB databases for applications',
    soluongton: 45,
    maCD: 'Database',
    maNXB: 'DataPress'
  },
  {
    id: 'B004',
    tensach: 'REST API Design Patterns',
    giaban: 320000,
    mota: 'Best practices for designing RESTful APIs',
    soluongton: 28,
    maCD: 'Architecture',
    maNXB: 'CodeMaster'
  },
  {
    id: 'B005',
    tensach: 'JavaScript Modern Practices',
    giaban: 290000,
    mota: 'Master modern JavaScript ES6+ features',
    soluongton: 42,
    maCD: 'Programming',
    maNXB: 'CodeMaster'
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await connectDB();
    
    // Clear existing books
    await Book.deleteMany({});
    console.log('✓ Cleared existing books');
    
    // Insert seed data
    const insertedBooks = await Book.insertMany(seedBooks);
    console.log(`✓ Successfully inserted ${insertedBooks.length} books`);
    
    // Display inserted books
    console.log('\nInserted Books:');
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. ${book.tensach} (${book.id}) - ${book.giaban} VND`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error.message);
    process.exit(1);
  }
}

// Run seeding
seedDatabase();
