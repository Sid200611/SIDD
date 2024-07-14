let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{    
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}


// let data = [
//     {name:"DEW BLUSH",
//      price:"18$",
//      description:"BLENDABLE LIQUID CHEEK FLUSH FOR ALL SKIN TYPES",
//      reviews:"1279"
//     },
//     { name:"LIP BLUR",
//         price:"24$",
//         description:"SOFT-MATTE HYDRATING LIPSTICK",
//         reviews:"528"
//     },
//     {name:"MASCARA 101",
//         price:"26$",
//         description:"THICK, BOLD, LIFTED LASHES.",
//         reviews:"844"
//     },
//     {name:"SLIP TINT TINTED MOISTURIZER",
//         price:"36$",
//         description:"SHEER COVERAGE, HYDRATION, SPF 35",
//         reviews:"3405"

//     },
   
// ]
