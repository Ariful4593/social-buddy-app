import React from 'react';
import './CommentData.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
}));
const CommentData = (props) => {
  const name = props.name;
  const email = props.email;
  const body = props.body;
  const img = props.img;

  const classes = useStyles();
  return (
    <>
      <div className={classes.root} >
        <Grid container spacing={1} style={{marginBottom: "20px"}}>

          <Grid item xs={12} >
          <Paper className={classes.paper}>
            <div style={{ display: "flex", }}>
              <Paper className={classes.paper} style={{boxShadow: "none"}}>
                <img src={img} alt="" style={{ width: "50px", borderRadius: "360px" }} />
              </Paper>
              <Paper style={{width: "100%",boxShadow: "none"}}>
                <Link to="" style={{textDecoration: "none"}}><h2 style={{marginBottom: "0px"}}>{name.slice(0, 15)}</h2></Link> 
                {email}
              </Paper>
            </div>
              {body}
            </Paper>

          </Grid>
          
        </Grid>
      </div>
    </>
  );
};

export default CommentData;