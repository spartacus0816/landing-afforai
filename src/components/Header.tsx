import { useState } from 'react'
import { Grid, Typography, Button } from '@mui/material'


const Header = () => {

  const [visible, setVisible] = useState(false)

  return (
    <Grid
      container
      sx={{
        position: 'fixed',
        top: {
          xs: '0px',
          md: '25px'
        },
        width: {
          xs: '100%',
          md: '92%'
        },
        border: {
          md: '1px solid rgb(209, 213, 219)'
        },
        borderBottom: {
          xs: '1px solid rgb(209, 213, 219)'
        },
        borderRadius: {
          md: '16px',
          xs: 0
        },
        backdropFilter: 'blur(16px)',
        paddingY: '12px',
        paddingX: '25px',
        maxWidth: 1300,
        zIndex: 100000
      }}
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid item container gap={1} xs={4} md={3}>
        <img src='/imgs/logo-new-violet.png' height={24} width={24}></img>
        <Typography fontSize={18} fontWeight={500}>Afforai</Typography>
      </Grid>
      <Grid item container xs={6} justifyContent='center' gap={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography sx={{ cursor: 'pointer' }} fontSize={14} color='rgb(17, 17, 17)' fontWeight={500}>Affiliate</Typography>
        <Typography sx={{ cursor: 'pointer' }} fontSize={14} color='rgb(17, 17, 17)' fontWeight={500}>Pricing</Typography>
        <Typography sx={{ cursor: 'pointer' }} fontSize={14} color='rgb(17, 17, 17)' fontWeight={500}>Testimonials</Typography>
        <Typography sx={{ cursor: 'pointer' }} fontSize={14} color='rgb(17, 17, 17)' fontWeight={500}>Help Center</Typography>
      </Grid>
      <Grid item container xs={8} md={3} gap={1} justifyContent="flex-end">
        <Button variant="outlined" size='small' sx={{ textTransform: 'none' }}>Log in</Button>
        <Button sx={{ color: 'white', background: 'linear-gradient(135deg, #6004ff, #7f35ff 23.95%,#370097 60.11%, #8d4aff)', textTransform: 'none' }} variant="outlined" size='small'>Try for free</Button>
        <Button onClick={() => setVisible(!visible)} variant='outlined' sx={{ width: '34px!important', display: { xs: 'block', md: 'none' } }} size='small'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'top' }}><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"></path></svg></Button>
      </Grid>
      {
        visible &&
        <Grid container flexDirection='column' gap={2} paddingY={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Typography sx={{ cursor: 'pointer' }} fontSize={14} color='rgb(17, 17, 17)' fontWeight={500}>Affiliate</Typography>
          <Typography sx={{ cursor: 'pointer' }} fontSize={14} color='rgb(17, 17, 17)' fontWeight={500}>Pricing</Typography>
          <Typography sx={{ cursor: 'pointer' }} fontSize={14} color='rgb(17, 17, 17)' fontWeight={500}>Testimonials</Typography>
          <Typography sx={{ cursor: 'pointer' }} fontSize={14} color='rgb(17, 17, 17)' fontWeight={500}>Help Center</Typography>
        </Grid>
      }
    </Grid>
  )
}

export default Header