import React, { useEffect, useState } from 'react'
import { RxCaretDown, RxCaretRight } from "react-icons/rx"
import DefaultLayout from '../layouts/DefaultLayout'
import { MdAccountCircle } from "react-icons/md"
import { BiLogOut } from "react-icons/bi"
// import { useState, useEffect } from 'react'

const Dashboard = () => {
    const [toggle, setToggle] = useState(false)
    const [togglel, setTogglel] = useState(false)

    const width = innerWidth
    const Maquree = ({ title, text, second, secon, third, thir }) => {
        const [pos, setPos] = useState(0);
        const [run, setRun] = useState(true);
        const scrollEff = () => {
            if (run) setPos(p => p < width ? p + 1 : -width);
        }

        useEffect(() => {
            const tm = setTimeout(scrollEff, 5);
            return () => clearTimeout(tm);
        }, [pos]);

        const onMouseEnter = (e) => {
            // console.log("mouse enter");
            setRun(false);
        }

        const onMouseLeave = (e) => {
            // console.log("mouse leave");
            setRun(true);
            setPos(pos + 1); // to trigger useEffect 
        }

        const styles = {
            position: "relative",
            fontSize: "1em",
            left: pos + "px",
            width: "fit-content",
            height: "40px",
            alignItems: "center",
            padding: "0 30px",
            cursor: "pointer",
            // backgroundColor: "green",
            gap: "10px",
            borderLeft: "1px solid grey",
            borderRight: "1px solid grey",
            display: "flex"
        };

        return (
            <div className=' flex justify-between clap'>
                <div style={styles} className='mep'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <p className='viy'>{title}</p>
                    <p className='viy'>{text}</p>
                </div>
                <div style={styles} className='mep'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <p className='viy'>{second}</p>

                    <p className='viy'>{secon}</p>
                </div>
                <div style={styles} className='mep'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <p className='viy'>{third}</p>
                    <p className='viy'>{thir}</p>
                </div>
            </div>
        )
    }

    return (
        <DefaultLayout>
            <div>
                <div className="head">
                    <div className="fap">
                        <p className='plus'>Home</p>
                        <RxCaretRight className='ico plus' />
                        <p>Dashboard</p>
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

                <div className='sap'>
                    <div className='hang'>
                        <h1>Dashboard</h1>
                        <div className="line"></div>
                    </div>

                    <div>
                        <div className="play">
                            <Maquree
                                className="pos"
                                title="Bitcoin"
                                second="Etherum"
                                third="USDT"
                                text="Learn to code for FREE!"
                                secon="Learn to code for FREE!"
                                thir="Learn to code for FREE!"
                            ></Maquree>
                        </div>
                    </div>

                    <div className="lal flex justify-evenly ">
                        <div className="bine">
                            <div className="sect">
                                <div className="mont">
                                    <i class="fas fa-hand-holding-usd"></i>
                                    <p className='abs'>Earnings</p>
                                    <div className='bon'>
                                        <p>USD 5000.00</p>
                                        <p>Locked</p>
                                        <button>Unlock</button>
                                    </div>
                                </div>
                                <div className="mont beb">
                                    <i class="fas fa-hand-holding-usd"></i>
                                    <p className='abs'>Deposits</p>
                                    <div className='bon'>
                                        <p>USD 0.00</p>
                                        <p>Withdrawable</p>
                                        <button>Deposit</button>
                                    </div>
                                </div>
                            </div>
                            <div className="char">
                                <h3>Overall Portfolio</h3>
                                <div className='h-80 sup'>
                                    <h1 className='pals'>You Have no deposits change in your account now.</h1>
                                </div>
                            </div>
                        </div>

                        <div className="beli p-5">
                            <h2>Deposit into your account</h2>
                            <p>Please add a mode of payment while depositing for ease of transacting</p>
                            <button className='butt'>Deposit</button>
                        </div>


                    </div>





                </div>

            </div>
        </DefaultLayout>
    )
}

export default Dashboard