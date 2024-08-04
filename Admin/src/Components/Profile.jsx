import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";

const Profile = () => {
  return (
    <Box className='h-screen p-12 lg:p-28 text-white lg:m-custom-ml-15'>
      <Box>
        <img src="" alt="profile Image" />
      </Box>
      <Paper component={'form'} className="p-12">
        <TextField
          margin={"normal"}
          fullWidth
          autoComplete=""
          type="text"
          id="username"
          name="username"
          label="Username"
        />
        <TextField
          margin={"normal"}
          fullWidth
          type="email"
          autoComplete=""
          id="email"
          name="email"
          label="Email"
        />
        <TextField
          margin={"normal"}
          fullWidth
          type="text"
          autoComplete=""
          id="profession"
          name="profession"
          label="Profession"
        />
        <TextField
          multiline
          type="text"
          rows={10}
          margin={"normal"}
          fullWidth
          autoComplete=""
          id="userDescription"
          name="userDescription"
          label="About Me"
        />
        <Button sx={{my:1.5}} variant={'contained'} type={'submit'}>Update</Button>
      </Paper>
    </Box>
  );
};

export default Profile;
