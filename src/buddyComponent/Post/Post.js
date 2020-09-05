import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        maxWidth: 800,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const Post = (props) => {
    const classes = useStyles();
    const { id, title, body } = props.post;
    return (
        <Card className={classes.root} style={{ margin: "0 auto", marginBottom: "20px" }}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                   <h2>{title}</h2> 
                </Typography>
                <Typography variant="body2" component="p">
                    {body}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Link style={{ textDecoration: "none" }} to={`post/${id}`}>
                    <Button variant="contained" color="secondary">
                        See More
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Post;