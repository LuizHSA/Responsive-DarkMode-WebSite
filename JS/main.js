
// SHOW MENU

const toggle = document.getElementById('nav-toggle')

function  toggleMenu(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.toggle('show-menu')
}

toggle.addEventListener('click', toggleMenu)

// REMOVE MENU

const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.addEventListener('click', navLinkRemove))


function navLinkRemove(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

// SCROLL SECTIONS ACTIVE LINK 

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

// CHANGE BACKGROUND HEADER

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY>=200){
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}

//SHOW SCROLL TOP

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
   
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

//DARK LIGHT THEME

const themeButton = document.getElementById("theme-button")
const lightTheme = "light-theme"
const iconTheme = "bxs-sun"


themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
})

//SCROLL REVEAL

const sr = ScrollReveal({
    origin: "top",
    distamce: "30px",
    duration:2000,
    reset: true
})

sr.reveal(`.home_data, .home_img,
            .about_data, .about_img
            .services_content, .menu_content,
            .contact_data, contact_button,
              footer_content`,{
    interval:200
})
