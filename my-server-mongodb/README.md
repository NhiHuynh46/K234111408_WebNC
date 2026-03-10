# 📚 Book Management RESTful API - Complete Documentation

## 🎯 Project Overview

A production-ready **Node.js Express REST API** for managing books with:
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ MongoDB database with Mongoose ODM
- ✅ Image upload for book covers using Multer
- ✅ Input validation and error handling
- ✅ CORS support and request logging
- ✅ Professional project structure

---

## 📖 Documentation Guide

### 🚀 Getting Started (Start Here!)
**File:** [QUICKSTART.md](./QUICKSTART.md)
- Quick installation steps
- MongoDB setup
- Start the server
- Verify installation
- Troubleshooting

**Time to completion:** 5-10 minutes

---

### ✅ Installation & Setup Checklist
**File:** [INSTALLATION_CHECKLIST.md](./INSTALLATION_CHECKLIST.md)
- Complete step-by-step installation
- Dependency verification
- 6 verification tests
- Optional sample data loading
- Quick reference commands

**Use this if:** You want a detailed checklist to follow

---

### 📊 Project Setup Summary
**File:** [SETUP_SUMMARY.md](./SETUP_SUMMARY.md)
- Complete feature overview
- Project structure explanation
- Technology stack
- Installation & setup
- MongoDB connection options
- File upload configuration

**Use this if:** You want to understand the whole project

---

### 📖 Complete API Documentation
**File:** [README_API.md](./README_API.md)
- Detailed endpoint descriptions
- Request/response examples
- All 5 CRUD operations explained
- Error response codes
- Postman collection
- Troubleshooting guide
- Future enhancements

**Use this if:** You need detailed API information

---

### 🧪 Testing & Examples
**File:** [API_TESTING.md](./API_TESTING.md)
- cURL command examples
- JavaScript/Fetch examples
- Node.js/Axios examples
- Postman collection JSON
- Sample book data
- Testing checklist

**Use this if:** You want to test the API

---

## 🏗️ Project File Structure

```
my-server-mongodb/
│
├── 📋 DOCUMENTATION FILES
│   ├── README.md (this file)
│   ├── QUICKSTART.md                 ← START HERE!
│   ├── INSTALLATION_CHECKLIST.md     ← Detailed setup
│   ├── SETUP_SUMMARY.md              ← Feature overview
│   ├── README_API.md                 ← API reference
│   ├── API_TESTING.md                ← Testing guide
│   ├── .env.example                  ← Environment template
│   └── .gitignore                    ← Git configuration
│
├── 🔧 CONFIGURATION
│   ├── index.js                      ← Main server file
│   ├── package.json                  ← Dependencies
│   ├── package-lock.json
│   └── config/
│       └── database.js               ← MongoDB connection
│
├── 🎨 APPLICATION CODE
│   ├── models/
│   │   └── Book.js                   ← Mongoose schema
│   │
│   ├── controllers/
│   │   └── bookController.js         ← CRUD logic
│   │
│   ├── routes/
│   │   └── books.js                  ← API endpoints
│   │
│   └── middleware/
│       └── upload.js                 ← Multer configuration
│
├── 💾 DATA & STATIC FILES
│   ├── uploads/                      ← Image storage
│   ├── public/                       ← Static files
│   └── seed.js                       ← Sample data loader
│
└── 📦 DEPENDENCIES
    └── node_modules/                 ← Installed packages
```

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Install
```bash
cd my-server-mongodb
npm install
```

### Step 2: Configure
Ensure MongoDB is running:
```bash
mongod  # or MongoDB Atlas configured
```

### Step 3: Start
```bash
npm start
```

### Step 4: Verify
```bash
curl http://localhost:3000
```

✅ **Done!** Your API is running at http://localhost:3000

---

## 📊 API Endpoints Summary

All endpoints follow RESTful conventions:

```
┌─────────────────────────────────────────────────────────┐
│                    BOOK MANAGEMENT API                   │
├─────────────────────────────────────────────────────────┤
│ GET    /api/books              → Get all books          │
│ GET    /api/books/:id          → Get single book        │
│ POST   /api/books              → Create new book        │
│ PUT    /api/books/:id          → Update book            │
│ DELETE /api/books/:id          → Delete book            │
└─────────────────────────────────────────────────────────┘
```

### Book Data Structure
```javascript
{
  id: "B001",                    // Unique identifier
  tensach: "Book Title",         // Vietnamese: book title
  giaban: 250000,                // Price (VND)
  mota: "Description",           // Description
  anhbia: "/uploads/file.jpg",   // Book cover image
  ngaycapnhat: "2024-01-15",     // Last updated date
  soluongton: 50,                // Quantity in stock
  maCD: "IT",                    // Category code
  maNXB: "TechPress"             // Publisher code
}
```

---

## 💻 Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Runtime** | Node.js | v14+ |
| **Framework** | Express.js | v5.2.1 |
| **Database** | MongoDB | Latest |
| **ODM** | Mongoose | v8.0.3 |
| **File Upload** | Multer | v1.4.5 |
| **Middleware** | CORS | v2.8.6 |
| **Logging** | Morgan | v1.10.1 |

---

## 🎯 Feature Highlights

### ✨ Full CRUD Operations
- **Create**: POST /api/books with form-data
- **Read**: GET all books or single book by ID
- **Update**: PUT /api/books/:id with partial data
- **Delete**: Remove book and associated images

### 📸 Image Upload
- **Multer Integration**: File upload handling
- **Format Support**: JPEG, PNG, GIF, WebP
- **Size Limit**: 5MB maximum
- **Auto-cleanup**: Old images deleted on update
- **Storage**: `/uploads` directory

### 🗄️ Database Features
- **Mongoose Schema**: Validated data structure
- **Unique ID**: Prevents duplicate book entries
- **Timestamps**: Automatic ngaycapnhat tracking
- **Validation**: Required fields enforced

### 🔒 Error Handling
- **Validation Errors**: 400 Bad Request
- **Not Found**: 404 Not Found
- **Conflict**: 409 Duplicate ID
- **Server Errors**: 500 with error details

### 🌐 API Features
- **CORS Enabled**: All origins accepted
- **Request Logging**: Morgan middleware
- **JSON Parsing**: Automatic body parsing
- **Static Files**: Public directory serving

---

## 📝 Example Usage

### Create Book with Image
```bash
curl -X POST http://localhost:3000/api/books \
  -F "id=B001" \
  -F "tensach=Node.js Guide" \
  -F "giaban=250000" \
  -F "soluongton=50" \
  -F "mota=Complete guide to Node.js" \
  -F "anhbia=@./cover.jpg"
```

### Get All Books
```bash
curl http://localhost:3000/api/books
```

### Update Book
```bash
curl -X PUT http://localhost:3000/api/books/B001 \
  -H "Content-Type: application/json" \
  -d '{"giaban": 300000}'
```

### Delete Book
```bash
curl -X DELETE http://localhost:3000/api/books/B001
```

See [API_TESTING.md](./API_TESTING.md) for more examples in cURL, JavaScript, and Node.js.

---

## 🛠️ Development Commands

```bash
# Installation & Setup
npm install              # Install dependencies
npm start               # Start production server
npm run dev             # Start with auto-reload
node seed.js            # Load sample data

# MongoDB (if running locally)
mongod                  # Start MongoDB service
```

---

## 📚 Documentation Navigation

### By Use Case

**I want to...**
- ✅ **Get started quickly** → [QUICKSTART.md](./QUICKSTART.md)
- ✅ **Follow step-by-step setup** → [INSTALLATION_CHECKLIST.md](./INSTALLATION_CHECKLIST.md)
- ✅ **Understand the project** → [SETUP_SUMMARY.md](./SETUP_SUMMARY.md)
- ✅ **Learn all API endpoints** → [README_API.md](./README_API.md)
- ✅ **Test the API** → [API_TESTING.md](./API_TESTING.md)

### By Component

**Want to know about...**
- 🔧 **Server Setup** → [QUICKSTART.md](./QUICKSTART.md) - Step 1
- 🗄️ **Database** → [README_API.md](./README_API.md#mongodb-connection)
- 📸 **File Upload** → [SETUP_SUMMARY.md](./SETUP_SUMMARY.md#-file-upload-configuration)
- 🛣️ **API Routes** → [README_API.md](./README_API.md#api-endpoints)
- ❌ **Error Handling** → [README_API.md](./README_API.md#error-responses)
- 🧪 **Testing** → [API_TESTING.md](./API_TESTING.md)

---

## 🚀 Deployment Checklist

Before deploying to production:
- [ ] Environment variables configured
- [ ] MongoDB connection verified
- [ ] CORS settings reviewed
- [ ] Error logging implemented
- [ ] Rate limiting added
- [ ] Authentication configured
- [ ] Image size limits validated
- [ ] Backup strategy in place
- [ ] Database indexed
- [ ] Load testing completed

---

## 🆘 Troubleshooting

### Common Issues

**Q: MongoDB connection fails**
- A: Ensure MongoDB is running (`mongod`) and connection URI is correct

**Q: Port 3000 already in use**
- A: Use different port: `PORT=4000 npm start`

**Q: File upload not working**
- A: Check file size (<5MB) and format (JPEG, PNG, GIF, WebP)

**Q: CORS errors**
- A: CORS is enabled by default. Check browser console for details.

For more help, check [README_API.md#troubleshooting](./README_API.md#troubleshooting).

---

## 📊 Performance Features

- **Efficient Queries**: Mongoose indexing
- **Request Logging**: Morgan for monitoring
- **Error Handling**: Graceful error responses
- **File Upload**: Streaming with size limits
- **JSON Parsing**: Body parser middleware
- **Automatic Cleanup**: Old images removed

---

## 🔐 Security Considerations

Current implementation includes:
- ✅ Input validation via Mongoose schemas
- ✅ File type validation for uploads
- ✅ File size limitations
- ✅ CORS enabled for flexibility

**Recommended enhancements:**
- Add JWT authentication
- Implement rate limiting
- Add request logging
- Use HTTPS in production
- Validate all inputs
- Implement access control

---

## 📞 Need Help?

1. **Start Here**: [QUICKSTART.md](./QUICKSTART.md)
2. **Detailed Setup**: [INSTALLATION_CHECKLIST.md](./INSTALLATION_CHECKLIST.md)
3. **API Reference**: [README_API.md](./README_API.md)
4. **Testing**: [API_TESTING.md](./API_TESTING.md)
5. **Project Info**: [SETUP_SUMMARY.md](./SETUP_SUMMARY.md)

---

## 📝 File Dependencies

```
index.js (Main Server)
├── config/database.js (MongoDB)
├── routes/books.js (Endpoints)
│   └── controllers/bookController.js (Logic)
│       └── models/Book.js (Schema)
└── middleware/upload.js (File Upload)
    └── (Multer Configuration)
```

---

## 🎓 Learning Path

1. **Day 1**: Install and run API ([QUICKSTART.md](./QUICKSTART.md))
2. **Day 2**: Test all endpoints ([API_TESTING.md](./API_TESTING.md))
3. **Day 3**: Read complete API docs ([README_API.md](./README_API.md))
4. **Day 4**: Explore code structure ([SETUP_SUMMARY.md](./SETUP_SUMMARY.md))
5. **Day 5**: Customize and enhance

---

## ✨ What's Included

- ✅ Complete Express.js API
- ✅ MongoDB with Mongoose
- ✅ Multer file upload
- ✅ Error handling
- ✅ Request validation
- ✅ Sample data (seed.js)
- ✅ 5+ documentation files
- ✅ cURL/Postman examples
- ✅ Production-ready code

---

## 🎉 You're Ready!

Your Book Management API is fully set up with:
- ✅ 5 REST endpoints
- ✅ Image upload support
- ✅ MongoDB integration
- ✅ Complete documentation
- ✅ Testing examples
- ✅ Sample data

**Next Step:** Follow [QUICKSTART.md](./QUICKSTART.md) to get started!

---

## 📜 API Endpoints Quick Reference

```bash
# Get all books
GET /api/books

# Get single book
GET /api/books/{id}

# Create book (with optional image)
POST /api/books
Content-Type: multipart/form-data
Body: id, tensach, giaban, soluongton, mota, maCD, maNXB, anhbia

# Update book
PUT /api/books/{id}
Content-Type: multipart/form-data
Body: (any of the above fields)

# Delete book
DELETE /api/books/{id}
```

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**Status:** ✅ Production Ready

---

## 📞 Support Resources

- Node.js Docs: https://nodejs.org/docs/
- Express.js Docs: https://expressjs.com/
- MongoDB Docs: https://docs.mongodb.com/
- Mongoose Docs: https://mongoosejs.com/
- Multer Docs: https://github.com/expressjs/multer

---

**Happy Coding!** 🚀👨‍💻

