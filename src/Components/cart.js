import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {MdLineWeight, MdClear, MdHome, MdInfo, MdPhone} from 'react-icons/md'
import './cart.css'
import Burger from './Images/Burger.png'
import Pizza from './Images/Pizza.png'
import $ from 'jquery'
function Cart() {
    const[products, setProducts] = useState([]);

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
    const checkName = ()=>
    {
        if($('.productName').text()==='Pizza')
        {
            $('.productImage').attr('src','/static/media/Pizza.07b5b3c1.png')
        }
        if($('.productName').text()==='Burger')
        {
            $('.productImage').attr('src','/static/media/Burger.bcd6f0a3.png')
        }
    }
    const removeItem=()=>
    {
        sessionStorage.clear()
        if(sessionStorage.length === 0)
        {
          window.close()
          window.open('/home')
        }
    }
    const showPrice=()=>
    {
        if($('.productName').text()==='Pizza')
        {
            $('.showPrice').text('$20.00')
        }
        if($('.productName').text()==='Burger')
        {
            $('.showPrice').text('$16.00')
        }
    }
    useEffect(()=>{
        const productsInCart = JSON.parse(sessionStorage.getItem('productsInCart'))
        setProducts(productsInCart)
    }, [])
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
                <div className='products' onLoad={checkName}>
                    
                    {products.map(product=>
                        <div className='product' onLoad={showPrice} key={product.id}>
                            <strong className='productName'>{product.item}</strong>
                            <img src={Burger} className='productImage'></img>
                            <span className='showPrice'>0.00</span>
                        </div>)
                        }
                     <Button variant='danger' id='removeProductButton' className='removeProductButton' onClick={removeItem}>
                         <span>
                             <strong>
                                    <MdClear>
                                    </MdClear>
                                        Clear your cart
                             </strong>
                           </span>
                    </Button>
                </div>
            </div>
            
        </div>

    );

}


export default Cart;
