import $ from 'jquery';
import {
    // browserWindow,
    linkRefs,
    navbar,
    navbarLinks,
    navbarMenu,
    mobileNavbarIcon,
    rotatedMobileNavbarIcon
} from './Elements';
import { fixNavbar } from './Navbar';

/**
 * Since Contact form is NOT full height of window, the scroll to feature doesn't work adding the 'active' class
 * to the parent 'li'
 * This checks the window height to verify if the contact form is in view,
 * and adds the 'active' class to the 'contact-link' parent 'li'
 */
function activateContactLink() {
    // console.log($('#contact').offset().top); // 3586.234375
    // console.log($(window).scrollTop()); // 3438

    // if ($(window).scrollTop() >= ($('#contact').offset().top - 200)) {
    //     $('#contact-link')
    //         .parent('li')
    //         .addClass('active')
    //         .siblings('li.nav-item')
    //         .removeClass('active');
    // }


    // if (
    //     $(document).height() - window.innerHeight <=
    //     window.scrollY + 200
    // ) {
    //     $('#contact-link')
    //         .parent('li')
    //         .addClass('active')
    //         .siblings('li.nav-item')
    //         .removeClass('active');
    // } 



    // else if (
    //     window.scrollY <=
    //     $('.projects').offset().top + $('.projects').height() / 1.5 &&
    //     window.scrollY >= $('.projects').offset().top
    // ) {
    //     $('#projects-link')
    //         .parent('li')
    //         .addClass('active');
    //     $('#contact-link')
    //         .parent('li')
    //         .removeClass('active');
    // }





    // if ($(window).scrollTop() >= ($('#contact').offset().top - 200)) {
    //     $('#contact-link')
    //         .parent('li')
    //         .addClass('active')
    //         .siblings('li.nav-item')
    //         .removeClass('active');
    // }
    // else if (
    //     window.scrollY <=
    //     $('.projects').offset().top + $('.projects').height() / 1.5 &&
    //     window.scrollY >= $('.projects').offset().top
    // ) {
    //     $('#projects-link')
    //         .parent('li')
    //         .addClass('active');
    //     $('#contact-link')
    //         .parent('li')
    //         .removeClass('active');
    // }


    // console.log($(this).attr('href'))
    // let linkRefs = $.each(navbarLinks, () => console.log($(this)) );
    // console.log(linkRefs);

    // activeLink();
}


/** Make it dynamic by creating a list of section elems and find the scrollTop of each */
function activeLink() {
    // console.log(linkRefs);
    $.each(linkRefs, (indx, val) => {
        if ($(window).scrollTop() >= ($(val).offset().top - 300)) {
            $(`${val}-link`)
                .parent('li')
                .addClass('active')
                .siblings('li.nav-item')
                .removeClass('active');
        }
    })
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
        $('.skills-container').addClass('animateFadeIn');
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
    // activateContactLink();
    animateProgress();
    // animateProjectsFadeIn();
}

export {
    activeLink,
    activateContactLink,
    animateProgress,
    windowScroll
};