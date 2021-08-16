$(function() {
    


    // function to close popup
    function close_popup() {

        let close_popup_btn = $(".shopee-popup__close-btn");
        let modal = $(".shopee-modal");
        let over_lay = $(".overlay");

        
        close_popup_btn.click(function() {
            (modal).css("opacity","0");
            setTimeout(function(){
                modal.remove();
            },500);
        });
        over_lay.click(function() {
            (modal).css("opacity","0");
            setTimeout(function(){
                modal.remove();
            },500);
        });
    }

    //functiont to open menu user
    function open_user_menu() {
        let menu_toggle_btn = $(".shopee-user");
        let menu_user_overlay = $(".user-menu__overlay");
        let menu_user_section = $(".shopee-user-menu__section");
        menu_toggle_btn.click(function() {
            menu_user_overlay.toggleClass("active");

            menu_user_section.toggleClass("active");

            
        });

        menu_user_overlay.click(function() {
            menu_user_section.removeClass("active");

            $(this).removeClass("active");
        })
    }
    



    /*          call function        */
    close_popup();
    open_user_menu();
});