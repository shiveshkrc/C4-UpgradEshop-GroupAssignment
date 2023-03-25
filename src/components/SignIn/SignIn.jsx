import React, { useEffect, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Container, Typography, Stack, FormControl, TextField, Button, Link, Snackbar, Alert, IconButton} from '@mui/material';
import { Box } from '@mui/system';
import { userSignIn } from '../../common/service';
import { useNavigate } from 'react-router-dom';



// main SignIn component
function SignInPage({ userStatus, setUserStatus }) {
    const errors = {color:'red', fontSize:14};
    const formControlStyle = { margin: 1, width: 300 }; // style for the inputs
    const initialValue = {username:'', password:''};
    const snackbarPosition = { vertical: 'top', horizontal: 'right' };

    const navigate = useNavigate();
    const [userSignin,setUserSignin]= useState(initialValue);
    const [formErrors, setFormErrors] = useState(initialValue);
    const [isSubmit, setIsSubbmit] = useState(false);

    const [open, setOpen] = useState(false);

    const { vertical, horizontal} = snackbarPosition;

    const [message, setMessage] = useState({
        severity : 'info',
        message: ''
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
    

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    
  );

    const changeHandler = (event) => {
        const {name,value} = event.target;
        setUserSignin({...userSignin, [name]: value});
    }

    const validateUserInput = (user)=>{
        const errors = {}
        const regex= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
       
        if(!user.username){
            errors.username = "Email is required";
        }else if(!regex.test(user.username)){
            errors.username = "Email is not in valid format";
        }

        if(!user.password){
            errors.password = "Password is required";
        }else if(user.password.length < 6){
            errors.password = "Password must be of minimum of 6 charecter";
        }else if(user.password.length > 40){
            errors.password = "Password cannot be exceed more than 40 charecter";
        }

        return errors;
    }

    async function validateUser() {
        // You can await here
        if(Object.keys(formErrors).length === 0 && isSubmit){
                try {
                    const response = await userSignIn(userSignin);
                    setIsSubbmit(false);
                    // console.log(response);
                    if(response.status === 200){
                        if(Object.keys(localStorage).includes("token")){
                            localStorage.removeItem("token");
                        }
                        setUserSignin(initialValue);
                        setUserStatus({...userStatus, isLogin: true})
                        localStorage.setItem("token",JSON.stringify(response.data.token));
                        navigate("/products");
                    }
                } catch (error) {
                    // console.log(error);
                    setMessage({
                            severity: 'error',
                            message:"Username or Password is found invalid"});
                    setOpen(true);
                }
            }
    }

    useEffect(() => {
        validateUser();
    }, [formErrors]);

    const formSignin=(event)=>{
        //event.preventDefault();
        // console.log(userSignin);
        setFormErrors(validateUserInput(userSignin));
        setIsSubbmit(true);
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
                    <TextField label="Email Address *" type="email" name="username" variant="outlined" onChange={changeHandler} size="small"></TextField>
                    <Box sx={errors}> <span>{formErrors.username}</span> </Box>
                </FormControl>
                <FormControl id='pass' sx={formControlStyle}>
                    <TextField label="Password *" type="password" name="password" variant="outlined" onChange={changeHandler} size="small"></TextField>
                    <Box sx={errors}> <span>{formErrors.password}</span> </Box>
                </FormControl>

                {/* Sign In button */}
                <Button variant="contained" sx={{ width: 300, mt: 1}} onClick={formSignin} >SIGN IN</Button>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    key={vertical + horizontal}
                    action={action}
                >
                    <Alert onClose={handleClose} severity={message.severity} sx={{ width: '100%' }}>
                        {message.message}
                    </Alert>
                </Snackbar>
                {/* Link below the button to SIGN UP */}
                <Box sx={{ display:'flex', width: 300}}>
                    <Link href='signup' sx={{ mt: 1, fontSize: 14 }}>Don't have an account? Sign Up</Link>
                </Box>
            </Stack>
        </Container>
    </> );
}

export default SignInPage;