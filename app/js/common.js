$(function() {

	// Custom JS

    //menu
    $('.mobile-menu').hide();

    $('.mobail-btn').click(function () {
        $(this).toggleClass('active');
        $('.mobile-menu').slideToggle(250);
    });

    //menu widget catecory
    $('.menu-item-has-children').click(function () {
       $(this).toggleClass('js-item-has-children-active');
       $(this).children('.sub-menu').slideToggle(200);
    });


    //checkbox
    var $checkbox = $('input[type=checkbox]');
    $checkbox.css("opacity", "0");
    $checkbox.wrap("<div class='checkbox-wrap'></div>");
    $checkbox.before("<div class='checkbox'></div>");
    $checkbox.click(function(){

        var bbb = $(this).parent().find('.checkbox-checked-base');
        if( bbb.length ){
            $(this).parent().find('.checkbox').removeClass('checkbox-checked-base');
        } else{
            $(this).parent().find('.checkbox').addClass('checkbox-checked-base');
        }
    });

    var $checkboxFiltr = $('.wrap-filter-check, .wrap-check-disability').find('input[type=checkbox]');
    $checkboxFiltr.css("opacity", "0");
    $checkboxFiltr.wrap("<div class='checkbox-wrap'></div>");
    $checkboxFiltr.before("<div class='checkbox'></div>");
    $checkboxFiltr.click(function(){

        var bbb = $(this).parent().find('.checkbox-checked');
        if( bbb.length ){
            $(this).parent().find('.checkbox').removeClass('checkbox-checked');
        } else{
            $(this).parent().find('.checkbox').addClass('checkbox-checked');
        }
    });



    // hide #back-top first
    $(".scrolltop").hide();

    // fade in #back-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.scrolltop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });



});
