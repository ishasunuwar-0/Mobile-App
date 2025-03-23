$(document).ready(function() {
    const mobileMenu = $('#mobile-menu');
    const navList = $('.nav-list');

    // Toggle mobile menu
    mobileMenu.on('click', function() {
        navList.toggleClass('active');
    });

    // Animate sections on page load
    $('section').each(function() {
        $(this).addClass('visible');
    });
});