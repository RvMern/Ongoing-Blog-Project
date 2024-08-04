import React from 'react'
import {Box, Button, Card, CardActions, CardContent, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <Box className='bg-black h-screen p-12 lg:p-28 text-white lg:m-custom-ml-15'>
        {/* // ! Container for the total users, earning and posts*/}
        <Box className='flex flex-col justify-between items-center gap-y-20 lg:flex-row lg:gap-x-10'>
          <Card className='relative w-80'>
            <CardContent className='flex flex-col justify-center items-center gap-y-2'>
              <Typography variant='h5' fontWeight={'800'}>Total Users</Typography>
              <Typography variant='h6' fontWeight={'600'}>30</Typography>
            </CardContent>
            <CardActions className='flex justify-center'>
              <Button component={Link} to='#'>View --> </Button>
            </CardActions>
            <Box className='absolute -top-2 right-0 bg-slate-900  rounded-bl-md p-2 font-medium text-violet-500' component={'span'}>New !</Box>
          </Card>

          <Card className='relative w-80'>
            <CardContent className='flex flex-col justify-center items-center gap-y-2'>
              <Typography variant='h5' fontWeight={'800'}>Total Earnings</Typography>
              <Typography variant='h6' fontWeight={'600'}>$ 0.20</Typography>
            </CardContent>
            <CardActions className='flex justify-center'>
              <Button component={Link} to='#'>View --> </Button>
            </CardActions>
            <Box className='absolute -top-2 right-0 bg-slate-900  rounded-bl-md p-2 font-medium text-violet-500' component={'span'}>New !</Box>
          </Card>

          <Card className='relative w-80'>
            <CardContent className='flex flex-col justify-center items-center gap-y-2'>
              <Typography variant='h5' fontWeight={'800'}>Total Posts</Typography>
              <Typography variant='h6' fontWeight={'600'}>2</Typography>
            </CardContent>
            <CardActions className='flex justify-center'>
              <Button component={Link} to='#'>View --> </Button>
            </CardActions>
            <Box className='absolute -top-2 right-0 bg-slate-900  rounded-bl-md p-2 font-medium text-violet-500' component={'span'}>New !</Box>
          </Card>
        </Box>

        {/* // ! Graph Section */}
        <Box></Box>
    </Box>
  )
}

export default Dashboard