const nav = document.querySelector(".navbar__list")
const main = document.querySelector("main");

let changableContent = [
    {
        id: 1,
        heading: "Discover innovative ways to decorate",
        para: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },

    {
        id: 2,
        heading: "We are available all across the globe",
        para: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },

    {
        id: 3,
        heading: "Manufactured with the best materials",
        para: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
]

let index = 0;

if (window.innerWidth < 1000) {
    slidableImg.setAttribute("src", "images/mobile-image-hero-1.jpg")
}

hamburger.addEventListener("click", openNav);
right.addEventListener("click", slideUp);
left.addEventListener("click", slideDown)
window.addEventListener("mousedown", (e) => {
    console.log("s")
    e.preventDefault()
})

function populateSlidableContainer() {
    if (window.innerWidth > 1000) {
        slidableImg.setAttribute("src", `images/desktop-image-hero-${changableContent[index].id}.jpg`);
    } else {
        slidableImg.setAttribute("src", `images/mobile-image-hero-${changableContent[index].id}.jpg`);
    }
    slidableHeading.innerHTML = changableContent[index].heading;
    slidablePara.innerHTML  = changableContent[index].para;
}

function slideUp() {
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
    slideOutAnimation("slide-out-blurred-right");
    animateOutText();
    setTimeout(populateSlidableContainer, 501);
    slideInAnimation("slide-in-blurred-left");
    setTimeout( animateInText, 502);
}

function slideDown() {
    if (index > 0) {
        index--;
    } else {
        index = 2;
    }
    slideOutAnimation("slide-out-blurred-left");
    animateOutText();
    setTimeout(populateSlidableContainer, 501);
    slideInAnimation("slide-in-blurred-right");
    setTimeout( animateInText, 502);
}

function slideInAnimation(animation) {

    let isImgAnimated = slidableImg.classList.contains("slide-in-blurred-right") || slidableImg.classList.contains("slide-in-blurred-left");

    if (isImgAnimated) {
        slidableImg.classList.remove("slide-in-blurred-right");
        slidableImg.classList.remove("slide-in-blurred-left");
    }
    setTimeout( () => slidableImg.classList.add(animation), 10)
}

function slideOutAnimation(animation) {
    if (slidableImg.classList.contains(animation)) {
        slidableImg.classList.remove(animation);
    }

    setTimeout( () => slidableImg.classList.add(animation), 1)
    setTimeout( () => slidableImg.classList.remove(animation), 302)
}

function animateInText() {
    slidableHeading.classList.remove("focus-in-expand-fwd");
    slidablePara.classList.remove("focus-in-expand-fwd");
    setTimeout(() => {
        slidableHeading.classList.add("focus-in-expand-fwd");
        slidablePara.classList.add("focus-in-expand-fwd")
    }, 10);
    setTimeout(() => {
        slidableHeading.classList.remove("focus-in-expand-fwd");
        slidablePara.classList.remove("focus-in-expand-fwd")
    }, 502);  
}

function animateOutText() {
    slidableHeading.classList.remove("blur-out-contract-bck");
    slidablePara.classList.remove("blur-out-contract-bck");
    setTimeout(() => {
        slidableHeading.classList.add("blur-out-contract-bck");
        slidablePara.classList.add("blur-out-contract-bck")
    }, 10);
    setTimeout(() => {
        slidableHeading.classList.remove("blur-out-contract-bck");
        slidablePara.classList.remove("blur-out-contract-bck")
    }, 502);
}


function openNav() {
    if ( !nav.classList.contains("open") ) {
        nav.classList.remove("slide-out-right");
        nav.classList.add("bounce-in-left");
        nav.classList.add("open");
        setTimeout( () => hamburger.firstElementChild.setAttribute("src", "images/icon-close.svg"), 200);
        main.classList.add("filter");
    } else {
        nav.classList.remove("bounce-in-left")
        nav.classList.add("slide-out-right");
        setTimeout( () => {
            nav.classList.remove("open");
            hamburger.firstElementChild.setAttribute("src", "images/icon-hamburger.svg");
        }, 300)
        main.classList.remove("filter");
    }
}

