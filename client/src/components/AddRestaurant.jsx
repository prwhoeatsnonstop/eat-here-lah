import React, { useState } from "react"
import { Button } from 'semantic-ui-react'
import RestaurantFinder from "../apis/RestaurantFinder"
import { useContext } from "react"
import { RestaurantsContext } from "../context/RestaurantsContext"

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
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        placeholder="Restaurant name"/>
                    </div>
                    <div className="col">
                        <select  
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        className="custom-select my-1 mr-sm-2">
                            <option disabled>Location</option>
                            <option value="Central">Central</option>
                            <option value="North">North</option>
                            <option value="South">South</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                        </select>
                    </div>
                    <div className="col">
                        <input  
                        value={cuisine} 
                        onChange={(e) => setCuisine(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        placeholder="Cuisine"/>
                    </div>
                    <div className="col">
                        <input  
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        placeholder="Address"/>
                    </div>
                    <button onClick={handleSubmit} type="submit" class="ui button">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
