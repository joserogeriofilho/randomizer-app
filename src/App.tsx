import React from 'react';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { randomStory } from './services/story'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const story = randomStory()

function App() {
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
        <Grid item xs={12} sm={8}>
          <Item elevation={4}>xs=8</Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item elevation={4}>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item elevation={4}>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Item elevation={4}>xs=8</Item>
        </Grid>
        <Grid item xs={12}>
          <Item elevation={4}>
            <p>Theme: {story.theme}</p>
            <p>Main character: {story.mainCharacter}</p>
            <p>Conflict: {story.conflict}</p>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
