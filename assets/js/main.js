// Define Variables
// Selectors
var currentDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(currentDay);

var appointmentAddedEl = $(`#appointment-added`);
var hourEl = $(`.hour`);
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

  // Logic // Call Functions
  var currentHour = moment().format("H");

  var hourArray = $(".hour");

  hourArray
    .each((element) => {
      console.log(hourArray[element].id);
      console.log(currentHour);

      $(hourArray[element].id) === currentHour;
    })
    .addClass("future");

  hourArray
    .each((element) => {
      $(hourArray[element].id) > currentHour;
    })
    .addClass("future");

  hourArray
    .each((element) => {
      $(hourArray[element].id) < currentHour;
    })
    .addClass("past");
});

function allStorage() {
  var archive = [];
  for (var i = 0; i < localStorage.length; i++) {
    archive[i] = localStorage.getItem(localStorage.key(i));
  }
}
