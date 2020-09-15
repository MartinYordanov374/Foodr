import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {MdLineWeight, MdClear} from 'react-icons/md'
import './cart.css'
import $ from 'jquery'
function cart() {
    const showSideNav =()=>
    {
        $('.sideNavMenu').css('width', '250px')
    }
    return (
        <div>
            <div className='sideNavMenu'>
                <span>
                    <MdClear></MdClear>
                </span>
                <h3>How can we help you?</h3>

                <LinkContainer to='/home'>
                    <Nav.Link>
                        Home
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/home'>
                    <Nav.Link>
                        About us
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/home'>
                    <Nav.Link>
                        Contact us
                    </Nav.Link>
                </LinkContainer>
            </div>
            <Navbar variant='dark'>
                <Navbar.Brand>Test</Navbar.Brand>
                <Nav className='ml-auto'>
                    <span className='showSideNavButton' onClick={showSideNav}>
                        <MdLineWeight></MdLineWeight>
                    </span>
                </Nav>
            </Navbar>
            
        </div>
    );
}

export default cart;