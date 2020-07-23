import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";
import Navbar from "../components/layout/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar />
            <AddRestaurant />
            <RestaurantList />
        </div>
    )
}

export default Home;
