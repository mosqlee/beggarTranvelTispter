import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

import styles from './HomeStyle';
//图片
import imageTibei from './image/tibei.jpg';
import imageChaka from './image/chaka.jpg';
import imageXiAn from './image/xian.jpg';
import imageXiHu from './image/xihu.jpg';
import imageYangzhou from './image/yangzhou.jpg';
import imageNanjing from './image/nanjing.jpg';
import imageLuoyang from './image/luoyang.jpg';

  const images1 = [
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
   
  ];

  const images2 = [
    {
      url: imageXiAn,
      title: '咸阳古都',
      width: '33%',
    },
    {
      url: imageLuoyang,
      title: '归雁洛阳边',
      width: '34%',
    },
    {
      url: imageNanjing,
      title: '夜泊秦淮',
      width: '33%',
    },
    {
      url: imageYangzhou,
      title: '烟花三月下扬州',
      width: '100%',
    },
 ]

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

        <Paper className={classes.paperContent} elevation={9}>
        <Typography type="headline" component="h3">
          义工の行
        </Typography>
        <Typography component="p">
        一本书、一句话、一个人，出发的理由永远不嫌少，曾经遇见的人，现在的你是否还记得
        </Typography>
        </Paper>

          <div className={classes.content}>
      {images1.map(image => (
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
          <Typography className={classes.title}>Word of the Day</Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos}>adjective</Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
    </div>

    <div className={classes.content}>
      {images2.map(image => (
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