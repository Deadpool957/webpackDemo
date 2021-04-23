var lrz = require('lrz');
import { pathToBase64, base64ToPath } from 'image-tools';
//函数节流
/**
 * 函数节流
 */
window.onload = ()=>{
    var db ='我是db.js文件';

document.querySelector('#file').addEventListener('change', function () {
    console.log(this.files,'上传的图片信息')
lrz(this.files[0])
    .then(function (rst) {
        // 处理成功会执行
        console.log(rst);
        base64ToPath(rst.base64)
        .then(path => {
            console.log(path)
        })
        .catch(error => {
            console.error(error)
        })
    })
    .catch(function (err) {
        // 处理失败会执行
    })
    .always(function () {
        // 不管是成功失败，都会执行
    });
});
    function throttle(fn,delay){
        var lastTime;
        var timer;
        var delay = delay || 200;
        return function() {
          var args = arguments;
          // 记录当前函数触发的时间
          var nowTime = Date.now();
          if (lastTime && nowTime - lastTime < delay) {
            clearTimeout(timer);
            timer = setTimeout(function () {
              // 记录上一次函数触发的时间
              lastTime = nowTime;
              // 修正this指向问题
              fn.apply(this, args);
            }, delay);
          }else{
            lastTime = nowTime;
            fn.apply(this, args);
          }
        }
      } 
      function ajax(content) {
        console.log('ajax request ' + content)
    }
    let inputDebounce = document.getElementById('throttle')
    let debounceAjax = throttle(ajax, 5000
        )
    inputDebounce.addEventListener('keyup', function (e) {
        debounceAjax(e.target.value)
    })
    
}
  