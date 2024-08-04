import React, { useState } from 'react'
import { Box, Button, CardActions, CardContent, CardMedia, TextField, Card } from '@mui/material'

const UpdatePassword = () => {
    const [passwords,setPasswords] = useState({
        oldPassword:"",
        newPassword:"",
        confirmNewPassword:""
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setPasswords({
            ...passwords,
            [name]:value
        })
    };

    const handleSubmit = () => {
        console.log(passwords);
    }


  return (
    <Box component={'section'}
    sx={{position:'relative'}}
    py={20}
    px={2}>
        <Card
        component={'form'}
        onSubmit={handleSubmit}
        sx={{maxWidth:600, bgcolor:'buttonShadow', m:'auto',
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
                    id="oldPassword"
                    label = 'Old Password'
                    name="oldPassword"
                    autoComplete="oldPassword"
                    onChange={handleChange}
                />
                <TextField
                    type='text'
                    margin='normal'
                    fullWidth
                    id="newPassword"
                    label = 'New Password'
                    name="newPassword"
                    autoComplete="newPassword"
                    onChange={handleChange}
                />
                <TextField
                    type='text'
                    margin='normal'
                    fullWidth
                    label='Confirm New Password'
                    id="confirmPassword"
                    name="confirmPassword"
                    autoComplete="confirmPassword"
                    onChange={handleChange}
                />
            </CardContent>
            <CardActions>
                <Button type='submit'  variant={'contained'}>
                    Update Password
                </Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default UpdatePassword