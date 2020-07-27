import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";
import Navbar from "../components/layout/Navbar";
import Footer from"../components/layout/Footer";


const Home = () => {
    return (
        <div style={{backgroundColor: '#F9F8F7'}}>
            <Navbar />
            <AddRestaurant />
            <RestaurantList />
            <Footer />
        </div>
    )
}

export default Home;
