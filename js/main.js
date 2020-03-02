$(function() {


    // открыть по кнопке
    $('.js-button-campaign').click(function() { 
	
        $('.js-overlay-campaign').fadeIn();
        $('.js-overlay-campaign').addClass('disabled');
    });
    
    // закрыть на крестик
    $('.js-close-campaign').click(function() { 
        $('.js-overlay-campaign').fadeOut();
        
    });
    
    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();
            
        }
    });
    
    // открыть по таймеру 
    //$(window).on('load', function () { 
    //   setTimeout(function(){
    //        if($('.js-overlay-campaign').hasClass('disabled')) {
    //            return false;
   //         } else {
                
    //            $(".js-overlay-campaign").fadeIn();
     //       }
     //   }, 5000);
    //});



    //Day Night
    $('.checkbox__day__night').click(function(){

        if ($(this).prop("checked")) {
            $('body').addClass("night");
        } else {
            $('body').removeClass("night");
        }

    });

});

window.onload = function () {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
        hideAddressBar();
    }, false);
}

function hideAddressBar() {
    setTimeout(function () {
        document.body.style.height = window.outerHeight + 'px';
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1100);
    }, 1000);
    return false;
}