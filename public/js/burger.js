// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
  //update burger devoured value to 1
  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newburger");
    var newBurgerState = {
      devoured: newBurger
    };

    // send the ajax PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        // reload the page to get the updated list
        location.reload();
      }
    );
  });

// add burger form 
  $(".addburger-form").on("submit", function(event) {
    //preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#brg").val().trim()
    };

    // send the ajax POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // reload the page to get the updated list
        location.reload();
      }
    );
  });

});
