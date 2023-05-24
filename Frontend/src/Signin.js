import React, { useState } from 'react'
import './App.css'
import Third from './Assets/third.png'
import rocket from './Assets/rocket.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signin = () => {
    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("") ;

    const data = {email, password}
    const signIn = async () =>{
        axios.post("http://localhost:3560/users/signin", data).then((res) => {
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
                   
                      <h1 className="dt-login__title">Login  </h1>                                         

                      <p className="f-16 text-capitalize">Sign in and explore Rocket GainFX.</p>
                      <div  className='  '>
                    <img style={{width: '67%'}}  className=''  src={Third} alt="" />
                    </div>
                      
                  </div>

                   
                 
                  <div className="dt-login__logo">
                      <a className="dt-brand__logo-link" href="">
                          <img style={{width: '300px'}} className="dt-brand__logo-img" src={rocket} alt="Logo"/>
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

                   
                    <div className="dt-login__content-inner">
                                 <h2 id="login-title" className="f-20">Enter your email and password below</h2>
                        
                       
    <input type="hidden" name="csrf_test_name" value="ecacc164f399776aaf972c7aad4149fd" />
                        <div className="email-pass">
                            <div className="errorClass">
                                <label className="error" id="overallError"></label>
                            </div>
                           
                            <div className="form-group">
                                <label className="sr-only" for="email-1">Email Address</label>
                              <input onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder="Email" type="email" name="email"  />
                            </div>
                           

                          
                            <div className="form-group">
                                <label className="sr-only" for="password-1">Password</label>
                                <input onChange={(e)=>setPassword(e.target.value)}  type="password" className="form-control" name="password" 
                                    placeholder="Password" />
                            </div>
                           
                            <div className="mb-2 ">
                               
                                    <input type="checkbox" name="stay_logged_in" id="checkbox-1" value="agree" className="checkbox-check ng-pristine ng-valid ng-touched"/>
                                    
                                   <span style={{marginLeft:'12px'}} className=''>
                                   Keep me logged in on this device
                                   </span>
                                                                    
                                   
                            </div>
                          
                                                    </div>
                        {/* <div className="hide" id="google-auth">
                           
                            <div className="form-group">
                                <div id="divOuter" className="">
                                    <div id="divInner">
                                        <input autoComplete='off' id="partitioned" className="" name="token" type="text" maxlength="6" />
                                        <label className="error google-auth-err"></label>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            
                       
                        <div className="form-group">
                            <button  onClick={signIn}  className="btn btn-info text-uppercase" >Login</button>
                            {/* <button type="submit"  className="hide btn btn-info text-uppercase">Login</button> */}
                          <Link to={"/signup"}>
                          <span className="d-inline-block ml-4 text-uppercase">Or <a className="d-inline-block font-weight-500 ml-3 text-capitalize"
                             href="jjjj">Create Account</a>
                            </span>
                          </Link>
                           
                        </div>
                      
                     
                    </div>
                  

                  
                    <div className="dt-login__content-footer">
                        <a href="https://oxygengainfx.com/forgotPassword">Can't access your account?</a>
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

export default Signin
