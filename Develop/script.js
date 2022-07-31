// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
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
var currentDay = moment();
currentDayContainer.html(currentDay.format("dddd, MMMM Do YYYY"));
// currentDayContainer.innerHTML = currentDay.format("dddd, MMMM Do YYYY");

// Build rows
var row = "";
for (i = 9; i <= 18; i++) {
    console.log(i);
    var row = $('#row').append(`<section class="row">${i}</section>`);
    col1 = $('#time').append(`<section class="col">${i}</section>`);
    col2 = $('#info').append(`<section class="col">${i}</section>`);
    col3 = $('#save').append(`<section class="col">${i}</section>`);
    row.append(col1);
    row.append(col2);
    row.append(col3);
    // ${"#container"}.append(row);
};

