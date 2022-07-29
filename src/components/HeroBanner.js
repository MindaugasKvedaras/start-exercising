import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/couple.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
    }} position="relative" p="20px" backgroundColor="#425664">
      <Typography fontWeight={200} letterSpacing={3} color="white"
      sx={{ fontSize: { lg: '74px', xs: '36px'}, paddingTop: { xs: '80px'}}}
      mb="10px" mt="20px"
      >
        Judėk, Šypsokis <br /> ir Būk Sveikas
      </Typography>
      <Typography color="#C6AD8F" fontWeight="400" fontSize="16px" ml={20}>
        Tavo gyvenimo moto
      </Typography>
      <Typography color="white" fontSize="20px" fontWeight="100" letterSpacing="2px" lineHeight="35px" mb={3} mt={3}
      >
        Atraskite pačius efektyviausius pratimus
      </Typography>
      <Button className="search-exercise" variant="contained" href="#exercises"
        sx={{ backgroundColor: '#C6AD8F', padding: '10px'}}
      >Ieškoti pratimų</Button>
      <Typography
        fontWeight={600}
        color="#C6AD8F"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'absolute'},
          textAlign: 'center',
          fontSize: { lg: '200px', xs: '50px'}
        }}
      >
        SPORTUOK!
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner