const brackdrop = document.getElementById('brackdrop')
const choose = document.querySelectorAll('.button')
const mobilelink = document.querySelectorAll('.mobile-link')
const togglebtn = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')
const mainNav = document.querySelector('.main-nav')







togglebtn.addEventListener('click', function() {
    brackdrop.style.display = 'block'
    mobileNav.style.display = 'block'
    mainNav.style.display = 'none'

})

if (brackdrop) {
    brackdrop.addEventListener('click', function() {


        brackdrop.style.display = 'none'
        mobileNav.style.display = 'none'
        mainNav.style.display = 'inline-block'
    })
}


if (mobilelink.length) {
    for (let i = 0; i < mobilelink.length; i++) {
        mobilelink[i].addEventListener('click', function() {
            brackdrop.style.display = 'none'
            mobileNav.style.display = 'none'
        })
    }
}