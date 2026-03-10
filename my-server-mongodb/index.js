const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

// Middleware
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// Routes
const bookRoutes = require('./routes/books');

// Home API
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Book Management API',
    version: '1.0.0',
    endpoints: {
      books: {
        getAll: 'GET /api/books',
        getById: 'GET /api/books/:id',
        create: 'POST /api/books',
        update: 'PUT /api/books/:id',
        delete: 'DELETE /api/books/:id'
      }
    }
  });
});

app.get('/about', (req, res) => {
  const tbl = `
    <table border='1'>
      <tr>
        <td>API:</td><td>Book Management API</td>
      </tr>
      <tr>
        <td>Version:</td><td>1.0.0</td>
      </tr>
      <tr>
        <td>Database:</td><td>MongoDB with Mongoose</td>
      </tr>
      <tr>
        <td>Features:</td><td>CRUD Operations + Image Upload</td>
      </tr>
    </table>
  `;
  res.send(tbl);
});

// API Routes
app.use('/api/books', bookRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

// Start server
app.listen(port, () => {
  console.log(`✓ Book Management API Server running at http://localhost:${port}`);
  console.log(`✓ API Documentation: http://localhost:${port}/`);
});
app.get("/create-cookie",cors(),(req,res)=>{
res.cookie("username","tranduythanh")
res.cookie("password","123456")
account={"username":"tranduythanh",
"password":"123456"}
res.cookie("account",account)
res.send("cookies are created")
})
app.get("/read-cookie",cors(),(req,res)=>{
//cookie is stored in client, so we use req
res.send(req.cookies)
})
app.get("/read-cookie",cors(),(req,res)=>{
//cookie is stored in client, so we use req
username=req.cookies.username
password=req.cookies.password
account=req.cookies.account
infor="username = "+username+"<br/>"
infor+="password = "+password+"<br/>"
infor+="account.username = "+account.username+"<br/>"
infor+="account.password = "+account.password+"<br/>"
res.send(infor)
})
//Expires after 360000 ms from the time it is set.
res.cookie("infor_limit1", 'I am limited Cookie - way 1', {expire: 360000 +
Date.now()});
res.cookie("infor_limit2", 'I am limited Cookie - way 2', {maxAge: 360000});
app.get("/read-cookie",cors(),(req,res)=>{
//cookie is stored in client, so we use req
username=req.cookies.username
password=req.cookies.password
account=req.cookies.account
infor="username = "+username+"<br/>"
infor+="password = "+password+"<br/>"
if(account!=null)
{
infor+="account.username = "+account.username+"<br/>"
infor+="account.password = "+account.password+"<br/>"
}
res.send(infor)
})