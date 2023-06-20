import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import image from '../Images/Image icon.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import back from '../Images/Back button.svg';
import { useNavigate } from 'react-router-dom';

export const StoreName = () => {

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
                                <span className='currectpage'>01 /</span>  <span className='finalpage'>04</span>
                            </div>
                            <h2 className='store-head'>Name Your Store</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>
                            <TextField sx={{ width: '100%'}}
                                id="input-with-icon-textfield"
                                fullWidth
                                variant="standard"
                                placeholder='Ex: Ginny Cake Studio'
                            />
                            <span className='span signup-span'>Not sure about the name,
                                <b>Want us to suggest?</b> </span>
                        </article>
                        <div className='btn-div' >
                            <Button className='back' onClick={() => navigate("/", (localStorage.removeItem('MobileNumber')))}>
                                <img style={{ width: "35px" }} src={back} />
                            </Button>
                            <Button onClick={() => navigate("/name-store2")} style={{ width: '30%', background: 'linear-gradient(165.69deg, rgba(104, 108, 248, 0.7) 4.49%, rgba(236, 171, 241, 0.7) 113.71%)', borderRadius: '5px' }}
                                variant="contained" size="large" >Continue</Button>
                        </div>
                    </div>

                    <div className='store-div2' >
                        <div className='border-box'>
                            <div className='store-name'>
                                Store Name
                                <article>
                                    <a>Home</a>
                                    <a>About</a>
                                    <a>Career</a>
                                    <a>Contact</a>
                                </article>
                            </div>
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
                                    height='200px'
                                />
                            </Box>
                            <div className='cat-div'>
                                <h3 className='category'>Categories</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>
                                <ImageList sx={{ width: 500, paddingLeft: 5 }} cols={3} rowHeight={170}>

                                    <ImageListItem >
                                        <img
                                            src={image}
                                            srcSet={image}
                                        />
                                    </ImageListItem>
                                    <ImageListItem >
                                        <img
                                            src={image}
                                            srcSet={image}
                                        />
                                    </ImageListItem>
                                    <ImageListItem >
                                        <img
                                            src={image}
                                            srcSet={image}
                                        />
                                    </ImageListItem>

                                </ImageList>
                            </div>
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
