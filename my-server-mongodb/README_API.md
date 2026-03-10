# Book Management RESTful API

A Node.js Express API for managing books with MongoDB and image upload capabilities using multer.

## Features

- ✅ Full CRUD operations for books
- ✅ Image upload for book covers
- ✅ MongoDB with Mongoose ODM
- ✅ Input validation
- ✅ Error handling
- ✅ CORS enabled
- ✅ Morgan request logging

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **File Upload**: Multer
- **Middleware**: CORS, Body Parser, Morgan

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB running locally or MongoDB Atlas connection string
- npm or yarn

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create .env file** (Optional)
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your MongoDB URI:
   ```
   MONGODB_URI=mongodb://localhost:27017/bookmanagement
   PORT=3000
   ```

3. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

4. **Run the Server**
   ```bash
   npm start
   ```
   
   Or with auto-reload (dev):
   ```bash
   npm run dev
   ```

The server will start at `http://localhost:3000`

## Book Data Structure

Each book document contains:

```json
{
  "id": "string (unique)",
  "tensach": "string (book title)",
  "giaban": "number (price)",
  "mota": "string (description)",
  "anhbia": "string (image path)",
  "ngaycapnhat": "date (last updated)",
  "soluongton": "number (quantity in stock)",
  "maCD": "string (category code)",
  "maNXB": "string (publisher code)"
}
```

## API Endpoints

### 1. Get All Books
```
GET /api/books
```

**Example:**
```bash
curl http://localhost:3000/api/books
```

**Response:**
```json
{
  "success": true,
  "message": "Books retrieved successfully",
  "data": [
    {
      "_id": "...",
      "id": "B001",
      "tensach": "Node.js Guide",
      "giaban": 250000,
      "mota": "Complete guide to Node.js",
      "anhbia": "/uploads/book-1234567890.jpg",
      "soluongton": 50,
      "maCD": "IT",
      "maNXB": "TechPress"
    }
  ],
  "total": 1
}
```

---

### 2. Get Single Book by ID
```
GET /api/books/:id
```

**Parameters:**
- `id` (path param): The book ID

**Example:**
```bash
curl http://localhost:3000/api/books/B001
```

**Response:**
```json
{
  "success": true,
  "message": "Book retrieved successfully",
  "data": {
    "_id": "...",
    "id": "B001",
    "tensach": "Node.js Guide",
    "giaban": 250000,
    "mota": "Complete guide to Node.js",
    "anhbia": "/uploads/book-1234567890.jpg",
    "soluongton": 50,
    "maCD": "IT",
    "maNXB": "TechPress"
  }
}
```

---

### 3. Create New Book
```
POST /api/books
```

**Headers:**
```
Content-Type: multipart/form-data
```

**Form Fields:**
- `id` **(required)** - Unique book identifier
- `tensach` **(required)** - Book title
- `giaban` **(required)** - Price
- `soluongton` **(required)** - Quantity in stock
- `mota` (optional) - Book description
- `maCD` (optional) - Category code
- `maNXB` (optional) - Publisher code
- `anhbia` (optional) - Image file (JPEG, PNG, GIF, WebP, max 5MB)

**Example using cURL:**
```bash
curl -X POST http://localhost:3000/api/books \
  -F "id=B001" \
  -F "tensach=Node.js Guide" \
  -F "giaban=250000" \
  -F "soluongton=50" \
  -F "mota=Complete guide to Node.js" \
  -F "maCD=IT" \
  -F "maNXB=TechPress" \
  -F "anhbia=@/path/to/image.jpg"
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "...",
    "id": "B001",
    "tensach": "Node.js Guide",
    "giaban": 250000,
    "mota": "Complete guide to Node.js",
    "anhbia": "/uploads/book-1234567890.jpg",
    "ngaycapnhat": "2024-01-15T10:30:00Z",
    "soluongton": 50,
    "maCD": "IT",
    "maNXB": "TechPress"
  }
}
```

---

### 4. Update Book
```
PUT /api/books/:id
```

**Headers:**
```
Content-Type: multipart/form-data
```

**Parameters:**
- `id` (path param): The book ID to update

**Form Fields:** (all optional)
- `tensach` - Book title
- `giaban` - Price
- `soluongton` - Quantity in stock
- `mota` - Book description
- `maCD` - Category code
- `maNXB` - Publisher code
- `anhbia` - New image file (replaces old one)

**Example:**
```bash
curl -X PUT http://localhost:3000/api/books/B001 \
  -F "giaban=300000" \
  -F "soluongton=75" \
  -F "anhbia=@/path/to/new-image.jpg"
```

**Response:**
```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "_id": "...",
    "id": "B001",
    "tensach": "Node.js Guide",
    "giaban": 300000,
    "soluongton": 75,
    "anhbia": "/uploads/book-9876543210.jpg",
    "ngaycapnhat": "2024-01-15T11:45:00Z"
  }
}
```

---

### 5. Delete Book
```
DELETE /api/books/:id
```

**Parameters:**
- `id` (path param): The book ID to delete

**Example:**
```bash
curl -X DELETE http://localhost:3000/api/books/B001
```

**Response:**
```json
{
  "success": true,
  "message": "Book deleted successfully"
}
```

---

## Error Responses

### Missing Required Fields (400)
```json
{
  "success": false,
  "message": "Missing required fields: id, tensach, giaban, soluongton"
}
```

### Book Not Found (404)
```json
{
  "success": false,
  "message": "Book not found"
}
```

### Duplicate ID (409)
```json
{
  "success": false,
  "message": "Book with this ID already exists"
}
```

### Invalid Image Type (400)
```json
{
  "success": false,
  "message": "Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed."
}
```

### Server Error (500)
```json
{
  "success": false,
  "message": "Error creating book",
  "error": "error details"
}
```

---

## Testing with Postman

### Collection Setup

1. **Create** - POST http://localhost:3000/api/books
   - Body: form-data
   - Fields: id, tensach, giaban, soluongton, mota, maCD, maNXB, anhbia

2. **Read All** - GET http://localhost:3000/api/books

3. **Read One** - GET http://localhost:3000/api/books/B001

4. **Update** - PUT http://localhost:3000/api/books/B001
   - Body: form-data
   - Fields: any updatable field

5. **Delete** - DELETE http://localhost:3000/api/books/B001

---

## Image Upload Details

- **Supported Formats**: JPEG, PNG, GIF, WebP
- **Max File Size**: 5MB
- **Storage**: `/uploads` directory
- **URL Path**: `/uploads/{filename}`
- **Auto-cleanup**: Old images are deleted when updated

---

## MongoDB Connection

### Local MongoDB
```
MONGODB_URI=mongodb://localhost:27017/bookmanagement
```

### MongoDB Atlas (Cloud)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bookmanagement
```

---

## Project Structure

```
my-server-mongodb/
├── config/
│   └── database.js          # MongoDB connection configuration
├── controllers/
│   └── bookController.js    # Book CRUD controllers
├── middleware/
│   └── upload.js            # Multer image upload configuration
├── models/
│   └── Book.js              # Book Mongoose schema
├── routes/
│   └── books.js             # Book API routes
├── uploads/                 # Uploaded images directory
├── index.js                 # Main server file
├── package.json             # Dependencies
├── .env.example             # Environment variables template
└── README_API.md            # This file
```

---

## Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running: `mongod`
- Check connection URI in `.env`
- Verify MongoDB is accessible on localhost:27017

### File Upload Not Working
- Check `/uploads` directory exists
- Ensure proper permissions on uploads folder
- Verify file size is under 5MB
- Confirm file format is supported (JPEG, PNG, GIF, WebP)

### Port Already in Use
- Change PORT in `.env` or command:
  ```bash
  PORT=4000 npm start
  ```

### CORS Issues
- CORS is enabled by default for all origins
- Modify in `index.js` if needed

---

## Future Enhancements

- [ ] User authentication & authorization
- [ ] Advanced search & filtering
- [ ] Pagination support
- [ ] Image compression & resizing
- [ ] Rate limiting
- [ ] Database backup automation
- [ ] API documentation with Swagger/OpenAPI

---

## License

MIT License

---

## Support

For issues or questions, please contact the development team.
