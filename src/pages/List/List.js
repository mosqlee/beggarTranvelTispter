import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

//画廊部分
import PictureContent from './listPicture';

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


  class MenuAppBar extends React.Component {
    
     
      
        render() {

    
    
          return (
            <div>
               <PictureContent />
            </div>
          );
        }
      }
      
      MenuAppBar.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      
      export default withStyles()(MenuAppBar);