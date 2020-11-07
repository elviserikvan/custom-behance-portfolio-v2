require('dotenv').config();
let path = require('path');
let express = require('express');
let indexRoutes = require('./routes/index');
const PORT = 4000;

// Init app
let app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Set views folder
app.set('views', path.join(__dirname, 'views'));

// Set view engine
app.set('view engine', 'pug');

// Set routes
app.use('/', indexRoutes);

// Set port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
