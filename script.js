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

    $('#explore-button').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800); // Smooth scroll duration
    });

    // Fullscreen effect for the map image
    $('#map-image').on('click', function() {
        // Create a fullscreen div
        const fullscreenDiv = $('<div class="fullscreen"></div>');
        const imgClone = $(this).clone().css({
            'width': 'auto',
            'height': 'auto'
        });

        // Append the cloned image to the fullscreen div
        fullscreenDiv.append(imgClone);

        // Append the fullscreen div to the body
        $('body').append(fullscreenDiv);

        // Close the fullscreen when clicked
        fullscreenDiv.on('click', function() {
            $(this).remove(); // Remove the fullscreen div
        });
    });
});

