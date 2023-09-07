
let marginTit = $(".main-related .m-tit-wrap").offset().left;
$(".main-program").css("padding-left",marginTit);

$(".user-menu").on("mouseenter",function(){
  $(this).addClass("open");
	setTimeout("menuOpen()", 100); 
})
$(".user-menu").on("mouseleave",function(){
  $(this).removeClass("open")
  $(".user-depth01").fadeOut()
})

$(".user-depth01 > li").on("click",function(){
  $(".user-depth01 > li").removeClass("on");
  $(this).addClass("on");
})


function menuOpen() {
  $(".user-depth01").fadeIn(300)
}