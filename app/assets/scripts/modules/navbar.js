import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class Navbar {
    constructor() {
        this.navbar = $('.navbar');
        this.navbarMenu = $('.navbar-collapse');
        // this.navbarLinks = $('.navbar-collapse li a');
        this.navbarLinks = $('a.nav-link');
        this.mobileNavbarIcon = $('.navbar-toggler');
        this.rotatedMobileNavbarIcon = $('.navbar-toggler-icon');


        /**
         * Remove top-nav-scroll class from navbar upon page load
         */
        // $('.fixed-top').removeClass('top-nav-scroll');
        this.navbar.removeClass('top-nav-scroll');

        this.events();
    }

    events() {
        this.mobileNavbarIcon.click(this.mobileMenuToggle.bind(this));
        this.navbarLinks.click(this.mobileMenuLink.bind(this));

        this.navbarLinks.click(this.activeLink);
    }

    addSmoothScrolling() {
        this.navbarLinks.smoothScroll();
    }

    /**
     * When 'Hamburger' icon is clicked, 
     * add 'rotated' animation class to button,
     * that changes 'Hamburger' to a close 'X' icon
     */
    mobileMenuToggle() {
        console.log('Mobile Menu Toggle');
        this.navbarMenu.toggleClass('show');
        this.navbarMenu.toggleClass('hide');
        this.rotatedMobileNavbarIcon.toggleClass('rotated');
    }

    /**
    * When a mobile nav link is clicked, close the nav
    */
    mobileMenuLink() {
        console.log("Mobile Menu Link Clicked");
        if (window.innerWidth < 768) {
            this.mobileMenuToggle();
            // this.navbarMenu.toggleClass('show');
            // this.rotatedMobileNavbarIcon.toggleClass('rotated');
        }
    }

    /**
     * When window is scrolled past the top 50px, 
     * add class to navbar that changes nav colors
     */
    fixNavbar() {
        console.log('Fixed Navbar');
        if (this.navbar.offset().top > 50) {
            this.navbar.addClass('top-nav-scroll');
        } else {
            this.navbar.removeClass('top-nav-scroll');
        }
    }

    /**
     * When 'Nav' links are clicked, add to the parent 'li - list item' class 'active'
     */
    activeLink() {
        console.log($(this).parent('li')
            .siblings('li')); //.children());
        console.log(`${$(this).parent('li').attr('classList')} link is active`);
        $(this)
            .parent('li')
            .siblings('li')
            .removeClass('active');
        $(this)
            .parent('li')
            .addClass('active');
    }
}

export default Navbar;


// /**
//      * When 'Hamburger' icon is clicked, add 'rotated' animation class to button,
//      * that changes 'Hamburger' to a close 'X' icon
//      */
// $('.navbar-toggler').click(function () {
//     $(".navbar-collapse").toggleClass("show");
//     $('.navbar-toggler-icon').toggleClass('rotated');
// });

// /**
//  *
//  */
// $('.navbar-collapse li a').click(function () {
//     if (window.innerWidth < 768) {
//         $('.navbar-collapse').toggleClass('show');
//         $('.navbar-toggler-icon').toggleClass('rotated');
//     }
// });