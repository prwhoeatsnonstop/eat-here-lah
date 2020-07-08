require('dotenv').config()

const express = require("express");

const app = express();

//passed in next argument to get access to the next function, the next function tells our request to send to the next middleware or to the final route
app.use((req, res, next) => {
    console.log("middleware setup");
    next();
});

// Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "Mcdonalds"
        }
    })
});

// Get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
});

// Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log("restaurant created");
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});