
const hello_arr = ['Welcome to,', 'DemiKita'];

window.onload = function () {
    const spanHelloContainer = document.querySelector(".span-hello-container");
    const spanHello = document.querySelector(".span-hello");

    let currentIndex = 0;

    function displayNextHello() {
        if (currentIndex < hello_arr.length) {
            spanHello.textContent = hello_arr[currentIndex];
            currentIndex++;
            setTimeout(displayNextHello, 1000);
        } else {
            spanHelloContainer.classList.add("translate-animation");
        }
    }

    displayNextHello();
};



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


