// Initialize Firebase
var config = {
    apiKey: "AIzaSyB-oxLRM6aEgMYlsbIFxwVxMGXgk_t4XBE",
    authDomain: "qualitymedicalservice.firebaseapp.com",
    databaseURL: "https://qualitymedicalservice.firebaseio.com",
    projectId: "qualitymedicalservice",
    storageBucket: "qualitymedicalservice.appspot.com",
    messagingSenderId: "194142521940",
    appId: "1:194142521940:web:037bf4f483fca1b9ce7bc1",
};
firebase.initializeApp(config);
/*-------- Modulo de Index principal --------*/
angular
    .module("Modulo", ["firebase"])
    .controller("Controller", function(
        $scope,
        $firebaseObject,
        $firebaseArray,
        $filter
    ) {
        console.log("JS cargado");
    });
/**************************/
let nCount = (selector) => {
    $(selector).each(function() {
        $(this).animate({
            Counter: $(this).text(),
        }, {
            // A string or number determining how long the animation will run.
            duration: 4000,
            // A string indicating which easing function to use for the transition.
            easing: "swing",
            /**
             * A function to be called for each animated property of each animated element.
             * This function provides an opportunity to
             *  modify the Tween object to change the value of the property before it is set.
             */
            step: function(value) {
                $(this).text(Math.ceil(value));
            },
        });
    });
};

let a = 0;
$(window).scroll(function() {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect > h1");
    }
});

/**************************nosotros*********************************************************************/
var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
    if (click) {
        if (curpage == 1) curpage = 5;
        console.log("woek");
        sliding = true;
        curpage--;
        svg = true;
        click = false;
        for (k = 1; k <= 4; k++) {
            var a1 = document.getElementById(pagePrefix + k);
            a1.className += " tran";
        }
        setTimeout(() => {
            move();
        }, 200);
        setTimeout(() => {
            for (k = 1; k <= 4; k++) {
                var a1 = document.getElementById(pagePrefix + k);
                a1.classList.remove("tran");
            }
        }, 1400);
    }
}

function rightSlide() {
    if (click) {
        if (curpage == 4) curpage = 0;
        console.log("woek");
        sliding = true;
        curpage++;
        svg = false;
        click = false;
        for (k = 1; k <= 4; k++) {
            var a1 = document.getElementById(pagePrefix + k);
            a1.className += " tran";
        }
        setTimeout(() => {
            move();
        }, 200);
        setTimeout(() => {
            for (k = 1; k <= 4; k++) {
                var a1 = document.getElementById(pagePrefix + k);
                a1.classList.remove("tran");
            }
        }, 1400);
    }
}

function move() {
    if (sliding) {
        sliding = false;
        if (svg) {
            for (j = 1; j <= 9; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", transitionPrefix + j + " streak");
                console.log("streak");
            }
        } else {
            for (j = 10; j <= 18; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", transitionPrefix + j + " streak");
                console.log("streak");
            }
        }
        setTimeout(() => {
            for (i = 1; i <= 4; i++) {
                if (i == curpage) {
                    var a = document.getElementById(pagePrefix + i);
                    a.className += " up1";
                } else {
                    var b = document.getElementById(pagePrefix + i);
                    b.classList.remove("up1");
                }
            }
            sliding = true;
        }, 600);
        setTimeout(() => {
            click = true;
        }, 1700);

        setTimeout(() => {
            if (svg) {
                for (j = 1; j <= 9; j++) {
                    var c = document.getElementById(transitionPrefix + j);
                    c.classList.remove("streak");
                    c.setAttribute("class", transitionPrefix + j + " steap");
                }
            } else {
                for (j = 10; j <= 18; j++) {
                    var c = document.getElementById(transitionPrefix + j);
                    c.classList.remove("streak");
                    c.setAttribute("class", transitionPrefix + j + " steap");
                }
                sliding = true;
            }
        }, 850);
        setTimeout(() => {
            click = true;
        }, 1700);
    }
}

left.onmousedown = () => {
    leftSlide();
};

right.onmousedown = () => {
    rightSlide();
};

document.onkeydown = (e) => {
    if (e.keyCode == 37) {
        leftSlide();
    } else if (e.keyCode == 39) {
        rightSlide();
    }
};
/***********contador****************************** */
$(document).ready(function() {
    //Events that reset and restart the timer animation when the slides change
    $("#transition-timer-carousel")
        .on("slide.bs.carousel", function(event) {
            //The animate class gets removed so that it jumps straight back to 0%
            $(".transition-timer-carousel-progress-bar", this)
                .removeClass("animate")
                .css("width", "0%");
        })
        .on("slid.bs.carousel", function(event) {
            //The slide transition finished, so re-add the animate class so that
            //the timer bar takes time to fill up
            $(".transition-timer-carousel-progress-bar", this)
                .addClass("animate")
                .css("width", "100%");
        });

    //Kick off the initial slide animation when the document is ready
    $(
        ".transition-timer-carousel-progress-bar",
        "#transition-timer-carousel"
    ).css("width", "100%");
});
/**************************************************** */