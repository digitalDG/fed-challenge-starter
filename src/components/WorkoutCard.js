
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { CardActionArea } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

  root: {
    height: 280
  },
  cardHeader: {
    width: '100%',
    height: 164,
    position: 'relative'
  },
  cardHeaderImageSection: {
    width: '100%',
    height: 144,
    position: 'absolute',
    display: 'flex'
  },
  cardHeaderPlaylist: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 110,
    height: 144,
    position: 'absolute',
    left: '63%'
  },
  cardHeaderPlaylistSubContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: "translate(-50%, -50%)",
    textAlign: 'center'
  },
  cardHeaderPlaylistSubtext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 9.6,
    paddingBottom: 10
  },
  cardHeaderPlaylistNumber: {
    color: '#fff',
    fontWeight: 900,
    fontSize: 24,
    paddingBottom: 10
  },
  cardHeaderPlaylistIcon: {
    width: 16,
    height: 16
  },

  cardDetailsTitleSection: {
    display: 'flex',
    height: 44,
    margin: '5px 8px',
    justifyContent: 'space-between'
  },
  cardDetailsTitletext: {
    fontWeight: 'bolder',
    fontSize: '1rem',
    width: '12.5rem'
  },
  cardDetailsInfoSection: {
    display: 'flex',
    width: '9.5rem',
    height: '1rem',
    margin: '0.1rem 0.5rem',
    fontWeight: 'bold',
    fontSize: '0.7rem',
  },
  cardDetailsTrainerThumb: {
    textAlign: 'end'
  },

  cardDetailsTrainerThumbImg: {
    width: '2rem',
    height: '2rem'
  },

  cardDetailsInfo: {
    margin: '0 0.25rem'
  },

  cardDetailsIcons: {
    width: '0.625rem'
  },

  cardDetailsViewText: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }

}));



function WorkoutCard(props) {

  const classes = useStyles();

  const [isCardSelected, setIsCardSelected] = useState(false);


  return (
    <React.Fragment>

      <Card className={classes.root}
        raised={isCardSelected}
        onClick={() => setIsCardSelected(true)}>
        <CardActionArea>
          <div className={classes.cardHeader}>
            <div className={classes.cardHeaderImageSection}>
              <CardMedia component="img"
                image={require(`../assets/images/${props.baseImageName}-thumb.jpg`)}
                title="Workout Image" />
            </div>
            {props.isSeries && <div className={classes.cardHeaderPlaylist}>
              <div className={classes.cardHeaderPlaylistSubContainer}>
                <Typography variant="h4" className={classes.cardHeaderPlaylistNumber}>{props.numWorkouts}</Typography>
                <Typography variant="h5" className={classes.cardHeaderPlaylistSubtext}>WORKOUTS</Typography>
                <div><img className={classes.cardHeaderPlaylistIcon} alt="Series icon" src={require("../assets/images/series-icon.png")} /></div>
              </div>
            </div>}
          </div>


          <div className={classes.cardDetailsTitleSection}>
            <Typography variant="h5" className={classes.cardDetailsTitletext}>{props.workoutTitle}</Typography>
            <div className={classes.cardDetailsTrainerThumb}>
              <Avatar alt="Trainer Thumbnail Picture" src={require(`../assets/images/${props.baseImageName}-trainer.jpg`)} variant="rounded" className={classes.cardDetailsTrainerThumbImg} />
            </div>
          </div>

          {
            !props.isSeries ? <div className={classes.cardDetailsInfoSection}>
              <div className={classes.cardDetailsInfo}><img src={require("../assets/images/timer-icon.png")} className={classes.cardDetalsIcons} alt="Stop Watch" /> {props.time}</div>
              <div className={classes.cardDetailsInfo}><img src={require("../assets/images/track-icon.png")} className={classes.cardDetalsIcons} alt="Compass" /> {props.distance}</div>
            </div> : <div className={classes.cardDetailsInfoSection}>&nbsp;</div>
          }

        </CardActionArea>
        {isCardSelected &&
          <CardActions>
            <Button size="small" color="primary" onClick={() => console.log("View Details button clicked")}>
              <Typography className={classes.cardDetailsViewText}>VIEW DETAILS</Typography>
            </Button>
          </CardActions>
        }

      </Card>

    </React.Fragment>
  )
}

export default WorkoutCard;
