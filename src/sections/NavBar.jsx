import React, { useState } from 'react';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';
import { Link} from "react-router-dom"

const NavBar=()=>{

    const [link,setLink]=useState(false);

    const handleShowNav =()=>{
        setLink(!link);

    }

    const navItems = [
        {id:1,path:"/", text:"Home"},
        {id:2,path:"/artist", text:"Artist"},
        

    ]

    return(
        <>
        <header className='fixed w-full bg-black/20 text-white'>
            
                <nav className='py-5 mx-5 md:max-w-screen-md xl:max-w-screen-lg md:mx-auto flex flex-col md:flex-row md:justify-between '>
                    <div className='flex justify-between '>
                        <h2 className='text-xl uppercase font-bold my-auto'>Harmony</h2>
                        <button className='md:hidden' onClick={handleShowNav}>
                            { link ?<MenuIcon/>  :  <CloseIcon/> }
                        </button>
                    </div>
                    <div className={"bg-slate-900 md:bg-inherit " + (link ? "hidden md:block ": "block ")}>
                        <ul className='flex md:flex-row flex-col py-5 text-center gap-3 md:gap-5'>
                            {navItems.map(item=>(
                                <li className='hover:text-yellow-400 font-semibold' key={item.id}>
                                    <Link to={item.path}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </nav>
            
            
        </header>
        </>
    )
}

export default NavBar;