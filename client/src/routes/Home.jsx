import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";
import Navbar from "../components/layout/Navbar";
import Footer from"../components/layout/Footer";


const style = {
    backgroundColor: "F9F8F7",
}

const Home = () => {
    return (
        <div style={style}>
            <Navbar />
            <AddRestaurant />
            <RestaurantList />
            <Footer />
        </div>
    )
}

export default Home;
