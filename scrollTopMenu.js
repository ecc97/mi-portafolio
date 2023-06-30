window.addEventListener('scroll', function() {
    var menu = document.getElementById('navmenu');
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollY > 50) {
        menu.classList.add('abajo');
    } else {
        menu.classList.remove('abajo');
    }
});