import $ from 'jquery';
import {
    // browserWindow,
    navbar,
    navbarLinks,
    navbarMenu,
    mobileNavbarIcon,
    rotatedMobileNavbarIcon
} from './Elements';

/**
 * When window is scrolled past the top 50px, 
 * add class to navbar that changes nav colors
 */
function fixNavbar() {
    // console.log('Fixed Navbar');
    // console.log(window.innerWidth);
    if (window.innerWidth > 768) {
        if (navbar.offset().top > 50) { //} && window.innerWidth > 768) {
            // console.log('Scrolled past the top 50px');
            navbar.addClass('top-nav-scroll');
        } else {
            // console.log('Top of screen');
            navbar.removeClass('top-nav-scroll');
        }
        // console.log('Fixed Navbar After Offset');
    }
    // console.log('Fixed Navbar After Inner Width');    
}

/**
 * When 'Hamburger' icon is clicked, 
 * add 'rotated' animation class to button,
 * that changes 'Hamburger' to a close 'X' icon
 */
function mobileMenuToggle() {
    console.log('Mobile Menu Toggle');
    navbarMenu.toggleClass('show');
    navbarMenu.toggleClass('hide');
    rotatedMobileNavbarIcon.toggleClass('rotated');
}

/**
* When a mobile nav link is clicked, close the nav
*/
function mobileMenuLink() {
    console.log("Mobile Menu Link Clicked");
    if (window.innerWidth < 768) {
        mobileMenuToggle();
        // this.navbarMenu.toggleClass('show');
        // this.rotatedMobileNavbarIcon.toggleClass('rotated');
    }
}

/**
 * When 'Nav' links are clicked, add to the parent 'li - list item' class 'active'
 */
function activeLink() {
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


export {
    fixNavbar,
    mobileMenuToggle,
    mobileMenuLink,
    activeLink
}