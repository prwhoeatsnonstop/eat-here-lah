

//LANDINGPAGE PREVIOUS ONE IS ABOVE


import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hawkerfood from '../img/hawkerfood.jpeg';
import nightlife from '../img/nightlife.webp';
import zomato from '../img/zomato.webp';
import Footer from"../components/layout/Footer";

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

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Eat Here Lah!'
      inverted
      style={{
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        display: 'inline-block',
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Let us decide for you where to eat!'
      inverted
      style={{
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        display: 'inline-block',
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        
      }}
    />
    <Link to="/restaurants"><Button size='huge'>Click Here to see list of Restaurants!<Icon name='right arrow'></Icon></Button></Link>

   
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '3em 0em', backgroundColor: '#FF414D', backgroundImage:`url(${hawkerfood})`, backgroundSize: 'cover'}}
            vertical
          >
            {/* <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a'>
                  
                </Menu.Item>
                <Menu.Item as='a'></Menu.Item>
                <Menu.Item as='a'></Menu.Item>
                <Menu.Item position='right'>
                  
                </Menu.Item>
              </Container>
            </Menu> */}
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          {/* <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item> */}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em', backgroundColor: '#FF414D' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  {/* <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button> */}
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const LandingPage = () => (
  <ResponsiveContainer>
      {/* <Link to="/restaurants">
       <Card>
        <Image src='https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png' wrapped ui={false} width='800'/>
        <Card.Content>
          <Card.Header>Go out for a meal</Card.Header>
          <Card.Meta>Nom Nom</Card.Meta>
          <Card.Description>
            Explore restaurants in Singapore near you!
          </Card.Description>
        </Card.Content>
        
      </Card>
      </Link> */}


    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text>

    
      <div className='card'>
      <Link to="/restaurants">
        <Card>
          <Image src={zomato} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Go out for a meal</Card.Header>
              <Card.Meta>Nom Nom</Card.Meta>
              <Card.Description>
                Explore restaurants near you!
              </Card.Description>
            </Card.Content>
        </Card>
      </Link>
      </div>

      <div className='card'>
      <Link to="/restaurants">
        <Card >
          <Image src={nightlife} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Need a spot to chillax?</Card.Header>
              <Card.Meta>Bars and music</Card.Meta>
              <Card.Description>
                Locate the nearest bar!
              </Card.Description>
            </Card.Content>
        </Card>
      </Link>
      </div>

        {/* <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button> */}
      </Container>
    </Segment>

    <Footer />
  </ResponsiveContainer>
)

export default LandingPage