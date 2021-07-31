// 放大镜切换图片
let zoomWindow = document.querySelector('.zoomWindow');  //声明提到前面好更换放大镜的图片
let lookImg = zoomWindow.querySelector('img');
for (let i = 0; i < carousel.children.length; i++) {
    carousel.children[i].addEventListener('click', function () {
        lookImg.src = this.children[0].src;
    })
}
//商品放大镜   展示框元素的声明在前面切换图片那里
let perview = document.querySelector('.goods_perview');
let zoomPup = document.querySelector('.zoomPup');
function move(e) {
    if (e.pageX - perview.offsetLeft - zoomPup.offsetWidth / 2 <= 0) {
        zoomPup.style.left = 0;
    } else if (perview.offsetWidth + perview.offsetLeft - e.pageX - zoomPup.offsetWidth / 2 <= 0) {
        zoomPup.style.left = perview.offsetWidth - zoomPup.offsetWidth + "px";
    } else {
        zoomPup.style.left = e.pageX - perview.offsetLeft - zoomPup.offsetWidth / 2 + "px"
    };
    if (e.pageY - perview.offsetTop - zoomPup.offsetHeight / 2 <= 0) {
        zoomPup.style.top = 0;
    } else if (perview.offsetTop + perview.offsetHeight - e.pageY - zoomPup.offsetHeight / 2 <= 0) {
        zoomPup.style.top = perview.offsetHeight - zoomPup.offsetHeight + "px";
    } else {
        zoomPup.style.top = e.pageY - perview.offsetTop - zoomPup.offsetHeight / 2 + "px";
    }
    // 小盒子的left和top值和父盒子的宽高的比值与放大的图片的left、top值跟放大的图片宽高的比值相等
    lookImg.style.left = -zoomPup.style.left.split('px')[0] * lookImg.offsetWidth / perview.offsetWidth + "px";
    lookImg.style.top = -zoomPup.style.top.split('px')[0] * lookImg.offsetHeight / perview.offsetHeight + "px";
};
perview.addEventListener('mouseover', function () {
    zoomPup.style.display = "block";
    zoomWindow.style.display = "block";
    perview.addEventListener('mousemove', move);
});
perview.addEventListener('mouseleave', function () {
    zoomPup.style.display = "none";
    zoomWindow.style.display = "none";
    perview.removeEventListener('mousemove', move);
});