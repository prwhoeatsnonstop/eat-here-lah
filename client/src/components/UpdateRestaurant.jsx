import React, { useState, useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = (props) => {
    const { id } = useParams();

    let history = useHistory();
    
    const { restaurants } = useContext(RestaurantsContext);

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            const response = await RestaurantFinder.get(`/${id}`);
            console.log(response.data.data);
            setName(response.data.data.restaurant.name)
            setLocation(response.data.data.restaurant.location)
            setCuisine(response.data.data.restaurant.cuisine)
            setAddress(response.data.data.restaurant.address)
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant = await RestaurantFinder.put(`${id}`, {
            name,
            location,
            cuisine,
            address
        });
        history.push("/")
    };

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        id="name" 
                        className="form-control" 
                        type="text"
                    />
                </div>

                <div>
                    <select 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        className="custom-select my-1 mr-sm-2"
                    >
                        <option disabled>Location</option>
                        <option value="Central">Central</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="East">East</option>
                        <option value="West">West</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="cuisine">Cuisine</label>
                    <input 
                        value={cuisine} 
                        onChange={(e) => setCuisine(e.target.value)} 
                        id="cuisine" className="form-control" 
                        type="text"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        id="address" 
                        className="form-control" 
                        type="text"
                    />
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default UpdateRestaurant;
