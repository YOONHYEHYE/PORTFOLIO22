$(function(){
//------------------------


$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false

});

$('.main_slider figure').eq(1).addClass('on');

$('.main_slider').on('afterChange', function(e,s,c){
    $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
});

$('#visual .btn .xi-angle-left-thin').on('click', function(){
    $('.main_slider').slick('slickPrev');
});
$('#visual .btn .xi-angle-right-thin').on('click', function(){
    $('.main_slider').slick('slickNext');
});

$('.pic').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('.slider').slick({
    slidesToShow:6,
    autoplay:true,
    arrows:false,

});

$('#pr_slider .arrows i.xi-arrow-left').on('click',function(){
    $('.slider').slick('slickPrev');
});
$('#pr_slider .arrows i.xi-arrow-right').on('click',function(){
    $('.slider').slick('slickNext');
});


$('.toTop i').on('click',function(){
    $('html, body').animate({scrollTop:0},600)
});

$(window).on('scroll',function(){
    var sct=$(window).scrollTop();
    sct>400 ? $('.toTop').fadeIn() : $('.toTop').fadeOut(); 
    sct > 70 ? $('#header').addClass('on') : $('#header').removeClass('on');
    
});

//------------------------
});