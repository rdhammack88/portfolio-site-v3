/** Events.js */
import $ from 'jquery';

/** Import Element Variables */
import {
    $navbar,
    $navbarLinks,
    $navbarMenu,
    $mobileNavbarIcon} from './Elements';

/** Import Functions from Navbar */
import {
    // activeLink,
    fixNavbar,
    mobileMenuToggle,
    mobileMenuLink} from './Navbar';

/** Import Functions from Scroll */
import {
    activeLink,
    addSmoothScrolling,
    windowScroll
} from './Scroll';

class Events {
    /** On Init */
    constructor() {
        this.development();
        this.events();
        fixNavbar();
        addSmoothScrolling();
    }

    /** Add event listeners on events */
    events() {
        $(window).on('scroll', windowScroll);
        $mobileNavbarIcon.click(mobileMenuToggle);
        $navbarLinks.click(mobileMenuLink);
        $navbarLinks.click(activeLink);
    }

    /** For Development Purposes */
    development() {
        $(window).on('resize', windowResize);

        function windowResize() {
            if (window.innerWidth <= 768) {
                $navbar.removeClass('top-nav-scroll');
                $navbarMenu.addClass('hide');
            }
            else if (window.innerWidth > 768 && $navbar.offset().top > 50) {
                $navbar.addClass('top-nav-scroll');
                $navbarMenu.removeClass('show hide');
            }
            else if (window.innerWidth > 768) {
                $navbarMenu.removeClass('show hide');
            }
        }
    }
    /** End of Development Purposes */

}

export default Events;

