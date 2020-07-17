const routes = require('express').Router();
const db = require('../db/index');


// Get all restaurants
routes.get("/api/v1/restaurants", async (req, res) => {
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
routes.get("/api/v1/restaurants/:id", async (req, res) => {
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
routes.post("/api/v1/restaurants", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO restaurants (name, cuisine, address) values ($1, $2, $3) returning *", 
        [req.body.name, req.body.cuisine, req.body.address]);
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
routes.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, cuisine = $2, address = $3 WHERE id = $4 returning *", 
        [req.body.name, req.body.cuisine, req.body.address, req.params.id]);
        
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
routes.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id])
        res.status(204).json({
            status:"success"
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = routes;




