import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Container, Typography, Stack, FormControl, TextField, Button, Link} from '@mui/material';
import { Box } from '@mui/system';
import { userSignIn } from '../../common/service';



// main SignIn component
function SignInPage() {
    const formControlStyle = { margin: 1, width: 300 }; // style for the inputs

    const [userSignin,setUserSignin]= useState({username:'', password:''})

    const changeHandler = (event) => {
        const {name,value} = event.target;
        setUserSignin({...userSignin, [name]: value});
    }

    const formSignin=(event)=>{
        event.preventDefault();
        console.log(userSignin);
        userSignIn(userSignin)
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
                {/* Lock Icon at the top of Sign In Page */}
                <Avatar sx={{ display: 'div', backgroundColor: 'secondary.dark', textAlign: 'center', m:1 }}>
                    <LockOutlinedIcon sx={{ color: 'white', margin: 'auto'}}></LockOutlinedIcon>
                </Avatar>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'revert', mb: 1}}>Sign In</Typography>
            
                {/* Form Inputs */}
                <FormControl id='email' sx={formControlStyle}>
                    <TextField label="Email Address *" variant="outlined" onChange={changeHandler} size="small"></TextField>
                </FormControl>
                <FormControl id='pass' sx={formControlStyle}>
                    <TextField label="Password *" variant="outlined" onChange={changeHandler} size="small"></TextField>
                </FormControl>

                {/* Sign In button */}
                <Button variant="contained" sx={{ width: 300, mt: 1}}>SIGN IN</Button>

                {/* Link below the button to SIGN UP */}
                <Box sx={{ display:'flex', width: 300}}>
                    <Link href='signup' sx={{ mt: 1, fontSize: 14 }}>Don't have an account? Sign Up</Link>
                </Box>
            </Stack>
        </Container>
    </> );
}

export default SignInPage;