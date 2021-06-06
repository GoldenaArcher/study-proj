import php from '../asset/img/courses/php.png';
import andriod from '../asset/img/courses/andriod.png';
import angular from '../asset/img/courses/angular.png';
import androidHybrid from '../asset/img/courses/andriod-hybrid.png';

class Course {
  // 偷一下懒，学习人数和等级写死了
  // 也可以传到构造函数中去，但是PSD上都一样，我就……
  peopleStudying = 1125;
  courseLevel = '高级';
  constructor(id, title, img, isNew = false, isHot = false) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.isNew = isNew;
    this.isHot = isHot;
  }
}

const coursePhp = new Course(
  1,
  'Think PHP 5.0 博客系统实战项目演练',
  php,
  false,
  true
);
const courseAndriod = new Course(
  2,
  'Android 网络图片加载框架详解',
  andriod,
  true
);
const courseAngular = new Course(
  3,
  'Angular 2 最新框架+主流技术+项目实战',
  angular
);
const courseAndroidHybrid = new Course(
  4,
  'Android Hybrid APP开发实战 H5+原生！',
  androidHybrid
);
const courseAndroidHybrid2 = new Course(
  5,
  'Android Hybrid APP开发实战 H5+原生！',
  androidHybrid
);

// course list for home page
export const courseSuggestion1 = [
  coursePhp,
  courseAndriod,
  courseAngular,
  courseAndroidHybrid,
  courseAndroidHybrid2,
];
