import { Box, Button} from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <Box className='lg:absolute lg:left-0 lg:top-0 lg:w-custom-w-25' >
        <Box className='flex gap-x-2 items-center lg:h-screen lg:flex-col lg:items-start justify-center bg-gray-200 lg:gap-y-3'>
            <Button className='lg:w-full' sx={{p:1.8}} component={Link} to='/adminprofile'>Profile</Button>
            <Button className='lg:w-full' sx={{p:1.8}} component={Link} to='/'>Dashboard</Button>
            <Button className='lg:w-full' sx={{p:1.8}} component={Link} to='/allusers'>Users</Button>
            <Button className='lg:w-full' sx={{p:1.8}} component={Link} to='/allposts'>Posts</Button>
            <Button className='lg:w-full' sx={{p:1.8}} component={Link} to='/create-post'>Create Post</Button>
            <Button className='lg:w-full' sx={{p:1.8}} component={Link} to='/query'>Queries</Button>
        </Box>
        
    </Box>
  )
}

export default Navbar