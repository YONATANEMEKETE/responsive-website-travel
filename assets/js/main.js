/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'); 
const navClose = document.getElementById('nav-close');
const toggle = document.getElementById('nav-toggle'); 

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu')
});  

navClose.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu')
}); 

/*=============== REMOVE MENU MOBILE ===============*/
const links = document.querySelectorAll('.nav__link'); 

links.forEach(nl => {
  nl.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
});   

/*=============== ADD BLUR TO HEADER ===============*/
const header = document.getElementById('header'); 

const scrollBlur = () => {
  this.scrollY > 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}; 

window.addEventListener('scroll', scrollBlur); 

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById('scroll-up'); 

const scrollUpActive = () => {
  this.scrollY > 350 ? scrollUp.classList.add('show-scroll')
                     : scrollUp.classList.remove('show-scroll')
}; 

window.addEventListener('scroll', scrollUpActive); 

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]'); 

const scrollActive = () => {
  const scrollY = window.pageYOffset 

  sections.forEach(current => {
    secTop = current.offsetTop - 50; 
    sectionHeight = current.offsetHeight; 
    secId = current.getAttribute('id'); 
    secClass = document.querySelector('.nav__menu a[href*= ' + secId + ']');  


    if(scrollY > secTop && scrollY <= secTop + sectionHeight){
      secClass.classList.add('active-link')
    }  else {
      secClass.classList.remove('active-link')
    } 
  })
}


window.addEventListener('scroll', scrollActive); 
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 3000,
  delay: 300,
 // reset: true   for repeat
}) 


sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`) 
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100}) 
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'}) 
sr.reveal(`.popular__card`, {interval: 200}) 