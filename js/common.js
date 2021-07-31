// 导航栏隐藏打开
var nav = document.querySelector('.shortcut');
var menuItems = document.querySelectorAll('.menu_item');
var drops = document.querySelectorAll('.dropdwon');
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].onmouseover = function () {
        for (var i = 0; i < drops.length; i++) {
            drops[i].style.display = 'none';
        }
        this.children[1].style.display = 'block';
        this.children[0].style.borderBottom = '4px solid #0171bb';
    }
    menuItems[i].onmouseout = function () {
        for (var i = 0; i < drops.length; i++) {
            drops[i].style.display = 'none';
        }
        this.children[0].style.borderBottom = '4px solid transparent';
    }
}
//侧边栏开启和隐藏
var subitems = document.querySelectorAll('.submenu_item');
for (var i = 0; i < subitems.length - 6; i++) {
    subitems[i].onmouseover = function () {
        for (var i = 0; i < subitems.length - 6; i++) {
            subitems[i].children[1].style.display = 'none';
            subitems[i].children[0].style.color = '#ccc';
        }
        this.children[1].style.display = 'block';
        this.children[0].style.color = '#253746';
    }
}
// 返回顶部按钮
let toTop = document.querySelector('.to_top');
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 370) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
})
toTop.addEventListener('click', function () {
    window.scroll(0, 0);
})