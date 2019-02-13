import $ from 'jquery';

const navbar = $('.navbar');
const navbarLinks = $('a.nav-link');
const navbarMenu = $('.navbar-collapse');
const mobileNavbarIcon = $('.navbar-toggler');
const rotatedMobileNavbarIcon = $('.navbar-toggler-icon');

const linkRefs = [];
$.each(navbarLinks, function () {
    linkRefs.push($(this).attr('href'));
});

export {
    linkRefs,
    navbar,
    navbarLinks,
    navbarMenu,
    mobileNavbarIcon,
    rotatedMobileNavbarIcon
};