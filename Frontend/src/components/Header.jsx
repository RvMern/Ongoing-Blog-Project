import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button, Typography} from '@mui/material';

const Header = () => {
    const [open,setOpen] = useState(false);
    const [searchInput,setSearchInput] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const Open = Boolean(anchorEl);

    const toggleDrawer = (isOpen) => (e) => {
        if(e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')){
            return;
        }
        setOpen(isOpen);
    };

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSearchInput = (e) => {
        const {value} = e.target;
        setSearchInput(value)
    };

    const handleSearch = (e) => {
        if(!searchInput){
            return
        }
        alert(searchInput)
    };

  return (
    <>
    {/* ! Header for the LARGE Screens */}
    <section className='justify-between hidden lg:flex items-center p-2'>
        <Typography variant='h4' component={Link} 
        fontWeight={900}
        to={'/'} className='p-2 animate-bounce hover:text-violet-600'>Lorem Ip</Typography>
        <div className='p-2 flex justify-between items-center'>
            <Link className='hover:text-violet-400' to='/' href=""><FaFacebook className='text-xl m-2'/></Link>
            <Link className='hover:text-violet-400' to='/' href=""><FaInstagram className='text-xl m-2'/></Link>
            <Link className='hover:text-violet-400' to='/'><FaTwitter className='text-xl m-2'/></Link>
            <Paper
                component="form"
                sx={{ p: '2px 4px', m:0.5, display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    onChange={handleSearchInput}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Posts Here"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} 
                orientation="vertical" />
                <IconButton onClick={handleSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    </section>

    {/* ! Header for the SMALL Screens */}
    <section className='lg:hidden'>
        <section className='flex justify-between items-center p-2'>
        <Typography variant='h5' component={Link} 
            fontWeight={900}
            to={'/'} className='p-2 animate-bounce hover:text-violet-600'>Lorem Ip
        </Typography>
            <div>
                <IconButton onClick={toggleDrawer(true)} type="button" sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon sx={{fontSize:'38px'}} />
                </IconButton>
                <Drawer
                    anchor='right'
                    open={open}
                    onClose={toggleDrawer(false)}
                >
                    <IconButton sx={{width:'50px', margin:'10px 0 0 10px'}} onClick={toggleDrawer(false)} type="button" aria-label='close'>
                        <CloseIcon sx={{fontSize:'38px'}} />
                    </IconButton>
                    <List className='w-80 flex flex-col items-center justify-center'>
                        <ListItem component={Link} to='/'>
                            <ListItemIcon>
                                <HomeIcon className='text-violet-400'/>
                            </ListItemIcon>
                            <ListItemText className='hover:text-violet-600' primary="Home" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CategoryIcon className='text-blue-400'/>
                            </ListItemIcon>
                            <div>
                                <Button
                                    id="categories-btn"
                                    variant='text'
                                    sx={{color:'rgba(80,60,96,.9)' , fontWeight:600 ,m:0,p:0}}
                                    aria-controls={Open ? 'categories-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={Open ? 'true' : undefined}
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                >
                                    Categories
                                </Button>
                                <Menu
                                    id="categories-menu"
                                    anchorEl={anchorEl}
                                    open={Open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'categories-btn',
                                    }}
                                >
                                    <MenuItem onClick={handleClose} component={Link} to='/categories/animes'>
                                        Animes
                                    </MenuItem>

                                    <MenuItem onClick={handleClose} component={Link} to='/categories/scifi&tech'>
                                        Science And Technology
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} component={Link} to='/categories/politics'>
                                        Politics
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} component={Link} to='/categories/others'>
                                        Others
                                    </MenuItem>
                                </Menu>
                            </div>
                        </ListItem>
                        <ListItem component={Link} to='/trending'>
                            <ListItemIcon>
                                <WhatshotIcon className='text-red-500' />
                            </ListItemIcon>
                            <ListItemText className='hover:text-violet-600' primary="Trending" />
                        </ListItem>
                        <ListItem component={Link} to='/latest'>
                            <ListItemIcon>
                                <FiberNewIcon className='text-green-500' />
                            </ListItemIcon>
                            <ListItemText className='hover:text-violet-600' primary="Latest" />
                        </ListItem>
                        <ListItem component={Link} to='/about-us'>
                            <ListItemIcon>
                                <InfoIcon className='text-slate-500'/>
                            </ListItemIcon>
                            <ListItemText className='hover:text-violet-600' primary="About Us" />
                        </ListItem>
                        <ListItem component={Link} to='/contact-us'>
                            <ListItemIcon>
                                <ContactSupportIcon className='text-slate-900'/>
                            </ListItemIcon>
                            <ListItemText className='hover:text-violet-600' primary="Contact Us" />
                        </ListItem>
                        <ListItem component={Link} to='/login'>
                            <ListItemIcon>
                                <ContactSupportIcon className='text-slate-900'/>
                            </ListItemIcon>
                            <ListItemText className='hover:text-violet-600' primary="Log In" />
                        </ListItem>
                        <Typography marginRight={16} fontWeight={900}>OR</Typography>
                        <ListItem component={Link} to='/signup'>
                            <ListItemIcon>
                                <ContactSupportIcon className='text-slate-900'/>
                            </ListItemIcon>
                            <ListItemText className='hover:text-violet-600' primary="Sign Up" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>    
        </section>

        <section className='p-2 flex flex-col items-center justify-center'>
            <Paper
                component="form"
                sx={{ p: '2px 4px', m:0.5, display: 'flex',alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Posts Here"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} 
                    orientation="vertical" />
                <IconButton onClick={handleSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </section>
    </section>
    </>
  )
}

export default Header