const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the dashboard
app.get('/', (req, res) => {
    res.render('dashboard');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
