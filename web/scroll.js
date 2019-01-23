$(document).ready(function() {
    var container = $("#container");
    var lists = $(".lists");
    var span = $("span");
    var width = $(window).width();
    $(".list").css("width", width+"px");
    lists.css("left", "-"+width+"px");
    var index = 1;
    var x1, x2;
    var flag;
    var timer;
    lists.bind('touchstart', function(e) {
        x1 = event.changedTouches[0].clientX;
    });
    lists.bind('touchend', function(e) {
        x2 = event.changedTouches[0].clientX;
        flag = x2 - x1;
        console.log(flag);
        if (flag < 0) {
            if (index > 4) {
                index = 1;
            } else {
                index += 1;
            }
            showbutton();
            animate(-width);
        } else {
            if (index == 1) {
                index = 4;
            } else {
                index -= 1;
            }
            showbutton();
            animate(width);
        }
    });

    function animate(offset) {
        var leftvalue = parseInt(lists.css("left")) + offset;
        lists.animate({
            left: leftvalue + 'px'
        },300,function(){
            if (leftvalue > (-width)) {
                lists.animate({
                    left: (-width)*4 + 'px'
                });
            }
            if (leftvalue < (-width)*4) {
                lists.animate({
                    left: (-width) + 'px'
                });
            }
        });
    }

    function showbutton() {
        for (var i = 0; i < span.length; i++) {
            if (span[i].className == 'on') {
                span[i].className = '';
                break;
            }
        }
        span[index - 1].className = 'on';

    }

    function play() {
        timer = setInterval(function() {
            if (index >=4 ) {
                index = 1;
            } else {
                index += 1;
            }
            showbutton();
            animate(-width);
        }, 3000)
    }
    function stop() {
        clearTimeout(timer);
    }
    span.click(function() {
        var value = $(this).attr("index");
        $("span").removeClass("on");
        $(this).addClass("on");
        carousal(value, width);
    })

    function carousal(value, width) {
        var leftvalue = -(width * value);
        lists.animate({
            left: leftvalue + "px"
        });
    }

    container.hover(stop, play);

    play();


})