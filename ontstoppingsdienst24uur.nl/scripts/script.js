$(document).on('ready', function () {
    $('.slider').slick({
        dots: true,
        nextArrow: $(".fas.fa-chevron-right"),
        prevArrow: $(".fas.fa-chevron-left"),
        infinite: this,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'block') ? 'none' : 'block';
}

foo.onclick = function() {
    this.classList.toggle('rotate')
}

foo1.onclick = function() {
    this.classList.toggle('rotate')
}

foo2.onclick = function() {
    this.classList.toggle('rotate')
}

foo3.onclick = function() {
    this.classList.toggle('rotate')
}

