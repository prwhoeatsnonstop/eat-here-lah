import PropTypes from "prop-types";
import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import fiveguys from '../img/fiveguys.png';


import ImageCarousel from "../examples/ImageCarousel";
import CardCarousel from "../examples/CardCarousel";


import {
  Button,
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
  Visibility
} from "semantic-ui-react";
import Navbar from "./layout/Navbar";

const container = {
  fontWeight: 'normal',
  marginBottom: 0
}

const header = {
  fontWeight: 'normal'
}

const backgroundColor = {
  backgroundColor:"#9F8878"
}

const LandingPage = () => {

  return (

    <div className="landingpage">
      <Navbar />

      <Container text className="landing-page-container" style={{backgroundImage:`url(${fiveguys})`}}>
        <Header
          as='h1'
          content='Eat-Here-Lah'
          inverted
          style={container}
        />
        <Header
          as='h2'
          content='Discover where to eat based on your choices!'
          inverted
          style={header}
        />
        <Link to="/restaurants"><Button primary size='huge'>Click Here to see list of Restaurants!<Icon name='right arrow'></Icon></Button></Link>

 
  </Container>
    {/* previous container style with margin */}
      {/* <Container style={{ margin: 20 }} > */}

      <Container style={backgroundColor}>

        <Segment style={backgroundColor} attached="top" >
          <Header as="h2" content="Nom Nom" />
          <p>
            Welcome to Eat-Here-Lah!
          </p>
          <Link to="/restaurants"><Button>Click Here to see list of Restaurants!</Button></Link>

        </Segment>
        <Segment style={backgroundColor} attached="bottom">
          <ImageCarousel />
        </Segment>

      </Container>

      

    </div>

  )
};





export default LandingPage;