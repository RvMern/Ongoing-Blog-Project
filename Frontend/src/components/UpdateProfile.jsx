import { Box, Button, CardActions, CardContent, CardMedia, TextField, Card } from '@mui/material'
import React, {useState} from 'react'

const UpdateProfile = () => {
    const [updateProfile,setUpdateProfile] = useState({
        username:"",
        email:"",
        userMobile:"",
        userDob:""
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setUpdateProfile({
            ...updateProfile,
            [name]:value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updateProfile);
    }

  return (
    <Box component={'section'}
    sx={{position:'relative'}}
    py={20}
    px={2}>
        <Card  component={'form'} onSubmit={handleSubmit} sx={{maxWidth:600, bgcolor:'buttonShadow', m:'auto',
        display:'flex', flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:200,
        borderTopRightRadius:200,
        p:10}}>
            <CardMedia
                component={'img'} 
                image='https://wallpapercave.com/wp/wp5408557.png'
                alt='User profile Image'
                sx={{width:200, height:200, borderRadius:50,
                position:'absolute',
                top:'0',
                transform:'translate(0,15%)'}}
            />
            <CardContent>
                <TextField
                    type='text'
                    margin='normal'
                    fullWidth
                    id="username"
                    label = 'Rupesh Kumar Verma'
                    name="username"
                    autoComplete="username"
                    onChange={handleChange}
                />
                <TextField
                    type='email'
                    margin='normal'
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                />
                <TextField
                    type={'text'}
                    margin='normal'
                    fullWidth
                    id="userMobile"
                    label='Mobile No.'
                    name="userMobile"
                    autoComplete="userMobile"
                    onChange={handleChange}
                />
                <TextField
                    type={'date'}
                    margin='normal'
                    sx={{pointer:'cursor'}}
                    fullWidth
                    id="userDob"
                    name="userDob"
                    autoComplete="userDob"
                    onChange={handleChange}
                />
            </CardContent>
            <CardActions>
                <Button type='submit'  variant={'contained'}>
                    Update Profile
                </Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default UpdateProfile