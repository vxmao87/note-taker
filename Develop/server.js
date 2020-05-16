// Import the "express" dependency
const express = require("express");

// Initializing Express and the port
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware required to handle JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware required to serve static files
app.use(express.static('public'));

// Routes for both HTML and API are called here
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listen for input coming through the port
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});