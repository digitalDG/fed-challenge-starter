import React, { useState, useEffect } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import WorkoutCard from './components/WorkoutCard';

const useStyles = makeStyles((theme) => ({

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }


}));


function App() {

  const classes = useStyles();

  const [workoutDataList, setWorkoutDataList] = useState([]);
  
  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setWorkoutDataList(myJson)
      });
  }

  useEffect(() => {
    getData()
  }, []);

  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.cardGrid}>
        <Grid container spacing={2}>

          {
            workoutDataList && workoutDataList.length > 0 && workoutDataList.map((workoutData) =>
              <Grid item xs={3} key={workoutData.id}>
                <WorkoutCard  {...workoutData} />
              </Grid>
            )

          }

        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
