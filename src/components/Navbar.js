import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';


const Navbar = () => {
  return (
    <Stack className="navbar"
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: '50px', xs: '15px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{
          width: '148px', height: '68px',
        }}/>
      </Link>
      <Stack 
        direction="row"
        gap="20px"
        fontSize="20px"
        alignItems="center"
      >
        <Link className="navbar-links" to="/" style={{ textDecoration: 'none', 
        color: "#3A1212"}}>Pagrindinis</Link>
        <a className="navbar-links" href="#exercises" style={{textDecoration: 'none', 
        color: '#3A1212'}}>Pratimai</a>
      </Stack>
    </Stack>
  )
}

export default Navbar