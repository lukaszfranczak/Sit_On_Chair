window.addEventListener('DOMContentLoaded', function() {

    // Slider

    var elementListImg = document.querySelectorAll('.chair_img');

    var elementButtonPrev = document.querySelector('.arrowLeft');
    var elementButtonNext = document.querySelector('.arrowRight');

    var index = 0;

    elementListImg[index].classList.add('visible');

    elementButtonPrev.addEventListener('click', function() {
        elementListImg[index].classList.remove('visible');
        index--;
        if (index<0) {
            index = elementListImg.length-1;
        }
        elementListImg[index].classList.add('visible');
    });

    elementButtonNext.addEventListener('click', function() {
        elementListImg[index].classList.remove('visible');
        index++;
        if (index>=elementListImg.length) {
            index = 0;
        }
        elementListImg[index].classList.add('visible');
    });


});

$( function() {

    // Drop down w kalkulatorze

    $('.list_arrow').on('click', function() {
        $('.list_panel').hide();
        if ($(this).next().css('display', 'none')) {
            $(this).next().show();
        } else {
            $(this).next().hide();
        }
    });

    var sum = 0;
    var sumType = 0;
    var sumColor = 0;
    var sumPattern = 0;
    var sumTransport = 0;

    // Rodzaj krzesła

    $('.chair_type li').on('click', function() {
        $('h4.title').first().text($(this).text());
        if ($(this).text() == 'Clair') {
            sumType = 100;
        } else if ($(this).text() == 'Margarita') {
            sumType = 200;
        } else if ($(this).text() == 'Selena') {
            sumType = 300;
        }
        sum = sumType + sumColor + sumPattern + sumTransport;
        $('.panel_right').children().eq(0).text(sumType);
        $('.list_panel').hide();
        $('.sum strong').text(sum);
    });

    // Kolor

    $('.chair_color li').on('click', function() {
        $('.color').first().text($(this).text());
        if ($(this).text() == 'Czerwony') {
            sumColor = 50;
        } else if ($(this).text() == 'Czarny') {
            sumColor = 100;
        } else if ($(this).text() == 'Pomarańczowy') {
            sumColor = 150;
        }
        sum = sumType + sumColor + sumPattern + sumTransport;
        $('.panel_right').children().eq(1).text(sumColor);
        $('.list_panel').hide();
        $('.sum strong').text(sum);
    });

    // Tkanina

    $('.chair_pattern li').on('click', function() {
        $('.pattern').first().text($(this).text());
        if ($(this).text() == 'Tkanina') {
            sumPattern = 100;
        } else if ($(this).text() == 'Skóra') {
            sumPattern = 400;
        }
        sum = sumType + sumColor + sumPattern + sumTransport;
        $('.panel_right').children().eq(2).text(sumPattern);
        $('.list_panel').hide();
        $('.sum strong').text(sum);
    });

    // Transport

    $('#transport').change(function() {
        if (this.checked) {
            $('.transport').first().text('Transport');
            sumTransport = $(this).data('transport-price');
            $('.panel_right').children().eq(3).text(sumTransport);
        } else {
            $('.transport').first().text('');
            $('.panel_right').children().eq(3).text('');
            sumTransport = 0;
        };
        sum = sumType + sumColor + sumPattern + sumTransport;
        $('.sum strong').text(sum);
    })

});