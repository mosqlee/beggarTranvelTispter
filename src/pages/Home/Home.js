import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//样式插件
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import Paper from 'material-ui/Paper';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import ButtonBase from 'material-ui/ButtonBase';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

//图片
import styles from './HomeStyle';
import images from './image-s';





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
      const bull = <span className={classes.bullet}>•</span>;


      return (
        <div className={classes.root}>

<Paper className={classes.paperContent} elevation={9} id="HomeTile">
        <Typography type="headline" component="h3">
          义工の行
        </Typography>
        <Typography component="p">
        一本书、一句话、一个人，出发的理由永远不嫌少，曾经遇见的人，现在的你是否还记得
        </Typography>
        </Paper>



          <div className={classes.content}>
      {images.images1.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          style={{
            width: image.width,
          }}
        >
          <span >{image.title}</span>
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


    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} >背上行囊</Typography>
          <Typography type="headline" component="h2">
            义{bull}工{bull}之{bull}旅
          </Typography>
          <Typography className={classes.pos}>一个人</Typography>
          <Typography component="p">
          随心所欲的走走停停。<br />
          </Typography>
        </CardContent>
        <CardActions>
        <Link to="/MainList " className={classes.buttonColor}>了解更多</Link>
        </CardActions>
      </Card>
    </div>

    <div className={classes.content}>
      {images.images2.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          style={{
            width: image.width,
          }}
        >
          <span >{image.title}</span>
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