// import * as React from 'react';
import { useState } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import './feedback.css';

type propsType = {
  question: string,
  answer?: string
}

const FAQ = (props: propsType) => {

  const [visible, setVisible] = useState(false)

  return (
    <Grid
      item
      container
      justifyContent={'center'}
      flexDirection={'row-reverse'}
      alignItems={'center'}
      padding={1}
      sx={{
        border: 'padding: 24px 24px 12px; border: 1px solid rgb(230, 230, 230)',
        borderRadius: 2,
        width: {
          xs: '95%', md: '80%'
        },
        flexWrap: "nowrap",
        cursor: 'pointer'
      }}
      onClick={() => setVisible(!visible)}
    >
      <div style={{ padding: 10, cursor: 'pointer' }}>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style={{ flexShrink: '0!important' }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          {
            !visible
              ? <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
              : <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
          }
        </svg>
      </div>
      <Grid item container justifyContent='flex-start' padding={2} flexDirection={'column'} gap={5}>
        <Typography color={'rgb(82, 82, 82)'} fontSize={16}>{props.question}</Typography>
        {visible && <Typography color={'rgb(82, 82, 82)'} fontSize={16}>{props.answer}</Typography>}
      </Grid>
    </Grid>
  )
}

export default FAQ