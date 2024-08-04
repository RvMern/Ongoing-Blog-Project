import React from 'react'
import {Link} from 'react-router-dom'
import Divider from '@mui/material/Divider'

const PublicNavbar = () => {
  return (
    <div className='font-medium hidden lg:flex p-2 flex-col items-center justify-center'>
        <nav className='my-2'>
            <ul className='flex items-center'>
                <li className='p-2 mx-4'><Link className='hover:text-violet-400' to='/'>HOME</Link></li>
                <li className='p-2 mx-4'>CATEGORIES</li>
                <li className='p-2 mx-4'><Link className='hover:text-violet-400' to='/trending'>TRENDING</Link></li>
                <li className='p-2 mx-4'><Link className='hover:text-violet-400' to='/latest'>LATEST</Link></li>
                <li className='p-2 mx-4'><Link className='hover:text-violet-400' to='/about-us'>ABOUT US</Link></li>
                <li className='p-2 mx-4'><Link className='hover:text-violet-400' to='/contact-us'>CONTACT US</Link></li>
                <li className='p-2 mx-4'><Link className='hover:text-violet-400' to='/login'>LOG IN</Link></li>
                <li className='p-2 mx-4'><Link className='hover:text-violet-400' to='/signup'>SIGN UP</Link></li>
            </ul>
        </nav>
        <Divider sx={{width:'90%'}}></Divider>
    </div>
  )
}

export default PublicNavbar