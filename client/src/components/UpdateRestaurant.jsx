import React, { useState, useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import { Form } from 'semantic-ui-react'


const UpdateRestaurant = (props) => {
    const { id } = useParams();

    let history = useHistory();
    
    const { restaurants } = useContext(RestaurantsContext);

    const [name, setName] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            const response = await RestaurantFinder.get(`/${id}`);
            console.log(response.data.data);
            setName(response.data.data.restaurant.name)
            setCuisine(response.data.data.restaurant.cuisine)
            setAddress(response.data.data.restaurant.address)
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant = await RestaurantFinder.put(`${id}`, {
            name,
            cuisine,
            address
        });
        history.push("/")
    };

    return (
        
        <Form>
        <Form.Group widths='equal'>

            <Form.Input 
                fluid label="Name" 
                onChange={(e) => setName(e.target.value)} 
                value={name}
            />

            <Form.Input 
                    fluid label="Cuisine" 
                    onChange={(e) => setCuisine(e.target.value)} 
                    value={cuisine}
            />

            <Form.Input 
                fluid label="Address" 
                onChange={(e) => setAddress(e.target.value)} 
                value={address}
            />
            
        </Form.Group>
            <Form.Button onClick={handleSubmit} type="submit">Update</Form.Button>
        </Form> 

    )
}

export default UpdateRestaurant;
