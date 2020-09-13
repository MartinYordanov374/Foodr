import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {MdClear, MdLineWeight} from 'react-icons/md'
import $ from 'jquery'
import './Index.css'

function Index()
{
    const showSideMenu=()=>
    {
        $('.sideMenu').css('width', '250px')
        $('body').css('backgroundColor', 'rgba(67,142,253,0.5)')
    }

    const hideSideMenu=()=>
    {
        $('.sideMenu').css('width', '0px')
        $('body').css('backgroundColor', 'rgba(67,142,253,1)')
    }
    return(
        <div>
             <div className='sideMenu'>
                <span className='hideSideBar'onClick={hideSideMenu}>
                    <MdClear></MdClear>
                </span>
                <h3 className='sideMenuTitle'>How can we help you?</h3>
                <LinkContainer to='/about'>
                    <Nav.Link className='aboutLink'>About us</Nav.Link>
                </LinkContainer>
            </div>
            <div className='mainContent'>
                <Navbar variant='dark' bg='primary' >
                    <Navbar.Brand>Home</Navbar.Brand>
                        
                        <Nav className='ml-auto'>
                            <LinkContainer to='/' exact>
                                <Nav.Link> Home </Nav.Link>
                            </LinkContainer>
                            <span className='showSideBar' onClick={showSideMenu}>
                                <MdLineWeight></MdLineWeight>
                            </span>
                        </Nav>

                </Navbar>
                <h1>Test</h1>
            </div>
        </div>
    )
}
export default Index;