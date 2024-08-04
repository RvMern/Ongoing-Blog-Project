import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username:Yup.string().required('Username is required').min(3,'Username must be at least contain 3 characters'),
  email:Yup.string().required('Email is required').email('Enter valid email'),
  password:Yup.string().required('Password is required').min(8,'Password must be at least 8 characters')
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        RvBlogs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function SignUp() {
  const formik = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },
    validationSchema,
    onSubmit:(values)=>{
      // Handle form submission
      console.log(values);
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.dribbble.com/users/2501288/screenshots/12855228/web_illustration_dribbble_1600x1200_4x.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <TextField
                {...formik.getFieldProps('username')}
                margin="normal"
                fullWidth
                name="username"
                label="Username"
                type="text"
                id="username"
                autoComplete="username"
                autoFocus
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
              />
              {
                formik.touched.username && formik.errors.username && <Typography fontSize={14} variant={'caption'} color={'red'}>
                    {formik.errors.username}
                </Typography>
              }
              <TextField
                {...formik.getFieldProps('email')}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              {
                formik.touched.email && formik.errors.email && <Typography fontSize={14} variant={'caption'} color={'red'}>
                    {formik.errors.email}
                </Typography>
              }
              <TextField
                {...formik.getFieldProps('password')}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
              />
              {
                formik.touched.password && formik.errors.password && <Typography fontSize={14} variant={'caption'} color={'red'}>
                    {formik.errors.password}
                </Typography>
              }
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent={'flex-end'}>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already Have an account? Log In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignUp