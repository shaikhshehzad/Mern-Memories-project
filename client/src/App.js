import React, { useState, useEffect } from 'react';

// importing all  the components required from the material UI library 
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'; // used for dispatching and actions

import Posts from './components/Posts/Posts';// importing the components of posts
import Form from './components/Form/Form'; // importing the components of form
import { getPosts } from './actions/posts';// importing
import useStyles from './styles'; // importing  the styles of the app.js from the parent directory   
import memories from './images/memories.png'; // importing the image
// components have their own individual styles file
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); // this is a hook
  const classes = useStyles(); // to use the styles that are imported

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      {/* grow component helps us provide simple animation */}
      <Grow in> 
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              {/* the upper line is similar to  the row column of bootstrap and in the below line we are rendering the post component */}
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
               {/* the upper line is similar to  the row column of bootstrap and in the below line we are rendering the form component */}
              
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
