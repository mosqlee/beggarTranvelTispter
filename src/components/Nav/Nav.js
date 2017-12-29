import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from "../../redux/actions/userInfo";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//ui库
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import styles from './NavStyle'; 

  let a = getUserInfo();
  console.log(a)
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
      const { userInfo, isLoading, errorMsg } = this.props.userInfo;
      return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
              beggarTranvelTispter
              </Typography>
              {auth && (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="contrast"
                  >
                    <img className={classes.image} src={userInfo.imageSrc}/>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>个人资料</MenuItem>
                    <MenuItem onClick={this.handleClose}>退出登陆</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
  
  MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
let MenuAppBarClass = withStyles(styles)(MenuAppBar);

  export default connect((state ) => ({ userInfo: state.userInfo }), { getUserInfo })(MenuAppBarClass);
