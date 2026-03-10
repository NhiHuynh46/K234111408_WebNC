# Quick Start Guide - Book Management API

## Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Either local installation or MongoDB Atlas account
  - Local: [Download](https://www.mongodb.com/try/download/community)
  - Cloud: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## Step-by-Step Setup

### 1. Install Dependencies

```bash
cd my-server-mongodb
npm install
```

This will install:
- express (web framework)
- mongoose (MongoDB ODM)
- multer (file upload handling)
- cors (cross-origin support)
- morgan (request logging)
- body-parser (JSON parsing)

### 2. Configure MongoDB Connection

#### Option A: Local MongoDB
If you have MongoDB running locally (default: localhost:27017):

```bash
# Just start the server, it will use the default connection
npm start
```

#### Option B: MongoDB Atlas (Cloud)
1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a cluster and get your connection string
3. Create `.env` file in the project root:

```bash
cp .env.example .env
```

4. Edit `.env` and update MongoDB URI:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bookmanagement
PORT=3000
```

### 3. Start MongoDB

If using local MongoDB:

```bash
# On Windows
mongod

# On Mac
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
```

### 4. Start the Server

```bash
npm start
```

Expected output:
```
✓ Book Management API Server running at http://localhost:3000
✓ API Documentation: http://localhost:3000/
MongoDB connected successfully
```

### 5. (Optional) Seed Initial Data

To add sample books to your database:

```bash
node seed.js
```

Output:
```
✓ Cleared existing books
✓ Successfully inserted 5 books

Inserted Books:
1. Node.js Beginner Guide (B001) - 250000 VND
2. Express.js Web Development (B002) - 280000 VND
...
```

---

## Verify Installation

### Test API Endpoints

#### 1. Check Server Status
```bash
curl http://localhost:3000/
```

Expected response:
```json
{
  "message": "Welcome to Book Management API",
  "version": "1.0.0",
  "endpoints": { ... }
}
```

#### 2. Get All Books
```bash
curl http://localhost:3000/api/books
```

#### 3. Create a Book
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "id": "TEST001",
    "tensach": "Test Book",
    "giaban": 100000,
    "soluongton": 10,
    "mota": "A test book"
  }'
```

---

## Development Mode

For automatic server restart on file changes, install nodemon:

```bash
npm install -g nodemon
npm run dev
```

---

## Project Structure

```
my-server-mongodb/
├── config/                 # Configuration
│   └── database.js        # MongoDB connection
├── controllers/           # Business logic
│   └── bookController.js  # Book CRUD operations
├── middleware/            # Express middleware
│   └── upload.js          # Multer image upload config
├── models/                # Database schemas
│   └── Book.js            # Book MongoDB schema
├── routes/                # API routes
│   └── books.js           # Book endpoints
├── uploads/               # Uploaded images storage
├── index.js               # Main server file
├── seed.js                # Initial data seeding
├── package.json           # Dependencies
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
├── README_API.md          # Full API documentation
├── API_TESTING.md         # Testing examples
└── QUICKSTART.md          # This file
```

---

## Troubleshooting

### MongoDB Connection Error
```
Error: MongoDB connection error: connect ECONNREFUSED
```
**Solution:**
- Make sure MongoDB service is running
- Verify MongoDB URI in `.env`
- Check if MongoDB is listening on the correct port (default: 27017)

### Port Already in Use
```
Error: EADDRINUSE: address already in use :::3000
```
**Solution:**
```bash
# Change port in .env
PORT=4000 npm start

# Or kill the process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -i :3000
kill -9 <PID>
```

### File Upload Not Working
**Check:**
- `/uploads` directory has write permissions
- File size is under 5MB
- File format is JPEG, PNG, GIF, or WebP
- Content-Type header is `multipart/form-data`

### CORS Error
The API has CORS enabled by default. If issues persist, verify CORS middleware in `index.js`.

---

## Common Tasks

### Create a Book with Image
```bash
curl -X POST http://localhost:3000/api/books \
  -F "id=B006" \
  -F "tensach=New Book" \
  -F "giaban=150000" \
  -F "soluongton=25" \
  -F "anhbia=@./cover.jpg"
```

### Update Book Price
```bash
curl -X PUT http://localhost:3000/api/books/B006 \
  -H "Content-Type: application/json" \
  -d '{"giaban": 180000}'
```

### Delete a Book
```bash
curl -X DELETE http://localhost:3000/api/books/B006
```

---

## API Documentation

For detailed API documentation, see [README_API.md](./README_API.md)

For testing examples, see [API_TESTING.md](./API_TESTING.md)

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `MONGODB_URI` | `mongodb://localhost:27017/bookmanagement` | MongoDB connection string |
| `PORT` | `3000` | Server port |
| `NODE_ENV` | `development` | Environment mode |

---

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure MongoDB
3. ✅ Start the server
4. ✅ Test API endpoints
5.📖 Read [README_API.md](./README_API.md) for full documentation
6. 🧪 Check [API_TESTING.md](./API_TESTING.md) for testing examples
7. 🚀 Build your client application to consume the API

---

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review API_TESTING.md for examples
3. Check MongoDB connection settings
4. Ensure all dependencies are installed correctly

---

Happy coding! 🎉
