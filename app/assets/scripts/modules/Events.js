import $ from 'jquery';
import {
    navbar,
    navbarLinks,
    navbarMenu,
    mobileNavbarIcon,
    rotatedMobileNavbarIcon} from './Elements';

import {
    // activeLink,
    fixNavbar,
    mobileMenuToggle,
    mobileMenuLink} from './Navbar';

import {
    activeLink,
    addSmoothScrolling,
    animateProgress,
    windowScroll
} from './Scroll';

class Events {
    constructor() {
        this.development();
        this.events();
        fixNavbar();
        addSmoothScrolling();

    }

    events() {
        $(window).on('scroll', windowScroll);
        mobileNavbarIcon.click(mobileMenuToggle);
        navbarLinks.click(mobileMenuLink);
        navbarLinks.click(activeLink);
    }

    /** For Development Purposes */
    development() {
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

