$(function(){
    //////////////////////////////////
    
    // topBannner : kim 2022.03.17 수정
 
    function topBannerHandler1() {
        // $('.topBannner').hide(); //display:none;
        $('.topBannner1').slideUp();
    }
    $('.topBannner1 .container1 i').on('click', topBannerHandler1);
    // topBannner : kim 2022.03.17 수정
    


    function topBannerHandler() {
        // $('.topBannner').hide(); //display:none;
        $('.topBannner').slideUp();
    }
    $('.topBannner .container i').on('click', topBannerHandler);
    // topBannner : kim 2022.03.17 수정
    








    
    // visualSlide : kim 2022.03.17 수정
    $('.visualSlide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '    <div class="msLeft"></div>      ',
        nextArrow: '    <div class="msRight"></div>      '
    });
    
    
    // 슬라이드에 애니메이션...
    
    
     // visualSlide : kim 2022.03.17 수정
     $('.visualSlide figure').eq(1).addClass('oo');
     $('.visualSlide').on('afterChange', function (e,s,c){
         $('.visualSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
         if (c===1) {
             $('.msLeft').addClass('oo')
         } else {
             $('.msLeft').removeClass('oo')
         }
     });








     //



    $('.eProductSlide').slick({
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 1000,
    });
    
    
    $('.evenetProduct i:nth-of-type(1)').on('click', function(){
        $('.eProductSlide').slick('slickPause')
    });
    
    $('.evenetProduct i:nth-of-type(2)').on('click', function(){
        $('.eProductSlide').slick('slickPlay')
    });
    
    
    //
    





    $('.aproductSlide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });
    
    $('.allProduct i:first-child').on('click', function(){
        $('.aproductSlide').slick('slickPrev')
    });
    
    $('.allProduct i:last-child').on('click', function(){
        $('.aproductSlide').slick('slickNext')
    });
    
    







    // 유튜브 플레이어 ytplayer

    $("#bgndVideo").YTPlayer({
        videoURL:'9lEaF0zYNS8',
        containment:'.movieBg',
        autoPlay:true,
        mute:true,
        startAt:0, 
        opacity:1,
        showControls: false,
        playOnlyIfVisible : true,
    });
    
    $('.movieBg i:first-child').on('click', function(){
        $("#bgndVideo").YTPPause();
    });

    $('.movieBg i:last-child').on('click', function(){
        $("#bgndVideo").YTPPlay();
    });














    //
    var a = 1+1;
    var b = "1" + "1" ;
    var c = 1 + "1" ;


    $('.tabMenu li').on('click', function(){
        var idx = $(this).index();
        $(this).addClass('oo').siblings().removeClass('oo');
        $('.tabContent>div').eq(idx).addClass('oo').siblings().removeClass('oo');
    
    });
    //







    //
    $('.container>div').eq(1).addClass('oo');
     $('.container').on('afterChange', function (e,s,c){
         $('.container>div').eq(c+1).addClass('oo').siblings().removeClass('oo');
         if (c===1) {
             $('.msLeft').addClass('oo')
         } else {
             $('.msLeft').removeClass('oo')
         }
     });

     

     $('.customerArea .container>div').eq(1).addClass('oo');
     $('.container>div').on('afterChange', function (e,s,c){
         $('.customerArea .container>div').eq(c+1).addClass('oo').siblings().removeClass('oo');
        
     });
     //


    
    
    
    
    
     // link
     
    $('#link').on('change', function() {
        let linkSite = $(this).val();
        if (!linkSite) return;
        window.open(linkSite)
    });

        //








   //
    $('.popup01 button').on('click', function(){
        $(this).parent().parent().hide();{
        }
        
    });
    //




    function topBannerHandler2() {
        // $('.topBannner').hide(); //display:none;
        $('.popup01').hide();
    }
    $('.popup01 .notice-button i').on('click', topBannerHandler2);
    // topBannner : kim 2022.03.17 수정




    


    $('.toTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 10000);
        return false;
    })




    $(window).on('scroll', function() {
        let sct = $(window).scrollTop();
        console.log(sct);
        if(sct > 500) {
            $('.toTop').fadeIn(1000);
        } else {
            $('.toTop').fadeOut(1000);
        }
    })











    
    //////////////////////////////////
    })

