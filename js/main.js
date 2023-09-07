
let marginTit = $(".main-related .m-tit-wrap").offset().left;
$(".main-program").css("padding-left",marginTit);

$(".user-menu").on("mouseenter",function(){
  $(this).addClass("open");
  $(".user-depth01").addClass("on")
})
$(".user-menu").on("mouseleave",function(){
  $(this).removeClass("open")
})