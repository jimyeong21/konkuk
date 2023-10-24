$( document ).ready( function() {

  let marginTit = $(".main-related .m-tit-wrap").offset().left;
  $(".main-program").css("padding-left",marginTit);

  $( window ).resize( function() {
    let marginTit = $(".main-related .m-tit-wrap").offset().left;
    $(".main-program").css("padding-left",marginTit);
  });
});

$(".user-menu > a").on("mouseenter",function(){
  $(this).addClass("open");
  setTimeout("userMenu()",300)
})
$(".user-menu > a").on("mouseleave",function(){
  $(this).removeClass("open")
  $(".user-depth01").fadeOut();
})

$(".user-depth01 > li").on("click",function(){
  $(".user-depth01 > li").removeClass("on");
  $(this).addClass("on");
})

function userMenu() {
  $(".user-depth01").fadeIn();
}