import React, {useEffect, useContext} from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory, Link } from "react-router-dom";
import RandomiseRestaurant from "../components/RandomiseRestaurant";
import Footer from"../components/layout/Footer";
// import UpdateForm from "../components/UpdateForm";

import {
    Button,
    Card,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react';


//passing an empty array will help to ensure useEffect will only run when component mounts and not everytime when a component reloads
const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);

    let history = useHistory();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await RestaurantFinder.get("/");
          setRestaurants(response.data.data.restaurants);
        } catch (err) {
            console.log(err);
        }
      };
  
      fetchData();
    }, []);

const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
        const response = await RestaurantFinder.delete(`/${id}`);
        setRestaurants(restaurants.filter(restaurant => {
            return restaurant.id !== id;
        }));
    } catch (err) {
        console.log(err);
    }
}


const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`)
};

const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`)
}

const cardStyle = {
    marginBottom:'20px' 
}

    return (

        <div class="RestaurantList">
            <h1>Dine Out Restaurants in Singapore</h1>
        <div>
            <div class="list-group">
                {restaurants && restaurants.map(restaurant => {
                    return (
                        <div>
                            <Card style={cardStyle}>
                            {/* <Image src={zomato} wrapped ui={false} /> */}
                                <Card.Content>
                                <Card.Header>Name: {restaurant.name}</Card.Header>
                                <Card.Meta>Cuisine: {restaurant.cuisine}</Card.Meta>
                                <Card.Description>
                                    Address: {restaurant.address}
                                </Card.Description>
                                <button
                                    onClick={(e) => handleUpdate(e, restaurant.id)}
                                    class="ui button"
                                >
                                    Update
                                </button>
                                <button 
                                    onClick={(e) => handleDelete(e, restaurant.id)} 
                                    class="ui button"
                                >
                                    Delete
                                </button>
                                </Card.Content>
                            </Card>
                        </div>
                    )
                })}
            </div>
               
            <div>
                <RandomiseRestaurant />
            </div>

        </div>
           
        </div>

        
        

    )
}

export default RestaurantList
