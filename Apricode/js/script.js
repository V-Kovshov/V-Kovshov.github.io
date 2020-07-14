
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

function setProgress(index) {
    const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

    $progressBar
        .css('background-size', `${calc}% 100%`)
        .attr('aria-valuenow', calc);

}

const $slider = $('.slider-body');
const $progressBar = $('.progress');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);
});

$slider.slick({
    arrow: true,
    prevArrow: '<div class="slick-btn slick-prev"><img src="img/slider/arrow-left.svg" alt=""></div>',
    nextArrow: '<div class="slick-btn slick-next"><img src="img/slider/arrow-right.svg" alt=""></div>',
    infinite: false,
});

setProgress(0);

$(document).ready(function () {
    $('.admission-slider').slick({
        slidesToShow: 5,
        prevArrow: '<button type="submit" class="admission-prev slick-prev">Назад</button>',
        nextArrow: '<button type="submit" class="admission-next slick-next">Далее</button>',
        infinite: false,
        dots: true,
        adaptiveHeight: true,
    });

    $('.admission-tab__link').click(function (e) {
        e.preventDefault();

        $('.admission-tab__link').removeClass('admission-tab__active');
        $('.admission-slider').removeClass('admission-slider__active');

        $(this).addClass('admission-tab__active');
        $($(this).attr('href')).addClass('admission-slider__active')
    });

    $('.admission-tab__link:first').click();
});