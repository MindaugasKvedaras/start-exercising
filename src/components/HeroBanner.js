import React from 'react';

import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Sporto klubas
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px'}}}
      mb="23px" mt="30px"
      >
        Judėk, Šypsokis <br /> ir Būk Sveikas
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}
      >
        Atraskite pačius efektyviausius pratimus
      </Typography>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
      >
        Pratimai
      </Typography>
      <Button variant="contained" color="error" href="#exercises"
        sx={{ backgroundColor: '#ff2625', padding: '10px'}}
      >Ieškoti pratimų</Button>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner