import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {MdShoppingCart,MdClear, MdLineWeight} from 'react-icons/md'
import $ from 'jquery'
import './Index.css'
import Burger from './Images/Burger.png'
import Pizza from './Images/Pizza.png'

function Index()
{
    const showSideMenu=()=>
    {
        $('.sideMenu').css('width', '250px')
        $('body').css('backgroundColor', ' rgba(170, 0, 255, 0.6)')
    }

    const hideSideMenu=()=>
    {
        $('.sideMenu').css('width', '0px')
        $('body').css('backgroundColor', 'rgba(170, 0, 255, 1)')
    }
    return(
        <div>
             <div className='sideMenu'>
                <span className='hideSideBar'onClick={hideSideMenu}>
                    <MdClear></MdClear>
                </span>
                <h3 className='sideMenuTitle'>How can we help you?</h3>
                <LinkContainer to='/about'>
                    <Nav.Link className='sideLink'>About us</Nav.Link>
                </LinkContainer>
                <br></br>
                <br></br>

                <LinkContainer to='/'>
                    <Nav.Link className='sideLink'>Contact Us</Nav.Link>
                </LinkContainer>
            </div>
            <div className='mainContent'>
                <Navbar variant='dark' bg=''>
                    <Navbar.Brand>Home</Navbar.Brand>
                        
                        <Nav className='ml-auto'>
                           
                            <span className='showSideBar' onClick={showSideMenu}>
                                <MdLineWeight></MdLineWeight>
                            </span>
                        </Nav>

                </Navbar>
                <div className='foodList'>
                    <div className='Burger'>
                        <img src={Burger}></img>
                    </div>
                    <h4><strong>$ 25.00</strong></h4>
                    <Button variant='warning'><strong><MdShoppingCart></MdShoppingCart> Purchase now</strong></Button>
                    
                </div>
                <br></br>
                <div className='foodList'>
                    <div className='Burger'>
                        <img src={Pizza}></img>
                    </div>
                    <h4><strong>$ 25.00</strong></h4>
                    <Button variant='warning'><strong><MdShoppingCart></MdShoppingCart> Purchase now</strong></Button>
                    
                </div>
            </div>
        </div>
    )
}
export default Index;
