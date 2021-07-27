$(function(){
  $('.close').click(function(){
  $('#pop_up').slideUp();
  })
  
  var login = 0;
      $('.login').click(function(){
        if (login == 0){
            $('.login_box').fadeIn();
            $(this).addClass('on');
            login = 1;
        }else {
            $('.login_box').fadeOut();
            $(this).removeClass('on')
            login = 0;
        }
      })

  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    dots: true,
    pauseOnHover : true
  })
      
  $(".regular").slick({
    dots: false,
    infinite: true,
    arrows : true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [                   
      {  breakpoint: 768,    //미디어쿼리 값
             settings: {
               slidesToShow: 2,
               slidesToScroll: 1
             }
        }]  //반응형 포인트 지정
  })
})