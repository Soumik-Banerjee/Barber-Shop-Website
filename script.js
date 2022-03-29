console.log("hello browser");

let navBar = document.getElementById('navbar');
let menuBtn = document.getElementsByClassName('menuBtn')[0];

let isNavHide = true;
function isHideFun(params) {
    isNavHide = params;
    return params
}

menuBtn.addEventListener('click', () => {
    if (isNavHide) {
        navBar.classList.replace('nav-hide', 'nav-show')
        isHideFun(false)
    } else {
        navBar.classList.replace('nav-show', 'nav-hide')
        isHideFun(true)
    }
});

let navItems = document.getElementsByClassName('nav-items');
Array.from(navItems).forEach(element => {
    element.addEventListener('click', () => {
        navBar.classList.replace('nav-show', 'nav-hide')
    })
})
