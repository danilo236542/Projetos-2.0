const menuBtn= document.querySelector('.menu-btn');
const menuItems= document.querySelector('.menu-items');
const menuItem= document.querySelectorAll('.menu-item');

//main toggle
menuBtn.addEventListener('click',() => {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
});

//toggle on item if click is open
menuItem.forEach(item => {
    item.addEventListener('click',() => {
        if(menuBtn.classList.contains('open')){
           toggle();
        }
    });
});

function toggle() {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open')
}