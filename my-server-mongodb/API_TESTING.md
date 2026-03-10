# Book Management API - Testing Examples

## cURL Examples

### 1. Get All Books
```bash
curl -X GET http://localhost:3000/api/books
```

### 2. Get Single Book
```bash
curl -X GET http://localhost:3000/api/books/B001
```

### 3. Create Book (without image)
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "id": "B001",
    "tensach": "Node.js Developer Guide",
    "giaban": 250000,
    "soluongton": 50,
    "mota": "Comprehensive guide to Node.js development",
    "maCD": "IT",
    "maNXB": "TechPress"
  }'
```

### 4. Create Book (with image)
```bash
curl -X POST http://localhost:3000/api/books \
  -F "id=B002" \
  -F "tensach=Advanced JavaScript" \
  -F "giaban=300000" \
  -F "soluongton=30" \
  -F "mota=Master advanced JavaScript concepts" \
  -F "maCD=Programming" \
  -F "maNXB=InnovateTech" \
  -F "anhbia=@C:/path/to/image.jpg"
```

### 5. Update Book
```bash
curl -X PUT http://localhost:3000/api/books/B001 \
  -H "Content-Type: application/json" \
  -d '{
    "giaban": 280000,
    "soluongton": 45
  }'
```

### 6. Update Book (with new image)
```bash
curl -X PUT http://localhost:3000/api/books/B001 \
  -F "tensach=Node.js Pro Guide" \
  -F "giaban=350000" \
  -F "anhbia=@C:/path/to/new-image.jpg"
```

### 7. Delete Book
```bash
curl -X DELETE http://localhost:3000/api/books/B001
```

---

## JavaScript/Node.js Examples

### Using fetch API (Client-side)

#### Get All Books
```javascript
fetch('http://localhost:3000/api/books')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

#### Create Book with Image
```javascript
const formData = new FormData();
formData.append('id', 'B003');
formData.append('tensach', 'React Mastery');
formData.append('giaban', 320000);
formData.append('soluongton', 25);
formData.append('mota', 'Learn React from basics to advanced');
formData.append('maCD', 'Frontend');
formData.append('maNXB', 'WebDev Press');
formData.append('anhbia', fileInputElement.files[0]);

fetch('http://localhost:3000/api/books', {
  method: 'POST',
  body: formData
})
  .then(res => res.json())
  .then(data => console.log('Book created:', data))
  .catch(err => console.error('Error:', err));
```

#### Update Book
```javascript
const updateData = {
  giaban: 280000,
  soluongton: 60
};

fetch('http://localhost:3000/api/books/B001', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updateData)
})
  .then(res => res.json())
  .then(data => console.log('Book updated:', data))
  .catch(err => console.error('Error:', err));
```

#### Delete Book
```javascript
fetch('http://localhost:3000/api/books/B001', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(data => console.log('Book deleted:', data))
  .catch(err => console.error('Error:', err));
```

### Using axios (Node.js)

```javascript
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const baseURL = 'http://localhost:3000';

// Get all books
async function getAllBooks() {
  try {
    const res = await axios.get(`${baseURL}/api/books`);
    console.log('Books:', res.data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Create book with image
async function createBook() {
  try {
    const form = new FormData();
    form.append('id', 'B004');
    form.append('tensach', 'TypeScript Bible');
    form.append('giaban', 350000);
    form.append('soluongton', 40);
    form.append('mota', 'Complete TypeScript guide');
    form.append('maCD', 'Programming');
    form.append('maNXB', 'CodeMaster');
    form.append('anhbia', fs.createReadStream('./book-cover.jpg'));

    const res = await axios.post(`${baseURL}/api/books`, form, {
      headers: form.getHeaders()
    });
    console.log('Book created:', res.data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Get single book
async function getBook(id) {
  try {
    const res = await axios.get(`${baseURL}/api/books/${id}`);
    console.log('Book:', res.data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Update book
async function updateBook(id) {
  try {
    const res = await axios.put(`${baseURL}/api/books/${id}`, {
      giaban: 380000,
      soluongton: 35
    });
    console.log('Book updated:', res.data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Delete book
async function deleteBook(id) {
  try {
    const res = await axios.delete(`${baseURL}/api/books/${id}`);
    console.log('Response:', res.data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Run examples
getAllBooks();
```

---

## Postman Collection

Import this into Postman (save as `bookapi.postman_collection.json`):

```json
{
  "info": {
    "name": "Book Management API",
    "version": "1.0.0"
  },
  "item": [
    {
      "name": "Get All Books",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/api/books"
      }
    },
    {
      "name": "Get Book by ID",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/api/books/B001"
      }
    },
    {
      "name": "Create Book",
      "request": {
        "method": "POST",
        "url": "{{baseUrl}}/api/books",
        "body": {
          "mode": "formdata",
          "formdata": [
            {"key": "id", "value": "B001"},
            {"key": "tensach", "value": "Node.js Guide"},
            {"key": "giaban", "value": "250000"},
            {"key": "soluongton", "value": "50"},
            {"key": "mota", "value": "Book description"},
            {"key": "maCD", "value": "IT"},
            {"key": "maNXB", "value": "Publisher"},
            {"key": "anhbia", "type": "file", "src": "[image file]"}
          ]
        }
      }
    },
    {
      "name": "Update Book",
      "request": {
        "method": "PUT",
        "url": "{{baseUrl}}/api/books/B001",
        "body": {
          "mode": "formdata",
          "formdata": [
            {"key": "giaban", "value": "300000"},
            {"key": "soluongton", "value": "60"}
          ]
        }
      }
    },
    {
      "name": "Delete Book",
      "request": {
        "method": "DELETE",
        "url": "{{baseUrl}}/api/books/B001"
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:3000"
    }
  ]
}
```

---

## Sample Book Data

```javascript
const books = [
  {
    id: "B001",
    tensach: "Node.js Complete Guide",
    giaban: 250000,
    soluongton: 50,
    mota: "Learn Node.js from basics to advanced",
    maCD: "IT",
    maNXB: "TechPress"
  },
  {
    id: "B002",
    tensach: "Express.js in Action",
    giaban: 280000,
    soluongton: 35,
    mota: "Web development with Express framework",
    maCD: "Web Development",
    maNXB: "WebDev Press"
  },
  {
    id: "B003",
    tensach: "MongoDB Guide",
    giaban: 220000,
    soluongton: 45,
    mota: "Master MongoDB database",
    maCD: "Database",
    maNXB: "DataPress"
  }
];
```

---

## Testing Checklist

- [ ] Test GET all books
- [ ] Test GET single book
- [ ] Test POST create book (with & without image)
- [ ] Test PUT update book (with & without image)
- [ ] Test DELETE book
- [ ] Test duplicate ID validation
- [ ] Test missing required fields
- [ ] Test image file size limit (>5MB)
- [ ] Test invalid image format
- [ ] Test book not found scenario

