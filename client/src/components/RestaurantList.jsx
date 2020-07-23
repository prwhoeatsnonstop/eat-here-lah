import React, {useEffect, useContext} from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory, Link } from "react-router-dom";

import {   Button,
    Container,
    Dropdown,
    Grid,
    Header,
    Icon,
    Menu,
    Message } from 'semantic-ui-react';



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

    return (

        <div className="list-group">
            {/* <Link to="/"><Button>Back To Home Page</Button></Link> */}
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Cuisine</th>
                        <th scope="col">Address</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(restaurant => {
                        return(
                                <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.cuisine}</td>
                                    <td>{restaurant.address}</td>
                                    <td>
                                        <button
                                            onClick={(e) => handleUpdate(e, restaurant.id)}
                                            class="ui button"
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={(e) => handleDelete(e, restaurant.id)} 
                                            class="ui button"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>

        
        

    )
}

export default RestaurantList
