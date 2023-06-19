import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';

export const SignupScreen = () => {
    return (
        <React.Fragment>
            <section className='signup-screen'>
                <div className='bg-signup'>
                    <div className='signup-form' >
                        <article className='form'>
                            <div className='head-signup'>Signup in 10 Mins </div>
                            <div className='signup-span'>Already have a account?
                                <b> Sign in </b>
                            </div>

                            <div className='signup-container'>
                                <section className='frame'>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': {
                                                m: 1, width: '19ch', borderRadius: '20px',
                                                color: '#fff'
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div >
                                            <TextField
                                                required 
                                                style={{color: '#fff'}}
                                                id="outlined-required"
                                                label="Your First Name"
                                                type='text'
                                            />
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Your Last Name"
                                                type='text'
                                            />


                                        </div>
                                    </Box>

                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': {
                                                m: 1, width: '39ch', borderRadius: '20px',
                                                color: '#fff'
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <MuiPhoneNumber label="Enter Mobile Number" variant="outlined" defaultCountry={'in'} id="outlined-size-small" />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Enter OTP"
                                            type='tel' />

                                        <span className='signup-span' style={{ fontSize: '12px', width: '65%' }} >Haven’t received code?
                                            <b> Resend </b> in 0:59 sec</span>


                                        <Button style={{ marginTop: '20px', width: '70%', background: 'linear-gradient(165.69deg, rgba(104, 108, 248, 0.7) 4.49%, rgba(236, 171, 241, 0.7) 113.71%)', borderRadius: '5px' }}
                                            variant="contained" size="large" >Create Your Store </Button>
                                    </Box>
                                    <span  className='signup-span' style={{ fontSize: '12px' }}>By creating an account means you agree to the Terms & Conditions and our Privacy Policy</span>

                                </section>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
