import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
const Sidebar = ({ open }) => {
    console.log(open);
    
    return (
        <div className={open?'sidebar':"closeClass"}>
            <li><FaHome />Home</li>
            <li><MdContactPage />
                Contact</li>
            <li><IoLogIn />
                Login</li>
            <li><CiLogout />Logout</li>
        </div>
    )
}

export default Sidebar
