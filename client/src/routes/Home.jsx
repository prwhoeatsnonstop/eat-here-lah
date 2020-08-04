import React from "react";
import AddForm from "../components/AddForm";
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
            <AddForm />
            <RestaurantList />
            <Footer />
        </div>
    )
}

export default Home;
