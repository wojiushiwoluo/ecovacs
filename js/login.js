// 切换登录
let tab = document.querySelector('.tab');
let tabItem = document.querySelectorAll('.tab_item');
for (let i = 0; i < 2; i++) {
    tab.children[i].onclick = function () {
        for (let i = 0; i < 2; i++) {
            if (tab.children[i].className == "z-crt") {
                if (this.className != tab.children[i].className) {
                    this.className = tab.children[i].className;
                    tab.children[i].className = "";
                    tabItem[i].className = "tab_item";
                    tabItem[1 - i].className = "tab_item z-crt";
                }
            }
        }

    }
}