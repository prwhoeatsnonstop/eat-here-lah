import React, {useEffect, useContext} from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory, Link } from "react-router-dom";

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
const RandomiseRestaurant = (props) => {
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

// START OF RANDOMISE RESTAURANT CHUNK
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

const shuffledRestaurants = shuffleArray(restaurants);

const randomRestaurant = 
shuffledRestaurants.map((restaurant) => {
    return (
        <Link to={`/restaurants/${restaurant.id}`}><Button size='huge'>Click Here For A Random List of restaurant if you do not know where to go for a meal!<Icon name='right arrow'></Icon></Button></Link>
    );
});

const randomise = randomRestaurant[0];
// END OF RANDOMISE RESTAURANT CHUNK

    return (
 
            <div>
                {randomise}
            </div> 

    )
}

export default RandomiseRestaurant
