import React from 'react'
import {ReactTyped} from 'react-typed';
import {Button, Card, Box, CardMedia, CardActions, CardContent, Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Homepage = () => {
  
  return (
    <>
      <div className='text-white bg-custom-pattern bg-no-repeat bg-cover bg-black bg-center h-70 w-full p-8 shadow-2xl my-1'>
        <h1 className='p-2 text-xl text-center'>Welcome to My Blog!</h1>
        <p className='px-2 py-4 text-4xl text-center'>Explore the world of <ReactTyped strings={['Tech', 'Art', 'Travel', 'Cooking', 'Fashion']} typeSpeed={80} backSpeed={50} loop/></p>
        <p className='p-2 my-2 text-md text-center'>Discover insightful articles, stunning visuals, and engaging stories.</p>
        <div className='py-2 mt-4 text-center'>
          <Button component={Link} to='/all-posts' variant='contained' color='warning'>Explore Now</Button>
        </div>
      </div>

      {/* Carousel Section */}
        <Carousel
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
          interval={1000}
          dynamicHeight={true}
        >
          <Box component={'div'}>
            <Box component={'img'} src="https://wallpapercave.com/wp/wp9059520.jpg"
            className='object-cover' alt="Slide 1" />
          </Box>
          <Box component={'div'}>
            <Box component={'img'} src="https://wallpaperaccess.com/full/767390.jpg"
            className='object-cover' alt="Slide 2" />
          </Box>
          <Box component={'div'}>
            <Box component={'img'} src="https://wallpaperaccess.com/full/767569.jpg"
            className='object-cover' alt="Slide 3" />
          </Box>
          <Box component={'div'}>
            <Box component={'img'} src="https://wallpaperaccess.com/full/767256.jpg"
            className='object-cover' alt="Slide 4" />
          </Box>
          <Box component={'div'}>
            <Box component={'img'} src="https://wallpaperaccess.com/full/826922.jpg"
            className='object-cover' alt="Slide 5" />
          </Box>
          <Box component={'div'}>
            <Box component={'img'} src="https://wallpapers.com/images/hd/food-4k-m37wpodzrcbv5gvw.jpg"
            className='object-cover' alt="Slide 6" />
          </Box>
          <Box component={'div'}>
            <Box component={'img'} src="https://wallpaperaccess.com/full/767277.jpg"
            className='object-cover' alt="Slide 3" />
          </Box>
          <Box component={'div'}>
            <Box component={'img'} src="https://i.redd.it/0k6meqvps4h91.gif"
            className='object-cover' alt="Slide 8" />
          </Box>
        </Carousel>

      {/* Latest Posts */}
      <Box component={'div'} className='flex flex-col justify-between items-center mt-12'>
        <Typography variant='h6' color='HighlightText' className='my-12 bg-violet-600 px-6 rounded-ee-lg rounded-es-lg'>
            Latest Posts
        </Typography>
        <Typography margin={1} textAlign={'center'} variant='h7' padding={1} color={'text.secondary'} fontWeight={600}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam assumenda repudiandae sed error odio nostrum dicta laudantium quod at reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Typography>
        <Box component={'div'} className='flex flex-col justify-center items-center md:flex-row'>
        <Card sx={{maxWidth:'100%', margin:2}}>
          <Typography fontWeight={900} variant={'caption'} component={'span'} p={1} color={'white'} bgcolor={'blueviolet'} className='rounded-se-lg rounded-ee-sm' >
            Latest
          </Typography>
          <CardMedia
          component="img"
          alt="green iguana"
          sx={{height: 200, objectFit:'cover'}}
          image="https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204_1280.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              End of the Day: Winter's Embrace
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A group of men, bundled in heavy coats and hats, emerge from a dimly lit tunnel after a long day's work. The air is crisp, and snow blankets the ground, creating a serene yet harsh winter landscape. Their breath forms misty clouds in the cold, and their tired faces reflect both the exhaustion and camaraderie of shared labor. As the men make their way home, the stark contrast between the dark tunnel and the bright, snowy surroundings highlights the transition from the grueling workday to the solace of evening. This image captures the resilience and perseverance of workers facing the relentless challenges of winter.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{maxWidth:'100%', margin:2}}>
          <Typography variant={'caption'} component={'span'} p={1} color={'white'} bgcolor={'blueviolet'} className='rounded-se-lg rounded-ee-sm' >
            Latest
          </Typography>
          <CardMedia
          component="img"
          alt="green iguana"
          sx={{height: 200, objectFit:'cover'}}
          image="https://cdn.pixabay.com/photo/2023/01/08/16/30/castle-7705682_1280.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Anime
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{maxWidth:'100%', margin:2}}>
          <Typography variant={'caption'} component={'span'} p={1} color={'white'} bgcolor={'blueviolet'} className='rounded-se-lg rounded-ee-sm' >
            Latest
          </Typography>
          <CardMedia
          component="img"
          alt="green iguana"
          sx={{height: 200, objectFit:'cover'}}
          image="https://cdn.pixabay.com/photo/2022/04/18/02/24/architecture-7139263_1280.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Anime
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Box>
      </Box>

      {/* Parent Block for Editor and Trending Posts */}
      <Box component={'div'} className='py-2 lg:flex lg:justify-between'>
        {/* Editor pick container */}
        <Box component={'div'}>
          <Typography variant='h6'  className='px-3' fontWeight={900}>
            Editor's Pick
          </Typography>
          
          <Box component={'div'} className='lg:flex'>
            {/* Editor Pick left side */}
            <Box component={'div'}>
            <Card sx={{maxWidth:'100%', margin:2,}}>
              <CardMedia
                component="img"
                alt="green iguana"
                className='animate-pulse'
                sx={{height: '400px', objectFit:'cover', borderRadius:'100px 0'}}
                image="https://cdn.pixabay.com/photo/2016/11/21/14/02/prague-1845560_1280.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </Box>

            {/* Editor Pick right side */}
            <Box component={'div'} className='w-full'>
            <Card className='flex justify-center items-center' sx={{maxWidth:'100%', margin:2}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height: 100, objectFit:'cover'}}
                image="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card className='flex justify-center items-center' sx={{maxWidth:'100%', margin:2}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height: 100}}
                image="https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card className='flex justify-center items-center' sx={{maxWidth:'100%', margin:2}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height: 100}}
                image="https://cdn.pixabay.com/photo/2018/04/27/08/56/water-3354067_1280.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card className='flex justify-center items-center' sx={{maxWidth:'100%', margin:2}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height: 100}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </Box>
          </Box>
        </Box>

        <Box component={'div'}>
          <Typography variant='h6'  className='px-3' fontWeight={900}>
            Trending
          </Typography>
          <Box component={'div'} className='w-full'>
          <Card className='flex justify-center items-center' sx={{maxWidth:'100%', margin:2}}>
              <Typography className='p-6' variant='h4' color='text.secondary'>01</Typography>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card className='flex justify-center items-center' sx={{maxWidth:'100%', margin:2}}>
              <Typography className='p-6' variant='h4' color='text.secondary'>02</Typography>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card className='flex justify-center items-center' sx={{maxWidth:'100%', margin:2}}>
              <Typography className='p-6' variant='h4' color='text.secondary'>03</Typography>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card className='flex justify-center items-center' sx={{maxWidth:'100%', margin:2}}>
              <Typography className='p-6' variant='h4' color='text.secondary'>04</Typography>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>

      </Box>

      <Box component={'div'} className='p-5'>
            <Card className='lg:flex lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:400 }}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography className='lg:animate-bounce' gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>
      </Box>

      <Box component={'div'} className='p-8 lg:p-12 lg:flex justify-between items-center'>
        {/* Politics Section */}
        <Box component={'div'}>
          <Typography gutterBottom variant='h5' component='div'>
              Politics
          </Typography>

          <Card className='md:flex my-5 lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:200, width:'100%'}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>

            <Card className='md:flex my-5 lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:200, width:'100%'}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>

            <Card className='md:flex my-5 lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:200, width:'100%'}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>
        </Box>
        {/* Business Section */}
        <Box component={'div'} className='lg:mx-6'>
          <Typography gutterBottom variant='h5' component='div'>
              Business
          </Typography>

          <Card className='md:flex my-5 lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:200, width:'100%'}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>

            <Card className='md:flex my-5 lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:200, width:'100%'}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>

            <Card className='md:flex my-5 lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:200, width:'100%'}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>
        </Box>
      </Box>

      <Box component={'div'} className='p-8 lg:flex lg:justify-center'>
      {/* Recent News */}
        <Box component={'div'}>
        <Typography gutterBottom variant='h5' component='div'>
              Recent News
        </Typography>
        <Card className='md:flex my-5 lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:200, width:'100%'}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
            </Card>

            <Card className='md:flex my-5 lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:200, width:'100%'}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
            </Card>

            <Card className='md:flex my-5 lg:justify-center lg:items-center'
            sx={{maxWidth : '100%'}}>
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{height:200, width:'100%'}}
                image="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
              />
            </Card>
        </Box>
        {/* Popular Posts */}
        <Box className='lg:ms-20 mt-20 lg:mt-0'>
        <Typography gutterBottom variant='h5' component='div'>
              Popular News
        </Typography>
        <Card  className='flex my-5 justify-center items-center' sx={{maxWidth : '100%'}}>
            <Typography className='px-6' variant='h4' color='text.secondary'>01</Typography>
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>

            <Card  className='flex my-5 justify-center items-center' sx={{maxWidth : '100%'}}>
            <Typography className='px-6' variant='h4' color='text.secondary'>02</Typography>
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>

            <Card  className='flex my-5 justify-center items-center' sx={{maxWidth : '100%'}}>
            <Typography className='px-6' variant='h4' color='text.secondary'>03</Typography>
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>

            <Card  className='flex my-5 justify-center items-center' sx={{maxWidth : '100%'}}>
            <Typography className='px-6' variant='h4' color='text.secondary'>04</Typography>
              <CardContent className='lg:flex lg:flex-col lg:justify-center lg:items-start' 
              sx={{p:3}}>
                <Typography gutterBottom variant='h5' component='div'>
                  Anime
                </Typography>
                <Typography textAlign={'justify'} variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>
        </Box>
      </Box>

      <Box component={'footer'}>
        <Box component={'section'} className='bg-slate-200 p-10 lg:flex lg:justify-around lg:items-center'>
          <Box component={'div'}>
            <Typography variant='h5'>Newsletter Subscribe</Typography>
            <Typography color='text.secondary' textAlign={'justify'} component={'p'} margin='10px 0'>"Don't Miss Out – Subscribe to Our Newsletter for Exclusive Tips, Fresh Insights, and the Latest Updates Straight to Your Inbox!"</Typography>
          </Box>
          <Box component={
          'form'} className='p-2 my-4 lg:w-full lg:flex
            lg:justify-center lg:items-center' method='post'>
            <Box>
              <input className='p-4 w-80 lg:96 rounded-2xl
              focus:outline-none' type="text" placeholder='Enter your email' id='subscribe_email' name='subscribe_email' />
              <button className='bg-black rounded-full p-4 ms-2
              transition-all hover:bg-green-500' type='submit'><SendIcon htmlColor='#fff' color='red'/></ button>
            </Box>
          </Box>
        </Box>

        <section>
          <Typography p={2} textAlign={'center'} component={'p'} margin='10px 0'>
          Copyright &copy;2024 All rights reserved by Rv
          </Typography>
        </section>
      </Box>

      
    </>
  )
}

export default Homepage