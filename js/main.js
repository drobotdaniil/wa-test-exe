$(document).ready(function () {
    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplaySpeed: 3000
    });
    $('.slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{
            breakpoint: 925,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
    });
});

//end slider scripts

var subMenu1 = document.querySelector("#submenu1");
var subMenu2 = document.querySelector("#submenu2");

var subMenuNav1 = document.querySelector(".submenu-nav1");
var subMenuNav2 = document.querySelector(".submenu-nav2");
var b = [subMenuNav1, subMenuNav2];
var nav = document.querySelector(".nav");

function showSub1(){
    subMenuNav1.classList.toggle("show-block");
}
function showSub2(){
    subMenuNav2.classList.toggle("show-block");
}
function hideSub(){
    for (var i = 0; i < b.length; i++) {
        b[i].classList.remove("show-block");
    }
}


subMenu1.addEventListener("click", showSub1);
subMenu2.addEventListener("click", showSub2);
nav.addEventListener("mouseleave", hideSub);


