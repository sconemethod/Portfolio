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


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    //  아래 조건 쓰기전에는 menu 바 모두(버튼 아닌애들까지) 클릭됐을때 결과를 도출하기 떄문에 값이 없는 애들도 있다.
    //console.log(event.target.dataset.link);
const target = event.target;
const link = target.dataset.link;
if(link == null){
    // 아무것도 하지 않기
    return;
}
// 버튼 애들만 할당이 된다.
console.log(event.target.dataset.link);
// const scrollTo = document.querySelector(link);
// //이동
// scrollTo.scrollIntoView({ behavior: 'smooth' });

scrollIntoViews(link);
})


// Handle click on "contact me" button on home //엘리썜 버전
const homeContactBtn = document.querySelector('.home__contact');
    homeContactBtn.addEventListener('click', () => {
        scrollIntoViews('#contact')

});

// Handle click on "contact me" button on home // 내 버전
// const homeContactBtn = document.querySelector('.home__contact');
//     homeContactBtn.addEventListener('click', (event) => {
//         console.log(`event: ${event}`); //PointerEvent
//         console.log(`event.target: ${event.target}`); // 버튼
//         // console.log(`target: ${target}`); // 없음 

//     const target = event.target; 
//     const link = target.dataset.link; // 아래 (link) 쓰고 싶으면 이름 여기서 지어주어야 함
//         console.log(`target: ${target}`); //[object HTMLButtonElement]
//         console.log(`target.dataset: ${target.dataset}`); //[object DOMStringMap]
//         console.log(`target.dataset.link : ${target.dataset.link}`); //#contact

//     // link 값으로 이동
//     const scrollTo = document.querySelector(link);
//     scrollTo.scrollIntoView({ behavior: 'smooth' });

// })


function scrollIntoViews(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}