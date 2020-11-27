const translate = document.querySelectorAll('.translate');
const big_title = document.querySelector('.big-title');
const header = document.querySelector('header');
const button = document.querySelector('.goDown');
const shadow = document.querySelector('.shadow');
const content = document.querySelector('.content');
const section = document.querySelector('section');
// const opacity = document.querySelectorAll('.opacity');
const social = document.querySelectorAll('header .fab');
const navbar = document.querySelector('.navbar');
const menuToggler = document.querySelector('.menu-toggler')
const navbarMenu = document.querySelector('.navbar-menu')
const navbarButtons = document.querySelectorAll('.navbar-button')
const loading = document.querySelector('.loading')

let headerHeight = header.offsetHeight;
let sectionHeight = section.offsetHeight;


navbarButtons.forEach(element => {
    element.addEventListener('click', function(){
        menuToggler.classList.remove('active')
        navbarMenu.classList.remove('active')
    })
})

menuToggler.addEventListener('click', function(){
    this.classList.toggle('active')
    navbarMenu.classList.toggle('active')

})
window.addEventListener('load', function(){
   loading.parentElement.removeChild(loading)
})




window.addEventListener('scroll', ()=>{

    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    if(scroll > 20){
        navbar.classList.add('sticky')

    } else{
        navbar.classList.remove('sticky')

    }

    if (scroll > 80){
        button.classList.add('goTop')
        button.addEventListener('click', function(){
            window.scroll(0, 0)
        })
    }  else {
        button.classList.remove('goTop')
    }
    // button.addEventListener('click', function(){
    //     window.scroll(0, 0)
    // })

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    // if ((scroll/ (sectionY.top + sectionHeight) + 0.25) <= 1){
    //     opacity.forEach(element => {
    //         element.style.opacity = scroll/ (sectionY.top + sectionHeight) + 0.25
    //     })
    // }
    
    social.forEach(element => {
        element.style.opacity = - scroll / (headerHeight /2) + 1
    })


    big_title.style.opacity = - scroll / (headerHeight /2) + 1;
    // button.style.opacity = -scroll/(headerHeight/2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`

     if ((scroll/(sectionHeight + sectionY.top) * 50 - 50) < 20 ){
        content.style.transform = `translateY(${scroll/(sectionHeight + sectionY.top) * 50 - 50}px)`
     }
    
})