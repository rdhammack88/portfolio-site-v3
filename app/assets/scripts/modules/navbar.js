import $ from 'jquery';

class Navbar {
    constructor() {
        this.mobileNavbar = $('.navbar-collapse');
        this.mobileNavbarLinks = $('.navbar-collapse li a');
        this.navbarIcon = $('.navbar-toggler');
        this.rotatedNavbarIcon = $('.navbar-toggler-icon');

        this.navbar = $('.navbar');

        /**
         * Remove top-nav-scroll class from navbar upon page load
         */
        // this.navbar.removeClass('top-nav-scroll');

        this.events();
    }

    events() {
        this.navbarIcon.click(this.mobileMenuToggle.bind(this));
        this.mobileNavbarLinks.click(this.mobilMenuLink.bind(this));
    }

    /**
     * When 'Hamburger' icon is clicked, 
     * add 'rotated' animation class to button,
     * that changes 'Hamburger' to a close 'X' icon
     */
    mobileMenuToggle() {
        console.log('Mobile Menu Toggle');
        this.mobileNavbar.toggleClass('show');
        this.rotatedNavbarIcon.toggleClass('rotated');
    }

    /**
    * When a mobile nav link is clicked, close the nav
    */
    mobilMenuLink() {
        console.log("Mobile Menu Link Clicked");
        if (window.innerWidth < 768) {
            this.mobileNavbar.toggleClass('show');
            this.rotatedNavbarIcon.toggleClass('rotated');
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