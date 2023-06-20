import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import image from '../Images/Image icon.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import back from '../Images/Back button.svg';
import NativeSelect from '@mui/material/NativeSelect';
import { useNavigate } from 'react-router-dom';
export const Industry = () => {

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
                        <span className='currectpage'>03 /</span>  <span className='finalpage'>04</span>
                    </div>
                            <h2 className='store-head'>Select Industry</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>
                            <Box sx={{ marginTop: '30px' }}>
                                <NativeSelect style={{ width: '400px' }}
                                    inputProps={{
                                        name: 'Services',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={10}>Services</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                            </Box>

                        </article>
                        <div className='btn-div' >
                            <Button className='back'>
                                <img style={{ width: "35px" }} src={back} onClick={() => navigate("/name-store2")} />
                            </Button>
                            <Button  onClick={() => navigate("/market")} style={{ width: '30%', background: 'linear-gradient(165.69deg, rgba(104, 108, 248, 0.7) 4.49%, rgba(236, 171, 241, 0.7) 113.71%)', borderRadius: '5px' }}
                                variant="contained" size="large" >Continue</Button>
                        </div>
                    </div>

                    <div className='earth-pic' > </div>
                    <div className='copyright copy'>
                        Copyright 2023 <span className='copyright-compname'>Company Gloabal</span>
                    </div>
                </section>


            </div >

        </React.Fragment >
    )
}
