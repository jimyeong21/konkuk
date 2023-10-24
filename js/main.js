$( document ).ready( function() {

  let marginTit = $(".main-related .m-tit-wrap").offset().left;
  $(".main-program").css("padding-left",marginTit);

  $( window ).resize( function() {
    let marginTit = $(".main-related .m-tit-wrap").offset().left;
    $(".main-program").css("padding-left",marginTit);
  });
});

$(".user-menu > a").on("mouseenter",function(){
  $(this).stop().addClass("open");
  $(".user-depth01").stop().fadeIn();
})
$(".user-menu").on("mouseleave",function(){
  $(".user-menu > a").stop().removeClass("open")
  $(".user-depth01").stop().fadeOut();
})

$(".user-depth01 > li").on("click",function(){
  $(".user-depth01 > li").removeClass("on");
  $(this).addClass("on");
})
