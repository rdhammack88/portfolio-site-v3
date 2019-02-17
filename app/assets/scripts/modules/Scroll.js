/** Scroll.js */
import $ from 'jquery';
import {smoothScroll} from 'jquery-smooth-scroll';

/** Import Element Variables */
import {
    $linkRefs,
    $navbarLinks,
    $skillsSection,
    $skillsProgressRing
} from './Elements';
import { fixNavbar } from './Navbar';

/**
 * When 'Nav' links are clicked, smooth scroll to that section
 */
function addSmoothScrolling() {
    $navbarLinks.smoothScroll();
}

/** Add active to nav link based on section top offset */
function activeLink() {
    $.each($linkRefs, (indx, val) => {
        if ($(window).scrollTop() >= ($(val).offset().top - 500)) {
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
    // console.log('Should Be Animating!');
    
    if ( /** if window is past skills section */
        $(window).scrollTop() >=
        $skillsSection.offset().top +
        $skillsSection.height()
    ) {
        $skillsProgressRing.removeClass();
        // console.log('Should Be Below Skills!');
    } else if ( /** else if window is above skills section */
        $(window).scrollTop() <=
        $('.about').offset().top - $(window).height() / 2
    ) {
        $skillsProgressRing.removeClass();
        // console.log('Should Be Above Skills!');
    } else { /** else if window is centered on skills section */
        let animatedClasses = [
            'html-skills-progress__ring',
            'css-skills-progress__ring',
            'javascript-skills-progress__ring',
            'node-skills-progress__ring',
            'php-skills-progress__ring'
        ];

        $('.skills-progress-container').addClass('animateFadeIn');
        // console.log('Should Be Animating NOW!!!!!!!');


        $skillsProgressRing.each(function (i) {
            $(this).addClass(animatedClasses[i]);

            let IE = (navigator.userAgent.indexOf("Trident/7.0") > -1) ? true : false;
            // console.log(IE);
            if (IE) {
                $(this).css({'stroke-dashoffset': '240', 'stroke-dasharray': '250'});
            }
        });

        


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
}

export {
    activeLink,
    addSmoothScrolling,
    animateProgress,
    windowScroll
};