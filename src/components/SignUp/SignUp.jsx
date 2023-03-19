import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Container, Typography, Stack, FormControl, TextField, Button, Link} from '@mui/material';
import { Box } from '@mui/system';
import { userSignUp } from '../../common/service';

// main SignUp component
function SignUpPage() {
    const formControlStyle = { margin: 1.5, width: 300, display: 'block' }; // style for the inputs

    const [state,setState]=useState({fname:'', lname:'', emailadd:'', password:'', confpass:'', contact:''})

    const changeHandler = (event) => {
        const {name,value} = event.target;
        setState({...state, [name]: value});
        
    }

    const formRegister=(event)=>{
        event.preventDefault();
        console.log(state);
        userSignUp(state)
        .then(res=>{
             console.log(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    }

    return ( <>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}> 
            <Stack sx={{ justifyContent: 'center', alignItems: 'center', padding: 2, backgroundColor: 'whitesmoke' }}>
                {/* Lock Icon at the top of Sign Up Page */}
                <Avatar sx={{ display: 'div', backgroundColor: 'secondary.dark', textAlign: 'center', m:1 }}>
                    <LockOutlinedIcon sx={{ color: 'white', margin: 'auto'}}></LockOutlinedIcon>
                </Avatar>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'revert', mb: 1}}>Sign Up</Typography>
            
                {/* Form Inputs */}
                <form >
                    <FormControl id='firstname' sx={formControlStyle}>
                        <TextField label="First Name" variant="outlined" size="small" 
                        type='text' name='fname' onChange={changeHandler} fullWidth required></TextField>
                    </FormControl>
                    <FormControl id='lastname' sx={formControlStyle}>
                        <TextField label="Last Name *" variant="outlined" size="small" 
                        type='text' name='lname' onChange={changeHandler} fullWidth></TextField>
                    </FormControl>
                    <FormControl id='emailadd' sx={formControlStyle}>
                        <TextField label="Email Address *" variant="outlined" size="small" 
                        type='email' name='emailadd' onChange={changeHandler} fullWidth required></TextField>
                    </FormControl>
                    <FormControl id='password' sx={formControlStyle}>
                        <TextField label="Password *" variant="outlined" size="small" 
                        type='password' name='password' onChange={changeHandler} fullWidth></TextField>
                    </FormControl>
                    <FormControl id='confirmpass' sx={formControlStyle}>
                        <TextField label="Confirm Password *" variant="outlined" size="small" 
                        type='password' name='confpass' onChange={changeHandler} fullWidth></TextField>
                    </FormControl>
                    <FormControl id='contactnumber' sx={formControlStyle}>
                        <TextField label="Contact Number *" variant="outlined" size="small" 
                        type='tel' name='contact' onChange={changeHandler} fullWidth></TextField>
                    </FormControl>

                    {/* Sign Up button */}
                    <Button variant="contained" sx={formControlStyle} type='submit' onSubmit={formRegister} value='Registered'>SIGN UP</Button>
                </form>

                {/* Link below the button to SIGN IN */}
                <Box sx={{ display:'flex', width: 300, flexDirection: 'row-reverse' }}>
                    <Link href='login' sx={{ fontSize: 14 }}>Already have an account? Sign In</Link>
                </Box>
            </Stack>
        </Container>
    </> );
}

export default SignUpPage;