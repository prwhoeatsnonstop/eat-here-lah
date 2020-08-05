import React, {useState, createContext} from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState([null]);

    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant]);
    };

    // const updateRestaurants = (restaurant) => {
    //     selectedRestaurant([...restaurants, restaurant]);
    // };

    // const selectRestaurant = (restaurant) => {
    //     setSelectedRestaurant([...restaurants, restaurant]);
    // };

    return(
        <RestaurantsContext.Provider value={{
            restaurants, 
            setRestaurants,
            addRestaurants,
            selectedRestaurant,
            setSelectedRestaurant,
            }}
        >
            {props.children}
        </RestaurantsContext.Provider>
    )
}

