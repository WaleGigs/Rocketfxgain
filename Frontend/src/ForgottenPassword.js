import React, { useState } from 'react'
import './App.css'
import Third from './Assets/third.png'
import rocket from './Assets/rocket.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const ForgottenPassword = () => {
    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("") ;

    const data = {email, password}
    const signIn = async () =>{
        axios.post("http://localhost:3560/users/resetpassword", data).then((res) => {
      console.log(res)
      alert(res.data.message)
    }).catch((err) => {
      console.log(err)
      alert(err.response.data.message)
    })
    }
    
  
    return (
        <>
                <body className="dt-header--fixed theme-dark dt-layout--full-width dt-sidebar--fixed o-auto">
      
      <div className="dt-root op-1">
          <div className="dt-root__inner">
                                    
      <div className="dt-login--container">

         
          <div className="dt-login__content-wrapper">

              <div className="dt-login__bg-section">

                  <div className="dt-login__bg-content">
                   
                      <h1 className="dt-login__title">Forgot Password  </h1>                                         

                      <p className="f-16 text-capitalize">Please Enter Your Email to Reset Password.</p>
                      <div  className='  '>
                    <img style={{width: '75%'}}  className=''  src={Third} alt="" />
                    </div>
                      
                  </div>

                   
                 
                  <div className="dt-login__logo">
                      <a className="dt-brand__logo-link" href="">
                          <img className="dt-brand__logo-img" src={rocket} alt="Logo"/>
                      </a>
                  </div>
                 

              </div>
            
              <div className="dt-login__content">
                    <ul  style={{float: 'right',backgroundColor:'#f4f4f4',padding: '5px'}}>
                        <li className="dt-nav__item dropdown">

                           
                            <a href='ggg' className="dt-nav__link dropdown-toggle" id="currentLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img style={{width:'20px'}} className="flag-icon flag-icon-rounded flag-icon-lg mr-1m" src="https://oxygengainfx.com/uploads/gb-eng2.png"/>
                            <span>EN</span> </a>
                          
                            <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(8px, 72px, 0px)', top: '0px; left: 0px', willChange: 'transform'}}>
                                                                <button className="dropdown-item sitelangChange" type="button" data-id="https://oxygengainfx.com/switchlang/English">
                                    <img className="flag-icon flag-icon-rounded flag-icon-lg mr-2" style={{width: '20px'}} src="https://oxygengainfx.com/uploads/gb-eng2.png"/>
                                    <span>English</span> 
                                </button>
                                                                <button className="dropdown-item sitelangChange" type="button" data-id="https://oxygengainfx.com/switchlang/Russian">
                                    <img className="flag-icon flag-icon-rounded flag-icon-lg mr-2" style={{width: '20px'}} src="https://oxygengainfx.com/uploads/russia3.png"/>
                                    <span>Russian</span> 
                                </button>
                                                            </div>
                           

                        </li>
                    </ul>

                    <div class="dt-login__content-inner">
                    <h2 class="f-20 text-capitalize">Forgot password? Enter your email below.</h2>
                       
                        <form action="" id="loginForm" method="post" >
            <input type="hidden" name="csrf_test_name" value="c1f94e5da59ba83d0a5f021b77fa37d9" />                                                 

                           
                            <div class="form-group">
                                <label class="sr-only" for="email-1">Email Address</label>
                                <input type="email" class="form-control" name="login_email" id="email-1"
                                    aria-describedby="email-1" placeholder="Email" />
                            </div>
                           
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary text-uppercase">Continue</button>
                                <span class="d-inline-block ml-4 text-uppercase">Or                                    <a class="d-inline-block font-weight-500 ml-3 text-uppercase"
                                        href="">Create Account</a>
                                </span>
                            </div>
                           
                        </form>                      

                    </div>
                   
                    <div class="dt-login__content-footer">
                        <a href="">I've remembered my password</a>
                    </div>
                </div>
              

          </div>
          

      </div>
     
      </div>
       
      </div>
     
 


</body>   
        </>
    )
}

export default ForgottenPassword 
