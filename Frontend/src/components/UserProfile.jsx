import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <>
        {/* Cover Image */}
        <Box component={'section'}>
            <img src='https://wallpapercave.com/wp/wp5408557.png' 
                className='w-full h-96 object-cover'
            />
        </Box>

        {/* Profile Section */}
        <Grid container component={'main'}>
            <Grid item xs={10} mx={'auto'} sm={9} md={6} lg={7} xl={7} 
            sx={{marginTop:10,position:'relative',height:'500px',
            display:'flex', flexDirection:'column', justifyContent:'end'}}>
                <Card className='items-start sm:items-center' sx={{display:'flex',flexDirection:'column', justifyContent:'center',height:'400px', bgcolor:'ButtonShadow', 
                borderTopLeftRadius:50,
                borderTopRightRadius:200,
                borderBottomLeftRadius:100}}>
                        <CardMedia
                            component={'img'}
                            image='https://wallpapercave.com/wp/wp5408557.png'
                            alt='profile Image'
                            sx={{width:'200px', height:'200px',
                            position:'absolute',
                            top:-50,
                            borderRadius:'50%', objectFit:'cover'}}
                        />
                    <CardContent>
                        <Typography sx={{my:2}} variant={'h6'}>
                            Username : Rupesh Kumar Verma
                        </Typography>
                        <Typography sx={{my:1}} color={'gray'} variant={'body1'}>
                            Email : rkv51508@gmail.com
                        </Typography>
                        <Typography sx={{my:1}} color={'gray'} variant={'body1'}>
                            Mobile No. : +91 8107762501
                        </Typography>
                        <Typography sx={{my:1}} color={'gray'} variant={'body1'}>
                            DOB : 10/07/2000
                        </Typography>
                        <Typography sx={{my:1}} color={'gray'} variant={'body1'}>
                            Created On : 22 May 2024
                        </Typography>
                    </CardContent>
                    <CardActions className='flex-col sm:flex-row'>
                        <Button className='hover:text-violet-400' component={Link} to='/update-profile/:id'>Update Profile</Button>
                        <Button className='hover:text-violet-400' component={Link} to='/update-password/:id'>Update Password</Button>
                        <Button className='hover:text-red-200' component={Link} to='/delete-user-profile' sx={{color:'rgba(255,0,0,1)'}}>Delete Profile</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Watch History */}
            <Grid item xs={12} sm={12} md={5} lg={4} xl={4} m={2} bgcolor={'ThreeDShadow'} p={2} sx={{borderRadius:'11em 0'}}>
                <Typography variant={'h6'} color={'red'} fontWeight={'900'} textAlign={'center'} mb={1}>
                    Watch History
                </Typography>
                <Box component={'div'} sx={{display:'flex',
                flexWrap:'wrap', justifyContent:'center',
                borderRadius:'200px'}}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(()=>{
                            return <Card className='flex flex-col justify-center items-center' sx={{maxWidth:'20%', mx:'10px',my:'10px',
                            borderRadius:'50%'}}>
                                <CardMedia
                                component="img"
                                alt="green iguana"
                                sx={{height: 40, objectFit:'cover'}}
                                image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                            />
                                {/* <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                    Anime
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                     Lizards are a widespread group of squamate reptiles, with over
                                    </Typography>
                                </CardContent> */}
                                <CardActions>
                                <Button component={Link} to={`/singlepost/${1}`} size="small">Continue</Button>
                                </CardActions>
                            </Card>
                        })
                    }
                </Box>
            </Grid>
        </Grid>
    </>
  )
}

export default UserProfile