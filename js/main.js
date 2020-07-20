let welcomePage = document.querySelector('.welcome-page'),
    contentPage = document.querySelector('.content-page');

document.getElementById('start-btn').onclick = function() {
    welcomePage.style.display = 'none';
    contentPage.style.display = 'block';
}

/* Clock & Date Widget */

function calculateDateHeader() {
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
    ];
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    document.getElementById('date').innerHTML = (now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + " &nbsp; " + dayNames[now.getDay()] + " " + monthNames[now.getMonth()] + " " + now.getDate());
    setTimeout("calculateDateHeader()", 100);
}

function calculateDateContent() {
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    document.querySelector('.content-time').innerHTML = now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + "<br>";
    document.querySelector('.content-date').innerHTML = dayNames[now.getDay()] + ", " + monthNames[now.getMonth()] +
        " " + now.getDate();
    setTimeout("calculateDateContent()", 100)
}

/* Slider */
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



//Draggable Window (p.s: spizjeno)
dragElement(document.querySelector((".personalize-container")));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.querySelector('.personalize-toolbar')) {

        /* if present, the header is where you move the DIV from:*/
        document.querySelector('.personalize-toolbar').onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

/* About Me Window */
document.getElementById('about-me').addEventListener('click', function() {
    document.querySelector('.personalize-container').style.display = "block";
});

document.getElementById('btn-close').addEventListener('click', function() {
    document.querySelector('.personalize-container').style.display = "none";
});