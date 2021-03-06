import React, { Component } from 'react';
import PropTypes from 'prop-types';

//样式插件
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

//样式部分
import styles from './listStyle';
//画廊部分
import PictureContent from './listPicture';
//搜索部分
import SearchContent from './listSearch';

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <PictureContent />
      <Paper className={classes.paper} elevation={4}>
        <Typography type="headline" component="h3"  >
          义工信息列表
        </Typography>
      </Paper>
      <SearchContent />
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Expansion Panel 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel disabled>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  );
}
class ImgFigure extends Component{
  //点击转动图片
  handleClick(e){
    if(this.props.arrange.isCenter){
      this.props.inverse();
    }else{
      this.props.center();
    }
    e.stopPropagation();
    e.preventDefault();
  };
  render(){
    let styleObj = {};
    //如果props属性中指定了这张图片的位置，则使用
    if(this.props.arrange.pos){
      styleObj = this.props.arrange.pos;
    }
    //如果图片的旋转角度有值并且不为零，添加旋转角度
    if(this.props.arrange.rotate){
      ['-moz-','-ms-','-webkit',''].forEach(function(value){
        styleObj[value+'transform'] = 'rotate('+this.props.arrange.rotate + 'deg)';
      }.bind(this))
      
    }

    if(this.props.arrange.isCenter){
      styleObj.zIndex = 11;
    }

    let ImgFigureClassName = styleSCSS.imgFigure;
    ImgFigureClassName += this.props.arrange.isInverse?' '+styleSCSS.isInverse:'';
    let imgBeforeFigureClassName = styleSCSS.imgBefore;
    imgBeforeFigureClassName = this.props.arrange.isInverse?styleSCSS.imgBack:styleSCSS.imgBefore;
    return(
      <figure className={ImgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <img src={this.props.data.imageUrl}  alt={this.props.data.title}/>
        <figcaption>
          <h2 className={styleSCSS.ImgTitle}>{this.props.data.title}</h2>
          <div className={imgBeforeFigureClassName} onClick={this.handleClick}>
            <p>
              {this.props.data.desc}
            </p>
          </div>
        </figcaption>
      </figure>
    )
  }
}

// let ControllerUnit = React.createClass({
//   handleClick:function(e){
//     e.preventDefault();
//     e.stopPropagation();
//   },
//   render: function(){
//     return(
//       <span className="controllerUnit" onClick={this.handleClick}></span>
//     );
//   }
// })

class GalleryByReactApp extends Component{
    Constant={
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
    };
  
    //翻转图片
    inverse(index){
      return function(){
        let imgsArrangeArr = this.state.imgsArrangeArr;
        imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
  
        this.setState({
          imgsArrangeArr: imgsArrangeArr
        });
      }.bind(this)
    };
    /**
     * 重新布局所有图片
     * 
     */
    rearrange(centerIndex){
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
      imgsArrangeCenterArr[0]={
        pos: centerPos,
        isCenter: true,
        rotate:0
      };
      //居中的图片不需要旋转
      imgsArrangeCenterArr[0].rotate = 0;
      //取出要布局上侧的图片的状态信息
      topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
      imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);
  
      //布局位于上侧的图片
      imgsArrangeTopArr.forEach(function(value,index){
        imgsArrangeTopArr[index]={
          pos:{
            top:getRangeRandom( vPosRangeTopY[0],vPosRangeTopY[1]),
            left:getRangeRandom( vPosRangeX[0],vPosRangeX[1])
          },
          rotate:get30DegRandom(),
          isCenter: false
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
        imgsArrangeArr[i]={
          pos: {
            top:getRangeRandom(hPosRangeY[0],hPosRangeY[1]),
            left:getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1])
          },
          rotate:get30DegRandom(),
          isCenter: false
  
      };
    }
      if(imgsArrangeTopArr && imgsArrangeTopArr[0]){
        imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0]);
      }
      imgsArrangeArr.splice(centerIndex,0,imgsArrangeCenterArr[0]);
  
      this.setState({
        imgsArrangeArr:imgsArrangeArr
      });
    };
  
    //利用rearrange居中对应index
    center(index){
      return function(){
        this.rearrange(index);
      }.bind(this);
    };
    getInitialState(){
      return{
        imgsArrangeArr : [
          // {
          //   pos:{
          //     left:'0',
          //     top:'0'
          //   },
          // rotate:0，    旋转角度
          // isInverse:false, 图片正反面
          // isCenter:false, 是否居中
        // }
        ]
      };
    };
  
    //组件加载以后，为每张图片计算其位置的范围
    componentDidMount(){
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
  
    };
    render(){
      let controllerUnits = [],
      imgFigures = [];
      imageDatas.forEach(function(value,index) {
        if(!this.state.imgsArrangeArr[index]){
          this.state.imgsArrangeArr[index] = {
            pos:{
              left:0,
              top:0
            },
            rotate:0,
            isInverse:false ,
            isCenter:false 
          }
        }
        imgFigures.push(<ImgFigure data={value} ref={'imgFigure'+index} 
        key={index} arrange={this.state.imgsArrangeArr[index]}
        inverse={this.inverse(index)}  center={this.center(index)}/>);
        // controllerUnits.push
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
  };



  
  class MenuAppBar extends Component {
    
       
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
            </div>
          );
        }
      }
      
      MenuAppBar.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      
      export default withStyles()(MenuAppBar);
