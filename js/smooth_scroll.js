/* 
 * scrolling effect
 * https://codepen.io/desirecode/pen/MJPJqV/ 
 */

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#up').fadeIn(); 
        } else { 
            $('#up').fadeOut(); 
        } 
    }); 
    $('#up').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});