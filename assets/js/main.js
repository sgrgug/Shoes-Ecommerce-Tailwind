//for header
window.addEventListener('scroll', function () {
    var nav_top = document.getElementById('nav_top');
    var getScrollValue = window.scrollY;

    if (getScrollValue > 80) {
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

//for menu
var search = document.getElementById('search');
var search_btn = document.getElementById('search_btn');
search_btn.addEventListener('click', function(){
    if(search.classList.contains('hidden')){
        search.classList.remove('hidden');
        search.classList.add('block');
    }else{
        search.classList.add('hidden');
        search.classList.remove('block');
    }
});

gsap.from("#hero_img",{
    scale:.1,
    opacity: 0,
    duration:2,
})