import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { NavigationBar } from 'components'

export const Main = () => {
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
          <NavigationBar />
        </Grid>
        <Grid item xs={12}>
          <p>Main screen</p>
        </Grid>
      </Grid>
    </Container>
  );
}