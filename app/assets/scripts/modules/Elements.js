import $ from 'jquery';

// this.navbarLinks = $('.navbar-collapse li a');

// const browserWindow = $(window);
// const linkRefs = $('a.nav-link').attr('href');
const navbar = $('.navbar');
const navbarLinks = $('a.nav-link');
const navbarMenu = $('.navbar-collapse');
const mobileNavbarIcon = $('.navbar-toggler');
const rotatedMobileNavbarIcon = $('.navbar-toggler-icon');

let linkRefs = []; // $('a.nav-link').attr('href');
$.each(navbarLinks, function () {
    linkRefs.push($(this).attr('href'));
});

export {
    // browserWindow,
    linkRefs,
    navbar,
    navbarLinks,
    navbarMenu,
    mobileNavbarIcon,
    rotatedMobileNavbarIcon
}