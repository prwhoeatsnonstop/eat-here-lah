import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <Menu secondary style={{backgroundColor: '#D3C2B4'}}>
            <Link to="/">
                <Menu.Item
                    name='Home'
                />
            </Link>

            <Link to="#">
                <Menu.Item
                    name='About'
                />
            </Link>

            <Link to="#">
                <Menu.Item
                    name='Contact'
                />
            </Link>

                <Menu.Menu position='right'>

            <Link to="#">
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            </Link>

            <Link to="#">
                <Menu.Item
                    name='logout'
                />
            </Link>
                </Menu.Menu>
        </Menu>
    )
}

export default Navbar;


