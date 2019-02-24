/** App.js */

import $ from 'jquery';
import Events from './modules/Events';

$(document).ready(function () {
    let events = new Events();
    safariCheck();

    document.addEventListener('lazybeforeunveil', function(e) {
        let bg = e.target.getAttribute('data-bg');
        // let bgColor = e.target.getAttribute('data-bg-color');
        // let bgColor = "linear-gradient(to right bottom,rgba(#111, 0.8),rgba(#111, 0.6))";
        let black = '#111';
        if(bg) {
            // e.target.style.backgroundImage = `${bgColor} url(${bg})`;
            $(e.target).css({
                // "background-image": `linear-gradient(to right bottom,rgba(33, 23, 88, .5), rgba(88, 22, 173, .3)), url(${bg})`
                "background-image": `linear-gradient(to right bottom,rgba(11,11,11, .5), rgba(11,11,11, .3)), url(${bg})`
                // "background-image": `linear-gradient(to right bottom,rgba(${black}, 0.8),rgba(${black}, 0.6)), url(${bg})`, //${bgColor} 
                // "backgroundImage": `url(${bgColor})` //${bgColor} 
            })
        }
    });

    function safariCheck() {
        let safari = ((navigator.userAgent.indexOf("AppleWebKit") > -1) && (navigator.userAgent.indexOf('Chrome') < 0)) ? true : false;

        if(safari) {
            $('.skills').css({
                'background-image': 'none',
                'background-position': 'right center',
                'background-image': 'linear-gradient(to right bottom,rgba(0,0,0,.7), rgba(0,0,0,.7)), url(../../../assets/images/backgrounds/mountain-5.jpg) !important',
                // 'background': 'red'
            }).removeClass('lazyload').addClass('lazyload');
        }
    }
});

