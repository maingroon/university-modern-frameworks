const currentLocation = location.href;
const menuItem = document.querySelectorAll('nav ul li a');

menuItem.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active');
    }
});