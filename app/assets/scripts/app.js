/**
 * Site Scripts
 */
// var jQuery = require('jquery');
// var Easing = require('jquery.easing')(jQuery);
// import {easing} from 'jquery.easing';
// define(['jquery', 'jquery.easing'], function (jQuery, easing) {
//     easing(jQuery)
// });
import $ from 'jquery';
import Navbar from './modules/Navbar';
import Scroll from './modules/Scroll';

$(document).ready(function () {
    let navbar = new Navbar();
    let scroll = new Scroll();
    
    // /**
    //  * Invoke windowScroll() function immediately on page load
    //  */
    // windowScroll();

    // $(window).on('resize', () => {
    //     console.log('Resizing');
    //     if(window.innerWidth <= 768) {
    //         console.log('Resizing below 768px');
    //         $('.navbar').removeClass('top-nav-scroll');
    //         $('.navbar-collapse').addClass('hide');
    //     }
    //     else if (window.innerWidth > 768 && $('.navbar').offset().top > 50) { // $('.navbar').height()) { // 50) {
    //         console.log('window bigger than 768 and below nav height');
    //         $('.navbar-collapse').removeClass('show hide');
    //         $('.navbar').addClass('top-nav-scroll');
    //     }
    //     else if(window.innerWidth > 768) {
    //         console.log('window bigger than 768');
    //         $('.navbar-collapse').removeClass('show hide');
    //     }
    // });

    /**
     * Remove top-nav-scroll class from navbar with js, default w/o JS
     */
    // $('.fixed-top').removeClass('top-nav-scroll');

    // $('.skills-container').addClass('d-none');

    $('.skills-container').css({
        opacity: '0'
    });

    // /** Navbar.fixNavbar()
    //  * When window is scrolled past the top 50px, add class to navbar that changes nav colors
    //  */
    // function fixNavbar() {
    //     if ($('.navbar').offset().top > 50) {
    //         $('.fixed-top').addClass('top-nav-scroll');
    //     } else {
    //         $('.fixed-top').removeClass('top-nav-scroll');
    //     }
    // }

    /**
     * Since Contact form is NOT full height of window, the scroll to feature doesn't work adding the 'active' class
     * to the parent 'li'
     * This checks the window height to verify if the contact form is in view,
     * and adds the 'active' class to the 'contact-link' parent 'li'
     */
    function activateContactLink() {
        if (
            $(document).height() - $(window).height() <=
            $(window).scrollTop() + 200
        ) {
            $('#contact-link')
                .parent('li')
                .addClass('active')
                .siblings('li.nav-item')
                .removeClass('active');
        } else if (
            $(window).scrollTop() <=
            $('.projects').offset().top + $('.projects').height() / 1.5 &&
            $(window).scrollTop() >= $('.projects').offset().top
        ) {
            $('#projects-link')
                .parent('li')
                .addClass('active');
            $('#contact-link')
                .parent('li')
                .removeClass('active');
        }
    }

    /**
     * When page scrolls to skills-container section,
     * animate the progress of each skill.
     * When page scrolls away from skills-container,
     * set progress back to 0.
     */
    function animateProgress() {
        /** if window is past skills section */
        /** else if window is above skills section */
        /** else if window is centered on skills section */
        if (
            $(window).scrollTop() >=
            $('.skills-container').offset().top +
            $('.skills-container').height()
        ) {
            $('.progress-ring circle:nth-of-type(2)').removeClass();
        } else if (
            $(window).scrollTop() <=
            $('.bio-wrapper').offset().top - $(window).height() / 2
        ) {
            $('.progress-ring circle:nth-of-type(2)').removeClass();
            // } else if (
            //     $('.skills-container').offset().top -
            //         $(window).height() +
            //         $('.skills-container').height() / 2 <=
            //     $(window).scrollTop()
            // ) {
        } else {
            let animatedClasses = [
                'html-progress-ring',
                'css-progress-ring',
                'javascript-progress-ring',
                'php-progress-ring'
            ];
            $('.progress-ring circle:nth-of-type(2)').each(function (i) {
                $(this).addClass(animatedClasses[i]);
            });
            // $('.skills-container').removeClass('d-none');
            $('.skills-container').addClass('animateFadeIn');
        }
    }

    /**
     * Animate Projects section when scrolled into view
     * (NOT CURRENTLY WORKING AS EXPECTED)
     */
    // function animateProjectsFadeIn() {
    //     if (
    //         $(window).scrollTop() >=
    //         $('.projects').offset().top - $(window).height()
    //     ) {
    //         $('.projects').addClass('animateProjectsFadeIn');
    //     }
    // }

    /**
     * With windowScroll function,
     * call fixNavbar(), activateContactLink(), animateProgress()
     * To help with keeping code more functional
     */
    function windowScroll() {
        // fixNavbar();
        if (window.innerWidth > 768) {
            navbar.fixNavbar();
        } 
        
        activateContactLink();
        animateProgress();
        // animateProjectsFadeIn();
    }

    /**
     * When window is scrolled, Call the windowScroll() function to execute
     */
    $(window).on('scroll', windowScroll);

    // /** Navbar.mobileMenuToggle()
    //  * When 'Hamburger' icon is clicked, add 'rotated' animation class to button,
    //  * that changes 'Hamburger' to a close 'X' icon
    //  */
    // $('.navbar-toggler').click(function () {
    //     $(".navbar-collapse").toggleClass("show");
    //     $('.navbar-toggler-icon').toggleClass('rotated');
    // });

    // /**
    //  * Navbar.mobileMenuLink()
    //  */
    // $('.navbar-collapse li a').click(function () {
    //     if (window.innerWidth < 768) {
    //         $('.navbar-collapse').toggleClass('show');
    //         $('.navbar-toggler-icon').toggleClass('rotated');
    //     }
    // });

    // /** Navbar.activeLink()
    //  * When 'Nav' links are clicked, add to the parent 'li - list item' class 'active'
    //  */
    // $('a.nav-link').click(function () {
    //     $(this)
    //         .parent('li')
    //         .siblings('li')
    //         .removeClass('active');
    //     $(this)
    //         .parent('li')
    //         .addClass('active');
    // });

    /**
     * Add smooth scroll affect to page when 'Nav' links are clicked,
     * so that the page smoothly scrolls to referenced element in page
     */
    $('.nav-item a, footer .top a').bind('click', function (event) {
        // event.preventDefault();
        // var $anchor = $(this);
        // $('html, body')
        //     .stop()
        //     .animate(
        //         {
        //             scrollTop: $($anchor.attr('href')).offset().top
        //         },
        //         1500,
        //         'easeInOutExpo'
        //     );
    });

    /**
     * On click of each project, display an overlay
     */
    $('.project-details').click(function (e) {
        e.preventDefault();
        let projectName = $(this)
            .parents('.project-container')
            .attr('data-project-name');
        $('.overlay#' + projectName)
            .removeClass('d-none')
            .children('.project-model')
            .fadeIn(3000);
    });

    /**
     * On click of close for project-modal-overlay
     */
    $('.close').click(function (e) {
        $('.overlay')
            .addClass('d-none')
            .children('.project-model')
            .fadeOut(3000);
    });
});
