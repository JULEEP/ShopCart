import React from 'react'
import { Link } from 'react-router-dom'
//import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <div className='logo'>
          <h3>ShopCart</h3>
        </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/product">Product </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/contactUs">ContactUs</Link>
      </div>
      <div className='button'>
      <a href='' className='btn btn-outline-dark ms-2'>
      <i className='fa fa-sign-in me-1'></i>Login</a>
      <a href='' className='btn btn-outline-dark ms-2'>
      <i className='fa fa-user-plus me-1'></i>Register</a>
      <a href='' className='btn btn-outline-dark ms-2'>
      <i className='fa fa-shopping-cart me-1'></i>Cart(0)</a>
      </div>
    </div>
   

          </>


  )
}

export default Navbar
