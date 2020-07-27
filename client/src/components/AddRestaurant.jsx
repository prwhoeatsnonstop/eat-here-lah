import React, { useState } from "react"
import RestaurantFinder from "../apis/RestaurantFinder"
import { useContext } from "react"
import { RestaurantsContext } from "../context/RestaurantsContext"
import { Form, Segment } from 'semantic-ui-react'


const AddRestaurant = () => {
    const {addRestaurants} = useContext(RestaurantsContext)
    const [name, setName] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [address, setAddress] = useState("")

    //e.preventDefault() is to pevent the page from reloading
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post("/", {
                name,
                cuisine,
                address
            })
            addRestaurants(response.data.data.restaurant);
            console.log(response);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
        <Segment style={{backgroundColor: '#FFEBCD'}}>
        <h2>Add More Restaurants To Your List!</h2>
        <Form>
            <Form.Group widths='equal'>

                <Form.Input 
                    fluid label="Name" 
                    placeholder="Restaurant name"
                    onChange={(e) => setName(e.target.value)} 
                />

                <Form.Input 
                        fluid label="Cuisine" 
                        placeholder="Cuisine"
                        onChange={(e) => setCuisine(e.target.value)} 
                />

                <Form.Input 
                    fluid label="Address" 
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)} 
                />

            </Form.Group>
                <Form.Button onClick={handleSubmit} type="submit">Add</Form.Button>
        </Form>
        </Segment>
        </div>
    )
}

export default AddRestaurant
