let welcomePage = document.querySelector('.welcome-page'),
    contentPage = document.querySelector('.content-page');

document.getElementById('start-btn').onclick = function() {
    welcomePage.style.display = 'none';
    contentPage.style.display = 'block';
}

// $(document).ready(function() {
//     $('.right-side').slick({
//         setting - name: setting - value
//     });
// });

$('.icons-bar').slick({
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 2048,
            settings: "unslick"
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.right-side').slick({
    infinite: false,
    arrows: false,
    speed: 500,
    rows: 3,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 2048,
            settings: "unslick"
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});