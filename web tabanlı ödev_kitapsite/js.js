$(function() {
   
       $('.btn-rotate').click(function(){
            $('.card-front').toggleClass(' rotate-card-front');
            $('.card-back').toggleClass(' rotate-card-back');
       });
    });
    $(function(){
      $("#submit").click(function(){
         var isim=$("#nameField").val();
         var soyisim=$("#soyisimField").val();
         var telefon=$("#phoneField").val();
   
         if(isim=='' || soyisim==''|| telefon==''){
            swal({
               title: "Alanlar boş geçilemez!",
               text: "Lütfen boş alanları doldurunuz.",
               icon: "warning",
               button: "Tamam",
             });
   
         }

         else{
            swal({
               title: "Gönderildi!",
               text: "Fikirlerinizi paylaştığınız için teşekkür ederim.",
               icon: "success",
               button: "Tamam",
             });
         }
      });

    });

    
   $(function(){
      $('.navbar-nav  li a').click(function(){
        $(' li a').removeClass("active");
        $(this).addClass("active");
    });
    });
