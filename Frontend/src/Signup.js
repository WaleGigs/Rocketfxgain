import React, { useState } from 'react'
import './App.css'
import Second from './Assets/second.png'
import rocket from './Assets/rocket.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    const [firstName, setfirstName] = useState("") ;
    const [lastName, setlastName] = useState("") ;
    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("") ;
    const data = {firstName,lastName,email, password} 
   const signUp = async () =>{
    console.log(data);
    axios.post("http://localhost:3560/users/signup", data).then((res) => {
      console.log(res)
      alert(res.data.message)
    }).catch((err) => {
      console.log(err)
      alert(err.response.data.message)
    })
   }
    return (
    
         <body className="dt-header--fixed theme-dark dt-layout--full-width dt-sidebar--fixed o-auto">
      
      <div className="dt-root op-1">
          <div className="dt-root__inner">
                                    
      <div className="dt-login--container">

         
          <div className="dt-login__content-wrapper">

             
              <div className="dt-login__bg-section">

                  <div className="dt-login__bg-content">
                   
                      <h1 className="dt-login__title">Join Rocket GainFX  </h1>                                         

                      <p className="f-16 text-capitalize">Sign up and explore Rocket GainFX.</p>
                      <div  className=' w-100 '>
                    <img  style={{width: '67%'}}  className=''  src={Second} alt="" />
                    </div>
                  </div>


                 
                  <div className="dt-login__logo">
                      <a className="dt-brand__logo-link" href="">
                          <img style={{width: '300px'}} className="dt-brand__logo-img" src={rocket} alt="Logo"/>
                      </a>
                  </div>
                 

              </div>
            
              <div className="dt-login__content">
                  <ul style={{float: 'right',backgroundColor: '#f4f4f4',padding: '5px'}}  >
                      <li className="dt-nav__item dropdown">

                          
                          <a href="#" className="dt-nav__link dropdown-toggle" id="currentLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img st style={{width:'20px'}} className="flag-icon flag-icon-rounded flag-icon-lg mr-1m" src="https://oxygengainfx.com/uploads/gb-eng2.png"/>
                          <span>EN</span> </a>
                         
                          <div className="dropdown-menu" x-placement="bottom-start"
                          
                           style={{position: 'absolute', transform: 'translate3d(8px, 72px, 0px), top: 0px  left: 0px will-change: transform'}}>
                                                              <button className="dropdown-item sitelangChange" type="button" data-id="https://oxygengainfx.com/switchlang/English">
                                  <img className="flag-icon flag-icon-rounded flag-icon-lg mr-2"
                                   style={{width: '20px'}} src="https://oxygengainfx.com/uploads/gb-eng2.png"/>
                                  <span>English</span> 
                              </button>
                                                              <button className="dropdown-item sitelangChange" type="button" data-id="https://oxygengainfx.com/switchlang/Russian">
                                  <img className="flag-icon flag-icon-rounded flag-icon-lg mr-2"
                                   style={{width: '20px'}} src="https://oxygengainfx.com/uploads/russia3.png"/>
                                  <span>Russian</span> 
                              </button>
                                                          </div>
                         

                      </li>
                  </ul>

                
                  <div className="dt-login__content-inner">
                      <div className="col-md-12">
                                                                                                          </div>
                      <h2 className="f-20 text-capitalize">Create Account</h2>
                    
                      
                        <input type="hidden" name="csrf_test_name"  value="ecacc164f399776aaf972c7aad4149fd" />
                        <div className="row">
                          <div className="col-md-6">
                           
                          <div className="form-group">
                              <label className="sr-only" for="f-name">First Name</label>
                              <input onChange={(e)=>setfirstName(e.target.value)} className='form-control' placeholder="First Name" type="text" name="firstname" id="" />
                             
                                  <label className="error" id="firstname"></label>
                          </div>
                         
                          </div>
                          <div className="col-md-6">
                           
                          <div className="form-group">
                              <label className="sr-only" for="l-name">Last Name</label>
                            <input onChange={(e)=>setlastName(e.target.value)} className='form-control' placeholder="Last Name" type="text" name="firstname" id="" />
                             
                                  <label className="error" id="lastname"></label>
                          </div>
                         
                          </div>
                        </div>

                         
                          <div className="form-group">
                              <label className="sr-only" for="email-1">Email Address</label>
                              <input onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder="Email" type="email" name="email" id="" />
                              
                                  <label className="error" id="email"></label>
                          </div>
                         

                          <div className="row">
                            <div className="col-md-6">
                             
                              <div className="form-group">
                                  <label className="sr-only" for="password-1">Password</label>
                              <input onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder="password" type="password" name="password" id="" />
                                  
                                  <label className="error" id="password"></label>
                              </div>
                             
                            </div>
                            <div className="col-md-6">
                             
                              <div className="form-group">
                                  <label className="sr-only" for="password-2">Confirm Password</label>
                              <input className='form-control' placeholder="Confirm Password" type="text" name="cpassword" id="" />
                                 
                                  <label className="error" id="cpassword"></label>
                              </div>
                             
                            </div>
                            <div className="col-md-12">
                           
                          <div className="form-group">
                              <label className="sr-only" for="ref">Referral Code</label>
                              <input className='form-control' placeholder="Refferal Code" type="text" name="ref" id="" />
                          </div>
                         
                          </div>
                          </div>
                         
                          <div>
                              <checkbox className="dt-checkbox dt-checkbox-icon dt-checkbox-only" style={{marginBottom: '20px'}}>
                                  <input type="checkbox" name="accept_terms" id="accept_terms" value="agree" className="checkbox-check ng-pristine ng-valid ng-touched" style={{Width: '20%'}}/>
                                  <label className="font-weight-light dt-checkbox-content" for="accept_terms">
                                      <span className="unchecked">
                                          <i name="box-o" size="xl" className="icon icon-box-o icon-xl icon-fw"></i>
                                      </span>
                                      <span className="checked ng-star-inserted">
                                          <i name="box-check-o" size="xl" className="text-primary icon icon-box-check-o icon-xl icon-fw"></i>
                                      </span>
                                  </label>
                                  I agree to Rocket GainFX's <a target="_blank" href="" className="checkbox-link text-capitalize">Privacy Policy</a> & 
                                <a target="_blank" href="" className="checkbox-link text-capitalize">Terms of Service</a>
                              </checkbox>
                              <label className="error red" id="terms" for="password"></label>
                          </div>
                         

                         
                          <div className="form-group">
                              <button  onClick={signUp}  className="btn btn-info text-uppercase" >Create Account</button>
                             
                             <Link to={"/signin"}>
                             <span className="d-inline-block ml-4 text-uppercase">Or      
                              <a className="d-inline-block font-weight-500 ml-3 text-capitalize"
                                      href="jdjdfd">Login</a>
                              </span>
                             </Link>
                             
                          </div>
                         
                                      

                  </div>
                 

              </div>
              

          </div>
          

      </div>
     
      
       
      </div>
      </div>
 


</body>   
      
    )
}

export default Signup
