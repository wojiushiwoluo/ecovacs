// 根据ul里面的li的个数动态生成小圆点
var banner = document.querySelector('.banner');
var ul = banner.querySelector('ul');
var ol = document.querySelector('ol');
for (var i = 0; i < ul.children.length; i++) {
    //1.创建一个li
    var li = document.createElement('li');
    li.innerHTML = '0' + (i + 1);
    //2.把li插入ol
    ol.appendChild(li);
}
//3. 给第一个小li添加选中样式
ol.children[0].className = 'li_selected';

//动画测试
var lis = ul.querySelectorAll('li')
lis[0].style.zIndex = '1';
lis[1].style.transform = 'translateX(100%)';
lis[2].style.transform = 'translateX(100%)';
lis[3].style.transform = 'translateX(100%)';
lis[4].style.transform = 'translateX(-100%)';
var activeDot = document.querySelector('.active_dot');
var flag = 0;
//按钮跳转  
var goRight = document.querySelector('.go_right');
var goLeft = document.querySelector('.go_left');
// 左边按钮
goLeft.addEventListener('click', function () {
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].style.zIndex == 1) {
            for (var k = 0; k < lis.length; k++) {
                lis[k].style.transform = 'translateX(-100%)';
                lis[k].style.zIndex = '0';
                if (i == 0) {
                    lis[lis.length - 1].style.zIndex = '1';
                    lis[lis.length - 1].className = 'slider_item z-rct';
                    lis[lis.length - 1].style.transform = 'translateX(0)';
                    lis[2].style.zIndex = '2';

                } else if (i == 1) {
                    lis[0].style.zIndex = '1';
                    lis[0].className = 'slider_item z-rct';
                    lis[0].style.transform = 'translateX(0)';
                    lis[lis.length - 1].style.zIndex = '2';
                } else {
                    lis[i - 1].style.zIndex = '1';
                    lis[i - 1].className = 'slider_item z-rct';
                    lis[i - 1].style.transform = 'translateX(0)';
                    lis[i - 2].style.zIndex = '2';
                }
            }
            lis[i].style.zIndex = '2';
            lis[i].className = 'slider_item';
            lis[i].style.transform = 'translateX(100%)';
            break;
        }

    }

    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
    }
    flag--;
    if (flag < 0) {
        flag = lis.length - 1
    }
    ol.children[flag].className = 'li_selected';
    var dotLfet = flag * 50 + 13;
    activeDot.style.left = dotLfet + 'px';
})
// 右边按钮
goRight.addEventListener('click', function () {
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].style.zIndex == 1) {
            for (var k = 0; k < lis.length; k++) {
                lis[k].style.transform = 'translateX(100%)';
                lis[k].style.zIndex = '0';
                if (i + 2 > lis.length) {
                    lis[i + 1 - lis.length].style.zIndex = '1';
                    lis[i + 1 - lis.length].className = 'slider_item z-rct';
                    lis[i + 1 - lis.length].style.transform = 'translateX(0)';
                    lis[i + 2 - lis.length].style.zIndex = '2';

                } else if (i + 2 == lis.length) {
                    lis[0].style.zIndex = '2';
                    lis[i + 1].style.zIndex = '1';
                    lis[i + 1].className = 'slider_item z-rct';
                    lis[i + 1].style.transform = 'translateX(0)';
                } else {
                    lis[i + 1].style.zIndex = '1';
                    lis[i + 1].className = 'slider_item z-rct';
                    lis[i + 1].style.transform = 'translateX(0)';
                    lis[i + 2].style.zIndex = '2';
                }
            }
            lis[i].style.zIndex = '2';
            lis[i].className = 'slider_item';
            lis[i].style.transform = 'translateX(-100%)';
            break;
        }

    }
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
    }
    flag++;
    if (flag == lis.length) {
        flag = 0;
    }
    ol.children[flag].className = 'li_selected';
    var dotLfet = flag * 50 + 13;
    activeDot.style.left = dotLfet + 'px';
})
// 自动播放
var timer = setInterval(function () {
    goRight.click();
}, 3000);
// 移入移出
banner.addEventListener('mouseenter', function () {
    clearInterval(timer);
    timer = null  // 清除定时器变量
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].setAttribute('index', i);
    }
})
banner.addEventListener('mouseleave', function () {
    timer = setInterval(function () {
        goRight.click();
    }, 2000);
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].removeAttribute('index');
    }
})
for (let i = 0; i < ol.children.length; i++) {
    ol.children[i].onclick = function () {
        for (let i = 0; i < ol.children.length; i++) {
            lis[i].style.transform = 'translateX(100%)';
            lis[i].style.zIndex = '0';
        }
        flag = this.getAttribute('index');
        if (flag == 0) {
            lis[1].style.zIndex = '2';
            lis[4].style.transform = 'translateX(-100%)';
            lis[4].style.zIndex = '2';
        } else if (flag == ol.children.length - 1) {
            lis[0].style.zIndex = '2';
            lis[ol.children.length - 2].style.transform = 'translateX(-100%)';
            lis[ol.children.length - 2].style.zIndex = '2';
        } else {
            lis[flag - 1].style.transform = 'translateX(-100%)';
            lis[flag - 1].style.zIndex = '2';
            lis[flag].nextElementSibling.style.zIndex = '2';
        }
        lis[flag].style.zIndex = '1';
        lis[flag].className = 'slider_item z-rct';
        lis[flag].style.transform = 'translateX(0)';
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[flag].className = 'li_selected';
        var dotLfet = flag * 50 + 13;
        activeDot.style.left = dotLfet + 'px';
    }
}
// 轮播图预览
//小圆圈要转起来 
var circle = document.querySelectorAll('.circle');
goLeft.addEventListener('mouseenter', function () {
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].style.zIndex == 1) {
            lis[i].style.transform = 'translateX(180px)';
            var left_w = -(document.body.clientWidth - 180);
            if (i == 0) {
                lis[lis.length - 1].style.transform = 'translateX(' + left_w + 'px)';
                lis[lis.length - 1].className = 'slider_item previewing';
            } else {
                lis[i - 1].style.transform = 'translateX(' + left_w + 'px)';
                lis[i - 1].className = 'slider_item previewing';
            }
        }

    }
})
goLeft.addEventListener('mouseleave', function () {
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].style.zIndex == 1) {
            lis[i].style.transform = 'translateX(0)';
            if (i == 0) {
                lis[lis.length - 1].style.transform = 'translateX(-100%)';
                lis[lis.length - 1].className = 'slider_item';
            } else {
                lis[i - 1].style.transform = 'translateX(-100%)';
                lis[i - 1].className = 'slider_item';
            }
        }

    }
})
goRight.addEventListener('mouseenter', function () {
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].style.zIndex == 1) {
            lis[i].style.transform = 'translateX(-180px)';
            var right_w = document.body.clientWidth - 180;
            if (i == lis.length - 1) {
                lis[0].style.transform = 'translateX(' + right_w + 'px)';
                lis[0].className = 'slider_item previewing';
            } else {
                lis[i + 1].style.transform = 'translateX(' + right_w + 'px)';
                lis[i + 1].className = 'slider_item previewing';
            }
        }

    }
})
goRight.addEventListener('mouseleave', function () {
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].style.zIndex == 1) {
            lis[i].style.transform = 'translateX(0)';
            if (i == lis.length - 1) {
                lis[0].style.transform = 'translateX(100%)';
                lis[0].className = 'slider_item';
            } else {
                lis[i + 1].style.transform = 'translateX(100%)';
                lis[i + 1].className = 'slider_item';
            }
        }

    }
})

