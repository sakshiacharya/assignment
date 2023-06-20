import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import image from '../Images/Image icon.png'

export const StoreName = () => {
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
                            <h2 className='store-head'>Name Your Store</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>
                        </article>
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
                                    alt= ''
                                    loading="lazy"
                                    width= '600px'
                                    height= '200px'
                                />
                            </Box>
                            <p className='category'>Categories</p>

                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}
