import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import image from '../Images/Image icon.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import back from '../Images/Back button.svg';
import { useNavigate } from 'react-router-dom';

export const StoreName2 = () => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className='store-screen' >
                <h1 style={{
                    left: 'calc(50% - 126px/2)',
                    top: 0
                }} className='heading'>LOGO</h1>

                <section className='container'>
                    <div className='store-div' >
                        <article>
                            <div className='pageNumber'>
                                <span className='currectpage'>02 /</span>  <span className='finalpage'>04</span>
                            </div>
                            <h2 className='store-head'>Name Your Store</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>
                            <Box sx={{ width: '100%', marginTop: '30px' }}>
                                <TextField
                                    id="input-with-icon-textfield"
                                    fullWidth
                                    variant="standard"
                                    defaultValue='Superthread'
                                />
                                <span className='span signup-span'>Not sure about the name,
                                    <b>Want us to suggest?</b> </span>
                            </Box>
                            <Box sx={{ width: '100%', marginTop: '30px' }}>
                                <TextField
                                    id="input-with-icon-textfield"
                                    fullWidth
                                    variant="standard"
                                    defaultValue='Superthread'
                                />

                                <div className='superhead' >
                                    <span className='span signup-span' style={{ textAlign: "start", width: '50%' }}>This is temporary domain, you can add custom domain in settings
                                        <a href="/"> Learn more</a> </span>
                                    <b className='span signup-span' style={{ width: 'auto', fontWeight: 'bold' }}>Generate unique domain</b>
                                </div>
                            </Box>
                        </article>
                        <div className='btn-div' >
                            <Button className='back' onClick={() => navigate("/name-store")}>
                                <img style={{ width: "35px" }} src={back} />
                            </Button>
                            <Button onClick={() => navigate("/industry")} style={{ width: '30%', background: 'linear-gradient(165.69deg, rgba(104, 108, 248, 0.7) 4.49%, rgba(236, 171, 241, 0.7) 113.71%)', borderRadius: '5px' }}
                                variant="contained" size="large" >Continue</Button>
                        </div>
                    </div>

                    <div className='store-div2' >
                        <div className='border-box'>
                            <div className='store-head super-head'
                                style={{ textAlign: 'start' }} > Superthread  </div>
                            <Box
                                sx={{
                                    marginTop: '15px',
                                    width: 600,
                                    // backgroundColor: '#606060',
                                    // opacity: [0.9, 0.8, 0.7],


                                }}
                            >
                                <img
                                    src={image}
                                    srcSet={image}
                                    alt=''
                                    loading="lazy"
                                    width='600px'
                                    height='400px'
                                />
                            </Box>

                        </div>
                    </div>
                    <div className='copyright copy'>
                        Copyright 2023 <span className='copyright-compname'>Company Gloabal</span>
                    </div>
                </section>
            </div >
        </React.Fragment >
    )
}
