import React, { useEffect, useState } from 'react'
import { RxCaretDown, RxCaretRight } from "react-icons/rx"
import DefaultLayout from '../layouts/DefaultLayout'
import { MdAccountCircle } from "react-icons/md"
import { BiLogOut } from "react-icons/bi"
const Nav = (props) => {
    const [toggle, setToggle] = useState(false)
    const [togglel, setTogglel] = useState(false)
  return (
    <div>
         <div className="head">
                    <div className="fap">
                        <p className='plus'>Home</p>
                        <RxCaretRight className='ico plus' />
                        <p>{props.page}</p>
                    </div>
                    <div className='flame'>
                        <div className=' relative plus'>
                            <button onClick={() => setToggle(!toggle)} className='coc'>
                                <img src="https://oxygengainfx.com/uploads/gb-eng2.png" className='vat' alt="" />
                                <div className='flex'>
                                    <p>EN</p>
                                    <RxCaretDown />
                                </div>
                            </button>
                            {toggle ?
                                <div className='pes shadow-md rounded-md top-10'>
                                    <div className="flex power w-28 justify-between mt-1 h-10 items-center rounded-md p-1">
                                        <img className='vat' src="https://oxygengainfx.com/uploads/gb-eng2.png" alt="" />
                                        <p>English</p>
                                    </div>
                                    <div className="flex power w-28 justify-between mt-1 h-10 items-center rounded-md p-1">
                                        <img className='vat' src="https://oxygengainfx.com/uploads/russia3.png" alt="" />
                                        <p>Russia</p>
                                    </div>
                                </div> : null
                            }
                        </div>


                        <div className=' relative'>
                            <button onClick={() => setTogglel(!togglel)} className='coc pep'>
                                <div className='flex items-center justify-between w-44'>
                                    <img className='profile' src="https://oxygengainfx.com/assets/dist/img/avatar.png" alt="" />
                                    <p className=' text-sm'>user_name</p>
                                </div>
                            </button>
                            {togglel ?
                                <div className='pes sew shadow-md rounded-md top-10'>
                                    <div className="flex power w-28 justify-between mt-1 h-10 items-center rounded-md p-1">
                                        <MdAccountCircle />
                                        <p>Account</p>
                                    </div>
                                    <div className="flex power w-28 justify-between mt-1 h-10 items-center rounded-md p-1">
                                        <BiLogOut />
                                        <p>Logout</p>
                                    </div>
                                </div> : null
                            }
                        </div>

                    </div>
                </div>
    </div>
  )
}

export default Nav