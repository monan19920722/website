//初始化宽高
    !function(){
        for(var i=1;i<=14;i++){
            if(i==4 || i==3){
                continue;
            }
            $(".M_part"+i).css("height",document.documentElement.clientHeight+"px")
        }
        for(var j=1;j<=14;j++){
            $(".M_part"+j).css({
                width:"100%",
                position:"relative",
                top:"100%"
            })
        }
        $(".M_part"+3).css("min-height",document.documentElement.clientHeight+320+"px");
        //$(".M_part"+4).css("min-height",document.documentElement.clientHeight+320+"px");
    }();

//tips点击效果
    var flag_music=0;
    $(".M_music").click(function(){
        if(flag_music==0){
            $(this).find("img").css({
                transform:"translateY(-60px)",
                transition:"all 0.5s"
            });
            flag_music=1;
        }else{
            $(this).find("img").css({
                transform:"translateY(0)",
                transition:"all 0.5s"
            });
            flag_music=0
        }
    });
//鼠标键盘效果
    setInterval(function(){
        $(".M_mouse2").fadeToggle();
        $(".M_key2").fadeToggle();
    },1000);
//第一部分完成
//第二部分开始
    $(".M_P2content").hover(function(){
       $(".M_P2_cross_inner").toggleClass("M_P2_cross_inner2")
    });

    $(".M_P2B_one").click(function(e){
        e.preventDefault();
        $(".M_flyR1").css("right","0");
    });
    $(".M_P2B_two").click(function(e){
        e.preventDefault();
        $(".M_flyR2").css("right","0");
    });
//第二部分完成
//第三部分开始
    $(".M_P3content").hover(function(){
        $(".M_P3_cross_inner").toggleClass("M_P3_cross_inner2")
    });
    $("[class*=son]").hover(function(){
        $(this).find(".M_pic").fadeToggle();
        $(this).find("[class*=M_bm]").css("transform","scale(0)");
        $(this).find("[class*=M_oz]").css("transform","scale(0)");
        $(this).find("[class*=M_yz]").css("transform","scale(0)");
        $(this).find("[class*=M_fz]").css("transform","scale(0)");
        $(this).find("[class*=M_nm]").css("transform","scale(0)");
        $(this).find(".M_tips_bm_txt").css("background","rgb(51,204,255)");
        $(this).find(".M_tips_oz_txt").css("background","rgb(240,72,72)");
        $(this).find(".M_tips_yz_txt").css("background","rgb(124,227,21)");
        $(this).find(".M_tips_fz_txt").css("background","rgb(255,153,51)");
        $(this).find(".M_tips_nm_txt").css("background","rgb(255,204,0)")
    });
    $("[class*=son]").mouseleave(function(){
        $(this).find(".M_tips_bm_txt").css("background","rgba(51,204,255,0.65)");
        $(this).find(".M_tips_oz_txt").css("background","rgba(240,72,72,0.65)");
        $(this).find(".M_tips_yz_txt").css("background","rgba(124,227,21,0.65)");
        $(this).find(".M_tips_fz_txt").css("background","rgba(255,153,51,0.65)");
        $(this).find(".M_tips_nm_txt").css("background","rgba(255,204,0,0.65)");
        $(this).find("[class*=M_bm]").css("transform","scale(1)");
        $(this).find("[class*=M_oz]").css("transform","scale(1)");
        $(this).find("[class*=M_yz]").css("transform","scale(1)");
        $(this).find("[class*=M_fz]").css("transform","scale(1)");
        $(this).find("[class*=M_nm]").css("transform","scale(1)");
    });

//滚动条效果
$(window).scroll(function(){
    console.log($("#M_main>div").index());

    /*$("#M_main>div").each(function(i){
        $(".M_part"+i).css("top",$(".M_part"+i).offset().top-$(window).scrollTop()+"px");
        console.log(1)
    })*/
});
/*var top111=$(".M_part2").offset().top;
var top222=$(".M_part3").offset().top;
$(window).scroll(function(){
        $(".M_part2").css({
            transition:"all 1s linear",
            "top":Math.abs(top111-$(window).scrollTop()/2)+"px"
        });
    $(".M_part3").css({
        transition:"all 1s linear",
        "top":Math.abs(top222-$(window).scrollTop()/2)+"px"
    })
});*/
/*$("#M_main").each(function(i){
    $(".M_part"+i).scroll(function(){
            var next=$(this).next();
            $(this).next().css("top",next.offsetTop-next.scrollTop+"px")
            console.log(1)
        }
    )
});*/

