





/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() { //when document(DOM) loads completely.
    // Transition effect for navbar
    $(window).scroll(function() { //function is called while you scrolls
      // checks if window is scrolled more than 300px, adds/removes solid class
      if($(this).scrollTop() > 200) {
          $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
      } else {
          $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
      }
    });
});

/*========== ADD NAV BACKGROUND ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
$('#hamburguer').click(function() {
if($(window).scrollTop() === 0){
  $('.navbar').toggleClass('solid');
}
});
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
$(document).click(function (event) { //click anywhere
    var clickover = $(event.target); //get the target element where you clicked
    var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
    if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
        $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
    }
});
})
   


