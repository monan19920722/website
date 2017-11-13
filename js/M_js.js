//初始化宽高
!function(){
    for(var i=1;i<=14;i++){
        if(i==4){
            continue;
        }
        $(".M_part"+i).css("height",document.documentElement.clientHeight+"px")
    }
    for(var j=1;j<=14;j++){
        $(".M_part"+j).css({
            width:"100%",
            position:"absolute",
            top:(j-1)*document.documentElement.clientHeight+"px",
            zIndex:j
        })

    }
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
//滚动条效果
/*$(window).scroll(function(){
    $("#M_main>div").each(function(i){
        $(".M_part"+i).css("top",$(".M_part"+i).offset().top-$(window).scrollTop()+"px");
        console.log(1)
    })
});*/
var top111=$(".M_part2").offset().top;
var top222=$(".M_part3").offset().top;
$(window).scroll(function(){
        $(".M_part2").css({
            transition:"all 1s",
            "top":Math.abs(top111-$(window).scrollTop())+"px"
        });
    $(".M_part3").css({
        transition:"all 1s",
        "top":Math.abs(top222-$(window).scrollTop())+"px"
    })
});
/*$("#M_main").each(function(i){
    $(".M_part"+i).scroll(function(){
            var next=$(this).next();
            $(this).next().css("top",next.offsetTop-next.scrollTop+"px")
            console.log(1)
        }
    )
});*/

