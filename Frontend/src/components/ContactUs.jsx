import React from 'react'
import {Box,Button,TextField,Typography} from "@mui/material"
import {Link} from "react-router-dom"
import Marquee from 'react-fast-marquee';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username:Yup.string().required('Username is required').min(3,'Username must be at least contain 3 characters'),
  mobileNumber:Yup.string().required('Mobile Number is required'),
  email:Yup.string().required('Email is required').email('Enter valid email'),
  userMessage:Yup.string().required('Message is required')
});


const ContactUs = () => {
  const formik = useFormik({
    initialValues:{
      username: '',
      mobileNumber : '',
      email: '',
      userMessage: ''
    },
    validationSchema,
    onSubmit:(values)=>{
      // Handle form submission
      console.log(values);
    }
  });

  return (
    <div>
        <Box component={"section"} 
        className='bg-customImage'
        height={600}
        sx={{backgroundRepeat:'no-repeat',backgroundPosition:'center', backgroundSize:'contain'}}
        >
            <Box component={'div'} height={'200px'} bgcolor={'rgba(0,0,0,0.2)'} className='flex justify-center items-center'>
              <Box component={'div'} width={500} margin={'auto'}>
                <Typography px={4} variant='h3' color={'black'}>
                  How can we help?
                </Typography>
                <Typography px={4} marginTop={2} variant='h5' color={'black'}>
                  Send us a message!
                </Typography>
              </Box>
            </Box>
        </Box>

        <Box component='section' className='flex flex-col justify-center items-center'>
            <Typography className='w-96 rounded-tl-3xl rounded-br-3xl text-center' variant='h4' bgcolor={'black'} py={1} color='silver'>
                Get In Touch With Us
            </Typography>
            <Typography className='rounded-full w-96 text-center font-medium' variant='p' mb={5} mt={1} color='red'>
                Let's Talk About Your Concern
            </Typography> 

            <Box component='form'
            px={10} onSubmit={formik.handleSubmit}>
              <TextField
                {...formik.getFieldProps('username')}
                margin="normal"
                fullWidth
                name="username"
                label="Username"
                type="text"
                id="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                autoComplete="username"
                error={formik.touched.username && Boolean(formik.errors.username)}
                />
                {
                formik.touched.username && formik.errors.username && <Typography fontSize={14} variant={'body1'} color={'red'}>
                    {formik.errors.username}
                </Typography>
                }

                <TextField
                {...formik.getFieldProps('mobileNumber')}
                margin="normal"
                fullWidth
                name="mobileNumber"
                label="Mobile Number"
                type="text"
                id="mobileNumber"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                autoComplete="mobileNumber"
                error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                />
                {
                formik.touched.mobileNumber && formik.errors.mobileNumber && <Typography fontSize={14} variant={'caption'} color={'red'}>
                    {formik.errors.mobileNumber}
                </Typography>
                }

                <TextField
                {...formik.getFieldProps('email')}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete="email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                />
                {
                formik.touched.email && formik.errors.email && <Typography fontSize={14} variant={'caption'} color={'red'}>
                    {formik.errors.email}
                </Typography>
                }

                <TextField
                {...formik.getFieldProps('userMessage')}
                id="userMessage"
                label="Enter Message"
                name='userMessage'
                multiline
                placeholder='Enter your Concern'
                rows={10}
                fullWidth
                value={formik.values.userMessage}
                onChange={formik.handleChange}
                variant="outlined"
                error={formik.touched.userMessage && Boolean(formik.errors.userMessage)}
                />
                {
                formik.touched.userMessage && formik.errors.userMessage && <Typography fontSize={14} variant={'caption'} color={'red'}>
                    {formik.errors.userMessage}
                </Typography>
                }

                <div className='mt-4 p-2 text-center'>
                  <Button type='submit' variant={'contained'} color='secondary'>
                    Send Message
                  </Button>
                </div>
            </Box>
        </Box>

        <Box component={'section'} className='flex flex-col justify-center items-center text-center p-8 mt-20 bg-gray-200'>
          <Typography variant='h5'>
            DISCOVER OUR AWARD-WINNING BLOG
          </Typography>
          <Typography variant='p' mt={1} mb={3}>
            Written By Customers and Employee Experience Experts Who Live & Breathe Experience Management Everyday
          </Typography>
          <Button component={Link} variant='contained' color='warning' to='/'>
            Read Our Blog
          </Button>

          <Marquee className='p-4 mt-10 bg-white' speed={50} gradient={false} autoFill >
            <img src="https://1.bp.blogspot.com/-sNseN1o6P_Y/WIBQNyZkaAI/AAAAAAAAGXg/mvozYz_mK78unIdjTfaTQlm2AIxWfYoGgCLcB/s1600/rs_1024x759-170117155409-1024-peoples-choice-trophy.jpg" className="w-80 h-40 object-contain rounded-full" alt="awardImage1" />
            <img src="https://livingourpriorities.com/wp-content/uploads/2017/09/Blogger-Recognition-Award-2.png" className="w-80 h-40 object-contain" alt="awardImage2" />
            <img src="https://th.bing.com/th/id/OIP.0zRAnWzo2AYxoVpu2Iq_QwHaFj?rs=1&pid=ImgDetMain" className="w-80 h-40 object-contain" alt="awardImage3" />
            <img src="https://th.bing.com/th/id/OIP.YimdUV6n832bcCSOVTAdYwHaIf?rs=1&pid=ImgDetMain" className="w-80 h-40 object-contain" alt="awardImage4" />
          </Marquee>

        </Box>

    </div>
  )
}

export default ContactUs