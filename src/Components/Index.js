import React, {useState, useRef, useEffect} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {LinkContainer} from 'react-router-bootstrap'
import {MdShoppingCart,MdClear, MdLineWeight, MdPhone, MdInfo} from 'react-icons/md'
import $ from 'jquery'
import './Index.css'
import Burger from './Images/Burger.png'
import Pizza from './Images/Pizza.png'
function Index()
{
    
    let[product, setProduct] = useState([])
    const[item] = useState([{
        name: 'Burger',
        image: '/static/media/Burger.bcd6f0a3.png',
        id: 0,
        price: 16.00
    },
    {
        name: 'Pizza',
        image: '/static/media/Pizza.07b5b3c1.png',
        id: 1,
        price: 20.00
    }])
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
    const addToCart=(item)=>
    {
        $('.showItems').text(product.length)
        setProduct([...product, item])
        localStorage.setItem('products', JSON.stringify(product))
        
    }
    const clearCart=()=>
    {
        product = []
        $('.yourCart').hide()
        $('.showItems').text(product.length)
    }
    const removeItem=(id)=>
    {
        const index = product.findIndex(prod => prod.id === id); //use id instead of index
        if (index > -1) { //make sure you found it
            setProduct(prevState => prevState.splice(index, 1));
    }   


    }

    return(
        <div>
             <div className='sideMenu'>
                <span className='hideSideBar'onClick={hideSideMenu}>
                    <MdClear></MdClear>
                </span>
                <h3 className='sideMenuTitle'>How can we help you?</h3>
                <LinkContainer to='/about'>
                    <Nav.Link className='sideLink'><MdInfo></MdInfo> About us</Nav.Link>
                </LinkContainer>
                <br></br>
                <br></br>

                <LinkContainer to='/'>
                    <Nav.Link className='sideLink'><MdPhone></MdPhone> Contact Us</Nav.Link>
                </LinkContainer>
                <div>
                    
                    <div>
                    <h3 className='sideMenuCart'><MdShoppingCart className='shoppingCart'></MdShoppingCart> Your cart</h3>
                    <Button variant='danger' className='removeButton' onClick={()=>clearCart()}>Clear cart</Button>

                    {product.map((item, idx)=>
                    <div className='yourCart' key={idx}>
                        <hr></hr>
                        <div>
                            <img src ={item.image}></img>
                            <h3 className='burgerTitle'>{item.name}</h3>
                            <h4><strong>$ {item.price}.00</strong></h4>
                            <Button variant='danger' onClick={()=>removeItem(item.id)}>Remove</Button>
                        </div>
                        <br></br>
                  </div>)}

                    </div>
                </div>
            </div>
            <div className='mainContent'>
                <Navbar variant='dark' bg=''>
                    <Navbar.Brand>Home</Navbar.Brand>
                        
                        <Nav className='ml-auto'>

                            <span className='showSideBar' onClick={showSideMenu}>
                                <MdLineWeight></MdLineWeight>
                            </span>
                                   
                        </Nav>
                        <div className='itemsContainer' onClick={showSideMenu}>
                            <MdShoppingCart></MdShoppingCart>
                            <span className='showItems'>
                                <span className='showItemsText'>0</span>
                            </span>
                        </div>
                </Navbar>

                <div className='foodList'>
                  {item.map((item, idx)=>
                  <div className={item.name} key={idx}>
                        <img src ={item.image}></img>
                        <h3 className='burgerTitle'>{item.name}</h3>
                        <h4><strong>$ {item.price}.00</strong></h4>
                        <Button variant='warning' className ='purchaseButton' onClick={()=>addToCart(item)} key={idx}>
                            <strong>
                                <MdShoppingCart></MdShoppingCart>
                                Add to cart
                            </strong>
                        </Button>
                        <br></br>
                  </div>)}
                  
                </div>
               
            </div>
        </div>
        
    )
}
export default Index;
