import React from "react";
import AddForm from "../components/AddForm";
// import RandomiseForm from "../components/RandomiseForm";
import RestaurantList from "../components/RestaurantList";
import RandomiseRestaurant from "../components/RandomiseRestaurant";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
//import SearchForm from "../components/SearchForm";


const style = {
    backgroundColor: "F9F8F7"
}

const Home = () => {
    return (
        <div style={style}>
            <Navbar />
            <AddForm />
            <RestaurantList />
            <RandomiseRestaurant />
            <Footer />
        </div>
    )
}

export default Home;
