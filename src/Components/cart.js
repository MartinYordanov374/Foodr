import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {MdLineWeight, MdClear, MdHome, MdInfo, MdPhone,MdCheck} from 'react-icons/md'
import './cart.css'
import $ from 'jquery'
import item from './Index'
function Cart() {
    const[products, setProducts] = useState([]);
    let x = JSON.parse(localStorage.getItem('products'))
    let counter = x.length
    let buttonProductsCounter = x.length

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
    const getItems=()=>{
            counter-=1
            if(counter<=x.length)
            {
                setProducts([...products, x])

            }

    }


    return (
        <div >
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
                <div className='products'>   
                        <div>
                            <Button onClick={getItems}> Show items in the cart ( {buttonProductsCounter} left to show )</Button>
                            {products.map((product, index)=>(
                                <div className='product'key={index}>
                                    <h2 className='productName'>{product[index].name}</h2>
                                    <img className = 'productImage' src={product[index].image}></img>
                                    <h2>${product[index].price}.00</h2>
                                </div>
                            ))}
                        </div>
                    
                     <Button variant='success' id='removeProductButton' className='removeProductButton' >
                         <span>
                             <strong>
                                    <MdCheck>
                                    </MdCheck>
                                        Finish your order
                             </strong>
                           </span>
                    </Button>
                </div>
            </div>
        </div>
    );

}


export default Cart;
