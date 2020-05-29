// header alarm-toggle
var alarm = document.querySelector('.profile__img--alarm');
var dropdown = document.querySelector('.profile-dropdown');
var toggle = (function(){ 
    var isVisible = false;
    return function(){
        dropdown.style.paddingTop = isVisible ? '8px' : 0;
        dropdown.style.opacity = isVisible ? '1' : 0;
        dropdown.style.top = isVisible? '52px' : '44px';
        isVisible = !isVisible
    };
})();
// left-navbar list dropdown
var leftNavbar = document.querySelectorAll('.nav-items')
var dropDown = function(){
    var selected = document.querySelector('.nav-items.selected')
    if(selected !== null){
        selected.style.height = '50px';
        selected.className = 'nav-items';
    }
    this.className = 'nav-items selected'
    var dropdownItems = document.querySelectorAll('.selected>.nav-items-dropdown')
    this.style.height = 50 * (dropdownItems.length+1) + 'px'; 
}
// main-content sort
var mainCards = document.querySelectorAll('.main-card');
var sortList = document.querySelector('.main-card-sort__image--list');
var sortTiles = document.querySelector('.main-card-sort__image--tiles');
// sorted by list
var sortByList = (function(){
    mainCards.forEach(elem => {
        elem.className = 'main-card list'
        elem.children[1].style.display = 'block'
    })
    setTimeout(() => {
        mainCards.forEach(elem => {
            elem.children[1].style.opacity = '1';
        }) 
    }, 500);

    sortList.removeEventListener('click', sortByList);
    sortTiles.addEventListener('click', sortByTiles)
})
// sorted by tiles 
var sortByTiles = (function(){
    mainCards.forEach(elem => {
        elem.children[1].style.opacity = '0';

    });
    setTimeout(() => {
        mainCards.forEach(elem => {
            elem.children[1].style.display = 'none'
            elem.className = 'main-card tiles'
        }) 
    }, 500);
    sortTiles.removeEventListener('click', sortByTiles);
    sortList.addEventListener('click', sortByList)
})
// main-content set order value
var orders = document.querySelectorAll('.main-card-order__ul__li')
var orderWrap = document.querySelector('.order-wrap') 
var viewOrder = function(){
    document.querySelector('.main-card-order__ul').style.height = orders.length * 50 + 'px';
    orders.forEach(order => {
        order.className = 'main-card-order__ul__li visible'
        order.addEventListener('click', changeOrder)
    });
    orderWrap.removeEventListener('click', viewOrder);
} 
var changeOrder = function(){
    document.querySelector('.main-card-order__ul').style.height = 50 + 'px';
    setTimeout(() => {
        orderWrap.addEventListener('click', viewOrder);
        orders.forEach(order => {
            order.className = 'main-card-order__ul__li'
            order.removeEventListener('click', changeOrder)
        });
        this.className = 'main-card-order__ul__li visible'
    }, 380);
}
// main-card mouseover 
var viewMore = function(){
    var attachSpan = this.children[0].children[0]
    var attachImg = this.children[0].children[1]
    attachSpan.style.opacity = 1
    attachImg.style.opacity = 1
}
// main-card mouseout
var viewMoreClose = function(){
    var attachSpan = this.children[0].children[0]
    var attachImg = this.children[0].children[1]
    attachSpan.style.opacity = 0
    attachImg.style.opacity = 0
}
// back to top
var topDiv = document.querySelector('.modal-top')
var backToTop = function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
var timer = null
var scrollBlur = function(){
    if(timer !== null) {
        clearTimeout(timer);
    }
    topDiv.style.opacity = '0';
    topDiv.removeEventListener('click', backToTop);
    timer = setTimeout(function(){
        if(window.scrollY !== 0){
            topDiv.style.opacity = '1';
            topDiv.addEventListener('click', backToTop);
        }
    }, 400)
}
// listener entry
alarm.addEventListener('click', toggle);
sortList.addEventListener('click', sortByList);
sortTiles.addEventListener('click', sortByTiles);
orderWrap.addEventListener('click', viewOrder);
topDiv.addEventListener('click', backToTop);
window.addEventListener('scroll', scrollBlur, false);
leftNavbar.forEach(navItem => {
    navItem.addEventListener('click', dropDown);
})
mainCards.forEach(mainCard => {
    mainCard.addEventListener('mouseover', viewMore)
    mainCard.addEventListener('mouseout', viewMoreClose)
})
