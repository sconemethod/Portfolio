'use strict';


// Make navbar transparent when it is on the top 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
                                // 아무런 인자를 받지않고 원하는 블럭을 실행
document.addEventListener('scroll', ()=>{
   
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`)

    // 넷바 높이이상으로 스크롤이 내려가면
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});