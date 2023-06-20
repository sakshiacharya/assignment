import { Button } from '@mui/material'
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import back from '../Images/Back button.svg';
export const Loading = () => {

  const Navigate = useNavigate();

  return (
    <React.Fragment>
    <section className='loading-section'>
      <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/712e6c8c-2488-454c-977c-9b77695b282f/d7s1sqj-f6c07feb-3613-47c3-8d4f-219681110c53.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxMmU2YzhjLTI0ODgtNDU0Yy05NzdjLTliNzc2OTViMjgyZlwvZDdzMXNxai1mNmMwN2ZlYi0zNjEzLTQ3YzMtOGQ0Zi0yMTk2ODExMTBjNTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HJ_FNxNa1881WB4DtTOyUXwKdm-mAlVmKanLoVnUksg' />
      <h2 className='heading fetching'>Fetching Data</h2>
       
      <div className='fetch-other'> 
        <b>Do you Know?</b>
        <p className='signup-span'>After Covid 19, Total Sales of international Website have been increased to 50%</p>
      </div>
    </section>  
    </React.Fragment>
  )
}
