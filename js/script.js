const header = document.querySelector('.header')
const homeSection = document.querySelector('#home')
const sections = document.querySelectorAll('section')
const bars = document.querySelectorAll('.skills__bars__bar')
const barContainer = document.querySelector('.skills__bars__container')
const skillsSection = document.querySelector('#skills')
const navLinks = document.querySelectorAll('.nav__link')
const topBtn = document.querySelector('#top-btn')

window.onload = () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.paddingTop = header.scrollHeight + 'px'

        if (i == sections.length - 1)
            sections[i].style.paddingBottom = header.scrollHeight + 'px'
    }
    
    homeSection.style.paddingTop = header.scrollHeight * 2 + 'px'

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            document.querySelector('#nav-checkbox').checked = false
        })
    }

    revealSections()
    updateTopBtn()
}

window.onscroll = () => {
    revealSections()
    animateBars()
    setActiveLink()
    updateTopBtn()
}

function revealSections() {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop - window.scrollY < window.innerHeight - 200)
            sections[i].classList.add('animated')
    }
}

function animateBars() {
    if (barContainer.getBoundingClientRect().top < window.innerHeight - 100)
        for (let i = 0; i < bars.length; i++)
            bars[i].classList.add('animated')
}

function setActiveLink() {
    let activeLink = 0

    for (let i = 0; i < sections.length; i++) {
        const sectionTopY = sections[i].getBoundingClientRect().top
        const sectionHeight = sections[i].getBoundingClientRect().height

        if (sectionTopY <= 100)
            activeLink = i
    }

    for (let i = 0; i < navLinks.length; i++)
        navLinks[i].classList.remove('active')

    navLinks[activeLink].classList.add('active')
}

function updateTopBtn() {
    if (window.scrollY > document.body.offsetHeight / 4)
        topBtn.classList.add('visible')
    else
        topBtn.classList.remove('visible')
}
