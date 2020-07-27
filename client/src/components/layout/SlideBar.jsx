import React from 'react';
import { Input, Menu, Sidebar } from 'semantic-ui-react';
import { Link } from "react-router-dom";


const SlideBar = () => {
    return (
        <div class="ui left visible sidebar">
            <a class="item">
                <i class="home icon"></i>
                    Home
            </a>
            <a class="item">
                <i class="block layout icon"></i>
                    Topics
            </a>
            <a class="item">
                <i class="smile icon"></i>
                    Friends
            </a>
        </div>
    )
}

export default SlideBar;


