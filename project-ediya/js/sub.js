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
})