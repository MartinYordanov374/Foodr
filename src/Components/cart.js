import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {MdLineWeight, MdClear, MdHome, MdInfo, MdPhone} from 'react-icons/md'
import './cart.css'
import $ from 'jquery'
function cart() {
    const showSideNav =()=>
    {
        $('.sideNavMenu').css('width', '250px')
        $('.mainContent').css('marginLeft', '250px')
        $('.mainContent').css('opacity', '0.6')


    }
    const hideSideNav =()=>
    {
        $('.sideNavMenu').css('width', '0px')
        $('.mainContent').css('marginLeft', '0px')
        $('.mainContent').css('opacity', '1')


    }
    return (
        <div>
            <div className='sideNavMenu'>
                <span onClick={hideSideNav} className='hideSideNavButton'>
                    <MdClear></MdClear>
                </span>
                <h3 className='sideNavHeading'>How can we help you?</h3>

                <LinkContainer className='sideNavLink' to='/home'>
                    <Nav.Link>
                        <MdHome></MdHome> Home
                    </Nav.Link>
                </LinkContainer>
                <br></br>
                <br></br>
                <LinkContainer className='sideNavLink' to='/home'>
                    <Nav.Link>
                        <MdInfo></MdInfo> About us
                    </Nav.Link>
                </LinkContainer>
                <br></br>
                <br></br>

                <LinkContainer className='sideNavLink' to='/home'>
                    <Nav.Link>
                        <MdPhone></MdPhone> Contact us
                    </Nav.Link>
                </LinkContainer>
            </div>
            <div className='mainContent'>

            
                <Navbar variant='dark'>
                    <Navbar.Brand>Your Cart</Navbar.Brand>
                    <Nav className='ml-auto'>
                        <span className='showSideNavButton' onClick={showSideNav}>
                            <MdLineWeight></MdLineWeight>
                        </span>
                    </Nav>
                </Navbar>
            </div>
            
        </div>
    );
}

export default cart;
