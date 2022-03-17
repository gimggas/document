$(function(){
/////////////////////////////

// topBanner : kim 2022.03.17 m

function topbannerHandler() {
    // $('.topBanner').hide(); //display:none;
    $('.topBanner').slideUp();
}
$('.topBanner .container i').on('click' ,  topbannerHandler)


$('.visualSlide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed: 3000,
    dots:true,
});




















//////////////////////////////
})