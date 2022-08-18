(($)=>{
  class netflix {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.footer();
      this.modal();
    }
    header(){}
    section1(){}
    section2(){
      let guide = $('#section2 .item').not('.guide');
      let popular = $('#section2 .item').not('.popular');
      let price = $('#section2 .item').not('.price');

      //버튼 이벤트
      $('#section2 .item.guide').on({
        click: function(){
          $(this).addClass('click');          
          $('#section3').show();
          $('#section4').hide();
          $('#section5').hide();

          if( guide.hasClass('click') ){
            guide.removeClass('click');
          }
        }        
      });
      
      $('#section2 .item.popular').on({
        click: function(){
          $(this).addClass('click');                   
          $('#section3').hide();
          $('#section4').show();
          $('#section5').hide();

          if( popular.hasClass('click') ){
            popular.removeClass('click');
          }
        }
      });

      $('#section2 .item.price').on({
        click: function(){
          $(this).addClass('click');          
          $('#section3').hide();
          $('#section4').hide();
          $('#section5').show();

          if( price.hasClass('click') ){
            price.removeClass('click');
          }
        }
      });
    }
    section3(){}
    section4(){
      let cnt=0;

      function mainSlide(){
        prev();
        next();
        $('#section4 .swipe-wrap').stop().animate({left:`${-366.594*cnt}`}, 700, function(){
          $(this).stop().animate({left:`${-366.594*cnt}`}, 0)
          console.log(cnt);
        });
      }
      function nextCount(){
        cnt++;
        mainSlide();
      }
      function prevCount(){
        cnt--;
        mainSlide();
      }
      //버튼 이벤트
      //1. SHOW & HIDE
      function prev(){
        if(cnt>=1){
          $('#section4 .prev').show();    
        }
        else {
          $('#section4 .prev').hide();
        }
      }

      function next(){
        if(cnt>=10){
          $('#section4 .next').hide();
        }
        else {
          $('#section4 .next').show();
        }
      }

      //2. CLICK
      $('#section4 .next').on({
        click: function(e){
          e.preventDefault();
          if( cnt>=10 ){
            $(this).stop(nextCount);
            return;
          }
          nextCount();
        }
      });
      $('#section4 .prev').on({
        click: function(e){
          e.preventDefault();
          if( cnt<=0 ){
            $(this).stop(prevCount);
            return;
          }
          prevCount();
        }
      });
    }
    footer(){}
    modal(){
      //모달창 열기
      $('#section4 li').on({
        click: function(){
          $('#modal').show();
        }
      });

      //모달창 닫기
      $('.close-btn').on({
        click: function(){
          $('#modal').hide();
        }
      });
    }
  }
  const newNetfilx = new netflix();
  newNetfilx.init();
})(jQuery);