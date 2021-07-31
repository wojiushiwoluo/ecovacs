//关闭顶部广告
var close_top = document.querySelector('.close_top');
close_top.onclick = function () {
    this.parentElement.style.display = 'none';
}
//搞一个轮播图
let slider = document.querySelector('.slider');
let ol = document.querySelector('ol');
for (let i = 0; i < slider.children.length; i++) {
    let li = document.createElement('li');
    ol.appendChild(li);   //根据图片数量生产小li
}
let countNum = 1;
let slider_time = setInterval(function () {
    if (countNum == ol.children.length) {
        countNum = 0;
        slider.style.transition = 'all 1000ms ease 0s';
    } else {
        slider.style.transition = 'all 600ms ease 0s';
    }
    for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
    }
    ol.children[countNum].className = 'active';
    slider.style.transform = 'translateX(' + -countNum / 3 * 100 + '%)';
    countNum++;
}, 3000);
// 移入移出
let banner = document.querySelector('.banner');
banner.addEventListener('mouseenter', function () {
    clearInterval(slider_time);
    slider_time = null  // 清除定时器变量
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].setAttribute('index', i);
    }
})
banner.addEventListener('mouseleave', function () {
    slider_time = setInterval(function () {
        if (countNum == ol.children.length) {
            countNum = 0;
            slider.style.transition = 'all 1000ms ease 0s';
        } else {
            slider.style.transition = 'all 600ms ease 0s';
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[countNum].className = 'active';
        slider.style.transform = 'translateX(' + -countNum / 3 * 100 + '%)';
        countNum++;
    }, 3000);
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].removeAttribute('index');
    }
})
// 点击li跳转
for (var i = 0; i < ol.children.length; i++) {
    ol.children[i].onclick = function () {
        countNum = this.getAttribute('index');
        if (countNum == 0) {
            slider.style.transition = 'all 1000ms ease 0s';
        } else {
            slider.style.transition = 'all 600ms ease 0s';
        }
        slider.style.transform = 'translateX(' + -countNum / 3 * 100 + '%)';
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        this.className = 'active';
        countNum++;
    }
}
// 通栏广告变化
let step = 0; //步长
let cur = 0
let main_ad = document.querySelector('.main_ad');
var adBlock = setInterval(function () {
    if (main_ad.children[0].style.display == 'none') {
        main_ad.children[0].style.display = 'block';
        main_ad.children[1].style.display = 'none';
    } else {
        main_ad.children[0].style.display = 'none';
        main_ad.children[1].style.display = 'block';
    }
    var opacity_1 = setInterval(function () {
        if (cur == 100) {
            cur = 0;
        }
        step = (100 - cur) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        cur += step;
        if (step < 0 && cur <= 100) {
            clearInterval(opacity_1);
            opacity_1 = null;
            for (let i = 0; i < main_ad.children.length; i++) {
                main_ad.children[i].style.opacity = '';
            }
            cur = 100;
        } else if (step > 0 && cur >= 100) {
            clearInterval(opacity_1);
            opacity_1 = null;
            for (let i = 0; i < main_ad.children.length; i++) {
                main_ad.children[i].style.opacity = '';
            }
            cur = 100;
        }
        for (let i = 0; i < main_ad.children.length; i++) {
            if (main_ad.children[i].style.display == 'block') {
                main_ad.children[i].style.opacity = cur / 100;
            }
        }

    }, 50);
}, 3000);




