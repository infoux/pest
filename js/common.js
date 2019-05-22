$(document).ready(function() {

    // gnb

    function clear() {
        $("#header nav").removeAttr("style");
        $("#header nav").removeClass("on");
    }


    function modeChange() {
        var windowWidth = $(window).width();



        if (windowWidth < 1199) {
            /* mobile */
            $("body").addClass("mobile");
            $("body").removeClass("pc");
			$(".spot_wrap").css("display", "none");







            /* e:mobile */

        } else {
            /* pc */
            $("body").addClass("pc");
            $("body").removeClass("mobile");
			$(".spot_wrap").css("display", "block");





            /* e:pc */
        }
    }




    modeChange();

    $(window).resize(function() {
        modeChange();
        clear();
    });




    $(".mobile #header .mobile_menu").click(function() {
        if ($(".mobile #header nav").hasClass("on")) {
            $(".mobile #header nav").removeClass("on");
            $(".mobile #header nav").removeAttr("style");
        } else {
            $(".mobile #header nav").addClass("on");
            $(".mobile #header nav").css("height", $(document).height())
        }

    });

    $(".mobile #header nav h2 a").click(function(e) {
        e.preventDefault();

        $("#header nav ul.gnb>li").removeClass("on");
        $(this).parent().parent().addClass("on");
    });

    /* pc */

    $(".pc #header nav h2 a").click(function() {
        window.location = this.href;
    });



    $(".pc #header nav ul.gnb").hover(function() {
        $(this).parent().parent().addClass("on");
    }, function() {
        $(this).parent().parent().removeClass("on");
    });


    $(".pc #header nav h2 a").hover(function() {
        $(this).parent().parent().find("ul").addClass("on");
    }, function() {
        $(".pc #header nav ul ul").removeClass("on");
    });

    $(".pc #header nav ul ul").hover(function() {
        $(this).addClass("on");
    }, function() {
        $(".pc #header nav ul ul").removeClass("on");
    });


    // tabs(main)

    $(".community .container ul.tabs a").click(function() {
        var tabs = $(this).attr("data");
        $(".community .container ul.tabs a").removeClass("active");
        $(this).addClass("active");
        $(".community div.content_wrap").removeClass("active");
        $(".community div #" + tabs).addClass("active");
        return false;
    });

    // map_btn(mobile)

    $(".map_btn a").click(function() {
        var position = $(this).attr("data");
        $("." + position).css("display", "block");
        return false;
    });

    $(".icon-esc").click(function() {
        $(".spot_wrap").css("display", "none");
    });

    $(".spot_wrap a").click(function() {
        return false;
    });


    // crumb

    $(".crumb_menu").hide();

    $(".crumb_btn").click(function() {
        $(this).find(".crumb_menu").slideToggle();
    })

    // img

    $("section.main_visual .main_img").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat top / cover");
    });

    $("section.title_wrap h3").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat top / cover");
    });

    $("ul.gallery_list p").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat top / cover");
    });

    $("ul.photo p").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat top / cover");
    });


    // popup 

    $(".pop").hide();

    $(".info_btn").click(function() {
        $(".Allpopup").css("display", "block");
    });

    $(".Allpopup i").click(function() {
        $(".Allpopup").css("display", "none");
    });

    $(".freezing_info i").click(function() {
        $(".freezing_popup").css("display", "block");
    });

    $(".freezing_popup i").click(function() {
        $(".freezing_popup").css("display", "none");
    });

    $(".tip button").click(function() {
        $(".tip_popup").css("display", "block");
    });

    $(".tip_popup i").click(function() {
        $(".tip_popup").css("display", "none");
    });

    //date

    $(document).ready(function() {

        $('.menu ul').hide();

        $('.menu a').on({
            mouseover: function() {
                $('.menu ul').stop().slideDown(200);
            },
            mouseout: function() {
                $('.menu ul').stop().slideUp(200);
            }
        });

        try {

            $
                .datepicker
                .setDefaults({
                    dateFormat: 'yy-mm-dd',
                    prevText: '이전 달',
                    nextText: '다음 달',
                    monthNames: [
                        '1월',
                        '2월',
                        '3월',
                        '4월',
                        '5월',
                        '6월',
                        '7월',
                        '8월',
                        '9월',
                        '10월',
                        '11월',
                        '12월'
                    ],
                    monthNamesShort: [
                        '1월',
                        '2월',
                        '3월',
                        '4월',
                        '5월',
                        '6월',
                        '7월',
                        '8월',
                        '9월',
                        '10월',
                        '11월',
                        '12월'
                    ],
                    dayNames: [
                        '일',
                        '월',
                        '화',
                        '수',
                        '목',
                        '금',
                        '토'
                    ],
                    dayNamesShort: [
                        '일',
                        '월',
                        '화',
                        '수',
                        '목',
                        '금',
                        '토'
                    ],
                    dayNamesMin: [
                        '일',
                        '월',
                        '화',
                        '수',
                        '목',
                        '금',
                        '토'
                    ],
                    showMonthAfterYear: true,
                    yearSuffix: '년'
                });

            $("#day-start").datepicker();
            $("#day-end").datepicker();
            $("#date").datepicker();


        } catch (e) {};

        // $("#day-month").monthpicker();
        $("div#content .tabs a").click(function() {
            var tabs = $(this).attr("data");
            $("div#content .tabs a").removeClass("active");
            $(this).addClass("active");
            $("div#content div.tab-data").removeClass("active");
            $("div#content div #" + tabs).addClass("active");

        });
    });
});