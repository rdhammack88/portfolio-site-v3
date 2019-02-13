import $ from 'jquery';
import {
    // browserWindow,
    navbar,
    navbarLinks,
    navbarMenu,
    mobileNavbarIcon,
    rotatedMobileNavbarIcon} from './Elements';

import {
    fixNavbar,
    mobileMenuToggle,
    mobileMenuLink,
    activeLink} from './Navbar';

import {
    activateContactLink,
    animateProgress,
    windowScroll
} from './Scroll';

class Events {
    constructor() {
        this.development();
        this.events();

    }

    events() {
        window.onscroll = windowScroll;

        mobileNavbarIcon.click(mobileMenuToggle);
        navbarLinks.click(mobileMenuLink);
        navbarLinks.click(activeLink);

        // let scroll = windowScroll(window, fixNavbar,activateContactLink, animateProgress);

        // window.on('scroll', scroll);



        /**
         * Remove top-nav-scroll class from navbar upon page load
         */
        // navbar.removeClass('top-nav-scroll');

        // fixNavbar(navbar);
    }

    /** For Development Purposes */
    development() {
        // if (window.innerWidth > 768) {
            fixNavbar();
        // }

        $(window).on('resize', windowResize);

        function windowResize() {
            // let $navbar = $('.navbar');
            // let $navbarMenu = $('.navbar-collapse');
            // console.log('Resizing the window');
            if (window.innerWidth <= 768) {
                navbar.removeClass('top-nav-scroll');
                navbarMenu.addClass('hide');
            }
            else if (window.innerWidth > 768 && $('.navbar').offset().top > 50) {
                navbar.addClass('top-nav-scroll');
                navbarMenu.removeClass('show hide');
            }
            else if (window.innerWidth > 768) {
                navbarMenu.removeClass('show hide');
            }
        }
    }
    /** End of Development Purposes */

}

export default Events;

