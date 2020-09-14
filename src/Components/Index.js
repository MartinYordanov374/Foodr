import React, {useState, useRef, useEffect} from 'react';
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
    

    const[product, setProduct] = useState([])
    const buyBurger = useRef()
    const buyPizza = useRef()

    const showSideMenu=()=>
    {
        $('.sideMenu').css('width', '250px')
        $('.mainContent').css('marginLeft', '250px')

        $('body').css('backgroundColor', ' rgba(170, 0, 255, 0.6)')

    }

    const hideSideMenu=()=>
    {
        $('.sideMenu').css('width', '0px')
        $('.sideMenu').css('marginLeft', '0px')
        $('.mainContent').css('marginLeft', '0px')
        

        $('body').css('backgroundColor', 'rgba(170, 0, 255, 1)')

    }
    const purchaseBurger=()=>
    {
        let burgerText = document.getElementById('burgerTitle')
        setProduct([...product,{
            id: product.length,
            item: burgerText.innerText
        }])
    }
    const purchasePizza=()=>
    {
        let pizzaText = document.getElementById('pizzaTitle')
        setProduct([...product,{
            id: product.length,
            item: pizzaText.innerText
        }])
    }
    useEffect(()=>{
        let productsInCart =localStorage.setItem('productsInCart', JSON.stringify(product))
        console.log(localStorage)
    })


   
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
                            <LinkContainer to='/cart' className='goToCartPage'>
                                <Nav.Link>
                                    <MdShoppingCart></MdShoppingCart>
                                </Nav.Link>
                            </LinkContainer>
                            <span className='showSideBar' onClick={showSideMenu}>
                                <MdLineWeight></MdLineWeight>
                            </span>
                            
                        </Nav>

                </Navbar>
                <div className='foodList'>
                    <div className='Burger'>
                        <img src={Burger}  id='burger'></img>
                    </div>
                    <h3  ref={buyBurger} className='burgetTitle' id='burgerTitle'>Burger</h3>
                    <h4><strong>$ 25.00</strong></h4>
                    <Button variant='warning' onClick={purchaseBurger}><strong><MdShoppingCart></MdShoppingCart> Purchase now</strong></Button>
                    
                </div>
                <br></br>
                <div className='foodList'>
                    <div className='Burger'>
                        <img src={Pizza} ref={buyPizza} id='pizza'></img>
                    </div>
                    <h3 ref={buyPizza} className='pizzaTitle' id='pizzaTitle'>Pizza</h3>
                    <h4><strong>$ 25.00</strong></h4>
                    <Button variant='warning' onClick={purchasePizza}><strong><MdShoppingCart></MdShoppingCart> Purchase now</strong></Button>
                    
                </div>
            </div>
        </div>
    )
}
export default Index;
