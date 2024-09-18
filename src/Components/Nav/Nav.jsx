// {$$ Navbar $$}
import React from 'react'
import './Nav.css';
import { VscMenu } from "react-icons/vsc";
import Logo from '../../assets/Logo(MEGA).png'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Nav = ({setSidebar}) => {
    return (
        <>
                <nav className='d-flex align-items-center justify-content-between col-12'>

                    {/* Menu And Logo */}
                    <div className='col-lg-1 d-flex col-md-1 col-sm-2 col-2'>
                        {/* Nav Side Bar Menu */}
                        <button className='btn fs-4 text-light mb-2 d-lg-block d-md-block d-sm-none d-none' onClick={()=>setSidebar(prev=>prev===false?true:false)}><VscMenu /></button>

                        {/* Application Logo */}
                        <Link to='/' class="navbar-brand col-lg-12 col-md-12 col-sm-10 col-12"><img src={Logo} alt="" className='col-lg-9 col-md-12 ms-lg-3 col-sm-12 col-12'/><sup className=' text-light' style={{ fontSize: '12px', }}>IN</sup></Link>
                    </div>

                    {/* Seacr Bar */}
                    <div className="search col-lg-5 col-md-6 d-lg-flex d-md-flex d-sm-flex justify-content-lg-between justify-content-md-between col-sm-9 d-none d-sm-block pe-3">'
                        <div className=' d-flex col-lg-11 col-md-12 rounded-pill ps-3 overflow-hidden ser col-sm-10'>
                            <input type="text" placeholder='Made By Sujal jagdev' className='border-0 col-lg-11 col-md-11 col-sm-10 fs-6 text-light rounded-pill' style={{ outline: 'none', backgroundColor: '#222' }} />
                            <span className=' text-light p-1 serach-logo text-end pe-2 fs-5 col-lg-1 col-md-1 col-sm-2 ' style={{ backgroundColor: '#333', cursor: 'pointer' }}>
                                <IoSearchOutline />
                            </span>
                        </div>
                        <span className='text-light rounded-circle fs-4 mic' style={{ cursor: 'pointer', backgroundColor: '#333' }}><IoMdMic /></span>
                        <span className=' text-light fs-3 d-lg-none d-md-none d-sm-block d-none mt-1 ms-2'><BsThreeDotsVertical /></span>
                    </div>

                    {/* Search Bar In Mobile View */}
                    <div className="min-search col-8 d-lg-none d-md-none d-sm-none d-block d-flex justify-content-end gap-2   align-items-center">
                        <span className=' text-light p-1 serach-logo text-end pe-2 fs-5 ' style={{ cursor: 'pointer' }}>
                            <IoSearchOutline />
                        </span>
                        <div className="profile col-1 rounded-circle d-lg-block d-md-block">

                        </div>
                        <span className=' text-light fs-5 '><BsThreeDotsVertical /></span>
                    </div>

                    {/* Pro Options */}
                    <div className="col-lg-2 d-lg-flex d-md-flex justify-content-end align-items-center d-lg-block d-md-block d-sm-none d-none">
                        <span className=' text-light fs-4 me-4 d-lg-block d-md-block' style={{ cursor: 'pointer' }}><RiVideoAddLine /></span>
                        <span className=' text-light fs-4 me-4 d-lg-block d-md-block' style={{ cursor: 'pointer' }}><IoNotificationsOutline /><sup className=' bg-danger rounded-circle noti-sup'>9+</sup></span>
                        <div className="profile col-1 rounded-circle me-2 d-lg-block d-md-block">

                        </div>
                        
                    </div>


                </nav>
        </>
    )
}

export default Nav