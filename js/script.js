$(function() {
    


    // function to close popup
    function close_popup() {

        let close_popup_btn = $(".shopee-popup__close-btn");
        let over_lay = $(".shopee-popup__overlay");
        close_popup_btn.click(function() {
            (over_lay).css("opacity","0");
            setTimeout(function(){
                over_lay.remove();
            },500);
        });
        over_lay.click(function() {
            (over_lay).css("opacity","0");
            setTimeout(function(){
                over_lay.remove();
            },500);
        });
    }
    



    /*          call function        */
    close_popup();
});