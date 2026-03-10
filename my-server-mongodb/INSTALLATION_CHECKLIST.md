# 📋 Installation & Setup Checklist

> Complete step-by-step guide to get your Book Management API running

## ✅ Pre-Installation Requirements

Before starting, ensure you have:
- [ ] **Node.js v14+** installed (download from nodejs.org)
- [ ] **npm** installed (comes with Node.js)
- [ ] **MongoDB** running (local or MongoDB Atlas account)
- [ ] **Terminal/Command Prompt** open in project directory
- [ ] **Code editor** (VS Code recommended)
- [ ] **Postman** or **cURL** installed for testing (optional but recommended)

---

## 🚀 Installation Steps

### Step 1: Install Dependencies
```bash
cd d:\testangular\my-server-mongodb
npm install
```

**Expected Output:**
```
added 150+ packages, and audited 180 packages in 12s
```

**✓ Check:** All dependencies installed without errors

### Step 2: Configure MongoDB

#### Option A: Local MongoDB (Recommended for Development)
```bash
# Windows: Start MongoDB
mongod

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**✓ Check:** MongoDB started successfully

#### Option B: MongoDB Atlas (Cloud)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create account and cluster
3. Copy connection string
4. Create `.env` file:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bookmanagement
   PORT=3000
   ```

**✓ Check:** `.env` file created with correct URI

### Step 3: Verify Project Structure
```bash
# Check main files exist
dir models
dir controllers
dir routes
dir middleware
dir config
dir uploads
```

**Expected files:**
- [ ] `models/Book.js`
- [ ] `controllers/bookController.js`
- [ ] `routes/books.js`
- [ ] `middleware/upload.js`
- [ ] `config/database.js`
- [ ] `index.js`
- [ ] `package.json`

### Step 4: Start the Server
```bash
npm start
```

**Expected Output:**
```
✓ Book Management API Server running at http://localhost:3000
✓ API Documentation: http://localhost:3000/
MongoDB connected successfully
```

**✓ Check:** Server running without errors

---

## 🧪 Verification Tests

### Test 1: Check Server Status
```bash
curl http://localhost:3000
```

**Expected Response:**
```json
{
  "message": "Welcome to Book Management API",
  "version": "1.0.0",
  "endpoints": { ... }
}
```

**✓ Check:** Received JSON response

### Test 2: Get All Books (Should be empty initially)
```bash
curl http://localhost:3000/api/books
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Books retrieved successfully",
  "data": [],
  "total": 0
}
```

**✓ Check:** Got empty array response

### Test 3: Create a Test Book
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "id": "TEST001",
    "tensach": "Test Book",
    "giaban": 100000,
    "soluongton": 10,
    "mota": "This is a test book"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Book created successfully",
  "data": { ... }
}
```

**✓ Check:** Book created successfully

### Test 4: Retrieve the Test Book
```bash
curl http://localhost:3000/api/books/TEST001
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Book retrieved successfully",
  "data": { ... }
}
```

**✓ Check:** Retrieved the correct book

### Test 5: Update Test Book
```bash
curl -X PUT http://localhost:3000/api/books/TEST001 \
  -H "Content-Type: application/json" \
  -d '{"giaban": 150000}'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": { ... }
}
```

**✓ Check:** Price updated to 150000

### Test 6: Delete Test Book
```bash
curl -X DELETE http://localhost:3000/api/books/TEST001
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Book deleted successfully"
}
```

**✓ Check:** Book deleted successfully

---

## 🌱 Optional: Seed Sample Data

Load 5 sample books into database:
```bash
node seed.js
```

**Expected Output:**
```
✓ Cleared existing books
✓ Successfully inserted 5 books

Inserted Books:
1. Node.js Beginner Guide (B001) - 250000 VND
2. Express.js Web Development (B002) - 280000 VND
3. MongoDB Database Design (B003) - 220000 VND
4. REST API Design Patterns (B004) - 320000 VND
5. JavaScript Modern Practices (B005) - 290000 VND
```

**✓ Check:** All books inserted successfully

---

## 📊 Expected Directory Structure

```
my-server-mongodb/
├── config/
│   └── database.js
├── controllers/
│   └── bookController.js
├── middleware/
│   └── upload.js
├── models/
│   └── Book.js
├── routes/
│   └── books.js
├── uploads/
│   └── .gitkeep
├── index.js
├── seed.js
├── package.json
├── package-lock.json
├── .env (optional)
├── .env.example
├── .gitignore
├── README_API.md
├── API_TESTING.md
├── QUICKSTART.md
└── SETUP_SUMMARY.md
```

---

## 📝 What to Do Next

### Learning Resources
- [ ] Read [README_API.md](./README_API.md) - Complete API documentation
- [ ] Review [API_TESTING.md](./API_TESTING.md) - Testing examples
- [ ] Check [QUICKSTART.md](./QUICKSTART.md) - Quick start guide

### Development
- [ ] Install nodemon for auto-reload: `npm install -g nodemon`
- [ ] Run with auto-reload: `npm run dev`
- [ ] Create your client application
- [ ] Integrate with Angular app in `my-app/`

### Testing
- [ ] Test all endpoints with cURL or Postman
- [ ] Test image upload functionality
- [ ] Test error handling
- [ ] Load test with multiple requests

### Production
- [ ] Set up environment variables properly
- [ ] Add user authentication
- [ ] Implement rate limiting
- [ ] Add request validation middleware
- [ ] Set up error logging
- [ ] Deploy to hosting service

---

## 🆘 Troubleshooting Quick Links

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change PORT in .env or use: `PORT=4000 npm start` |
| MongoDB not connecting | Ensure MongoDB is running: `mongod` |
| File upload fails | Check file size (<5MB) and format (JPEG, PNG, GIF, WebP) |
| CORS errors | Already enabled by default in index.js |
| nodemon not found | Install globally: `npm install -g nodemon` |
| No uploads directory | Create manually: `mkdir uploads` |

For more details, see [README_API.md](./README_API.md#troubleshooting)

---

## ✨ Important Files

### Core Files
- **[index.js](./index.js)** - Main server file
- **[package.json](./package.json)** - Dependencies & scripts
- **[seed.js](./seed.js)** - Sample data loader

### Models & Controllers
- **[models/Book.js](./models/Book.js)** - Database schema
- **[controllers/bookController.js](./controllers/bookController.js)** - CRUD logic
- **[routes/books.js](./routes/books.js)** - API endpoints
- **[middleware/upload.js](./middleware/upload.js)** - File upload config
- **[config/database.js](./config/database.js)** - DB connection

### Documentation
- **[README_API.md](./README_API.md)** - Full API documentation
- **[API_TESTING.md](./API_TESTING.md)** - Testing guide
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick start
- **[SETUP_SUMMARY.md](./SETUP_SUMMARY.md)** - Feature overview

---

## 📞 Quick Commands Reference

```bash
# Installation
npm install

# Development
npm start              # Start server
npm run dev           # Start with auto-reload (requires nodemon)
node seed.js          # Load sample data

# Testing
curl http://localhost:3000                              # Test server
curl http://localhost:3000/api/books                    # Get all books
curl -X POST http://localhost:3000/api/books \          # Create book
  -H "Content-Type: application/json" \
  -d '{"id":"B001","tensach":"Book","giaban":100000,"soluongton":10}'

# Database
mongod                # Start MongoDB (Windows)
mongo                 # Connect to MongoDB shell
```

---

## ✅ Final Checklist

Before calling the setup complete:
- [ ] Dependencies installed (`npm install`)
- [ ] MongoDB running locally or configured
- [ ] Server starts without errors (`npm start`)
- [ ] API responds at `http://localhost:3000`
- [ ] All CRUD endpoints tested:
  - [ ] GET /api/books ✓
  - [ ] GET /api/books/:id ✓
  - [ ] POST /api/books ✓
  - [ ] PUT /api/books/:id ✓
  - [ ] DELETE /api/books/:id ✓
- [ ] Sample data loaded (optional)
- [ ] Documentation read

---

## 🎉 Congratulations!

Your Book Management API is fully set up and ready to use!

**Next Step:** Integrate it with your Angular application in `my-app/`

Need help? Check the documentation files or review the API_TESTING.md for examples.

**Happy Coding!** 🚀

