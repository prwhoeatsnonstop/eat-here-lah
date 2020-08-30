import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import Navbar from "../components/layout/Navbar";
import Footer from"../components/layout/Footer";
import {Link } from "react-router-dom";
import {
    Menu
  } from 'semantic-ui-react'


import {
    Card
  } from 'semantic-ui-react'


const style = {
    marginBottom: "370px",
}

const RestaurantDetailPage = () => {
    const {id} = useParams();
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`);
                setSelectedRestaurant(response.data.data.restaurant);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [])

    return (
        <div>
            <Navbar />
            <div>
                <Card style={style}>
                    {/* <Image src={zomato} wrapped ui={false} /> */}
                        <Card.Content>
                        <Card.Header>Name: {selectedRestaurant && selectedRestaurant.name}</Card.Header>
                        <Card.Meta>Cuisine: {selectedRestaurant && selectedRestaurant.cuisine}</Card.Meta>
                        <Card.Description>
                            Address: {selectedRestaurant && selectedRestaurant.address}
                        </Card.Description>
                        </Card.Content>
                </Card>

                <Link to="/restaurants">
                <Menu.Item
                    name='Back to Main Page'
                />
            </Link>
            </div>
           
                {/* {selectedRestaurant && selectedRestaurant.name} */}
            <Footer />
        </div>
    )
}

export default RestaurantDetailPage


  



