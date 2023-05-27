//for header
window.addEventListener('scroll', function () {
    var nav_top = document.getElementById('nav_top');
    var getScrollValue = window.scrollY;

    if (getScrollValue > 100) {
        nav_top.classList.add('bg-pri-100');
        nav_top.classList.add('shadow-xl');
    } else {
        nav_top.classList.remove('bg-pri-100');
        nav_top.classList.remove('shadow-xl');
    }
});

//for menu
var menu = document.getElementById('menu');
var menu_btn = document.getElementById('menu_btn');
menu_btn.addEventListener('click', function(){
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('block');
    }else{
        menu.classList.add('hidden');
        menu.classList.remove('block');
    }
});