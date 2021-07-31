//侧边栏开启与关闭
var side_nav = document.querySelector(".side_nav");
var mall_lis = side_nav.querySelectorAll('li');
for (var i = 0; i < mall_lis.length; i++) {
    mall_lis[i].onmouseover = function () {
        for (var i = 0; i < mall_lis.length; i++) {
            mall_lis[i].children[1].style.display = 'none';
        }
        this.children[1].style.display = 'block';
        this.style.backgroundColor = '#f1f1f1';
    }
    mall_lis[i].onmouseout = function () {
        for (var i = 0; i < mall_lis.length; i++) {
            mall_lis[i].children[1].style.display = 'none';
        }
        this.style.backgroundColor = '#fff';
    }
}
// 商品展示页切换图片
let goodsPerview = document.querySelector('.goods_perview');
let picView = goodsPerview.children[0].children[0];
let carousel = document.querySelector('.owl-carousel');
for (let i = 0; i < carousel.children.length; i++) {
    carousel.children[i].addEventListener('click', function () {
        picView.src = this.children[0].src;
        for (let i = 0; i < carousel.children.length; i++) {
            carousel.children[i].className = "";
        }
        this.className = 'zrc';
    })
}
//点击商品详情置顶
let stickyWrap = document.querySelector('.sticky-wrap');
let stickyli = stickyWrap.querySelectorAll('li');
let tabPanels = document.querySelectorAll('.tab-panel');
stickyWrap.addEventListener('click', function (e) {
    if (e.target.className != "z-crt") {
        window.scroll(0, stickyWrap.parentElement.offsetTop - 60);
    }
    for (let i = 0; i < stickyli.length; i++) {
        stickyli[i].className = "";
        tabPanels[i].style.display = "none";
    }
    e.target.className = "z-crt";
    for (var i = 0; i < stickyli.length; i++) {
        if (stickyli[i].className == "z-crt") {
            tabPanels[i].style.display = "block";
        }
    }
});
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= stickyWrap.parentElement.offsetTop - 60) {
        stickyWrap.style.width = document.body.clientWidth + "px";
        stickyWrap.style.position = "fixed";
        stickyWrap.style.top = 0;
        stickyWrap.style.left = 0;
        stickyWrap.style.height = "60px";
        stickyli[0].parentElement.style.lineHeight = "60px";
        stickyWrap.style.zIndex = 999;
    } else {
        stickyWrap.removeAttribute('style');
        stickyli[0].parentElement.style.lineHeight = "33px";
    }
})

