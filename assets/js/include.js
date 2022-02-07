// $('.menu-trigger').on('click',function(){
//   if($(this).hasClass('active')){
//     $(this).removeClass('active');
//     $('main').removeClass('open');
//     $('.ul-flex').removeClass('open');
//     $('.overlay').removeClass('open');
//   } else {
//     $(this).addClass('active');
//     $('main').addClass('open');
//     $('.ul-flex').addClass('open');
//     $('.overlay').addClass('open');
//   }
// });
// $('.overlay').on('click',function(){
//   if($(this).hasClass('open')){
//     $(this).removeClass('open');
//     $('.menu-trigger').removeClass('active');
//     $('main').removeClass('open');
//     $('.ul-flex').removeClass('open');
//   }
// });
$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
  }
});
//header（PC）スクロール切り替え
$(window).scroll(function() {
  if($(window).scrollTop() > 350){
    $('.header').addClass('scroll-nav');
  }else{
    $('.header').removeClass('scroll-nav');
  }
});