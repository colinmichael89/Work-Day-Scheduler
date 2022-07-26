// Define Variables
// Selectors
var currentDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(currentDay);

var appointmentAddedEl = $(`#appointment-added`);
var hourEl = $(`#hour`);
var eventDescriptionEl = $(`.event-description`);
var saveButtonEl = $(`.saveBtn`);

// Event Listeners

$(document).ready(function () {
  saveButtonEl.on(`click`, function () {
    localStorage.setItem(
      $(this).siblings(".col-1").attr("id"),
      $(this).siblings(".event-description").val()
    );
  });
});

// Logic // Call Functions
var currentHour = moment().format("H");
$(".hour:contains(" + currentHour + ")").addClass("present");

// if ($(".hour:contains(" + currentHour + ")").addClass("present"));

// if (
//   $(saveButtonEl)
//     .siblings(".col-1")
//     .attr("id" === currentHour)
//     .addClass("present")

//   .siblings(".col-1")
//   .attr("id:contains(" + currentHour + ")");
// console.log($(this).siblings(".col-1").attr("id"));
// .addClass("present");

// if (
//   $(".hour")
//     .attr("id" === currentHour)
//     .addClass("present")
// );

// if (
//   $(this).siblings(".col-1").attr("id").val() < currentHour.addClass("future")
// );
// if ($(this).siblings(".col-1").attr("id").val() > currentHour.addClass("past"));
// }

// Functions
// function saveEventDescription(eventDescriptionEl) {
// console.log(this.previousElementSibling.value);

//   localStorage.setItem(eventDescriptionEl);
//   JSON.stringify(this.eventDescriptionEl);
// }

// function clearEvent() {
//   localStorage.clear;
//   eventDescription.value = "";
// }
