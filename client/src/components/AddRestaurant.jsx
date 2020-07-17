import React, { useState } from "react"
import RestaurantFinder from "../apis/RestaurantFinder"
import { useContext } from "react"
import { RestaurantsContext } from "../context/RestaurantsContext"
import { Form } from 'semantic-ui-react'


const options = [
    { key: 'c', text: 'Central', value: 'central' },
    { key: 'n', text: 'North', value: 'north' },
    { key: 's', text: 'South', value: 'south' },
    { key: 'e', text: 'East', value: 'east' },
    { key: 'w', text: 'West', value: 'west' },
  ]

const AddRestaurant = () => {
    const {addRestaurants} = useContext(RestaurantsContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("Location")
    const [cuisine, setCuisine] = useState("")
    const [address, setAddress] = useState("")

    //e.preventDefault() is to pevent the page from reloading
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post("/", {
                name,
                location,
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
        <Form>
            <Form.Group widths='equal'>
                <Form.Input 
                    fluid label="name" 
                    placeholder="Restaurant name"
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                />

                <Form.Select
                    fluid
                    label='location'
                    options={options}
                    placeholder='Location'
                />
                <Form.Input 
                        fluid label="cuisine" 
                        placeholder="Cuisine"
                        onChange={(e) => setName(e.target.value)} 
                        type="text" 
                />
                <Form.Input 
                    fluid label="address" 
                    placeholder="Address"
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                />
            </Form.Group>
                <Form.Button onClick={handleSubmit} type="submit">Add</Form.Button>
        </Form>
    )
}

export default AddRestaurant
