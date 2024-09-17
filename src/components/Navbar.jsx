import React from 'react'
import { FaHamburger } from "react-icons/fa";


const Navbar = ({open,setOpen}) => {

    const toggle=()=>{
        setOpen(!open)
       
        
    }
    return (
        <div className='navbar'>
            <FaHamburger onClick={toggle} />
            <h3>SideBar</h3>
        </div>
    )
}

export default Navbar
