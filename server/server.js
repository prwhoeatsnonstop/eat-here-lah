require('dotenv').config()

const express = require("express");
const cors = require("cors");
const db = require('./db')

const morgan = require("morgan");

const app = express();

// app.use(morgan("tiny"));

//passed in next argument to get access to the next function, the next function tells our request to send to the next middleware or to the final route
//Previously was middleware (not yet install morgan)
// app.use((req, res, next) => {
//     console.log("middleware setup");
//     next();
// });

app.use(cors());
app.use(express.json());

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants");

        console.log(results);
    
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params.id);
  
    try {
      const restaurant = await db.query(
        "select * from restaurants where id = $1",
        [req.params.id]
      );
      res.status(200).json({
        status: "succes",
        data: {
          restaurant: restaurant.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO restaurants (name, location, cuisine, address) values ($1, $2, $3, $4) returning *", 
        [req.body.name, req.body.location, req.body.cuisine, req.body.address]);
        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, cuisine = $3, address = $4 WHERE id = $5 returning *", 
        [req.body.name, req.body.location, req.body.cuisine, req.body.address, req.params.id]);
        
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            }
        });
    
    } catch (err) {
        console.log(err);
    }
    console.log(req.params.id);
    console.log(req.body);

});

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id])
        res.status(204).json({
            status:"success"
        });
    } catch (err) {
        console.log(err);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});