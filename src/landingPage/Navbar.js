import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Landing from '../landingPage/Landing';


const Navbar = () => {

    const signup = () =>{
      console.log("signup");
    }
    
    const signin = () =>{
      console.log("login");
    }
  return (
   <>
        <nav id='nav' class="navbar bg-body-tertiary fixed-top shadow px-5">
  <div class="container-fluid">
    <Link to={"/signup"}>
     <img src={require ('../Images/rocket-logo.png')} alt="" />
    </Link>
  <ul className='theUl'>
        <li><Link to='/'>HOME</Link></li>
        <li><a href="#abtUS">ABOUT US</a></li>
        <li><a href="#plan">PLAN</a></li>
        <li><a href="#contactUS">CONTACT US</a></li>
        <li>
          <Link to={"/signup"}>
            <button onClick={signup} class="btn btn-outline-light
           rounded-5 " type="submit">SIGN UP</button>
          </Link>
        </li>
        <li>
          <Link to='/signin'>
            <button onClick={signin} class="btn btn-outline-light
             rounded-5 " type="submit">SIGN IN</button>
          </Link>
        </li>
  </ul>
  

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
         <img src={require ('../Images/rocket-logo.png')} alt="" />

        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a id='#home'  class="nav-link active" aria-current="page" href="">Home</a>
          </li>
          <li class="nav-item">
            <a id='#abtUS' class="nav-link" href="">ABOUT US</a>
          </li>

          <li class="nav-item">
            <a id='#plan' class="nav-link" href="">PLAN</a>
          </li>

           <li class="nav-item">
            <a id='#contactUS' class="nav-link" href="">CONTACT US</a>
          </li>
          
        </ul>
       
      </div>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar