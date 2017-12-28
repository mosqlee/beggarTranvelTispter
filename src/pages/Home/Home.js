import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
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
import _ from 'lodash';

//图片
import styles from './HomeStyle';
import images from './image-s';

//画廊效果
import styleSCSS from './Home.css';
import imageData from '../../data/imageData.json';

//利用自执行函数，将图片名信息转成图片URL路径信息
let imageDatas = _.cloneDeep(imageData);
imageDatas = (function genImageUrl(imageDatasArr){
    for(let i = 0 ,j = imageDatasArr.length ; i < j ; i++){
      let singleImageData = imageDatasArr[i];
      singleImageData.imageUrl = require('./image/'+singleImageData.fileName);
      imageDatasArr[i] = singleImageData;
    }
    return imageDatasArr;
  }
)(imageDatas)
//获取区间内的一个随机值
function getRangeRandom(low,high){
  return Math.ceil(Math.random() * (high - low) + low);
}

let ImgFigure = React.createClass({
  render:function(){
    let styleObj = {};
    //如果props属性中指定了这张图片的位置，则使用
    if(this.props.arrange.pos){
      styleObj = this.props.arrange.pos;
    }
    return(
      <figure className={styleSCSS.ImgFigure} style={styleObj}>
        <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
        <figcaption>
          <h2 className={styleSCSS.ImgTitle}>{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
})



let GalleryByReactApp = React.createClass({
  Constant:{
    centerPos:{
      left:0,
      right:0
    },
    hPosRange:{//水平方向的取值范围
      leftSecX:[0,0], 
      rightSecX:[0,0],
      y:[0,0] 
    },
    vPosRange:{//垂直方向的取值范围
      topY:[0,0], 
      x:[0,0] 
    },
  },

  /**
   * 重新布局所有图片
   * 
   */
  rearrange : function(centerIndex){
    let imgsArrangeArr = this.state.imgsArrangeArr,
    Constant = this.Constant,
    centerPos = Constant.centerPos,
    hPosRange = Constant.hPosRange,    
    vPosRange = Constant.vPosRange,
    hPosRangeLeftSecX = hPosRange.leftSecX,
    hPosRangeRightSecX = hPosRange.rightSecX,
    hPosRangeY = hPosRange.y,
    vPosRangeTopY = vPosRange.topY,
    vPosRangeX = vPosRange.x,

    imgsArrangeTopArr = [],
    topImgNum = Math.ceil(Math.random() * 2), //取一个或者不取
    topImgSpliceIndex = 0,
    imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex,1);

    //首先居中centerIndex的图片
    imgsArrangeCenterArr[0].pos = centerPos;

    //取出要布局上侧的图片的状态信息
    topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
    imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);

    //布局位于上侧的图片
    imgsArrangeTopArr.forEach(function(value,index){
      imgsArrangeTopArr[index].pos = {
        top:getRangeRandom( vPosRangeTopY[0],vPosRangeTopY[1]),
        left:getRangeRandom( vPosRangeX[0],vPosRangeX[1])
      };
    });

    //布局左右两侧的图片
    for(let i = 0,j = imgsArrangeArr.length,k=j/2;i<j;i++){
      let hPosRangeLORX = null;
      //前半部分布局左边，右半部分布局右边
      if(i<k){
        hPosRangeLORX = hPosRangeLeftSecX;
      }else{
        hPosRangeLORX = hPosRangeRightSecX;
      }
      imgsArrangeArr[i].pos = {
        top:getRangeRandom(hPosRangeY[0],hPosRangeY[1]),
        left:getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1]),
      }
    }
    if(imgsArrangeTopArr && imgsArrangeTopArr[0]){
      imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0]);
    }
    imgsArrangeArr.splice(centerIndex,0,imgsArrangeCenterArr[0]);

    this.setState({
      imgsArrangeArr:imgsArrangeArr
    })
  },
  getInitialState : function(){
    return{
      imgsArrangeArr : [
        // {
        //   pos:{
        //     left:'0',
        //     top:'0'
        //   }
        // }
      ]
    };
  },

  //组件加载以后，为每张图片计算其位置的范围
  componentDidMount : function(){
    //首先拿到舞台的大小
    let stageDOM = ReactDOM.findDOMNode(this.refs.stage),
    stageW = stageDOM.scrollWidth,
    stageH = stageDOM.scrollHeight,
    halfStageW = Math.ceil(stageW/2),
    halfStageH = Math.ceil(stageH/2);

    //拿到一个imgFigure的大小
    let imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
    imgW = imgFigureDOM.scrollWidth,
    imgH = imgFigureDOM.scrollHeight,
    halfImgW = Math.ceil(imgW/2),
    halfImgH = Math.ceil(imgH/2);

    //计算中心图片的位置点
    this.Constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    }

    //计算左侧右侧区域图片排布位置的取值范围
    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW*3;
    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;

    //计算上侧区域图片排布位置的取值范围 
    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.Constant.vPosRange.x[0] = halfStageW - imgW;
    this.Constant.vPosRange.x[1] = halfStageW;

    this.rearrange(0);

  },
  render:function(){
    let controllerUnits = [],
    imgFigures = [];
    imageDatas.forEach(function(value,index) {
      if(!this.state.imgsArrangeArr[index]){
        this.state.imgsArrangeArr[index] = {
          pos:{
            left:0,
            top:0
          }
        }
      }
      imgFigures.push(<ImgFigure data={value} ref={'imgFigure'+index} key={index} arrange={this.state.imgsArrangeArr[index]}/>);
    }.bind(this));
    return(
      <section className = {styleSCSS.stage} ref="stage">
        <section className = {styleSCSS.img}>
        {imgFigures}
        </section>
        <nav className = {styleSCSS.controllerNav}>
        {controllerUnits}
        </nav>
        </section>
    )
  }
})

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
       <GalleryByReactApp />



        <Paper className={classes.paperContent} elevation={9}>
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
          <Typography className={classes.title}>背上行囊</Typography>
          <Typography type="headline" component="h2">
            义{bull}工{bull}之{bull}旅
          </Typography>
          <Typography className={classes.pos}>一个人</Typography>
          <Typography component="p">
          随心所欲的走走停停。<br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.buttonColor} dense>了解更多</Button>
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