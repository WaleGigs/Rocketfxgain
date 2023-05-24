import React from 'react'
import { Link } from 'react-router-dom';
import REMOVEDLOGO from "../assets/removedlogo.png"
function SideNav(){
    let body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        modeText = body.querySelector(".mode-text");
    function open() {
        sidebar.classList.toggle("close");
    }
    function search(){
        sidebar.classList.remove("close");
    }
    const mode = () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            modeText.innerText = "Light mode";
        } else {
            modeText.innerText = "Dark mode"
        }
    }
    return (
        <div>
            <nav className="sidebar close">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={REMOVEDLOGO} alt="" />
                        </span>

                        <div className="text logo-text">
                            {/* <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span> */}
                        </div>
                    </div>

                    <button onClick={open}><i className='bx bx-chevron-right toggle' ></i></button>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        <li className="search-box" onClick={search}>
                            <i onClick={search} className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li>

                        <ul className="menu-links">
                            <li className="nav-link dash">
                                <Link to="/dashboard">
                                    <i className='bx bx-home-alt icon' ></i>
                                    <span className="text nav-text">Dashboard</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/deposits">
                                    <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                    <span className="text nav-text">Deposits</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link>
                                    <i className='bx bx-bell icon'></i>
                                    <span className="text nav-text">Earnings</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link>
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">Analytics</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link>
                                    <i className='bx bx-heart icon' ></i>
                                    <span className="text nav-text">Withdrawals</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link>
                                    <i className='bx bx-wallet icon' ></i>
                                    <span className="text nav-text">Wallets</span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <Link>
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </Link>
                        </li>

                        <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-moon icon moon'></i>
                                <i className='bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">Dark mode</span>

                            <div className="toggle-switch" onClick={mode}>
                                <span className="switch"></span>
                            </div>
                        </li>

                    </div>
                </div>

            </nav>

        </div>
    )
}

export default SideNav