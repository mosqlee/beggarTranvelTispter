import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import Paper from 'material-ui/Paper';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import ButtonBase from 'material-ui/ButtonBase';
import imageTibei from './image/tibei.jpg';
import imageChaka from './image/chaka.jpg';
import imageXiAn from './image/xian.jpg';
import imageXiHu from './image/xihu.jpg';


const styles  = theme => ( {
    paperContent: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
      }),
      content: {
        marginTop:30,
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
      },
      image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover': {
          zIndex: 1,
        },
        '&:hover $imageBackdrop': {
          opacity: 0.15,
        },
        '&:hover $imageMarked': {
          opacity: 0,
        },
        '&:hover $imageTitle': {
          border: '4px solid currentColor',
        },
      },
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
      imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
      },
      imageMarked: {
        height: 5,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      },
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });
  

  const images = [
    {
      url: imageChaka,
      title: '天空之镜',
      width: '50%',
    },
    {
      url: imageXiHu,
      title: '断桥残雪',
      width: '50%',
    },
    {
      url: imageTibei,
      title: '距离天空最近的城市',
      width: '100%',
    },
    {
      url: imageTibei,
      title: '距离天空最近的城市',
      width: '30%',
    },
    {
      url: imageTibei,
      title: '距离天空最近的城市',
      width: '40%',
    },
    {
      url: imageTibei,
      title: '距离天空最近的城市',
      width: '30%',
    },
  ];
  


  class MenuAppBar extends React.Component {
    state = {
      auth: true,
      anchorEl: null,
    };
  
    handleChange = (event, checked) => {
      this.setState({ auth: checked });
    };
  
    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };
  
    render() {
      const { classes } = this.props;
      const { auth, anchorEl } = this.state;
      const open = Boolean(anchorEl);
  
      return (
        <div className={classes.root}>

        <Paper className={classes.paperContent} elevation={9}>
        <Typography type="headline" component="h3">
          义工の行
        </Typography>
        <Typography component="p">
        一本书、一句话、一个人，出发的理由永远不嫌少，曾经遇见的人，现在的你是否还记得
        </Typography>
        </Paper>

          <div className={classes.content}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          style={{
            width: image.width,
          }}
        >
          <div
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              type="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <div className={classes.imageMarked} />
            </Typography>
            
          </div>
        </ButtonBase>
      ))}
    </div>
        </div>
      );
    }
  }
  
  MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MenuAppBar);