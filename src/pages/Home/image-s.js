import imageTibei from './image/tibei.jpg';
 import imageChaka from './image/chaka.jpg';
import imageXiAn from './image/xian.jpg';
import imageXiHu from './image/xihu.jpg';
import imageYangzhou from './image/yangzhou.jpg';
import imageNanjing from './image/nanjing.jpg';
import imageLuoyang from './image/luoyang.jpg';
const images = {
    images1:[
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
    }],
    images2:[
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
  };
export default images;