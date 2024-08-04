import React, { useState, useEffect } from 'react'
import {Box,Button,Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Accordion,AccordionSummary,AccordionDetails,FormGroup,FormControlLabel, Checkbox,CssBaseline, Grid, Typography} from '@mui/material'
import {Card,CardMedia,CardContent,CardActions} from '@mui/material'
import {Link } from 'react-router-dom'
import { FaFilter } from "react-icons/fa6";
import { BsGridFill, BsGrid3X3GapFill } from "react-icons/bs";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryIcon from '@mui/icons-material/Category';
import StyleIcon from '@mui/icons-material/Style';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AltRouteIcon from '@mui/icons-material/AltRoute';

const AllPosts = () => {
    const [gridLayout, setGridLayout] = useState({
        col2:6,
        col3:4
    });
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [selectedCheckbox2, setSelectedCheckbox2] = useState(null);
    const [selectedCheckbox3, setSelectedCheckbox3] = useState(null);
    const [selectedCheckbox4, setSelectedCheckbox4] = useState(null);
    const [totalSelectedCheckbox, setTotalSelectedCheckbox] = useState({
        selectedCheckbox:null,
        selectedCheckbox2:null,
        selectedCheckbox3:null,
        selectedCheckbox4:null
    });

    const filterListOptions = [
        {icon:<CategoryIcon />, text:'Categories'},
        {icon:<StyleIcon />, text:'Tags'},
        {icon:<AccessTimeIcon />, text:'Year'},
        {icon:<AltRouteIcon />, text:'Others'},
    ] 
    const [open,setOpen] = useState(false)
    const toggleDrawer = () => {
        if(open){
          return  setOpen(false)
        }
        setOpen(true)

    };

    useEffect(()=>{
        // Get the current URL without the query string
        const baseUrl = window.location.href.split('?')[0]
        window.history.replaceState({}, '', baseUrl);
    },[])

    const handleChange = (event) => {
        const checkboxName = event.target.name;
        if (selectedCheckbox === checkboxName) {
            // If the clicked checkbox is already selected, uncheck it
            setSelectedCheckbox(null);
            setTotalSelectedCheckbox({
                ...totalSelectedCheckbox,
                selectedCheckbox:null
            })
            // Get the current URL without the query string
            const baseUrl = window.location.href.split('?')[0]
            // Get the current query parameters
            const params = new URLSearchParams(window.location.search);
            // Update or add the checkbox name to the query parameters
            params.delete('checkbox')
            // Build the new URL with the updated query parameters
            const newUrl = `${baseUrl}?${params.toString()}`;
            // Replace the current state in the browser history with the baseUrl
            window.history.replaceState({}, '', newUrl);
          } else {
            // Otherwise, set it as the selected checkbox
            setSelectedCheckbox(checkboxName);
            setTotalSelectedCheckbox({
                ...totalSelectedCheckbox,
                selectedCheckbox:checkboxName
            })
            // Get the current URL without the query string
            const baseUrl = window.location.href.split('?')[0]
            // Get the current query parameters
            const params = new URLSearchParams(window.location.search);
            // Update or add the checkbox name to the query parameters
            params.set('checkbox',checkboxName)
            // Build the new URL with the updated query parameters
            const newUrl = `${baseUrl}?${params.toString()}`;
            // Replace the current state in the browser history with the new URL
            window.history.replaceState({}, '', newUrl);
        }
    };

    const handleChange2 = (event) => {
        const checkboxName = event.target.name;
        if (selectedCheckbox2 === checkboxName) {
            // If the clicked checkbox is already selected, uncheck it
            setSelectedCheckbox2(null);
            setTotalSelectedCheckbox({
                ...totalSelectedCheckbox,
                selectedCheckbox2:null
            })
            // Get the current URL without the query string
            const baseUrl = window.location.href.split('?')[0]
            // Get the current query parameters
            const params = new URLSearchParams(window.location.search);
            // Update or add the checkbox name to the query parameters
            params.delete('checkbox2')
            // Build the new URL with the updated query parameters
            const newUrl = `${baseUrl}?${params.toString()}`;
            // Replace the current state in the browser history with the baseUrl
            window.history.replaceState({}, '', newUrl);
        }
        else{
            // Otherwise, set it as the selected checkbox
            setSelectedCheckbox2(checkboxName);
            setTotalSelectedCheckbox({
                ...totalSelectedCheckbox,
                selectedCheckbox2:checkboxName
            })
            // Get the current URL without the query string
            const baseUrl = window.location.href.split('?')[0]
            // Get the current query parameters
            const params = new URLSearchParams(window.location.search);
            // Update or add the checkbox name to the query parameters
            params.set('checkbox2',checkboxName)
            // Build the new URL with the updated query parameters
            const newUrl = `${baseUrl}?${params.toString()}`;
            // Replace the current state in the browser history with the new URL
            window.history.replaceState({}, '', newUrl);
        }
    }
    const handleChange3 = (event) => {
        const checkboxName = event.target.name;
        if (selectedCheckbox3 === checkboxName) {
            // If the clicked checkbox is already selected, uncheck it
            setSelectedCheckbox3(null);
            setTotalSelectedCheckbox({
                ...totalSelectedCheckbox,
                selectedCheckbox3:null
            })
            // Get the current URL without the query string
            const baseUrl = window.location.href.split('?')[0]
            // Get the current query parameters
            const params = new URLSearchParams(window.location.search);
            // Update or add the checkbox name to the query parameters
            params.delete('checkbox3')
            // Build the new URL with the updated query parameters
            const newUrl = `${baseUrl}?${params.toString()}`;
            // Replace the current state in the browser history with the baseUrl
            window.history.replaceState({}, '', newUrl);
        }
        else{
            // Otherwise, set it as the selected checkbox
            setSelectedCheckbox3(checkboxName);
            setTotalSelectedCheckbox({
                ...totalSelectedCheckbox,
                selectedCheckbox3:checkboxName
            })
            // Get the current URL without the query string
            const baseUrl = window.location.href.split('?')[0]
            // Get the current query parameters
            const params = new URLSearchParams(window.location.search);
            // Update or add the checkbox name to the query parameters
            params.set('checkbox3',checkboxName)
            // Build the new URL with the updated query parameters
            const newUrl = `${baseUrl}?${params.toString()}`;
            // Replace the current state in the browser history with the new URL
            window.history.replaceState({}, '', newUrl);
        }
    }
    const handleChange4 = (event) => {
        const checkboxName = event.target.name;
        if (selectedCheckbox4 === checkboxName) {
            // If the clicked checkbox is already selected, uncheck it
            setSelectedCheckbox4(null);
            setTotalSelectedCheckbox({
                ...totalSelectedCheckbox,
                selectedCheckbox4:null
            })
            // Get the current URL without the query string
            const baseUrl = window.location.href.split('?')[0]
            // Get the current query parameters
            const params = new URLSearchParams(window.location.search);
            // Update or add the checkbox name to the query parameters
            params.delete('checkbox4')
            // Build the new URL with the updated query parameters
            const newUrl = `${baseUrl}?${params.toString()}`;
            // Replace the current state in the browser history with the baseUrl
            window.history.replaceState({}, '', newUrl);
        }
        else{
            // Otherwise, set it as the selected checkbox
            setSelectedCheckbox4(checkboxName);
            setTotalSelectedCheckbox({
                ...totalSelectedCheckbox,
                selectedCheckbox4:checkboxName
            })
            // Get the current URL without the query string
            const baseUrl = window.location.href.split('?')[0]
            // Get the current query parameters
            const params = new URLSearchParams(window.location.search);
            // Update or add the checkbox name to the query parameters
            params.set('checkbox4',checkboxName)
            // Build the new URL with the updated query parameters
            const newUrl = `${baseUrl}?${params.toString()}`;
            // Replace the current state in the browser history with the new URL
            window.history.replaceState({}, '', newUrl);
        }
    }

    const handleGridLayout = (e) => {
        if(e.currentTarget.id === 'twoColLayout'){
            return setGridLayout({
                col2:6
            })
        }
        if(e.currentTarget.id === 'threeColLayout'){
            return setGridLayout({
                col3:4
            })
        }
    }


  return (
    <div>
        <Box component={'div'} className='flex justify-between items-center p-3 bg-slate-800'
        >
            <Box>
                <Button component={Link} to="/all-posts?tag=latest" sx={{mx:1}}>
                    Latest
                </Button>
                <Button component={Link} to="/all-posts?tag=popular" sx={{mx:1}}>
                    Popular
                </Button>
                <Button component={Link} to="/all-posts?tag=trending" sx={{mx:1}}>
                    Trending
                </Button>
            </Box>
            <Box className='flex justify-center py-2 items-center'>
                    <Box component={'div'}>
                        <Button onClick={toggleDrawer}>
                            <FaFilter />
                        </Button>
                        <Drawer anchor={'bottom'} open={open} onClose={toggleDrawer}>
                            <List>
                            {/* List Item No. 1 */}
                                <ListItem disablePadding>
                                    <Accordion sx={{width:'100%'}}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"   
                                    >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {filterListOptions[0]?.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={filterListOptions[0]?.text}/>
                                        </ListItemButton>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormGroup>
                                                <FormControlLabel
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'sci-fi'}
                                                    name='sci-fi'
                                                    onChange={handleChange}
                                                />} label="Sci-Fi" />
                                                
                                                <FormControlLabel
                                                label='Technology'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'technology'}
                                                    name='technology'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Food and Drink'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'food-and-drinks'}
                                                    name='food-and-drinks'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Politics'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'politics'}
                                                    name='politics'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Education'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'education'}
                                                    name='education'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Finance'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'finance'}
                                                    name='finance'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Lifestyle'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'lifestyle'}
                                                    name='lifestyle'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Environment'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'environment'}
                                                    name='environment'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Business'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'business'}
                                                    name='business'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Hobbies and Interests'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'hobbies-and-interests'}
                                                    name='hobbies-and-interests'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Gaming'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'gaming'}
                                                    name='gaming'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Entertainment'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'entertainment'}
                                                    name='entertainment'
                                                    onChange={handleChange}
                                                />} />

                                                <FormControlLabel
                                                label='Health and Wellness'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox === 'health-and-wellness'}
                                                    name='health-and-wellness'
                                                    onChange={handleChange}
                                                />} />
                                            </FormGroup>
                                        </AccordionDetails>
                                    </Accordion>
                                </ListItem>
                                
                            {/* List Item No. 2 */}
                            <ListItem disablePadding>
                                    <Accordion sx={{width:'100%'}}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"   
                                    >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {filterListOptions[1]?.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={filterListOptions[1]?.text}/>
                                        </ListItemButton>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormGroup>
                                                <FormControlLabel
                                                label="Latest"
                                                control={<Checkbox 
                                                    checked={selectedCheckbox2 === 'latest'}
                                                    name='latest'
                                                    onChange={handleChange2}
                                                />} />
                                                
                                                <FormControlLabel
                                                label='Popular'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox2 === 'popular'}
                                                    name='popular'
                                                    onChange={handleChange2}
                                                />} />

                                                <FormControlLabel
                                                label='Trending'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox2 === 'trending'}
                                                    name='trending'
                                                    onChange={handleChange2}
                                                />} />

                                            </FormGroup>
                                        </AccordionDetails>
                                    </Accordion>
                                </ListItem>

                            {/* List Item No. 3 */}
                            <ListItem disablePadding>
                                    <Accordion sx={{width:'100%'}}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"   
                                    >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {filterListOptions[2]?.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={filterListOptions[2]?.text}/>
                                        </ListItemButton>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormGroup>
                                                <FormControlLabel
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2024'}
                                                    name='2024'
                                                    onChange={handleChange3}
                                                />} label="2024" />
                                                
                                                <FormControlLabel
                                                label='2023'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2023'}
                                                    name='2023'
                                                    onChange={handleChange3}
                                                />} />

                                                <FormControlLabel
                                                label='2023'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2023'}
                                                    name='2023'
                                                    onChange={handleChange3}
                                                />} />

                                                <FormControlLabel
                                                label='2022'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2022'}
                                                    name='2022'
                                                    onChange={handleChange3}
                                                />} />

                                                <FormControlLabel
                                                label='2021'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2021'}
                                                    name='2021'
                                                    onChange={handleChange3}
                                                />} />

                                                <FormControlLabel
                                                label='2020'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2020'}
                                                    name='2020'
                                                    onChange={handleChange3}
                                                />} />

                                                <FormControlLabel
                                                label='2019'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2019'}
                                                    name='2019'
                                                    onChange={handleChange3}
                                                />} />

                                                <FormControlLabel
                                                label='2018'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2018'}
                                                    name='2018'
                                                    onChange={handleChange3}
                                                />} />

                                                <FormControlLabel
                                                label='2017'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2017'}
                                                    name='2017'
                                                    onChange={handleChange3}
                                                />} />

                                                <FormControlLabel
                                                label='2016'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox3 === '2016'}
                                                    name='2016'
                                                    onChange={handleChange3}
                                                />} />

                                            </FormGroup>
                                        </AccordionDetails>
                                    </Accordion>
                                </ListItem>


                            {/* List Item No. 4 */}
                            <ListItem disablePadding>
                                    <Accordion sx={{width:'100%'}}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"   
                                    >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {filterListOptions[3]?.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={filterListOptions[3]?.text}/>
                                        </ListItemButton>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormGroup>
                                                <FormControlLabel
                                                control={<Checkbox 
                                                    checked={selectedCheckbox4 === 'anime'}
                                                    name='anime'
                                                    onChange={handleChange4}
                                                />} label="Anime" />
                                                
                                                <FormControlLabel
                                                label='Manhawa'
                                                control={<Checkbox 
                                                    checked={selectedCheckbox4 === 'manhawa'}
                                                    name='manhawa'
                                                    onChange={handleChange4}
                                                />} />

                                            </FormGroup>
                                        </AccordionDetails>
                                    </Accordion>
                                </ListItem>
                            </List>
                        </Drawer>
                    </Box>
                    <Box className="hidden lg:block">
                        <Button id='twoColLayout' onClick={handleGridLayout}>
                            <BsGridFill />
                        </Button>
                        <Button id='threeColLayout' onClick={handleGridLayout}>
                            <BsGrid3X3GapFill />
                        </Button>
                    </Box>
            </Box>
        </Box>

            <Grid container spacing={2} my={2}
            className='md:justify-around xl:justify-start' component="main">
                <CssBaseline />

                {[1, 2, 3, 4, 5].map((item) => (
                <Grid item xs={12} sm={12} md={gridLayout?.col2} lg={gridLayout?.col3} key={item}>
                <Card className='flex flex-col justify-center items-center' sx={{maxWidth:'100%', margin:1}}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            sx={{height: 150, objectFit:'cover'}}
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
                    <CardActions className='w-full'>
                        <Button component={Link} to={`/singlepost/${item}`} size="small">Learn More</Button>
                    </CardActions>
                </Card>
                </Grid>
            ))}
                                        
            </Grid>

    </div>
  )
}

export default AllPosts