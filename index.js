//Home section animation
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 75;

    if (this.isDeleting) { delta /= 1.5 }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff; color: #F8B195}";
    document.body.appendChild(css);
};

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {

        $('a').each(function() {
            $(this).removeClass('active');
        });

        $(this).addClass('active');
    });
});

$('#home').hover(
    function() {
        $('a').each(function() {
            $(this).removeClass('active');
        });
        $('a[href="#home"]').addClass('active');
    },
    function() { }
);

$('#about').hover(
    function() {
        $('a').each(function() {
            $(this).removeClass('active');
        });
        $('a[href="#about"]').addClass('active');
    },
    function() { }
);

$('#projects').hover(
    function() {
        $('a').each(function() {
            $(this).removeClass('active');
        });
        $('a[href="#projects"]').addClass('active');
    },
    function() { }
);
$('#contact').hover(
    function() {
        $('a').each(function() {
            $(this).removeClass('active');
        });
        $('a[href="#contact"]').addClass('active');
    },
    function() { }
);
