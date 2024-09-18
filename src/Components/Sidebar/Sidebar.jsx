import React, { useState } from 'react';
import './Sidebar.css';
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlineSportsEsports } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { LuMusic2 } from "react-icons/lu";
import { GrBlog } from "react-icons/gr";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { RiVideoAddLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LiaCarSideSolid } from "react-icons/lia";


const Sidebar = ({ sidebar, category, setCategory }) => {

  return (
    <>
      <div className={`SideBar col-lg-2 p-2 col-md-3 col-sm-4 col-8 d-lg-block d-md-block d-sm-none d-none ${sidebar ? "" : `small-sidebar`}`}>

        {/* Sections */}
        <div className={`sideLink col-10 align-items-center pt-2 ps-2 ${category===0?'active':''}`} onClick={()=>setCategory(0)}>
          <span className=' text-light fs-4 d-flex gap-3'>
            <IoHomeOutline className='.lo'/>
            <p className=' fs-6 text-light '>Home</p>
          </span>
        </div>

        <div className={`sideLink col-10 align-items-center pt-2 ps-2 ${category===20?'active':''}`} onClick={()=>setCategory(20)}>
          <span className=' text-light fs-4 d-flex gap-3'>
            <SiYoutubegaming />
            <p className=' fs-6 text-light '>Gaming</p>
          </span>
        </div>

        <div className={`sideLink col-10 align-items-center pt-2 ps-2 ${category===2?'active':''}`} onClick={()=>setCategory(2)} >
          <span className=' text-light fs-4 d-flex gap-3'>
            <LiaCarSideSolid/>
            <p className=' fs-6 text-light '>AutoMobies</p>
          </span>
        </div>

        <div className={`sideLink col-10 align-items-center pt-2 ps-2 ${category===17?'active':''}`} onClick={()=>setCategory(17)} >
          <span className=' text-light fs-4 d-flex gap-3'>
            <MdOutlineSportsSoccer />
            <p className=' fs-6 text-light '>Sports</p>
          </span>
        </div>


        <div className={`sideLink col-10 align-items-center ps-2 pt-2 mt-1 ${category===24?'active':''}`}  onClick={()=>setCategory(24)}>
          <span className=' text-light fs-4 d-flex gap-3'>
            <MdOutlineDesktopWindows />
            <p className=' fs-6 text-light '>Entertainment</p>
          </span>
        </div>

        <div className={`sideLink col-10 align-items-center ps-2 pt-2 ${category===28?'active':''}`} onClick={()=>setCategory(28)}>
          <span className=' text-light fs-4 d-flex gap-3'>
            <GiTechnoHeart />
            <p className=' fs-6 text-light '>Technology</p>
          </span>
        </div>

        <div className={`sideLink col-10 align-items-center ps-2 pt-2 ${category===10?'active':''}`} onClick={()=>setCategory(10)}>
          <span className=' text-light fs-4 d-flex gap-3'>
            <LuMusic2 />
            <p className=' fs-6 text-light '>Music</p>
          </span>
        </div>

        <div className={`sideLink col-10 align-items-center ps-2 pt-2 ${category===22?'active':''}`} onClick={()=>setCategory(22)}>
          <span className=' text-light fs-4 d-flex gap-3'>
            <GrBlog />
            <p className=' fs-6 text-light '>Blog</p>
          </span>
        </div>

        <div className={`sideLink col-10 align-items-center ps-2 pt-2 ${category===25?'active':''}`} onClick={()=>setCategory(25)}>
          <span className=' text-light fs-4 d-flex gap-3'>
            <HiOutlineNewspaper />
            <p className=' fs-6 text-light '>News</p>
          </span>
        </div>

        <hr className=' text-light m-2' />
        <p className=' text-light fs-6 fw-bolder ms-3'>Subscibers</p>

        {/* Subscibers */}
        <div className="sideLink col-10 align-items-center ps-2 pt-2" >
          <span className=' text-light fs-4 d-flex gap-3'>
            <div className="side-user">
            </div>
            <p className=' fs-6 text-light '>Carry Minati</p>
          </span>
        </div>

        <div className="sideLink col-10 align-items-center ps-2 pt-2" >
          <span className=' text-light fs-4 d-flex gap-3'>
            <div className="side-user">
            </div>
            <p className=' fs-6 text-light'>Techno Gamerz</p>
          </span>
        </div>

        <div className="sideLink col-10 align-items-center ps-2 pt-2" >
          <span className=' text-light fs-4 d-flex gap-3'>
            <div className="side-user"></div>
            <p className=' fs-6 text-light '>Carry Minati</p>
          </span>
        </div>

        <div className="sideLink col-10 align-items-center ps-2 pt-2">
          <span className=' text-light fs-4 d-flex gap-3'>
            <div className="side-user"></div>
            <p className=' fs-6 text-light '>Carry Minati</p>
          </span>
        </div>

      </div>
      {/* Footrer Of Tab And Phone Screen */}

      <div className="side-footer d-flex col-12 p-3 position-fixed bottom-0 d-lg-none d-md-none d-sm-block d-block d-sm-flex justify-content-between ps-sm-5 pe-sm-5" style={{ backgroundColor: '#222', }}>
        <span className={`text-light fs-3 ${category===0?'active':''}`} onClick={()=>setCategory(0)}>
          <IoHomeOutline />
        </span>
        <span className={`text-light fs-3 ${category===10?'active':''}`} onClick={()=>setCategory(10)}>
          <LuMusic2 />
        </span>
        <span className={`text-light fs-1 ${category===20?'active':''} `} onClick={()=>setCategory(20)}>
        <SiYoutubegaming />
        </span>
        <span className={`text-light fs-3 ${category===2?'active':''}`} onClick={()=>setCategory(2)}>
        <LiaCarSideSolid/>
        </span>
        <span className={`text-light fs-3 ${category===28?'active':''}`} onClick={()=>setCategory(28)}>
        <GiTechnoHeart />
        </span>
      </div>
    </>
  )
}

export default Sidebar