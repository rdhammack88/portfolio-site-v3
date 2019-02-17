/** Elements.js */
import $ from 'jquery';

/** Query of all reused elements */
const $navbar = $('.navbar');
const $navbarLinks = $('a.nav-link');
const $navbarMenu = $('.navbar-collapse');
const $mobileNavbarIcon = $('.navbar-toggler');
const $rotatedMobileNavbarIcon = $('.navbar-toggler-icon');

const $skillsSection = $('.skills');
const $skillsProgressRing = $('.skills-progress__ring circle:nth-of-type(2)');

const $linkRefs = [];
$.each($navbarLinks, function () {
    $linkRefs.push($(this).attr('href'));
});

export {
    $linkRefs,
    $navbar,
    $navbarLinks,
    $navbarMenu,
    $mobileNavbarIcon,
    $rotatedMobileNavbarIcon,
    $skillsSection,
    $skillsProgressRing
};