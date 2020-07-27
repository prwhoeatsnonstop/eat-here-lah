import React from 'react';
import { Link } from "react-router-dom";
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
  } from 'semantic-ui-react'

const Footer = () => {
    return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>

            <Grid.Column width={3}>
              <Header inverted as='h4' content='Company' />
              <List link inverted>
                <List.Item as='a'>About</List.Item>
                <List.Item as='a'>Blog</List.Item>
                <List.Item as='a'>Careers</List.Item>
                <List.Item as='a'>Report Fraud</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as='h4' content='For Foodies' />
              <List link inverted>
                <List.Item as='a'>Code of Conduct</List.Item>
                <List.Item as='a'>Community</List.Item>
                <List.Item as='a'>Blogger Help</List.Item>
                <List.Item as='a'>Developers</List.Item>
                <List.Item as='a'>Mobile Apps</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as='h4' content='For Restaurants' />
              <List link inverted>
                <List.Item as='a'>Add Restaurant</List.Item>
                <List.Item as='a'>Claim Your Listing</List.Item>
                <List.Item as='a'>Business App</List.Item>
                <List.Item as='a'>Restaurant Widgets</List.Item>
                <List.Item as='a'>Product For Businesses</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as='h4' content='For You' />
              <List link inverted>
                <List.Item as='a'>Privacy</List.Item>
                <List.Item as='a'>Terms</List.Item>
                <List.Item as='a'>Security</List.Item>
                <List.Item as='a'>Sitemap</List.Item>
              </List>
            </Grid.Column>

            {/* <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column> */}

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    )
}

export default Footer;


