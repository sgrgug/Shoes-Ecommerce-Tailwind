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
    x:200,
    y:-300,
    opacity: 0,
    duration:2,
})

// second section
gsap.from("#secSecImg", {
    scrollTrigger:{
        trigger: "#secSecImg",
        scroller: "body",
        scrub: 3,
        start: "top 90%",
        end: "top 50%",
    },
    opacity: 0,
    scale: 0.1,
    duration: 1,
})
// second section shoe title
gsap.from("#shoeContent", {
    scrollTrigger:{
        trigger: "#secSecImg",
        scroller: "body",
        scrub: 3,
        start: "top 70%",
        end: "top 50%",
    },
    opacity: 0,
    duration: 1,
})
// second section shoe title
gsap.from("#shoeTitle", {
    scrollTrigger:{
        trigger: "#secSecImg",
        scroller: "body",
        scrub: 3,
        start: "top 70%",
        end: "top 30%",
    },
    opacity: 0,
    y:150,
    duration: 1,
})
// third section shoe title
gsap.from("#proShoeTitle", {
    scrollTrigger:{
        trigger: "#shoeTitle",
        scroller: "body",
        scrub: 3,
        start: "top 20%",
        end: "top 5%",
    },
    opacity: 0,
    x:150,
    duration: 1,
})
// third section shoe title
gsap.from("#proShoeImg", {
    scrollTrigger:{
        trigger: "#proShoeImg",
        scroller: "body",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
    },
    opacity: 0,
    scale:0.1,
    duration: 1,
})

// All Gallery Image animation
gsap.from("#gallerypic1", {
    scrollTrigger:{
        trigger: "#gallerypic1",
        scroller: "body",
        scrub: 3,
        start: "top 60%",
        end: "top 30%",
    },
    opacity: 0,
    y:-200,
    duration: 1,
})
gsap.from("#gallerypic2", {
    scrollTrigger:{
        trigger: "#gallerypic2",
        scroller: "body",
        scrub: 3,
        start: "top 40%",
        end: "top 20%",
    },
    opacity: 0,
    y:-200,
    duration: 1,
})
gsap.from("#gallerypic3", {
    scrollTrigger:{
        trigger: "#gallerypic3",
        scroller: "body",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
    },
    opacity: 0,
    x:-200,
    duration: 1,
})
gsap.from("#gallerypic4", {
    scrollTrigger:{
        trigger: "#gallerypic3",
        scroller: "body",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
    },
    opacity: 0,
    x:200,
    duration: 1,
})
gsap.from("#gallerypic5", {
    scrollTrigger:{
        trigger: "#gallerypic3",
        scroller: "body",
        scrub: 3,
        start: "top 60%",
        end: "top 30%",
    },
    opacity: 0,
    y:200,
    duration: 1,
})
gsap.from("#gallerypic6", {
    scrollTrigger:{
        trigger: "#gallerypic3",
        scroller: "body",
        scrub: 3,
        start: "top 40%",
        end: "top 20%",
    },
    opacity: 0,
    y:200,
    duration: 1,
})