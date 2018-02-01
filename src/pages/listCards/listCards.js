import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { getTravelList } from "actions/travelList";
import Paper from 'material-ui/Paper';
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});
class SimpleMediaCard extends Component {
    constructor(PropTypes){
        this.classes = PropTypes;
    }
    render(){
        return(
            <div>
                <Card className={classes.card}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography type="headline">Live From Space</Typography>
                            <Typography type="subheading" color="secondary">
                                Mac Miller
            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                            <IconButton aria-label="Previous">
                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                            </IconButton>
                            <IconButton aria-label="Play/pause">
                                <PlayArrowIcon className={classes.playIcon} />
                            </IconButton>
                            <IconButton aria-label="Next">
                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                            </IconButton>
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image="/static/images/cards/live-from-space.jpg"
                        title="Live from space album cover"
                    />
                </Card>
            </div>
        )
    }
};
const Cards = withStyles(styles, { withTheme: true })(SimpleMediaCard);
class ListCard extends Component {
    componentDidMount() {
        this.props.getTravelList();
    }
    render() {
        const { travelList, isLoading, errorMsg } = this.props.travelList;
        return (
            <div>
                {
                    isLoading ? 'loading' :
                        (
                            errorMsg ? errorMsg :
                                (
                                    <Paper className={this.props.classes.root}>
                                        <div>listCards works!</div>
                                    </Paper>
                                )
                        )
                }
            </div>

        )
    }
}
const ListCards = withStyles(styles)(ListCard);
export default connect((state) => ({ travelList: state.travelList }), { getTravelList })(ListCards);