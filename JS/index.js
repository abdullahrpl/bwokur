
// TEXT CAROUSEL
tailwind.config ={
    theme:{
        extend: {
            animation: {
            marquee: 'marquee 10s linear infinite',
            marquee2: 'marquee2 10s linear infinite',
            },
            keyframes: {
            marquee: {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-100%)' },
            },
            marquee2: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0%)' },
            },
            },
        }
    }
}
// TEXT CAROUSEL END

// navres
const btnBurger = document.getElementById('burgermenu')
const navslide = document.getElementById('navSlide')
const btnCloseNav = document.getElementById('btnCloseNav')

function navres() {
    console.log(navslide)
    navslide.classList.add('inline')
}

function closeNav() {
    navslide.classList.remove('inline')
}