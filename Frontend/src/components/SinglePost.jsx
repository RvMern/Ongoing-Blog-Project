import React, { useState } from 'react'
import {Box, Grid,Card,CardMedia,CardContent,Typography, Divider,TextField, CardActions, Button} from "@mui/material"
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
import { FaStar, FaRegStar } from 'react-icons/fa';
import LockIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/Key';

const SinglePost = () => {
    const [comment,setComment] = useState({
        rating:0,
        comment:''
    });
    
    const handleComment = (e) => {
    if (typeof e === 'number') {
      // Handle rating change
      setComment({
        ...comment,
        rating: e,
      })
    } else {
      // Handle text field change
      const { name, value } = e.target;
      setComment({
        ...comment,
        [name]: value,
      })
    }
  };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if(!comment.comment && !comment.rating){
            return alert('Missing Details');
        }
        console.log(comment);
    }

    const handleScrollToTop = ()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }

  return (
    <>
    <Grid id='main-post-container' container component={'main'}>
        <Grid item xs={12} sm={12} md={12} lg={10} xl={9}>
        <Card className='flex flex-col justify-center items-center' sx={{Width:'100%', margin:1, backgroundColor:'red'}}>
            <CardMedia
                component="img"
                alt="green iguana"
                sx={{height: '100%', objectFit:'cover'}}
                image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
            />
            <CardContent className='w-full'>
                <Typography gutterBottom variant='h3' component='div'>
                    Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>

        {/* Author Details Section */}
        <Box component={'section'}>
            <Card className='flex flex-col justify-center items-center' sx={{maxWidth:'60%', marginY:16, marginX:'auto'}}>
                <Box component={'div'} position={'relative'}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        sx={{height: '150px', width:'150px', marginY:5, borderRadius:'50%',
                        position:'relative', objectFit:'cover', bgcolor:'black'}}
                        image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                    />
                    <Typography variant='caption' bgcolor={'cyan'}
                    px={4} sx={{borderRadius:'10px 0 10px 0', position:'absolute', top:30, left:110}}>
                        Author
                    </Typography>
                </Box>
                <CardContent sx={{bgcolor:'black', textAlign:'center' , width:'100%',color:'silver'}}>
                    <Typography gutterBottom variant='h5' component='p' sx={{p:0, m:0}}>
                        Rupesh Kumar Verma
                    </Typography>
                    <Typography gutterBottom component='p' variant='subtitle2'>
                        Anime Developer & Editor
                    </Typography>
                    <Typography mt={2} variant='body2'>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </Box>

        {/* More Like This Section */}
        <Box component={'section'}>
            <Typography variant='h6' m={1}>
                More Like This : 
            </Typography>
            <Box component={'div'} className='lg:flex'>
                <Card className='flex flex-col' sx={{Width:'100%', margin:1}}>
                    <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{height: '200px', objectFit:'cover'}}
                    image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                    />
                    <CardContent className='w-full'>
                        <Typography gutterBottom variant='h3'   component='div'>
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleScrollToTop} component={Link} to='/singlepost/10'>Learn More</Button>
                    </CardActions>
                </Card>
                <Card className='flex flex-col' sx={{Width:'100%', margin:1}}>
                    <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{height: '200px', objectFit:'cover'}}
                    image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                    />
                    <CardContent className='w-full'>
                        <Typography gutterBottom variant='h3'   component='div'>
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleScrollToTop} component={Link} to='/singlepost/11'>Learn More</Button>
                    </CardActions>
                </Card>
                
                <Card className='flex flex-col' sx={{Width:'100%', margin:1}}>
                    <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{height: '200px', objectFit:'cover'}}
                    image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                    />
                    <CardContent className='w-full'>
                        <Typography gutterBottom variant='h3'   component='div'>
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleScrollToTop} component={Link} to='/singlepost/12'>Learn More</Button>
                    </CardActions>
                </Card>

                <Card className='flex flex-col' sx={{Width:'100%', margin:1}}>
                    <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{height: '200px', objectFit:'cover'}}
                    image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                    />
                    <CardContent className='w-full'>
                        <Typography gutterBottom variant='h3'   component='div'>
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleScrollToTop} component={Link} to='/singlepost/13'>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
        </Grid>
        <Grid mt={4} item xs={12} sm={12} md={12} lg={2} xl={3}>
            {/* Trending Post Section */}
            <Box variant={'section'}>
                <Typography variant='h6' maxWidth={'50%'} ml={1}>
                    Trending
                </Typography>
                <Card className='relative flex justify-center items-center lg:flex-col' sx={{maxWidth:'100%', margin:1}}>
                    <Typography className='absolute left-0 top-0' bgcolor={'blueviolet'} color='white' sx={{padding:'0.1px 10px'}} variant='caption'>
                        Trending
                    </Typography>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            sx={{height: 200, objectFit:'cover'}}
                            image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                        />
                    <CardContent className='w-full'>
                        <Typography gutterBottom variant='h6' component='div'>
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                        <CardActions>
                            <Button onClick={handleScrollToTop} component={Link} to='/singlepost/14'>Learn More</Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card className='relative flex justify-center items-center lg:flex-col' sx={{maxWidth:'100%', margin:1}}>
                    <Typography className='absolute left-0 top-0' bgcolor={'blueviolet'} color='white' sx={{padding:'0.1px 10px'}} variant='caption'>
                        Trending
                    </Typography>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            sx={{height: 200, objectFit:'cover'}}
                            image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                        />
                    <CardContent className='w-full'>
                        <Typography gutterBottom variant='h6' component='div'>
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                        <CardActions>
                            <Button onClick={handleScrollToTop} component={Link} to='/singlepost/15'>Learn More</Button>
                    </CardActions>
                    </CardContent>
                </Card>
                
            </Box>
            <Divider component={'div'} sx={{margin:1, marginTop:4}}/>
            {/* Latest Post Section */}
            <Box>
                <Typography variant={'h6'} maxWidth={'50%'} ml={1}>
                    Latest
                </Typography>
                <Card className='relative flex justify-center items-center lg:flex-col' sx={{maxWidth:'100%', margin:1}}>
                    <Typography className='absolute left-0 top-0' bgcolor={'blueviolet'} color='white' sx={{padding:'0.1px 10px'}} variant='caption'>
                        Latest
                    </Typography>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            sx={{height: 200, objectFit:'cover'}}
                            image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                        />
                    <CardContent className='w-full'>
                        <Typography gutterBottom variant='h6' component='div'>
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                        <CardActions>
                            <Button onClick={handleScrollToTop} component={Link} to='/singlepost/16'>Learn More</Button>
                    </CardActions>
                    </CardContent>
                </Card>
                <Card className='relative flex justify-center items-center lg:flex-col' sx={{maxWidth:'100%', margin:1}}>
                    <Typography className='absolute left-0 top-0' bgcolor={'blueviolet'} color='white' sx={{padding:'0.1px 10px'}} variant='caption'>
                        Latest
                    </Typography>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            sx={{height: 200, objectFit:'cover'}}
                            image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                        />
                    <CardContent className='w-full'>
                        <Typography gutterBottom variant='h6' component='div'>
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                        <CardActions>
                            <Button onClick={handleScrollToTop} component={Link} to='/singlepost/17'>Learn More</Button>
                    </CardActions>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    </Grid>

    {/* Comment Section */}
    <Box component={'section'} mx={1} my={10}
    display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

        {/* // ! Show when user is not logged In */}
        <Typography variant='h5' p={1}>
            Your Comment
            <LockIcon className='animate-bounce' sx={{verticalAlign:'bottom', fontSize:'30px', color:'red', ml:1}} />
            <Typography className='animate-pulse' textAlign={'center'} fontWeight={'600'} mt={1} color={'red'} variant='subtitle2'>Only Login User is Allowed</Typography>
        </Typography>

        {/*// ! Show when user is logged In */}
        {/* <Typography  variant='h5' p={1}>
            Your Comment
            <KeyIcon className='animate-bounce' sx={{verticalAlign:'bottom', fontSize:'30px', color:'greenyellow', ml:1}} />
            <Typography className='animate-pulse' textAlign={'center'} fontWeight={'600'} mt={1} color={'green'} variant='subtitle2'>Give Us your Valuable Comment</Typography>
        </Typography> */}

        <Box component={'form'} onSubmit={handleCommentSubmit} sx={{width:'90%', my:2}}>
            <Box component={'div'} className='lg:flex lg:justify-around lg:items-center'>

                {/* Rating Div */}
                <Box component={'div'} className='lg:flex lg:justify-center lg:mx-5 flex items-center lg:bg-slate-800 lg:h-60 rounded-ss-3xl rounded-se-3xl rounded-es-full' width={"78%"}>
                    <Typography py={.2} px={1} mx={1} variant='h6' fontWeight={900} color={'orange'}
                    bgcolor={'black'}
                    borderRadius={'10px 10px 0px 10px'}
                    className='animate-bounce'
                    >
                    Give Us A Rating
                    </Typography>
                    <Rating
                        initialRating={comment.rating}
                        onChange={handleComment}
                        emptySymbol={<FaRegStar style={{ color: 'lightgray', fontSize: '1.5rem' }} />}
                        fullSymbol={<FaStar style={{ color: 'orange', fontSize: '1.5rem' }} />}
                        fractions={2}
                    />
                </Box>
                <Box component={'div'} className='w-full'>
                    <TextField
                    fullWidth
                    name="comment"
                    label="Comment"
                    type="text"
                    id="comment"
                    multiline
                    rows={10}
                    placeholder="Write Your Comment Here"
                    autoComplete="comment"
                    onChange={handleComment}
                    />
                </Box>
            </Box>
            <Box component={'div'} className='text-center my-4'>
                <Button disabled sx={{transform:'translate(-15px,0)'}} type='submit' variant={'contained'}>
                        Submit
                </Button>
            </Box>
        </Box>
    </Box>

    {/* Show All Comments Section */}
    <Grid container component={'main'} sx={{position:'relative'}} className='justify-around lg:justify-start'>
        <Typography variant='body1' sx={{position:'absolute',
        top:'-25px' , left:'50%'}} className='animate-bounce'>
            Your Comments are shown here
        </Typography>
        <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
            <Card className='flex justify-between items-start' sx={{maxWidth:'100%', margin:1,p:1}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        sx={{height: "40px", width:"40px",
                        borderRadius:'50%',
                        objectFit:'cover'}}
                        image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                    />
                    <CardContent className='w-full bg-red-200 mx-2' sx={{bgColor:'red',p:0.5}}>
                        <Typography variant='body2' fontWeight={900} color={'gray'}>Username</Typography>
                        <Typography variant='body2' fontWeight={900} color={'gray'} >Start : * * *</Typography>
                        <Typography variant='subtitle2' fontSize={11}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sapiente architecto id animi asperiores molestias autem excepturi aliquam odio debitis!</Typography>

                    </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
            <Card className='flex justify-between items-start' sx={{maxWidth:'100%', margin:1,p:1}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        sx={{height: "40px", width:"40px",
                        borderRadius:'50%',
                        objectFit:'cover'}}
                        image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
                    />
                    <CardContent className='w-full bg-red-200 mx-2' sx={{bgColor:'red',p:0.5}}>
                        <Typography variant='body2' fontWeight={900} color={'gray'}>Username</Typography>
                        <Typography variant='body2' fontWeight={900} color={'gray'}>Star : * * * * *</Typography>
                        <Typography variant='subtitle2' fontSize={11}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sapiente architecto id animi asperiores molestias autem excepturi aliquam odio debitis!</Typography>
                    </CardContent>
            </Card>
        </Grid>
        
    </Grid>

    </>

  )
}

export default SinglePost