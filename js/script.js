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

    /*   active button in sort bar and pagination bottom   */

    let sort_bar_list_btn = document.querySelectorAll(".sort-bar__sort-by-options > .basic-btn");
    let pagination_bottom_btn = document.querySelectorAll(".shopee-bottom__page-number")

    console.log(pagination_bottom_btn);

    function selectButton(list_button) {
        // let list_button = document.querySelectorAll(".sort-bar__sort-by-options > .basic-btn");
        for( var i = 0; i< list_button.length; i++) {
            list_button[i].onclick = function() {
                console.log("i be clicked");
                let arr_button = Array.prototype.slice.call(list_button);
                let button_index = arr_button.indexOf(this);
                activeButton(button_index,list_button);
            }
        }

    }

    function activeButton(index, list_button) {
        for(var i = 0; i <list_button.length; i++) {

            var btn_className = list_button[i].className;
            if(i == index) {
                list_button[i].className += " basic-btn--active";
            }
            else {
                if(btn_className.includes(" basic-btn--active")) {
                    list_button[i].className = btn_className.replace(/ basic-btn--active/g,"");
                }
            }
        }
    }






    /*          call function        */
    close_popup();
    open_user_menu();
    selectButton(sort_bar_list_btn);
    selectButton(pagination_bottom_btn)
});