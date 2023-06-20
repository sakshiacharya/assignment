import React, { useEffect, useState } from 'react'
import { Box, TextField, Button } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/actions/login';
import {Link, Navigate} from 'react-router-dom' 
export const Loginscreen = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const dispatch = useDispatch()


    const LoginWithNumber = () => {
        dispatch(login(mobileNumber))
    }



    const isLogin = useSelector((state) => state)
    console.log('isLogin', isLogin.loginReducers.mobileNumber.mobileNumber)

    
    function handleOnChange(value) {

        setMobileNumber(value)

    } 

    if(localStorage.getItem('MobileNumber')) {

        window.location.replace('/name-store')
        
        
    }

    return (
        <React.Fragment>
            <section className='login'>
                <div className='details'>
                <div className='login-sub'>
                    <h1 className='heading'>LOGO</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>

                </div>
                <div className='login-form' >
                    <article className='form'>
                        <div className='heading2'>Get Started ! </div>
                        <div className='signup-span'>New to Company?
                            <Link to='/signup'> Sign up </Link>

                            <div className='form-container' >
                                <section className='frame'>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': {
                                                m: 1, width: '50ch', borderRadius: '20px',
                                                color: '#fff'
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div >
                                            <MuiPhoneNumber label="Enter Mobile Number" variant="outlined" onChange={handleOnChange} defaultCountry={'in'} id="outlined-size-small" />
 
                                        </div>

                                        <Button style={{ marginTop: '20px', width: '70%', background: 'linear-gradient(165.69deg, rgba(104, 108, 248, 0.7) 4.49%, rgba(236, 171, 241, 0.7) 113.71%)', borderRadius: '5px' }}
                                            variant="contained" size="large" onClick={() => LoginWithNumber()} >Get OTP</Button>
                                    </Box>
                                    <span className='from-span'> Or sign in with </span>
                                    <div className='social-btn'>
                                        <Button variant="outlined">GOOGLE</Button>
                                        <Button variant="outlined">FACEBOOK</Button>
                                    </div>

                                     <span style={{width: '90%'}} >By creating an account means you agree to the Terms & Conditions and our Privacy Policy</span>
                
                                </section>


                            </div>
                        </div>
                        
                    </article>
                   
                </div>
                </div>
            </section>
        </React.Fragment>
    )
}
