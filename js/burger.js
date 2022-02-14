let burgerBtn = document.getElementById('burger-btn');
let closeBurgerBtn = document.getElementById('close-burger-btn');

burgerBtn.onclick = function openMenu() {
    document.getElementById('burger-menu').classList.toggle('burger-vis');
    document.getElementById('burger-btn').classList.toggle('burger-btn-anim');
    document.getElementById('main-img-box').classList.toggle('main-img-box-hide');
}

closeBurgerBtn.onclick = function closeMenu() {
    document.getElementById('burger-menu').classList.toggle('burger-vis');
    document.getElementById('burger-btn').classList.toggle('burger-btn-anim');
    document.getElementById('main-img-box').classList.toggle('main-img-box-hide');
}