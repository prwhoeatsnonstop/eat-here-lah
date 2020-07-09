import React, {useEffect, useContext} from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";



//passing an empty array will help to ensure useEffect will only run when component mounts and not everytime when a component reloads
const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
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

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Cuisine</th>
                        <th scope="col">Address</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(restaurant => {
                        return(
                                <tr key={restaurant.id}>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.location}</td>
                                    <td>{restaurant.cuisine}</td>
                                    <td>{restaurant.address}</td>
                                    <td><button className="btn btn-warning">Update</button></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                        )
                    })}
                    {/* <tr>
                        <td>mcd</td>
                        <td>central</td>
                        <td>fast food</td>
                        <td>mcd</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
