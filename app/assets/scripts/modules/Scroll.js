import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import {
    linkRefs,
    navbar,
    navbarLinks,
    navbarMenu,
    mobileNavbarIcon,
    rotatedMobileNavbarIcon
} from './Elements';
import { fixNavbar } from './Navbar';

function addSmoothScrolling() {
    navbarLinks.smoothScroll();
}

/** Add active to nav link based on section top offset */
function activeLink() {
    $.each(linkRefs, (indx, val) => {
        if ($(window).scrollTop() >= ($(val).offset().top - 300)) {
            $(`${val}-link`)
                .parent('li')
                .addClass('active')
                .siblings('li.nav-item')
                .removeClass('active');
        }
    });
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
        $('.about').offset().top - $(window).height() / 2
    ) {
        $('.progress-ring circle:nth-of-type(2)').removeClass();
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
        // $('.skills-container').addClass('animateFadeIn');
        $('.progress-container').addClass('animateFadeIn');
    }
}




/**
 * With windowScroll function,
 * call fixNavbar(), activateContactLink(), animateProgress()
 * To help with keeping code more functional
 */
function windowScroll() {
    fixNavbar();
    activeLink();
    animateProgress();
    // animateProjectsFadeIn();
}

export {
    activeLink,
    addSmoothScrolling,
    animateProgress,
    windowScroll
};