const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

// Use Helmet to add security headers
app.use(helmet());

// Add X-Content-Type-Options
app.use(helmet.noSniff());

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Port where your application will start listening
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});