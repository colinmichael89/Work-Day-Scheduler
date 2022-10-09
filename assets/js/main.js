$(document).ready(function () {
  var currentDay = moment().format("ddd MMM Do, YYYY");
  $("#currentDay").text(currentDay);

  // Event Listener
  $(".saveBtn").on("click", function () {
    // Get values
    var event = $(this).siblings(".event-description").val();
    var time = $(this).parent().attr("id");

    // Save to local storage
    localStorage.setItem(time, event);

    // Notification event/time was stored in local storage
    $(".notification").addClass("show");

    setTimeout(function () {
      // Hide notification
      $(".notification").removeClass("show");
    }, 3000);

    // Delete event from local storage
    $(".deleteBtn").on("click", function () {
      localStorage.removeItem(time, event);
      // Clear event text
      $(".event-description").val("");

      // Notification to show event was deleted
      $(".delete").addClass("show");

      setTimeout(function () {
        // Hide notification
        $(".delete").removeClass("show");
      }, 3000);
    });
  });

  function updateHour() {
    var currentHour = moment().hours();
    // loop over time blocks
    $(".time").each(function () {
      var hourBlock = parseInt($(this).attr("id").split("-")[1]);

      // Color code hour blocks
      if (hourBlock < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  updateHour();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(updateHour, 15000);

  // Get data from local storage
  $("#hour-9 .event-description").val(localStorage.getItem("hour-9"));

  $("#hour-10 .event-description").val(localStorage.getItem("hour-10"));

  $("#hour-11 .event-description").val(localStorage.getItem("hour-11"));

  $("#hour-12 .event-description").val(localStorage.getItem("hour-12"));

  $("#hour-13 .event-description").val(localStorage.getItem("hour-13"));

  $("#hour-14 .event-description").val(localStorage.getItem("hour-14"));

  $("#hour-15 .event-description").val(localStorage.getItem("hour-15"));

  $("#hour-16 .event-description").val(localStorage.getItem("hour-16"));

  $("#hour-17 .event-description").val(localStorage.getItem("hour-17"));
});
