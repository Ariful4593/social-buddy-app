import React from 'react';
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import CommentData from '../CommentData/CommentData';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CommenterPhoto from '../CommentData/CommenterPhoto';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: "800px",
        margin: "0 auto"
    },
});

const PostDetails = () => {
    let { postId } = useParams()
    const [postDetails, setPostDetails] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, []);
    const commentArea = CommenterPhoto.filter(x => x.postId === postId);
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Card style={{ margin: "0 auto", marginBottom: "20px" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {postDetails.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {postDetails.body}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Paper>
                    <CardActions>
                        <Button id="showComment" size="small" color="primary">
                            Comment
                        </Button>
                    </CardActions>
                    <div id="">
                        {
                            commentArea.map(comment => <CommentData
                                postId={comment.postId}
                                name={comment.name}
                                email={comment.email}
                                body={comment.body}
                                img={comment.img}
                                key={comment.id}
                            ></CommentData>)
                        }
                    </div>

                </Grid>
            </Grid>
        </div>
    );
};

export default PostDetails;