(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // custom initialization

    $('.dropdown-trigger').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      gutter: ($('.dropdown-content').width()*3)/2.5 + 5, // Spacing from edge
      coverTrigger: false,
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    })
    $('.carousel').carousel()
    // $('.materialboxed').materialbox()

  }); // end of document ready
})(jQuery); // end of jQuery name space
