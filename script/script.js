$(document).ready(function(){

$('.slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
});

$('input#datepicker').datepicker({});

$('.timepicker').timepicker({});

$('input[type="tel"]').mask('+0 (000) 00 00 000');
});