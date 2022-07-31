// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - done
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours - done
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Get the current day and show it at the top of the calendar
var currentDayContainer = $("#currentDay");
var calendarContainer = $(".container");
var currentDay = moment();
var currentHour = moment().format("h");
console.log(currentHour);
currentDayContainer.html(currentDay.format("dddd, MMMM Do YYYY"));
// currentDayContainer.innerHTML = currentDay.format("dddd, MMMM Do YYYY");

// Build rows
var row = "";

// Set's hours to 9am - 6pm
for (i = 9; i <= 18; i++) {
    row = $(`<section class="row time-block">`);
    col1 = $(`<section class="col hour">${convertAmPm(i)}</section>`);
    col1.attr("background-color", "black");
    col2 = $(`<textarea class="col description">DESCRIPTION</textarea>`);
    col3 = $(`<section class="col saveBtn"><i class="fas fa-save"></i></section></section>`);
    row.append(col1);
    row.append(col2);
    row.append(col3);
    calendarContainer.append(row);

    if (convertAmPm(i) > currentHour) {
        col1.attr("style", "background-color: red");
    };
};

// Convert time to AM or PM
function convertAmPm(hour) {
    var amOrPm = "";
    if (hour <= 11){
        amOrPm = "AM";
      } else{
        amOrPm = "PM";
      }
      // Get 13 to show as 1
      hour = hour % 12;
      hour = hour ? hour : 12;
      return hour + " " + amOrPm;
};

