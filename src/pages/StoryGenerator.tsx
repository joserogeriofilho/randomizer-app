import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { randomStory } from 'services/story'
import { NavigationBar } from 'components'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const StoryGenerator = () => {
  const [story, setStory] = useState({theme: '', mainCharacter: '', conflict: ''})

  const generateStory = () => {
    setStory(randomStory())
  }

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
          <Item elevation={4}>
            <p>Theme: {story.theme}</p>
            <p>Main character: {story.mainCharacter}</p>
            <p>Conflict: {story.conflict}</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={generateStory} >GENERATE</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
