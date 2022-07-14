// Change text sale
const textSaleXmark = document.querySelector('.textSale-xmark');
textSaleXmark.addEventListener('click', function () {
    document.querySelector('.textSale').style.display = 'none';
})
const textSale = document.querySelectorAll('.textSale-item');
textSale[0].style.display = 'block';
let i = 2;
setInterval(() => {
    textSale.forEach(element => {
        element.style.display = 'none';
    });
    const curTextSale = document.querySelector(`.textSale-${i}`);
    curTextSale.style.display = 'block';
    if (i == textSale.length) {
        i = 0;
    }
    i++;
}, 2500);

// Change slide-content
const slide = document.querySelectorAll('.slide');
slide[0].style.display = 'block';
let slideIndex = 2;
setInterval(() => {
    slide.forEach(element => {
        element.style.display = 'none';
    });
    const curSlide = document.querySelector(`#slide-${slideIndex}`);
    curSlide.style.display = 'block';
    if (slideIndex == slide.length) {
        slideIndex = 0;
    }
    slideIndex++;
}, 5000);

// Change single product
const singleProduct = document.querySelectorAll('.single-product');
singleProduct[0].style.display = 'block';
singleProduct[1].style.display = 'block';
singleProduct[2].style.display = 'block';
let singleProductIndex = 1;
setInterval(() => {
    singleProduct.forEach(element => {
        element.style.display = 'none';
    });
    for (let item = singleProductIndex; item <= singleProductIndex + 2; item++) {
        singleProduct[item].style.display = 'block'
    }
    singleProductIndex++;
    if (singleProductIndex == singleProduct.length - 2) {
        singleProductIndex = 0;
    }
}, 5000);

// Change images product-demo
const img = document.querySelectorAll('.img1');
img.forEach(element => {
    element.addEventListener('mouseover', function () {
        element.style.display = 'none';
        const img2 = document.querySelector(`#${element.id}-2`);
        img2.style.display = 'block';
        img2.addEventListener('mouseleave', function () {
            element.style.display = 'block';
            img2.style.display = 'none';
        })
    })
});

// Change slick list
const slickList = document.querySelectorAll('.slick-list-item');
const arrowPre = document.querySelector('.pre');
const arrowNext = document.querySelector('.next');
let listIndex = 0;
slickList[listIndex].style.display = 'block';
slickList[listIndex + 1].style.display = 'block';
slickList[listIndex + 2].style.display = 'block';

arrowPre.addEventListener('click', function () {
    slickList.forEach(element => {
        element.style.display = 'none';
    });
    listIndex--;
    if (listIndex == -1) {
        listIndex = (slickList.length / 2) - 1;
    }
    slickList[listIndex].style.display = 'block';
    slickList[listIndex + 1].style.display = 'block';
    slickList[listIndex + 2].style.display = 'block';

});

arrowNext.addEventListener('click', function () {
    slickList.forEach(element => {
        element.style.display = 'none';
    });
    listIndex++;
    if (listIndex == slickList.length - 2) {
        listIndex = (slickList.length / 2) - 2;
    }
    slickList[listIndex].style.display = 'block';
    slickList[listIndex + 1].style.display = 'block';
    slickList[listIndex + 2].style.display = 'block';

});

// Change category product
const categoryProduct = document.querySelectorAll('.category-product-element');
categoryProduct.forEach(element => {
    element.addEventListener('click', function () {
        categoryProduct.forEach(cate => {
            cate.style.color = '#000';
        });
        element.style.color = '#E9BF49';
    });
});

// Navigation: menu-link
const nav = document.querySelectorAll('.nav');
nav.forEach(element => {
    const menuLink = document.querySelector(`.menu-link-${element.id}`);
    element.addEventListener('mouseover', function () {
        menuLink.style.display = 'block';
    });
    menuLink.addEventListener('mouseover', function () {
        menuLink.style.display = 'block';
    });
    element.addEventListener('mouseleave', function () {
        menuLink.style.display = 'none';
    });
    menuLink.addEventListener('mouseleave', function () {
        menuLink.style.display = 'none';
    });
});

const namePage = document.querySelectorAll('.demo-element-pages');
namePage.forEach(element => {
    const pageItem = document.querySelector(`.${element.id}-item`);
    element.addEventListener('mouseover', function () {
        pageItem.style.display = 'block'
    });
    pageItem.addEventListener('mouseover', function () {
        pageItem.style.display = 'block';
    });
    element.addEventListener('mouseleave', function () {
        pageItem.style.display = 'none';
    });
    pageItem.addEventListener('mouseleave', function () {
        pageItem.style.display = 'none';
    });
});

// Menu bars
const menuIcon = document.querySelector('.menu-icon');
let check = true;
menuIcon.addEventListener('click', function () {
    const barMenu = document.querySelector('.bars-menu');
    const body = document.querySelector('body');
    if (check) {
        barMenu.style.display = 'block';
        body.style.filter = 'brightness(.5)';
        body.style.overflowY = 'hidden';
        barMenu.style.filter = 'none';
        check = false;
    }
    else {
        barMenu.style.display = 'none';
        body.style.filter = 'none';
        body.style.overflowY = 'unset';
        check = true;
    }
});