// 该文件为页面js入口文件
// 此处使用require嵌套写法是为了保证r.js打包正确
// TODO: 应该有更优雅的书写方式


require(['common/lib'],function(){
  require([
    'jquery',
    'text!pages/home/index/tpl/time.tpl!strip',
    'lib/underscore/underscore'
  ],function($,timeTpl){
    $(timeTpl).appendTo($('body'));
  });
});