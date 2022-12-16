import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Main() {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: '100%'
      }}
    >
      <Grid
        container
        spacing={4}
        alignContent="center"
        sx={{
          height: '100%'
        }}
      >
        <Grid item xs={12}>
          <p>Character generator screen</p>
        </Grid>
      </Grid>
    </Container>
  );
}