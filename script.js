$(document).ready(function() {
    const mobileMenu = $('#mobile-menu');
    const navList = $('.nav-links');

    // Toggle mobile menu (if applicable)
    if (mobileMenu.length) {
        mobileMenu.on('click', function() {
            navList.toggleClass('active');
        });
    }

    // Animate sections on page load
    $('section').each(function() {
        $(this).addClass('visible'); // Add a visible class to each section
    });

    // Smooth scroll to the interactive map section when the Explore button is clicked
    $('#explore-button').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        $('html, body').animate({
            scrollTop: $('#community').offset().top // Scroll to the interactive map section
        }, 800); // Smooth scroll duration
    });
    
    $('.learn-more-button').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        $('html, body').animate({
            scrollTop: $('#about').offset().top // Scroll to the About Us section
        }, 800); // Smooth scroll duration
    });

    initMap();
});

function initMap() {
    const mapOptions = {
        center: { lat: -34.397, lng: 150.644 }, // Set your desired coordinates
        zoom: 8,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}