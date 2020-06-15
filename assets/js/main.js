 $(document).ready(function(){

    //$('.carousel').carousel()

    $('.slider').slider();

   $(".sakriveno").hide();
   $(".readMore").click(function(){
      if($(this).prev().is(":visible")){
         $(this).prev().slideToggle();
         $(this).html("READ MORE");
      }
      if($(this).prev().is(":hidden")){
         $(this).prev().slideToggle();
         $(this).html("READ LESS");
      }
   })
  
   $(document).ready(function(){
      $('.sidenav').sidenav();
    });

    $(document).ready(function(){
      $('.modal').modal();
    });
 }) 
