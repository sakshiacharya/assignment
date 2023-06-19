import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
export const Loginscreen = () => {

    const [mobileNumber, setMobileNumber] = useState('');
    function handleOnChange(value) {
        this.setState({
            phone: value
        });
    } const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

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
                            <a href='signup'> Sign up </a>

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
                                            <MuiPhoneNumber label="Enter Mobile Number" variant="outlined" defaultCountry={'in'} id="outlined-size-small" />
 
                                        </div>

                                        <Button style={{ marginTop: '20px', width: '70%', background: 'linear-gradient(165.69deg, rgba(104, 108, 248, 0.7) 4.49%, rgba(236, 171, 241, 0.7) 113.71%)', borderRadius: '5px' }}
                                            variant="contained" size="large" >Get OTP</Button>
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
